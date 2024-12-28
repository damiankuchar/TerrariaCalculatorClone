import { cn } from "../lib/utils";

interface BiomeProps {
  name: string;
  selectedBiomes: string[];
  selectBiome: (biome: string) => void;
}

const Biome = ({ name, selectedBiomes, selectBiome }: BiomeProps) => {
  return (
    <img
      className={cn(
        "w-[35px] grayscale cursor-pointer",
        selectedBiomes.includes(name) ? "grayscale-0" : "grayscale"
      )}
      src={`/src/assets/biomes/${name}.png`}
      title={name}
      onClick={() => selectBiome(name)}
    />
  );
};

export default Biome;
