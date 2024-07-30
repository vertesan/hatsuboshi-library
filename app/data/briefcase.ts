import { produceEvaBorder } from "~/data/calculation"

export const defaultScoreGraphPref: {
  // from: number,
  // to: number,
  ranks: (keyof typeof produceEvaBorder)[],
  xreferenceLine: number,
  yreferenceLine: number,
  // ceiling: number,
} = {
  // from: 2800,
  // to: 3600,
  ranks: ['S+', 'S', 'A+'],
  xreferenceLine: 3500,
  yreferenceLine: 30000,
  // ceiling: 100000,
}
