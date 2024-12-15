import {
  ProduceEffectType,
  ProducePhaseType,
  ProducePlanType,
  SupportCardRarity,
  SupportCardType,
} from "../proto/penum"
import {
  ProduceEffect,
  ProduceEventSupportCard,
  ProduceItem,
  ProduceSkill,
  ProduceStepEventDetail,
  SupportCard,
  SupportCardProduceSkillLevelAssist
} from "../proto/pmaster"
import { XProduceCard } from "./pcard"

export type XSupportCard = SupportCard & {
  produceCards: XProduceCard[],
  produceItems: ProduceItem[],
  produceEvents: (
    ProduceEventSupportCard &
    Omit<ProduceStepEventDetail, "supportCardId"> &
    { produceEffects: ProduceEffect[] }
  )[],
  produceSkills: (
    SupportCardProduceSkillLevelAssist & {
      produceSkill: ProduceSkill & { produceEffects: ProduceEffect[] },
      producePhaseType: ProducePhaseType,
    })[][]
}

export type SupportCardFilter = {
  rarities: SupportCardRarity[],
  planTypes: ProducePlanType[],
  attributes: SupportCardType[],
  rewardTypes: ("citem" | "pitem" | "card" | "none")[],
  eventEffectTypes: ProduceEffectType[],
  produceEffectTypes: ProduceEffectType[],
  showAllEffects: boolean,
  produceEffectOperator: "OR" | "AND",
  characters: string[],
  showEnhanced: boolean,
  producePhaseType: ProducePhaseType[],
  level: number,
  welfareAsSr: boolean,
}
