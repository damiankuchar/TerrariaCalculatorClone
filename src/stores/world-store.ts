import { makeAutoObservable } from "mobx";
import { TownStore } from "./town-store";
import { Npc } from "../lib/npc-builder";
import { NpcModels } from "../lib/npc-models";

export class WorldStore {
  towns: TownStore[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTown() {
    this.towns.push(new TownStore());
  }

  removeTown(town: TownStore) {
    this.towns = this.towns.filter((t) => t !== town);
  }

  get availableNpcs(): Npc[] {
    const selectedNpcNames = this.towns
      .flatMap((town) => town.npcs)
      .flatMap((npc) => npc)
      .map((npc) => npc.name);

    return NpcModels.filter((npc) => !selectedNpcNames.includes(npc.name));
  }
}
