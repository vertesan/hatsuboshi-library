import { UserMemoryFilter, UserMemorySort, XMemoryInspector, XUserMemory } from "~/types";
import { ProduceEffectType } from "~/types/proto/penum";
import { UserMemory } from "~/types/proto/ptransaction";

export const defaultUserMemoryFilter: UserMemoryFilter = {
  characters: [],
  planTypes: [],
  grades: [],
  isProtected: null,
  hasTag: null,
  inheritedCardIds: [],
  inheritedEnhanced: true,
}

export const defaultUserMemorySort: UserMemorySort = {
  sortKey: "date",
  ascending: false,
}

export const onScreenAbilities: ProduceEffectType[] = [
  ProduceEffectType.VocalAddition,
  ProduceEffectType.VocalGrowthRateAddition,
  ProduceEffectType.DanceAddition,
  ProduceEffectType.DanceGrowthRateAddition,
  ProduceEffectType.VisualAddition,
  ProduceEffectType.VisualGrowthRateAddition,
  ProduceEffectType.ProducePointAdditionDisableTrigger,
  ProduceEffectType.StaminaRecoverFix,
]

export function constructCards(xMemory: XMemoryInspector) {
  const cards = Object.entries(xMemory.produceCards)
    .filter(([_, v]) => v.upgradeCount === 0 && v.evaluation > 5 && v.evaluation !== 32)
    .map(([_, v]) => {
      return {
        value: v.id,
        label: v.name,
      }
    })
  return cards
}

export function initXUserMemories(
  userMemories: UserMemory[],
): XUserMemory[] {
  const memories = userMemories.map(x => ({
    ...x,
    checked: false,
  }))
  return memories
}

export function filterMemories(
  memories: XUserMemory[],
  filter: UserMemoryFilter,
): XUserMemory[] {
  const results = memories.filter(memory => {
    // plan type
    if (filter.planTypes.length !== 0) {
      if (filter.planTypes.every(t => t !== memory.planType)) {
        return false
      }
    }

    // has tag
    if (filter.hasTag !== null) {
      if (memory.memoryTagId.length > 0 !== filter.hasTag) {
        return false
      }
    }

    // protected
    if (filter.isProtected !== null) {
      if (memory.isProtected !== filter.isProtected) {
        return false
      }
    }

    // grade rank
    if (filter.grades.length !== 0) {
      if (filter.grades.every(g => g !== memory.grade)) {
        return false
      }
    }

    if (filter.characters.length !== 0) {
      if (filter.characters.every(cid => cid !== memory.characterId)) {
        return false
      }
    }

    if (filter.inheritedCardIds && filter.inheritedCardIds.length !== 0) {
      if (filter.inheritedCardIds.every(cardId =>
        cardId !== memory.produceCard.id ||
        memory.produceCard.upgradeCount !== (filter.inheritedEnhanced ? 1 : 0)
      )) {
        return false
      }
    }

    return true
  })

  return results
}

export function sortMemories(
  memories: XUserMemory[],
  sortObj: UserMemorySort,
): XUserMemory[] {
  switch (sortObj.sortKey) {
    case "date":
      memories.sort((m1, m2) => {
        if (sortObj.ascending) return +m1.shotTime - +m2.shotTime
        return +m2.shotTime - +m1.shotTime
      })
      break
    case "power":
      memories.sort((m1, m2) => {
        if (sortObj.ascending) return +m1.power - +m2.power
        return +m2.power - +m1.power
      })
      break
  }
  return memories
}
