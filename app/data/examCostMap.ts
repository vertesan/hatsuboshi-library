import { ExamCostType, ProduceExamEffectType } from "~/types/proto/penum";

export const costMap = Object.values(ExamCostType).reduce((acc, cur) => {
  if (typeof cur === 'number') {
    return {
      ...acc,
      [cur]: ProduceExamEffectType[ExamCostType[cur] as keyof typeof ProduceExamEffectType],
    }
  }
  return acc
}, {} as { [x in ExamCostType]: ProduceExamEffectType })
