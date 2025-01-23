
export function getProgressPercentage(val: number, max: number): string {
  const progressPercentage = val / max * 100 + "%"
  return progressPercentage
}

export function getGrowthPercentage(val: number): string {
  return (val / 10).toFixed(1) + "%"
}
