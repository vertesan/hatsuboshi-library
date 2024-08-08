import { ProduceCardFilter, XProduceCard } from "~/types";
import { filterPCards } from "./pCardFilters";

export const defaultEvaluationFilter: ProduceCardFilter = {
  rarities: [],
  planTypes: [],
  categories: [],
  origin: [],
  effectTypes: [],
  grades: [],
  characters: [],
  requirePLevel: false,
}

export function filterEvaCards(
  filter: ProduceCardFilter,
  cards: XProduceCard[]
): XProduceCard[] {
  return filterPCards(
    {
      ...filter,
      grades: [0],
    },
    cards,
  )
}
