import { observer } from "mobx-react-lite";
import { Npc } from "../lib/npc-builder";
import { cn } from "../lib/utils";
import { rootStore } from "../stores/root-store";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const getPurchasingClass = (purchasing: number) => {
  if (purchasing <= 90) return "text-happy";
  if (purchasing > 90 && purchasing <= 100) return "text-neutral";
  return "text-angry";
};

const getSellingClass = (selling: number) => {
  if (selling <= 100) return "text-angry";
  if (selling > 100 && selling <= 110) return "text-neutral";
  return "text-happy";
};

interface NpcProfileProps {
  npc: Npc;
  percentages: [number, number];
  removeNpc: () => void;
}

const NpcProfile = observer(
  ({ npc, percentages, removeNpc }: NpcProfileProps) => {
    const { worldStore } = rootStore;
    const [purchasing, selling] = percentages;

    const getNpcUrl = (npcName: string) => {
      const name = npcName.replace(" ", "");
      return new URL(`../assets/npcs/${name}.png`, import.meta.url).href;
    };

    return (
      <div className="relative flex flex-col justify-center items-center group/npc mb-[-14px]">
        <img src={getNpcUrl(npc.name)} alt={npc.name} />
        <div className="leading-5">{npc.name}</div>
        {worldStore.displayMode === "detailed" ? (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="leading-5">
                  P:{" "}
                  <span className={cn(getPurchasingClass(purchasing))}>
                    {purchasing}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Prices for goods purchased from NPC
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="leading-none">
                  S:{" "}
                  <span className={cn(getSellingClass(selling))}>
                    {selling}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>Prices of goods sold to NPC</TooltipContent>
            </Tooltip>
          </>
        ) : (
          <span className={cn(getPurchasingClass(purchasing))}>
            {purchasing}%
          </span>
        )}
        <div
          className="text-red-500 cursor-pointer leading-none invisible group-hover/npc:visible"
          onClick={removeNpc}
        >
          <Tooltip>
            <TooltipTrigger asChild><span>X</span></TooltipTrigger>
            <TooltipContent>Remove from town</TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  }
);

export default NpcProfile;
