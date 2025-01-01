import { TFunction } from "i18next";
import { SupportCardFilter, XMaster, XSupportCard } from "~/types";
import { ProduceEffectType, ProducePhaseType, SupportCardRarity } from "~/types/proto/penum";

export const defaultSupportCardFilter: SupportCardFilter = {
  rarities: [SupportCardRarity.Ssr, SupportCardRarity.Sr],
  planTypes: [],
  attributes: [],
  rewardTypes: [],
  eventEffectTypes: [],
  produceEffectTypes: [],
  showAllEffects: false,
  produceEffectOperator: "AND",
  characters: [],
  showEnhanced: true,
  producePhaseType: [],
  level: 40,
  welfareAsSr: false,
}

export const supportCardMaxLevel: { [r in SupportCardRarity]: number } = {
  [SupportCardRarity.Ssr]: 60,
  [SupportCardRarity.Sr]: 50,
  [SupportCardRarity.R]: 40,
  [SupportCardRarity.Unknown]: 0,
}

export function filterSupportCards(
  filter: SupportCardFilter,
  cards: XSupportCard[]
): [XSupportCard[], { [id: string]: Set<number> }] {
  const matchedSkills: { [id: string]: Set<number> } = {}
  const result = cards.filter(card => {
    let matchedIndexes = new Set<number>()
    // rarity
    if (filter.rarities.length !== 0) {
      let virtualRarity = card.rarity
      if (filter.welfareAsSr) {
        if (card.rarity === SupportCardRarity.Ssr && card.exchangeReward.quantity < 50) {
          virtualRarity = SupportCardRarity.Sr
        }
      }
      if (!filter.rarities.includes(virtualRarity)) return false
    }
    // plan type
    if (filter.planTypes.length !== 0) {
      if (!filter.planTypes.includes(card.planType)) return false
    }
    // attribute
    if (filter.attributes.length !== 0) {
      if (!filter.attributes.includes(card.type)) return false
    }
    // reward type
    if (filter.rewardTypes.length !== 0) {
      if (!(
        filter.rewardTypes.includes("citem") && card.produceItems.length !== 0 && card.produceItems[0].isExamEffect ||
        filter.rewardTypes.includes("pitem") && card.produceItems.length !== 0 && !card.produceItems[0].isExamEffect ||
        filter.rewardTypes.includes("card") && card.produceCards.length !== 0 ||
        filter.rewardTypes.includes("none") && card.produceItems.length === 0 && card.produceCards.length === 0
      )) {
        return false
      }
    }
    // event effect type
    if (filter.eventEffectTypes.length !== 0) {
      const event = card.produceEvents.at(2)
      if (!event) {
        if (!filter.eventEffectTypes.includes(ProduceEffectType.Unknown)) return false
      } else {
        if (!filter.eventEffectTypes.some(filterType => {
          return event.produceEffects.some(effect => effect.produceEffectType === filterType)
        })
        ) {
          return false
        }
      }
    }
    // characters
    if (filter.characters.length !== 0) {
      const matched = filter.characters.every(id => card.characterIds.includes(id))
      if (!matched) return false
    }

    // produce effect type
    if (filter.produceEffectTypes.length !== 0) {
      let flag = filter.produceEffectOperator === "AND"
      filter.produceEffectTypes.forEach(effectType => {
        let innerFlag = false
        card.produceSkills.forEach((skill, idx) => {
          const level1 = skill.at(-1)
          if (!level1) return false
          const ok = level1.produceSkill.produceEffects.some(effect => effect.produceEffectType === effectType)
          if (ok) {
            matchedIndexes.add(idx)
          }
          innerFlag ||= ok
        })
        flag = filter.produceEffectOperator === "AND" ? flag && innerFlag : flag || innerFlag
      })
      if (!flag) return false
    }
    // produce triggers
    if (filter.producePhaseType.length !== 0) {
      let flag = false
      if (matchedIndexes.size === 0) {
        matchedIndexes = new Set([0, 1, 2, 3, 4, 5])
      }
      const newMatchedIndexes = new Set<number>()
      filter.producePhaseType.forEach(triggerType => {
        matchedIndexes.forEach(idx => {
          const level1 = card.produceSkills[idx].at(-1)
          if (!level1) return false
          const ok = level1.producePhaseType === triggerType
          if (ok) {
            newMatchedIndexes.add(idx)
          }
          flag ||= ok
        })
      })
      if (!flag) return false
      matchedIndexes = newMatchedIndexes
    }

    matchedSkills[card.id] = matchedIndexes
    return true
  })
  return [result, matchedSkills]
}

export function constructCharacters(characters: XMaster['characters']) {
  return Object.entries(characters).map(([k, v]) => ({
    value: k,
    label: v.lastName + v.firstName,
  }))
}

export function constructThirdEventEffects(xSupportCards: XSupportCard[]) {
  const effectTypes = new Set<ProduceEffectType>()
  xSupportCards.forEach(card => {
    const event = card.produceEvents.find(event => event.number === 3)
    if (!event) return
    event.produceEffects.forEach(effect => { effectTypes.add(effect.produceEffectType) })
  })
  effectTypes.add(ProduceEffectType.Unknown)
  return [...effectTypes]
}

export function constructProducePhaseTypes(t: TFunction<"translation", undefined>) {
  const all = []
  for (const [k, v] of Object.entries(ProducePhaseType)) {
    if (typeof v !== 'number') continue
    all.push({ value: v, label: t(k) })
  }
  return all
}

function getProduceEffectTypeMultiSelectItem(
  e: ProduceEffectType,
  t: TFunction<"translation", undefined>
) {
  return { value: e, label: t(ProduceEffectType[e]) }
}

type ConstructedEffectType<T> = T extends true
  ? { value: number, label: string }[]
  : { group: string, items: { value: number, label: string }[] }[]

export function constructProduceEffectTypes<T extends boolean>(
  useAll: T,
  t: TFunction<"translation", undefined>
): ConstructedEffectType<T> {
  if (useAll) {
    const all = []
    for (const [k, v] of Object.entries(ProduceEffectType)) {
      if (typeof v !== 'number') continue
      all.push({ value: v, label: t(k) })
    }
    return all as ConstructedEffectType<T>
  }
  return [
    {
      group: t("Attribute"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.VocalAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.DanceAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.VisualAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.VocalGrowthRateAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.DanceGrowthRateAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.VisualGrowthRateAddition, t),
      ]
    },
    {
      group: t("Lesson"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.LessonSpChangeRatePermilAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.LessonVocalSpChangeRatePermilAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.LessonDanceSpChangeRatePermilAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.LessonVisualSpChangeRatePermilAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.LessonLimitUp, t),
      ]
    },
    {
      group: t("Stamina"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.StaminaRecoverFix, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.StaminaRecoverMultiple, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.MaxStaminaAddition, t),
      ]
    },
    {
      group: t("P-Point"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProducePointAdditionValueUp, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProducePointAddition, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProducePointAdditionDisableTrigger, t),
      ]
    },
    {
      group: t("Produce Card"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProduceCardDuplicate, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProduceCardDuplicateUpgrade, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProduceCardChangeUpgrade, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ProduceCardSelectRerollCountUp, t),
      ]
    },
    {
      group: t("Shop"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.ShopPriceDiscountMultiple, t),
      ]
    },
    {
      group: t("Support Card Event"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.SupportCardEventStaminaRecoverUp, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.SupportCardEventProducePointAdditionValueUp, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.SupportCardEventParameterAdditionValueUp, t),
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.SupportCardEventProbabilityUp, t),
      ]
    },
    {
      group: t("Uncategorized"),
      items: [
        getProduceEffectTypeMultiSelectItem(ProduceEffectType.SupportCardProduceCardUpgradeProbabilityUp, t),
      ]
    },
  ] as ConstructedEffectType<T>
}
