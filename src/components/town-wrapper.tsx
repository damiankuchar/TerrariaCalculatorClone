import { observer } from "mobx-react-lite";
import { rootStore } from "../stores/root-store";
import NextTownButton from "./next-town-button";
import Town from "./town";

const TownWrapper = observer(() => {
  const { worldStore } = rootStore;

  return (
    <div className="mt-1 flex flex-col gap-1.5 min-w-[600px]">
      {worldStore.towns.map((town, index) => (
        <Town key={index} town={town} />
      ))}
      <NextTownButton />
    </div>
  );
});

export default TownWrapper;
