import {
  ProduceCard,
  ProduceEffect,
  ProduceEventSupportCard,
  ProduceItem,
  ProduceSkill,
  ProduceStepEventDetail,
  SupportCard,
  SupportCardProduceSkillLevelAssist
} from "../proto/pmaster"
import {
  ProducePlanType,
  SupportCardRarity,
  SupportCardType,
  ProduceEffectType,
  ProducePhaseType,
} from "../proto/penum"

export type XSupportCard = SupportCard & {
  produceCards: ProduceCard[],
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
}
