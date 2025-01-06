import { observer } from "mobx-react-lite";
import MechanicalEye from "../assets/Mechanical_Eye.png";
import SuspiciousLookingEye from "../assets/Suspicious_Looking_Eye.png";
import { rootStore } from "../stores/root-store";

const Toolbar = observer(() => {
  const { worldStore } = rootStore;

  return (
    <div className="flex gap-3 p-2">
      <div className="inline-flex flex-col items-center">
        <span className="text-sm">Display:</span>
        <button
          className="mb-px"
          onClick={() => worldStore.toggleDetailedMode()}
        >
          <img
            className="w-6"
            src={
              worldStore.displayMode === "detailed"
                ? MechanicalEye
                : SuspiciousLookingEye
            }
            alt="mode icon"
          />
        </button>
        <span className="text-[10px]">
          {worldStore.displayMode === "detailed" ? "Detailed" : "Normal"}
        </span>
      </div>
    </div>
  );
});

export default Toolbar;
