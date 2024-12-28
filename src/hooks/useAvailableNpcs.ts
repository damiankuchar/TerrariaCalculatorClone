import { useState } from "react";
import { Npc } from "../lib/npc-builder";
import { NpcModels } from "../lib/npc-models";

export const useAvailableNpcs = () => {
  const [availableNpcs, setAvailableNpcs] = useState<Npc[]>([]);

  const addAvailableNpcs = (npcName: string) => {
    const npc = NpcModels.find((x) => x.name === npcName);

    if (!npc) {
      return;
    }

    setAvailableNpcs((prevNpcs) => [...prevNpcs, npc]);
  };

  const removeAvailableNpcs = (npcName: string) => {
    setAvailableNpcs((prevNpcs) =>
      prevNpcs.filter((npc) => npc.name !== npcName)
    );
  };

  return { availableNpcs, addAvailableNpcs, removeAvailableNpcs };
};
