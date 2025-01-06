import { observer } from "mobx-react-lite";
import { cn } from "../lib/utils";
import { TownStore } from "../stores/town-store";
import Tooltip from "./tooltip";

interface BiomeProps {
  name: string;
  town: TownStore;
}

const Biome = observer(({ name, town }: BiomeProps) => {
  const biomeImageSrc = new URL(`../assets/biomes/${name}.png`, import.meta.url)
    .href;

  return (
    <Tooltip text={name}>
      <img
        className={cn(
          "w-[35px] h-[35px] grayscale cursor-pointer",
          town.biomes.includes(name) ? "grayscale-0" : "grayscale"
        )}
        src={biomeImageSrc}
        onClick={() => town.selectBiome(name)}
      />
    </Tooltip>
  );
});

export default Biome;
