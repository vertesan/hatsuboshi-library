import {
  IdolCard,
  IdolCardLevelLimit,
  IdolCardLevelLimitProduceSkill,
  IdolCardLevelLimitStatusUp,
  IdolCardPotential,
  IdolCardPotentialProduceSkill,
  IdolCardSkin,
  ProduceCard,
  ProduceEffect,
  ProduceExamBattleConfig,
  ProduceExamBattleNpcGroup,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  ProduceSkill,
  ProduceStepAuditionDifficulty
} from "../proto/pmaster"
import { IdolCardRarity, ProduceExamEffectType, ProducePlanType } from "../proto/penum"

export type XIdolCard = IdolCard & {
  produceCards: ProduceCard[],
  produceItems: ProduceItem[],
  idolCardSkins: IdolCardSkin[],
  levelLimits: (
    IdolCardLevelLimit &
    Omit<IdolCardLevelLimitStatusUp, 'id' | 'rank'> &
    { limitProduceSkill?: IdolCardLevelLimitProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[]
  potentials: (
    IdolCardPotential &
    { potentialProduceSkill?: IdolCardPotentialProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[]
  auditionDifficulty: (
    ProduceStepAuditionDifficulty &
    { npcs: ProduceExamBattleNpcGroup[] } &
    { examBattleConfig: ProduceExamBattleConfig } &
    { examBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
    { examGimmicks?: ProduceExamGimmickEffectGroup[] }
  )[]
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
