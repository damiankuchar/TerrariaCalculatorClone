import { ChangeEvent, useState } from "react";
import { rootStore } from "../stores/root-store";
import { TownStore } from "../stores/town-store";
import { observer } from "mobx-react-lite";

interface NpcSelectFormProps {
  town: TownStore;
}

const NpcSelectForm = observer(({ town }: NpcSelectFormProps) => {
  const { worldStore } = rootStore;

  const [selectedNpc, setSelectedNpc] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedNpc(event.target.value);
  };

  const handleSubmit = () => {
    town.addNpc(selectedNpc);
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
        {worldStore.availableNpcs.map((npc) => (
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
});

export default NpcSelectForm;
