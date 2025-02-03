import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData
} from "@remix-run/react";
import { getApiData } from "~/api";
import { XCustProduceCard } from "~/types";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("pcard")
  return data
}

export default function EvaluationLayout() {
  const cards = useLoaderData<typeof clientLoader>()
    .filter(card => card.evaluation !== 0)
  const level0Cards = cards
    .filter(card => card.upgradeCount === 0)
    .sort((a, b) => +a.order - +b.order)
  // use hash table to accelerate computing
  const xProduceCards = level0Cards
    .reduce<{ [x: string]: XCustProduceCard }>((acc, cur) => {
      if (acc[cur.id] === undefined) {
        return {
          ...acc,
          [cur.id]: cur,
        }
      }
      return acc
    }, {})
  const xEnhancedCards = cards
    .filter(card => card.upgradeCount === 1)
    .reduce<{ [x: string]: XCustProduceCard }>((acc, cur) => {
      if (acc[cur.id] === undefined) {
        return {
          ...acc,
          [cur.id]: cur,
        }
      }
      return acc
    }, {})
  return (
    <Outlet context={[level0Cards, xProduceCards, xEnhancedCards]} />
  )
}
