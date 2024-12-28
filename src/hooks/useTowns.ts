import { useState } from "react";

export const useTowns = (initialCount: number = 1) => {
  const [townCount, setTownCount] = useState(initialCount);

  const addTown = () => {
    setTownCount((prevCount) => prevCount + 1);
  };

  const removeTown = () => {
    setTownCount((prevCount) => prevCount - 1);
  };

  return {
    townCount,
    addTown,
    removeTown,
  };
};
