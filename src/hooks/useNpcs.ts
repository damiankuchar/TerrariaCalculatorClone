import { useState } from "react";
import { Npc } from "../lib/npc-builder";
import { NpcModels } from "../lib/npc-models";

export const useNpcs = () => {
  const [selectedNpcs, setSelectedNpcs] = useState<Npc[]>([]);

  const addNpc = (npcName: string) => {
    const npc = NpcModels.find((x) => x.name === npcName);

    if (!npc) {
      return;
    }

    setSelectedNpcs((prevNpcs) => [...prevNpcs, npc]);
  };

  const removeNpc = (npcName: string) => {
    setSelectedNpcs((prevNpcs) =>
      prevNpcs.filter((npc) => npc.name !== npcName)
    );
  };

  return { selectedNpcs, addNpc, removeNpc };
};
