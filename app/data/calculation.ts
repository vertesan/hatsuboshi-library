import { XIdolCard, XMaster } from "~/types";
import { IdolCardLevelLimitEffectType, IdolCardLevelLimitRank, IdolCardPotentialEffectType, IdolCardPotentialRank, ProduceEffectType } from "~/types/proto/penum";
import { ProduceExamBattleScoreConfig } from "~/types/proto/pmaster";

export function calcAttribute({
  card,
  countTEBonus,
  limitLevel,
  potentialLevel,
  trueEndBonus,
}: {
  card: XIdolCard,
  countTEBonus: boolean,
  limitLevel: IdolCardLevelLimitRank,
  potentialLevel: IdolCardPotentialRank,
  trueEndBonus?: XMaster['characterTrueEndBonus'],
}) {
  const status = {
    vo: card.produceVocal,
    da: card.produceDance,
    vi: card.produceVisual,
    st: card.produceStamina,
  }

  for (let i = 1; i <= limitLevel; i++) {
    const level = card.levelLimits[i - 1]
    if (level.effectTypes.includes(IdolCardLevelLimitEffectType.ProduceVoDaVi)) {
      status.vo += level.produceVocal
      status.da += level.produceDance
      status.vi += level.produceVisual
    }
    if (level.effectTypes.includes(IdolCardLevelLimitEffectType.ProduceStamina)) {
      status.st += level.effectValue
    }
  }

  for (let i = 1; i <= potentialLevel; i++) {
    const potential = card.potentials[i - 1]
    if (potential.effectTypes.includes(IdolCardPotentialEffectType.ProduceStamina)) {
      status.st += potential.effectValue
    }
  }

  if (countTEBonus && trueEndBonus) {
    const teBonus = trueEndBonus[`character_true_end_bonus-${card.characterId}`]
    status.vo += teBonus.produceVocal
    status.da += teBonus.produceDance
    status.vi += teBonus.produceVisual
    status.st += teBonus.produceStamina
  }

  return status
}

export function calcGrowthPermils({
  card,
  countTEBonus,
  limitLevel,
  potentialLevel,
  trueEndBonus,
}: {
  card: XIdolCard,
  countTEBonus: boolean,
  limitLevel: IdolCardLevelLimitRank,
  potentialLevel: IdolCardPotentialRank,
  trueEndBonus?: XMaster['characterTrueEndBonus'],
}) {
  const rates = {
    vo: card.produceVocalGrowthRatePermil,
    da: card.produceDanceGrowthRatePermil,
    vi: card.produceVisualGrowthRatePermil,
  }

  let limitEffect = {
    vo: 0, da: 0, vi: 0,
  }
  for (let i = 1; i <= limitLevel; i++) {
    const level = card.levelLimits[i - 1]
    if (level.produceSkill) {
      level.produceSkill.produceEffects.forEach(effect => {
        if (effect.produceEffectType === ProduceEffectType.LessonSpChangeRatePermilAddition) {
          limitEffect = {
            vo: effect.effectValueMin,
            da: effect.effectValueMin,
            vi: effect.effectValueMin,
          }
        }
      })
    }
  }
  rates.vo += limitEffect.vo
  rates.da += limitEffect.da
  rates.vi += limitEffect.vi

  for (let i = 1; i <= potentialLevel; i++) {
    const potential = card.potentials[i - 1]
    if (potential.effectTypes.includes(IdolCardPotentialEffectType.ProduceVoDaViGrowthRatePermil)) {
      rates.vo += potential.produceVocalGrowthRatePermil
      rates.da += potential.produceDanceGrowthRatePermil
      rates.vi += potential.produceVisualGrowthRatePermil
    }
  }

  if (countTEBonus && trueEndBonus) {
    const teBonus = trueEndBonus[`character_true_end_bonus-${card.characterId}`]
    rates.vo += teBonus.produceVocalGrowthRatePermil
    rates.da += teBonus.produceDanceGrowthRatePermil
    rates.vi += teBonus.produceVisualGrowthRatePermil
  }

  return rates
}

export function calcBattleScoreConfig(
  sortedScoreConfigs: ProduceExamBattleScoreConfig[]
) {
  switch (sortedScoreConfigs.length) {
    case 0: return
    case 1: return [{
      from: sortedScoreConfigs[0].parameter,
      to: sortedScoreConfigs[0].parameter,
      vocal: sortedScoreConfigs[0].vocalPermil.toString(),
      dance: sortedScoreConfigs[0].dancePermil.toString(),
      visual: sortedScoreConfigs[0].visualPermil.toString(),
    }]
    default: break
  }

  const calcSlope = (prevParam: number, curParam: number, prevPermil: number, currPermil: number) => {
    const slope = Math.round((currPermil - prevPermil) / (curParam - prevParam) * 1000) / 1000 / 1000
    const diff = prevParam === 0 ? "value" : `(value - ${prevParam})`
    const result = `${prevPermil / 1000} + ${slope} * ${diff}`
    return result
  }

  const results = []
  for (let i = 1; i < sortedScoreConfigs.length; i++) {
    const prevConfig = sortedScoreConfigs[i - 1]
    const currConfig = sortedScoreConfigs[i]
    results.push({
      from: prevConfig.parameter,
      to: currConfig.parameter,
      vocal: calcSlope(prevConfig.parameter, currConfig.parameter, prevConfig.vocalPermil, currConfig.vocalPermil),
      dance: calcSlope(prevConfig.parameter, currConfig.parameter, prevConfig.dancePermil, currConfig.dancePermil),
      visual: calcSlope(prevConfig.parameter, currConfig.parameter, prevConfig.visualPermil, currConfig.visualPermil),
    })
  }
  return results
}
