import {
  MemoryAbility,
  ProduceEffect,
  ProduceItem,
  ProduceSkill,
} from "../proto/pmaster"
import { XProduceCard } from "./pcard"
import { UserMemory } from "../proto/ptransaction"
import { ProducePlanType, ResultGrade } from "../proto/penum"

export type XMemoryInspector = {
  produceCards: { [k: string]: XProduceCard },
  produceItems: { [k: string]: ProduceItem },
  memoryAbilities: {
    [k: string]: MemoryAbility & {
      skill: ProduceSkill & { produceEffects: ProduceEffect[] }
    }
  }
}

export type XUserMemory = UserMemory & {
  checked: boolean,
}

export type UserMemoryFilter = {
  characters: string[],
  planTypes: ProducePlanType[],
  grades: ResultGrade[],
  isProtected: boolean | null,
  hasTag: boolean | null,
  inheritedCardIds: string[] | undefined,
  inheritedEnhanced: boolean,
}

export type UserMemorySort = {
  sortKey:
  | "date"
  | "power",
  ascending: boolean,
}
