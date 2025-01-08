import { observer } from "mobx-react-lite";
import { cn } from "../lib/utils";
import { TownStore } from "../stores/town-store";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface BiomeProps {
  name: string;
  town: TownStore;
}

const Biome = observer(({ name, town }: BiomeProps) => {
  const biomeImageSrc = new URL(`../assets/biomes/${name}.png`, import.meta.url)
    .href;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <img
          className={cn(
            "w-[35px] h-[35px] grayscale cursor-pointer",
            town.biomes.includes(name) ? "grayscale-0" : "grayscale"
          )}
          src={biomeImageSrc}
          alt={name}
          onClick={() => town.selectBiome(name)}
        />
      </TooltipTrigger>
      <TooltipContent className="Tooltip">{name}</TooltipContent>
    </Tooltip>
  );
});

export default Biome;
