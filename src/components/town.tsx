import { useBiomes } from "../hooks/useBiomes";
import { useNpcs } from "../hooks/useNpcs";
import { Npc } from "../lib/npc-builder";
import { Biomes } from "../models/biomes";
import Biome from "./biome";
import NpcProfile from "./npc-profile";
import NpcSelectForm from "./npc-select-form";

interface TownProps {
  availableNpcs: Npc[];
  addAvailableNpcs: (npcName: string) => void;
  removeAvailableNpcs: (npcName: string) => void;
  removeTown: () => void;
}

const Town = ({
  availableNpcs,
  addAvailableNpcs,
  removeAvailableNpcs,
  removeTown,
}: TownProps) => {
  const { selectedBiomes, selectBiome } = useBiomes();
  const { selectedNpcs, addNpc, removeNpc } = useNpcs();

  return (
    <div className="bg-town border-2 border-town-border rounded p-4 relative flex flex-col gap-4 group/town">
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-0.5">
          {Object.values(Biomes).map((biome, index) => (
            <Biome
              key={index}
              name={biome}
              selectedBiomes={selectedBiomes}
              selectBiome={selectBiome}
            />
          ))}
        </div>
        <div className="flex flex-row gap-1">
          <NpcSelectForm availableNpcs={availableNpcs} addNpc={addNpc} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 ml-2">
        {selectedNpcs.map((npc) => (
          <NpcProfile key={npc.name} npc={npc} removeNpc={removeNpc} />
        ))}
      </div>
      <div
        title="Remove town"
        className="absolute right-2 top-1 text-red-500 cursor-pointer select-none invisible group-hover/town:visible"
        onClick={removeTown}
      >
        X
      </div>
    </div>
  );
};

export default Town;
