import {
  ProduceCardCategory,
  ProduceCardRarity,
  ProduceExamEffectType,
  ProducePlanType,
} from "~/types/proto/penum"
import { ProduceCardFilter } from "./pcard"

export type MemorySlot = {
  cardId: string,
  enhanced: boolean,
}

export type MemorySlots = [
  MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null,
  MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null,
]

export type EvaluationCardFilter = ProduceCardFilter & {
  displayUnderX: boolean,
}
