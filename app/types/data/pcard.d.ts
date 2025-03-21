import {
  ProduceCard,
  ProduceCardCustomize,
  ProduceCardGrowEffect,
  ProduceDescriptionProduceCardGrowEffect,
  ProduceExamEffect,
  ProduceCardStatusEnchant,
} from "~/types/proto/pmaster"
import { UnArray } from "~/types/utils"
import {
  ProduceCardRarity,
  ProducePlanType,
  ProduceCardCategory,
  ProduceExamEffectType,
} from "~/types/proto/penum"

export type XProduceCard = Omit<ProduceCard, 'playEffects'> & {
  playEffects: (UnArray<ProduceCard['playEffects']> & {
    produceExamEffect: Pick<ProduceExamEffect, 'id' | 'effectType' | 'effectValue1' | 'effectValue2' | 'effectCount' | 'effectTurn'>
  })[]
}

export type XCustProduceCard = XProduceCard & {
  customizeEvaluation: number,
  customizeEffects: (ProduceCardCustomize & {
    growEffects: (ProduceCardGrowEffect & {
      examEffect?: ProduceExamEffect
      growEffectDescription: ProduceDescriptionProduceCardGrowEffect
      produceCardStatusEnchant?: ProduceCardStatusEnchant
      addDescriptions?: ProduceDescriptionSegment[]
    })[]
  })[][]
}

export type ProduceCardFilter = {
  rarities: ProduceCardRarity[],
  planTypes: ProducePlanType[],
  categories: ProduceCardCategory[],
  origin: ('none' | 'cidol' | 'csprt')[]
  grades: number[],
  effectTypes: ProduceExamEffectType[],
  characters: string[],
  requirePLevel: boolean,
  displayCustomization: boolean,
}
