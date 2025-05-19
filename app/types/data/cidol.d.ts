import {
  IdolCardRarity,
  ProduceExamEffectType,
  ProducePlanType,
  ProduceType,
  ProduceStepType,
} from "../proto/penum"
import {
  IdolCard,
  IdolCardLevelLimit,
  IdolCardLevelLimitProduceSkill,
  IdolCardLevelLimitStatusUp,
  IdolCardPotential,
  IdolCardPotentialProduceSkill,
  IdolCardSkin,
  ProduceEffect,
  ProduceExamBattleConfig,
  ProduceExamBattleNpcGroup,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  ProduceSkill,
  ProduceStepAuditionDifficulty
} from "../proto/pmaster"
import { XProduceCard, XCustProduceCard } from "./pcard"

export type XIdolCard = IdolCard & {
  produceCards: XCustProduceCard[],
  produceItems: ProduceItem[],
  idolCardSkins: IdolCardSkin[],
  levelLimits: (
    IdolCardLevelLimit &
    Partial<Omit<IdolCardLevelLimitStatusUp, 'id' | 'rank'>> &
    { limitProduceSkill?: IdolCardLevelLimitProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[],
  potentials: (
    IdolCardPotential &
    { potentialProduceSkill?: IdolCardPotentialProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[],
  auditionScenarios: {
    [produceId: string]: {
      [stepType in ProduceStepType]: (
        ProduceStepAuditionDifficulty &
        { npcs: ProduceExamBattleNpcGroup[] } &
        { examBattleConfig: ProduceExamBattleConfig } &
        { examBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
        { examGimmicks?: ProduceExamGimmickEffectGroup[] }
      )[]
    }
  },
}

export type IdolCardFilter = {
  rarities: IdolCardRarity[],
  planTypes: ProducePlanType[],
  effectTypes: ProduceExamEffectType[],
  countSecondaryAttr: boolean,
  attributes: ('dance' | 'vocal' | 'visual')[],
  characters: string[],
  limitLevel: number,
  potentialLevel: number,
  countTEBonus: boolean,
}
