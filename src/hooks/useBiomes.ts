import { useState } from "react";

export const useBiomes = () => {
  const [selectedBiomes, setSelectedBiomes] = useState<string[]>([]);

  const selectBiome = (biome: string) => {
    setSelectedBiomes((prevBiomes) => {
      if (prevBiomes.includes(biome)) {
        return prevBiomes.filter((item) => item !== biome);
      }

      return [...prevBiomes, biome];
    });
  };

  return {
    selectedBiomes,
    selectBiome,
  };
};
