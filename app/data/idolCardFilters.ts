import { XMaster } from "~/types";
import { IdolCardFilter, XIdolCard } from "~/types/data/cidol";
import { IdolCardRarity, ProduceExamEffectType } from "~/types/proto/penum";
import { ProduceExamBattleConfig } from "~/types/proto/pmaster";

export const defaultIdolCardFilter: IdolCardFilter = {
  rarities: [IdolCardRarity.Ssr, IdolCardRarity.Sr],
  planTypes: [],
  effectTypes: [],
  countSecondaryAttr: true,
  attributes: [],
  characters: [],
  limitLevel: 4,
  potentialLevel: 0,
  countTEBonus: true,
}

export function constructCharacters(characters: XMaster['characters']) {
  return Object.entries(characters).map(([k, v]) => ({
    value: k,
    label: v.lastName + v.firstName,
  }))
}

export function constructProduceExamEffectType(
  cards: XIdolCard[],
  descriptionDb: XMaster['produceDescriptionExamEffectType']
) {
  const effectTypes = new Set<ProduceExamEffectType>()
  cards.forEach(card => {
    effectTypes.add(card.examEffectType)
  })

  return [...effectTypes].map(effectType => ({
    value: effectType,
    label: descriptionDb[effectType].swapName,
  }))
}

function determineAceAttr(examBattleConfig: ProduceExamBattleConfig): ("vocal" | "dance" | "visual")[] {
  const attrs = [
    { attr: "vocal", value: examBattleConfig.vocal },
    { attr: "dance", value: examBattleConfig.dance },
    { attr: "visual", value: examBattleConfig.visual },
  ].sort((a, b) => b.value - a.value)
  return attrs.map(attr => attr.attr) as ("vocal" | "dance" | "visual")[]
}

export function filterIdolCards(
  filter: IdolCardFilter,
  cards: XIdolCard[]
): XIdolCard[] {
  const results = cards.filter(card => {
    // rarity
    if (filter.rarities.length !== 0) {
      if (!filter.rarities.includes(card.rarity)) return false
    }
    // plan type
    if (filter.planTypes.length !== 0) {
      if (!filter.planTypes.includes(card.planType)) return false
    }
    if (filter.attributes.length !== 0) {
      const battleConfig = card.auditionDifficulty.at(-1)?.examBattleConfig
      if (!battleConfig) return false
      const sortedAttr = determineAceAttr(battleConfig)
      if (!filter.countSecondaryAttr) {
        if (!filter.attributes.includes(sortedAttr[0])) return false
      } else {
        if (filter.attributes.length !== 3 && filter.attributes.includes(sortedAttr[2])) return false
      }
    }
    // main effect
    if (filter.effectTypes.length !== 0) {
      if (!filter.effectTypes.includes(card.examEffectType)) return false
    }
    // characters
    if (filter.characters.length !== 0) {
      if (!filter.characters.includes(card.characterId)) return false
    }
    return true
  })
  return results
}
