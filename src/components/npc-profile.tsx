import { Npc } from "../lib/npc-builder";
import NpcTooltip from "./npc-tooltip";

interface NpcProfileProps {
  npc: Npc;
  removeNpc: () => void;
}

const NpcProfile = ({ npc, removeNpc }: NpcProfileProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center group/npc mb-[-14px]">
      <img src={`/src/assets/npcs/${npc.name.replace(" ", "")}.png`} />
      <div className="leading-5">{npc.name}</div>
      <div title="Purchasing" className="leading-5">P: 90%</div>
      <div title="Selling" className="leading-none">S: 90%</div>
      <div
        title="Remove from town"
        className="text-red-500 cursor-pointer leading-none invisible group-hover/npc:visible"
        onClick={removeNpc}
      >
        X
      </div>
      <NpcTooltip npc={npc} className="group-hover/npc:flex" />
    </div>
  );
};

export default NpcProfile;
