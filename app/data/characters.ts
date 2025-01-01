import { XMaster } from "~/types";

let results: XMaster['characters']

export function filterPlayables(characters: XMaster['characters']) {
  if (results) return results
  results = Object.entries(characters)
    .reduce((acc, cur) => {
      if (cur[1].isPlayable) {
        acc = {
          ...acc,
          [cur[0]]: cur[1],
        }
      }
      return acc
    }, {})
  return results
}
