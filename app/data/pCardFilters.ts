import { ProduceCardFilter, XMaster, XProduceCard } from "~/types";
import { ProduceExamEffectType } from "~/types/proto/penum";

export const defaultPCardFilter: ProduceCardFilter = {
  rarities: [],
  planTypes: [],
  categories: [],
  origin: [],
  effectTypes: [],
  grades: [],
  characters: [],
  requirePLevel: false,
}

export function constructProduceExamEffectType(
  cards: XProduceCard[],
  descriptionDb: XMaster['produceDescriptionExamEffectType']
) {
  const effectTypes = new Set<ProduceExamEffectType>()
  cards.forEach(card => {
    card.playEffects.forEach(effect => {
      if (effect.produceExamEffect.effectType !== ProduceExamEffectType.Unknown) {
        effectTypes.add(effect.produceExamEffect.effectType)
      }
    })
  })

  return [...effectTypes]
    .filter(x => descriptionDb[x] !== undefined)
    .map(effectType => ({
      value: effectType,
      label: descriptionDb[effectType].swapName,
    }))
}

export function filterPCards(
  filter: ProduceCardFilter,
  cards: XProduceCard[]
): XProduceCard[] {
  const results = cards.filter(card => {
    // rarity
    if (filter.rarities.length > 0) {
      if (!filter.rarities.includes(card.rarity)) return false
    }

    // plan type
    if (filter.planTypes.length > 0) {
      if (!filter.planTypes.includes(card.planType)) return false
    }

    // category type
    if (filter.categories.length > 0) {
      if (!filter.categories.includes(card.category)) return false
    }

    // origin
    if (filter.origin.length > 0) {
      if (
        !filter.origin.includes('none') && card.originIdolCardId === "" && card.originSupportCardId === "" ||
        !filter.origin.includes('cidol') && card.originIdolCardId !== "" ||
        !filter.origin.includes('csprt') && card.originSupportCardId !== ""
      ) {
        return false
      }
    }

    // grade
    if (filter.grades.length > 0) {
      if (!filter.grades.includes(card.upgradeCount)) return false
    }

    // effect type
    if (filter.effectTypes.length > 0) {
      if (!filter.effectTypes.every(effect => {
        return card.playEffects.some(cardEffect => cardEffect.produceExamEffect.effectType === effect)
      })) {
        return false
      }
    }

    // character
    if (filter.characters.length > 0) {
      if (card.originIdolCardId === "") return false
      if (!filter.characters.some(chara => {
        return card.originIdolCardId.split("-").at(1) === chara
      })) {
        return false
      }
    }

    // p-level precondition
    if (filter.requirePLevel) {
      if (card.unlockProducerLevel === 0) return false
    }

    return true
  })

  return results
}
