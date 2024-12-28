import { observer } from "mobx-react-lite";
import { cn } from "../lib/utils";
import { TownStore } from "../stores/town-store";

interface BiomeProps {
  name: string;
  town: TownStore;
}

const Biome = observer(({ name, town }: BiomeProps) => {
  return (
    <img
      className={cn(
        "w-[35px] grayscale cursor-pointer",
        town.biomes.includes(name) ? "grayscale-0" : "grayscale"
      )}
      src={`/src/assets/biomes/${name}.png`}
      title={name}
      onClick={() => town.selectBiome(name)}
    />
  );
});

export default Biome;
