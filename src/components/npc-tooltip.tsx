import { Npc } from "../lib/npc-builder";
import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface NpcTooltipProps {
  npc: Npc;
}

const NpcTooltip = ({ npc }: NpcTooltipProps) => {
  const getEmoteUrl = (emoteName: string) => {
    const name = emoteName.replace(" ", "");
    return new URL(`../assets/emotes/${name}.png`, import.meta.url).href;
  };

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
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img src={getEmoteUrl(biomeName)} alt={biomeName} />
                    </TooltipTrigger>
                    <TooltipContent>{biomeName}</TooltipContent>
                  </Tooltip>
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
                <Tooltip key={npcName}>
                  <TooltipTrigger asChild>
                    <img
                      className="w-8"
                      src={getEmoteUrl(npcName)}
                      alt={npcName}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{npcName}</TooltipContent>
                </Tooltip>
              ))
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className={"bg-town-select flex flex-col z-20 p-px rounded"}>
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
