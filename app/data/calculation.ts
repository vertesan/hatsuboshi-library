import { Unarray, XIdolCard, XMaster } from "~/types";
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
    const slope = Number((Math.round((currPermil - prevPermil) / (curParam - prevParam) * 1000) / 1000 / 1000).toFixed(6))
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

const evaluationSteps = [
  { border: 5000, acc: 1500, multiplier: 30 },
  { border: 10000, acc: 2250, multiplier: 15 },
  { border: 20000, acc: 3050, multiplier: 8 },
  { border: 30000, acc: 3450, multiplier: 4 },
  { border: 40000, acc: 3650, multiplier: 2 },
  { border: 999999999, acc: 999999999, multiplier: 1 },
]

const rankEvaluations = {
  1: 1700,
  2: 900,
  3: 500,
}

export function calcScoreEvaluation(score: number) {
  if (score < 0) return 0

  let eva = 0, prevBorder = 0
  for (const level of evaluationSteps) {
    if (score <= level.border) {
      eva = level.multiplier * (score - prevBorder) / 100 + level.acc
      break
    }
    prevBorder = level.border
  }
  return Math.floor(eva)
}

export function calcFinalAuditionEvaluation({
  rank = 1,
  totalAttr,
  score,
}: {
  rank?: keyof typeof rankEvaluations,
  totalAttr: number,
  score: number,
}) {
  const rankEva = rankEvaluations[rank]
  const attrEva = Math.floor(totalAttr * 23 / 10)
  const scoreEva = calcScoreEvaluation(score)

  return rankEva + attrEva + scoreEva
}

export const produceEvaBorder = {
  "SS+": { evaluation: 18000, description: "SS+" },
  "SS": { evaluation: 16000, description: "SS" },
  "S+": { evaluation: 14500, description: "S+" },
  "S": { evaluation: 13000, description: "S" },
  "A+": { evaluation: 11500, description: "A+" },
  "A": { evaluation: 10000, description: "A" },
  "B+": { evaluation: 8000, description: "B+" },
  "B": { evaluation: 6000, description: "B" },
  "C+": { evaluation: 4500, description: "C+" },
  "C": { evaluation: 3000, description: "C" },
  "D": { evaluation: 2000, description: "D" },
  "E": { evaluation: 1000, description: "E" },
  "F": { evaluation: 0, description: "F" },
}

export function calcFinalAuditionRequiredScore({
  rank = 1,
  grades,
  totalAttr,
  threshold = 99999,
}: {
  rank?: keyof typeof rankEvaluations,
  grades: (keyof typeof produceEvaBorder)[],
  totalAttr: number,
  threshold?: number,
}): [keyof typeof produceEvaBorder, number][] {
  const nonScoreEva = Math.floor(totalAttr * 23 / 10) + rankEvaluations[rank]
  const results: [keyof typeof produceEvaBorder, number][] = []

  const calcRequiredScore = (
    scoreEva: number,
    level: Unarray<typeof evaluationSteps>,
    acc: number,
  ) => {
    const requiredScore = Math.ceil((scoreEva - acc) / level.multiplier * 100)
    if (requiredScore <= 0) {
      return 0
    }
    return requiredScore
  }

  for (const gradeKey of grades) {
    const evaBorder = produceEvaBorder[gradeKey].evaluation
    const scoreEva = evaBorder - nonScoreEva

    if (scoreEva <= 0) {
      results.push([gradeKey, 0])
      continue
    }

    let accScore = 0
    let prevAcc = 0
    for (const level of evaluationSteps) {
      if (scoreEva <= level.acc) {
        const requiredScore = accScore + calcRequiredScore(scoreEva, level, prevAcc)
        if (requiredScore <= threshold) {
          results.push([gradeKey, requiredScore])
        }
        break
      }
      accScore = level.border
      prevAcc = level.acc
    }
  }

  return results
}
