import { ChangeEvent, useMemo, useState } from "react";
import { NpcModels } from "../lib/npc-models";
import { Npc } from "../lib/npc-builder";

interface NpcSelectFormProps {
  availableNpcs: Npc[];
  addNpc: (npcName: string) => void;
}

const NpcSelectForm = ({ availableNpcs, addNpc }: NpcSelectFormProps) => {
  const [selectedNpc, setSelectedNpc] = useState("");

  const availableNpcOptions = useMemo(() => {
    const availableNpcsNames = availableNpcs.map((npc) => npc.name);
    return NpcModels.filter((npc) => !availableNpcsNames.includes(npc.name));
  }, [availableNpcs]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedNpc(event.target.value);
  };

  const handleSubmit = () => {
    addNpc(selectedNpc);
    setSelectedNpc("");
  };

  return (
    <>
      <select
        name="town-select"
        value={selectedNpc}
        onChange={handleChange}
        className="npc-select bg-town-select border-2 border-town-select-border rounded py-[5px] px-[10px]"
      >
        <option value="" hidden disabled></option>
        {availableNpcOptions.map((npc) => (
          <option key={npc.name} value={npc.name}>
            {npc.name}
          </option>
        ))}
      </select>
      <button
        className="bg-town-select border-2 border-town-select-border rounded py-[5px] px-[10px]"
        onClick={handleSubmit}
      >
        Add NPC
      </button>
    </>
  );
};

export default NpcSelectForm;
