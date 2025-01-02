import { Biomes } from "../models/biomes";
import { Npcs } from "../models/npcs";
import { Npc, NpcBuilder } from "./npc-builder";

export const NpcModels: Npc[] = [
  new NpcBuilder(Npcs.Guide)
    .likesNpcs(Npcs.Clothier, Npcs.Zoologist, Npcs.Princess)
    .dislikesNpcs(Npcs.Steampunker)
    .hatesNpcs(Npcs.Painter)
    .likesBiomes(Biomes.Forest)
    .dislikesBiomes(Biomes.Ocean)
    .build(),
  new NpcBuilder(Npcs.Merchant)
    .likesNpcs(Npcs.Golfer, Npcs.Nurse, Npcs.Princess)
    .dislikesNpcs(Npcs.TaxCollector)
    .hatesNpcs(Npcs.Angler)
    .likesBiomes(Biomes.Forest)
    .dislikesBiomes(Biomes.Desert)
    .build(),
  new NpcBuilder(Npcs.Zoologist)
    .lovesNpcs(Npcs.WitchDoctor)
    .likesNpcs(Npcs.Golfer, Npcs.Princess)
    .dislikesNpcs(Npcs.Angler)
    .hatesNpcs(Npcs.ArmsDealer)
    .likesBiomes(Biomes.Forest)
    .dislikesBiomes(Biomes.Desert)
    .build(),
  new NpcBuilder(Npcs.Golfer)
    .lovesNpcs(Npcs.Angler)
    .likesNpcs(Npcs.Painter, Npcs.Zoologist, Npcs.Princess)
    .dislikesNpcs(Npcs.Pirate)
    .hatesNpcs(Npcs.Merchant)
    .likesBiomes(Biomes.Forest)
    .dislikesBiomes(Biomes.Underground)
    .build(),
  new NpcBuilder(Npcs.Nurse)
    .lovesNpcs(Npcs.ArmsDealer)
    .likesNpcs(Npcs.Wizard, Npcs.Princess)
    .dislikesNpcs(Npcs.Dryad, Npcs.PartyGirl)
    .hatesNpcs(Npcs.Zoologist)
    .likesBiomes(Biomes.Hallow)
    .dislikesBiomes(Biomes.Snow)
    .build(),
  new NpcBuilder(Npcs.Tavernkeep)
    .lovesNpcs(Npcs.Demolitionist)
    .likesNpcs(Npcs.GoblinTinkerer, Npcs.Princess)
    .dislikesNpcs(Npcs.Guide)
    .hatesNpcs(Npcs.DyeTrader)
    .likesBiomes(Biomes.Hallow)
    .dislikesBiomes(Biomes.Snow)
    .build(),
  new NpcBuilder(Npcs.PartyGirl)
    .lovesNpcs(Npcs.Wizard, Npcs.Zoologist)
    .likesNpcs(Npcs.Stylist, Npcs.Princess)
    .dislikesNpcs(Npcs.Merchant)
    .hatesNpcs(Npcs.TaxCollector)
    .likesBiomes(Biomes.Hallow)
    .dislikesBiomes(Biomes.Underground)
    .build(),
  new NpcBuilder(Npcs.Wizard)
    .lovesNpcs(Npcs.Golfer)
    .likesNpcs(Npcs.Merchant, Npcs.Princess)
    .dislikesNpcs(Npcs.WitchDoctor)
    .hatesNpcs(Npcs.Cyborg)
    .likesBiomes(Biomes.Hallow)
    .dislikesBiomes(Biomes.Ocean)
    .build(),
  new NpcBuilder(Npcs.Demolitionist)
    .lovesNpcs(Npcs.Tavernkeep)
    .likesNpcs(Npcs.Mechanic, Npcs.Princess)
    .dislikesNpcs(Npcs.ArmsDealer, Npcs.GoblinTinkerer)
    .likesBiomes(Biomes.Underground)
    .dislikesBiomes(Biomes.Ocean)
    .build(),
  new NpcBuilder(Npcs.GoblinTinkerer)
    .lovesNpcs(Npcs.Mechanic)
    .likesNpcs(Npcs.DyeTrader, Npcs.Princess)
    .dislikesNpcs(Npcs.Clothier)
    .hatesNpcs(Npcs.Stylist)
    .likesBiomes(Biomes.Underground)
    .dislikesBiomes(Biomes.Jungle)
    .build(),
  new NpcBuilder(Npcs.Clothier)
    .lovesNpcs(Npcs.Truffle)
    .likesNpcs(Npcs.TaxCollector, Npcs.Princess)
    .dislikesNpcs(Npcs.Nurse)
    .hatesNpcs(Npcs.Mechanic)
    .likesBiomes(Biomes.Underground)
    .dislikesBiomes(Biomes.Hallow)
    .build(),
  new NpcBuilder(Npcs.DyeTrader)
    .likesNpcs(Npcs.ArmsDealer, Npcs.Painter, Npcs.Princess)
    .dislikesNpcs(Npcs.Steampunker)
    .hatesNpcs(Npcs.Pirate)
    .likesBiomes(Biomes.Desert)
    .dislikesBiomes(Biomes.Forest)
    .build(),
  new NpcBuilder(Npcs.ArmsDealer)
    .lovesNpcs(Npcs.Nurse)
    .likesNpcs(Npcs.Steampunker, Npcs.Princess)
    .dislikesNpcs(Npcs.Golfer)
    .hatesNpcs(Npcs.Demolitionist)
    .likesBiomes(Biomes.Desert)
    .dislikesBiomes(Biomes.Snow)
    .build(),
  new NpcBuilder(Npcs.Steampunker)
    .lovesNpcs(Npcs.Cyborg)
    .likesNpcs(Npcs.Painter, Npcs.Princess)
    .dislikesNpcs(Npcs.Dryad, Npcs.Wizard, Npcs.PartyGirl)
    .likesBiomes(Biomes.Desert)
    .dislikesBiomes(Biomes.Jungle)
    .build(),
  new NpcBuilder(Npcs.Dryad)
    .likesNpcs(Npcs.WitchDoctor, Npcs.Truffle, Npcs.Princess)
    .dislikesNpcs(Npcs.Angler)
    .hatesNpcs(Npcs.Golfer)
    .likesBiomes(Biomes.Jungle)
    .dislikesBiomes(Biomes.Desert)
    .build(),
  new NpcBuilder(Npcs.Painter)
    .lovesNpcs(Npcs.Dryad)
    .likesNpcs(Npcs.PartyGirl, Npcs.Princess)
    .dislikesNpcs(Npcs.Truffle, Npcs.Cyborg)
    .likesBiomes(Biomes.Jungle)
    .dislikesBiomes(Biomes.Forest)
    .build(),
  new NpcBuilder(Npcs.WitchDoctor)
    .likesNpcs(Npcs.Dryad, Npcs.Guide, Npcs.Princess)
    .dislikesNpcs(Npcs.Nurse)
    .hatesNpcs(Npcs.Truffle)
    .likesBiomes(Biomes.Jungle)
    .dislikesBiomes(Biomes.Hallow)
    .build(),
  new NpcBuilder(Npcs.Stylist)
    .lovesNpcs(Npcs.DyeTrader)
    .likesNpcs(Npcs.Pirate, Npcs.Princess)
    .dislikesNpcs(Npcs.Tavernkeep)
    .hatesNpcs(Npcs.GoblinTinkerer)
    .likesBiomes(Biomes.Ocean)
    .dislikesBiomes(Biomes.Snow)
    .build(),
  new NpcBuilder(Npcs.Angler)
    .likesNpcs(
      Npcs.Demolitionist,
      Npcs.PartyGirl,
      Npcs.TaxCollector,
      Npcs.Princess
    )
    .hatesNpcs(Npcs.Tavernkeep)
    .likesBiomes(Biomes.Ocean)
    .dislikesBiomes(Biomes.Desert)
    .build(),
  new NpcBuilder(Npcs.Pirate)
    .lovesNpcs(Npcs.Angler)
    .likesNpcs(Npcs.Tavernkeep, Npcs.Princess)
    .dislikesNpcs(Npcs.Stylist)
    .hatesNpcs(Npcs.Guide)
    .likesBiomes(Biomes.Ocean)
    .dislikesBiomes(Biomes.Underground)
    .build(),
  new NpcBuilder(Npcs.Mechanic)
    .lovesNpcs(Npcs.GoblinTinkerer)
    .likesNpcs(Npcs.Cyborg, Npcs.Princess)
    .dislikesNpcs(Npcs.ArmsDealer)
    .hatesNpcs(Npcs.Clothier)
    .likesBiomes(Biomes.Snow)
    .dislikesBiomes(Biomes.Underground)
    .build(),
  new NpcBuilder(Npcs.TaxCollector)
    .lovesNpcs(Npcs.Merchant)
    .likesNpcs(Npcs.PartyGirl, Npcs.Princess)
    .dislikesNpcs(Npcs.Demolitionist, Npcs.Mechanic)
    .hatesNpcs(Npcs.SantaClaus)
    .likesBiomes(Biomes.Snow)
    .dislikesBiomes(Biomes.Hallow)
    .build(),
  new NpcBuilder(Npcs.Cyborg)
    .likesNpcs(Npcs.Steampunker, Npcs.Pirate, Npcs.Stylist, Npcs.Princess)
    .dislikesNpcs(Npcs.Zoologist)
    .hatesNpcs(Npcs.Wizard)
    .likesBiomes(Biomes.Snow)
    .dislikesBiomes(Biomes.Jungle)
    .build(),
  new NpcBuilder(Npcs.SantaClaus)
    .likesNpcs(Npcs.Princess)
    .hatesNpcs(Npcs.TaxCollector)
    .lovesBiomes(Biomes.Snow)
    .hatesBiomes(Biomes.Desert)
    .build(),
  new NpcBuilder(Npcs.Truffle)
    .lovesNpcs(Npcs.Guide)
    .likesNpcs(Npcs.Dryad, Npcs.Princess)
    .dislikesNpcs(Npcs.Clothier)
    .hatesNpcs(Npcs.WitchDoctor)
    .likesBiomes(Biomes.Mushroom)
    .build(),
  new NpcBuilder(Npcs.Princess)
    .lovesNpcs(...Object.values(Npcs).filter((npc) => npc !== "Princess"))
    .build(),
].sort((a, b) => a.name.localeCompare(b.name));
