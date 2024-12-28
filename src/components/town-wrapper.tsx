import { useAvailableNpcs } from "../hooks/useAvailableNpcs";
import { useTowns } from "../hooks/useTowns";
import NextTownButton from "./next-town-button";
import Town from "./town";

const TownWrapper = () => {
  const { townCount, addTown, removeTown } = useTowns(1);
  const { availableNpcs, addAvailableNpcs, removeAvailableNpcs } =
    useAvailableNpcs();

  return (
    <div className="mt-1 flex flex-col gap-1.5 min-w-[600px]">
      {Array.from({ length: townCount }).map((_, index) => (
        <Town
          key={index}
          availableNpcs={availableNpcs}
          addAvailableNpcs={addAvailableNpcs}
          removeAvailableNpcs={removeAvailableNpcs}
          removeTown={removeTown}
        />
      ))}
      <NextTownButton addTown={addTown} />
    </div>
  );
};

export default TownWrapper;
