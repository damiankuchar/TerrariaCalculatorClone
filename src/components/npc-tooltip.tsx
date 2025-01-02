import { HtmlHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { Npc } from "../lib/npc-builder";

interface NpcTooltipProps extends HtmlHTMLAttributes<HTMLDivElement> {
  npc: Npc;
}

const NpcTooltip = ({ npc, className }: NpcTooltipProps) => {
  const renderTableRow = (
    npcList: string[],
    biomeList: string[],
    label: string
  ) => {
    return (
      <tr
        className={cn(
          label === "Loves" && "bg-loves",
          label === "Likes" && "bg-likes",
          label === "Dislikes" && "bg-dislikes",
          label === "Hates" && "bg-hates"
        )}
      >
        <th className="p-1 bg-town-select border-t border-r border-town-select-border">
          {label}
        </th>
        <td className="p-1 border-t border-r border-town-select-border">
          <div className="flex flex-row justify-center items-center">
            {biomeList.length === 0 ? (
              <span>n/a</span>
            ) : (
              biomeList.map((biomeName) => (
                <div key={biomeName} className="w-8">
                  <img
                    title={biomeName}
                    src={`/src/assets/emotes/${biomeName.replace(" ", "")}.png`}
                  />
                </div>
              ))
            )}
          </div>
        </td>
        <td
          className={cn(
            "p-1 border-t border-town-select-border",
            label === "Hates" && "rounded-br"
          )}
        >
          <div className="flex flex-row justify-center items-center">
            {npcList.length === 0 ? (
              <span>n/a</span>
            ) : (
              npcList.map((npcName) => (
                <div key={npcName} className="w-8">
                  <img
                    title={npcName}
                    src={`@assets/emotes/${npcName.replace(" ", "")}.png`}
                  />
                </div>
              ))
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div
      className={cn(
        "bg-town-select absolute hidden flex-col -top-28 left-8 z-20 p-px rounded",
        className
      )}
    >
      <table className="border-collapse">
        <thead>
          <tr className="bg-town-select">
            <th className="px-2 border-b border-r border-town-select-border"></th>
            <th className="px-2 border-b border-r border-town-select-border">
              Biome
            </th>
            <th className="px-2 border-b border-town-select-border">
              Neighbor
            </th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow(npc.lovedNpcs, npc.lovedBiomes, "Loves")}
          {renderTableRow(npc.likedNpcs, npc.likedBiomes, "Likes")}
          {renderTableRow(npc.dislikedNpcs, npc.dislikedBiomes, "Dislikes")}
          {renderTableRow(npc.hatedNpcs, npc.hatedBiomes, "Hates")}
        </tbody>
      </table>
    </div>
  );
};

export default NpcTooltip;
