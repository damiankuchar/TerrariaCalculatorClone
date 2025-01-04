import { makeAutoObservable } from "mobx";
import { Npc } from "../lib/npc-builder";
import { NpcModels } from "../lib/npc-models";
import { Npcs } from "../models/npcs";

export class TownStore {
  npcs: Npc[] = [];
  biomes: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNpc(npcName: string) {
    const npc = NpcModels.find((npc) => npc.name === npcName);

    if (!npc) {
      return;
    }

    this.npcs = [...this.npcs, npc];
  }

  removeNpc(npcName: string) {
    this.npcs = this.npcs.filter((npc) => npc.name !== npcName);
  }

  selectBiome(biome: string) {
    if (this.biomes.includes(biome)) {
      this.biomes = this.biomes.filter((item) => item !== biome);
      return;
    }

    this.biomes = [...this.biomes, biome];
  }

  get npcHappiness() {
    const npcsHappiness: Record<string, [number, number]> = {};

    this.npcs.forEach((npc) => {
      let purchasing = 100.0;
      let selling = 100.0;

      // Apply solitude modifier
      if (this.npcs.length <= 3) {
        purchasing *= 0.95;
        selling *= 1.05;
      } else {
        const factor = this.npcs.length - 3;
        purchasing *= Math.pow(1.05, factor);
        selling *= Math.pow(0.95, factor);
      }

      // Apply NPC relationship modifiers
      const relationshipModifiers = [
        { list: npc.lovedNpcs, purchasingFactor: 0.88, sellingFactor: 1.14 },
        { list: npc.likedNpcs, purchasingFactor: 0.94, sellingFactor: 1.06 },
        { list: npc.dislikedNpcs, purchasingFactor: 1.06, sellingFactor: 0.94 },
        { list: npc.hatedNpcs, purchasingFactor: 1.12, sellingFactor: 0.89 },
      ];

      relationshipModifiers.forEach(
        ({ list, purchasingFactor, sellingFactor }) => {
          this.npcs
            .filter((x) => list.includes(x.name))
            .forEach(() => {
              purchasing *= purchasingFactor;
              selling *= sellingFactor;
            });
        }
      );

      // Apply biome modifiers
      const biomeModifiers = [
        { list: npc.lovedBiomes, purchasingFactor: 0.88, sellingFactor: 1.14 },
        { list: npc.likedBiomes, purchasingFactor: 0.94, sellingFactor: 1.06 },
        {
          list: npc.dislikedBiomes,
          purchasingFactor: 1.06,
          sellingFactor: 0.94,
        },
        { list: npc.hatedBiomes, purchasingFactor: 1.12, sellingFactor: 0.89 },
      ];

      biomeModifiers.some(({ list, purchasingFactor, sellingFactor }) => {
        const matchingBiomes = this.biomes.filter((x) => list.includes(x));
        if (matchingBiomes.length > 0) {
          purchasing *= purchasingFactor;
          selling *= sellingFactor;
          return true;
        }
        return false;
      });

      // Handle Princess
      if (npc.name === Npcs.Princess) {
        purchasing = 100;
        selling = 100;

        if (this.npcs.length < 3) {
          purchasing = 150;
          selling = 133;
        } else {
          const npcNumber = Math.min(this.npcs.length, 3);
          purchasing *= Math.pow(0.88, npcNumber);
          selling *= Math.pow(1.14, npcNumber);
        }
      }

      // Final value rounding
      purchasing = Math.round(purchasing);
      selling = Math.round(selling);

      purchasing = Math.min(150, Math.max(75, purchasing));
      selling = Math.min(133, Math.max(67, selling));

      npcsHappiness[npc.name] = [purchasing, selling];
    });

    return npcsHappiness;
  }
}
