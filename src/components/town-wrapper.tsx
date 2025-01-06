import { observer } from "mobx-react-lite";
import { rootStore } from "../stores/root-store";
import NextTownButton from "./next-town-button";
import Town from "./town";
import Toolbar from "./toolbar";

const TownWrapper = observer(() => {
  const { worldStore } = rootStore;

  return (
    <div className="flex flex-col gap-1.5">
      <Toolbar />
      {worldStore.towns.map((town, index) => (
        <Town key={index} town={town} />
      ))}
      <NextTownButton />
    </div>
  );
});

export default TownWrapper;
