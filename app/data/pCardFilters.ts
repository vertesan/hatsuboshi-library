import { ProduceCardFilter, XMaster, XProduceCard } from "~/types";
import { XCustProduceCard } from "~/types/data/pcard";
import { ProduceCardRarity, ProduceExamEffectType } from "~/types/proto/penum";

export const defaultPCardFilter: ProduceCardFilter = {
  rarities: [],
  planTypes: [],
  categories: [],
  origin: [],
  effectTypes: [],
  grades: [],
  characters: [],
  requirePLevel: false,
  displayCustomization: true,
}

export function constructProduceExamEffectType(
  cards: XCustProduceCard[],
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
      label: descriptionDb[effectType].name,
    }))
}

export function filterCustPCards(
  filter: ProduceCardFilter,
  cards: XCustProduceCard[]
): XCustProduceCard[] {
  const results = cards.filter(card => {
    // customization count
    if (filter.displayCustomization) {
      if (card.maxCustomizeCount === 0) return false
    }
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
    if (filter.displayCustomization) {
      if (card.upgradeCount === 0) return false
    } else {
      if (filter.grades.length > 0) {
        if (!filter.grades.includes(card.upgradeCount)) return false
      }
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
