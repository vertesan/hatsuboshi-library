import { calcFinalAuditionRequiredScore } from "~/data/calculation";
import { XResultGradePattern } from "~/types";

const _ceiling = 9999999
const _chartCeiling = 100000
const _from = 3000
const _to = 5400

export function filterOptions(
  data: ReturnType<typeof getScoreChatData>,
  grades: string[],
  // rankPatterns: XResultGradePattern[],
) {
  const filteredData = []
  for (const d of data) {
    const recordedData: { [x: string]: number } = {}
    for (const g of grades) {
      if (d[g] !== undefined && d[g] <= _chartCeiling) {
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

export function getDefinedChatData(
  rankPatterns: XResultGradePattern[],
) {
  return getScoreChatData(
    rankPatterns,
    _from,
    _to,
    _ceiling,
  )
}

export function getScoreChatData(
  // grades: (keyof typeof produceEvaBorder)[],
  rankPatterns: XResultGradePattern[],
  from: number,
  to: number,
  ceiling: number,
): {
  totalAttr: number,
  [x: string]: number,
}[] {
  const data = []
  for (let totalAttr = from; totalAttr <= to; totalAttr++) {
    const scores = calcFinalAuditionRequiredScore({ rankPatterns, totalAttr, threshold: ceiling })
    const gradeScores = scores.reduce((acc, cur) => {
      acc[cur[0]] = cur[1]
      return acc
    }, {} as { [x: string]: number })
    data.push({
      totalAttr: totalAttr,
      ...gradeScores,
    })
  }
  return data
}

export function sliceArrayIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
