
export interface Npc {
  name: string;
  loved: string[];
  liked: string[];
  disliked: string[];
  hated: string[];
}

export class NpcBuilder {
  private npc: Npc;

  constructor(npcName: string) {
    this.npc = {
      name: npcName,
      loved: [],
      liked: [],
      disliked: [],
      hated: [],
    };
  }

  loves(...things: string[]): this {
    this.npc.loved = [...this.npc.loved, ...things];
    return this;
  }

  likes(...things: string[]): this {
    this.npc.liked = [...this.npc.liked, ...things];
    return this;
  }

  dislikes(...things: string[]): this {
    this.npc.disliked = [...this.npc.disliked, ...things];
    return this;
  }

  hates(...things: string[]): this {
    this.npc.hated = [...this.npc.hated, ...things];
    return this;
  }

  build(): Npc {
    return this.npc;
  }
}
