import { ProduceCardFilter, XCustProduceCard, XProduceCard } from "~/types";
import { filterCustPCards } from "./pCardFilters";
import { EvaluationCardFilter } from "~/types/data/evaluation";

export const defaultEvaluationFilter: EvaluationCardFilter = {
  rarities: [],
  planTypes: [],
  categories: [],
  origin: [],
  effectTypes: [],
  grades: [],
  characters: [],
  requirePLevel: false,
  displayCustomization: false,
  displayUnderX: false,
}

export function filterEvaCards(
  filter: EvaluationCardFilter,
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
