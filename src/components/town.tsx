import { observer } from "mobx-react-lite";
import { Biomes } from "../models/biomes";
import { rootStore } from "../stores/root-store";
import { TownStore } from "../stores/town-store";
import Biome from "./biome";
import NpcProfile from "./npc-profile";
import NpcSelectForm from "./npc-select-form";

interface TownProps {
  town: TownStore;
}

const Town = observer(({ town }: TownProps) => {
  const { worldStore } = rootStore;

  return (
    <div className="bg-town border-2 border-town-border rounded p-4 relative flex flex-col gap-4 group/town">
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-0.5">
          {Object.values(Biomes).map((biome, index) => (
            <Biome key={index} name={biome} town={town} />
          ))}
        </div>
        <div className="flex flex-row gap-1">
          <NpcSelectForm town={town} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 ml-2">
        {town.npcs.map((npc) => (
          <NpcProfile
            key={npc.name}
            npc={npc}
            percentages={town.npcHappiness[npc.name]}
            removeNpc={() => town.removeNpc(npc.name)}
          />
        ))}
      </div>
      <div
        title="Remove town"
        className="absolute right-2 top-1 text-red-500 cursor-pointer select-none invisible group-hover/town:visible"
        onClick={() => worldStore.removeTown(town)}
      >
        X
      </div>
    </div>
  );
});

export default Town;
