import { ProduceCardFilter, XCustProduceCard, XProduceCard } from "~/types";
import { filterCustPCards } from "./pCardFilters";

export const defaultEvaluationFilter: ProduceCardFilter = {
  rarities: [],
  planTypes: [],
  categories: [],
  origin: [],
  effectTypes: [],
  grades: [],
  characters: [],
  requirePLevel: false,
  displayCustomization: false,
}

export function filterEvaCards(
  filter: ProduceCardFilter,
  cards: XCustProduceCard[]
): XCustProduceCard[] {
  return filterCustPCards(
    {
      ...filter,
      grades: [0],
    },
    cards,
  )
}
