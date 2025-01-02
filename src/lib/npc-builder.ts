export interface Npc {
  name: string;
  lovedNpcs: string[];
  likedNpcs: string[];
  dislikedNpcs: string[];
  hatedNpcs: string[];
  lovedBiomes: string[];
  likedBiomes: string[];
  dislikedBiomes: string[];
  hatedBiomes: string[];
}

export class NpcBuilder {
  private npc: Npc;

  constructor(npcName: string) {
    this.npc = {
      name: npcName,
      lovedNpcs: [],
      likedNpcs: [],
      dislikedNpcs: [],
      hatedNpcs: [],
      lovedBiomes: [],
      likedBiomes: [],
      dislikedBiomes: [],
      hatedBiomes: [],
    };
  }

  lovesNpcs(...npcs: string[]): this {
    this.npc.lovedNpcs = [...this.npc.lovedNpcs, ...npcs];
    return this;
  }

  likesNpcs(...npcs: string[]): this {
    this.npc.likedNpcs = [...this.npc.likedNpcs, ...npcs];
    return this;
  }

  dislikesNpcs(...npcs: string[]): this {
    this.npc.dislikedNpcs = [...this.npc.dislikedNpcs, ...npcs];
    return this;
  }

  hatesNpcs(...npcs: string[]): this {
    this.npc.hatedNpcs = [...this.npc.hatedNpcs, ...npcs];
    return this;
  }

  lovesBiomes(...biomes: string[]): this {
    this.npc.lovedBiomes = [...this.npc.lovedBiomes, ...biomes];
    return this;
  }

  likesBiomes(...biomes: string[]): this {
    this.npc.likedBiomes = [...this.npc.likedBiomes, ...biomes];
    return this;
  }

  dislikesBiomes(...biomes: string[]): this {
    this.npc.dislikedBiomes = [...this.npc.dislikedBiomes, ...biomes];
    return this;
  }

  hatesBiomes(...biomes: string[]): this {
    this.npc.hatedBiomes = [...this.npc.hatedBiomes, ...biomes];
    return this;
  }

  build(): Npc {
    return this.npc;
  }
}
