import { rootStore } from "../stores/root-store";

const NextTownButton = () => {
  const { worldStore } = rootStore;

  return (
    <div
      className="bg-town-button cursor-pointer text-center border-2 border-dashed border-town-border rounded p-4"
      onClick={() => worldStore.addTown()}
    >
      Add next town
    </div>
  );
};

export default NextTownButton;
