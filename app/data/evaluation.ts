export const rankEvaluation = {
  "B": { from: 107, to: 126 },
  "B+": { from: 107, to: 146 },
  "A": { from: 152, to: 178 },
  "A+": { from: 152, to: 203 },
  "S": { from: 152, to: 219 },
}

export const evaluationMap: {
  [x: number]: { original: number, enhanced: number, text: string, }
} = {
  1: { original: 1, enhanced: 5, text: "1 / 5" },
  10: { original: 10, enhanced: 13, text: "10 / 13" },
  15: { original: 15, enhanced: 20, text: "15 / 20" },
  25: { original: 25, enhanced: 34, text: "25 / 34" },
  32: { original: 32, enhanced: 42, text: "32 / 42" },
  35: { original: 35, enhanced: 47, text: "35 / 47" },
  50: { original: 50, enhanced: 68, text: "50 / 68" },
}
