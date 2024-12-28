const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[18px]">
        <span>Terraria NPC Happiness Calculator</span>
        <span className="text-description"> by Dodo</span>
      </div>
      <span className="text-description text-[13px]">
        Based on data from the{" "}
        <a
          href="https://terraria.fandom.com/wiki/NPCs#Happiness"
          target="_blank"
          className="text-link"
        >
          gamepedia
        </a>{" "}
        accessed on 26.10.2020. Calculator assumes that towns are at least 240
        tiles away from each other. Displayed percantages are shop price
        modifiers, so the lower, the better. Pylons are sold at{" "}
        <span className="text-happy">85%</span> and below.
      </span>
    </div>
  );
};

export default Header;
