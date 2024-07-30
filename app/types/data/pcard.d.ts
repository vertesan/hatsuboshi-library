import { ProduceCard, ProduceExamEffect } from "~/types/proto/pmaster"
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

export type ProduceCardFilter = {
  rarities: ProduceCardRarity[],
  planTypes: ProducePlanType[],
  categories: ProduceCardCategory[],
  origin: ('none' | 'cidol' | 'csprt')[]
  grades: number[],
  effectTypes: ProduceExamEffectType[],
  characters: string[],
  requirePLevel: boolean,
}
