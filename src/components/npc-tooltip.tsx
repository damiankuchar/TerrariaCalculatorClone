import { HtmlHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { Npc } from "../lib/npc-builder";

interface NpcTooltipProps extends HtmlHTMLAttributes<HTMLDivElement> {
  npc: Npc;
}

const NpcTooltip = ({ npc, className }: NpcTooltipProps) => {
  const renderNpcList = (npcList: string[], label: string) => {
    return (
      <div className="flex flex-row gap-1">
        <span>{label}:</span>
        <div className="flex flex-row h-8">
          {npcList.map((npcName, index) => (
            <div key={index} className="w-8">
              <img
                title={npcName}
                src={`/src/assets/emotes/${npcName.replace(" ", "")}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "bg-town-select absolute hidden flex-col py-1 px-2 -top-28 left-8 z-20 border-2 border-town-select-border rounded",
        className
      )}
    >
      {renderNpcList(npc.loved, "Loves")}
      {renderNpcList(npc.liked, "Likes")}
      {renderNpcList(npc.disliked, "Dislikes")}
      {renderNpcList(npc.hated, "Hates")}
    </div>
  );
};

export default NpcTooltip;
