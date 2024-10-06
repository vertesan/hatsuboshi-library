import { ProduceCard, ProduceExamEffect } from "~/types/proto/pmaster"
import { UnArray } from "~/types/utils"
import {
  ProduceCardRarity,
  ProducePlanType,
  ProduceCardCategory,
  ProduceExamEffectType,
} from "~/types/proto/penum"
import { XProduceCard } from "./pcard"

export type MemorySlot = {
  cardId: string,
  enhanced: boolean,
}

export type MemorySlots = [
  MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null,
  MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null, MemorySlot | null,
]
