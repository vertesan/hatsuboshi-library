import { calcFinalAuditionRequiredScore, produceEvaBorder } from "~/data/calculation";

export const displayRanks: (keyof typeof produceEvaBorder)[] = ["SS+", "SS", "S+", "S", "A+", "A", "B+"]
const _ceiling = 80000
const _from = 1500
const _to = 5400

export function filterOptions(
  data: ReturnType<typeof getScoreChatData>,
  grades: (keyof typeof produceEvaBorder)[],
) {
  const filteredData = []
  for (const d of data) {
    const recordedData: { [x: string]: number } = {}
    for (const g of grades) {
      if (d[g] !== undefined) {
        recordedData[g] = d[g]
      }
    }
    if (Object.keys(recordedData).length > 0) {
      filteredData.push({
        ...recordedData,
        totalAttr: d.totalAttr,
      })
    }
  }
  return filteredData
}

export function getDefinedChatData() {
  return getScoreChatData(
    displayRanks,
    _from,
    _to,
    _ceiling,
  )
}

export function getScoreChatData(
  grades: (keyof typeof produceEvaBorder)[],
  from: number,
  to: number,
  ceiling: number,
): {
  totalAttr: number,
  [x: string]: number,
}[] {
  const data = []
  for (let totalAttr = from; totalAttr <= to; totalAttr++) {
    const scores = calcFinalAuditionRequiredScore({ grades, totalAttr, threshold: ceiling })
    const gradeScores = scores.reduce((acc, cur) => {
      acc[produceEvaBorder[cur[0]].description] = cur[1]
      return acc
    }, {} as { [x: string]: number })
    data.push({
      totalAttr: totalAttr,
      ...gradeScores,
    })
  }
  return data
}
