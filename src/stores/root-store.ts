import { WorldStore } from "./world-store";

export class RootStore {
  worldStore: WorldStore;

  constructor() {
    this.worldStore = new WorldStore();
  }
}

export const rootStore = new RootStore();
