import { makeAutoObservable } from "mobx";
import { Npc } from "../lib/npc-builder";
import { NpcModels } from "../lib/npc-models";

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

      if (this.npcs.length <= 2) {
        // Solitude bonus
        purchasing *= 0.95;
        selling *= 1.05;
      } else {
        // Solitude penalty
        purchasing *= Math.pow(1.05, this.npcs.length - 3);
        selling *= Math.pow(0.95, this.npcs.length - 3);
      }

      npcsHappiness[npc.name] = [purchasing, selling];
    });

    return {};
  }
}
