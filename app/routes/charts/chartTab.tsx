import { AreaChart } from "@mantine/charts";
import { Button } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChipGroup, IconChip } from "~/components/general/chips";
import { defaultScoreGraphPref } from "~/data/briefcase";
import { filterOptions, getDefinedChatData } from "~/data/chats";
import { XResultGradePattern } from "~/types";

export function ChartTab({
  rankPatterns,
  data,
}: {
  rankPatterns: XResultGradePattern[],
  data: {
    [x: string]: number;
    totalAttr: number;
  }[],
}) {
  const { t } = useTranslation()
  const [graphOptions, setGraphOptions] = useLocalStorage({
    key: "briefcaseScoreGraphPref",
    defaultValue: defaultScoreGraphPref,
    getInitialValueInEffect: false,
  })
  const [uiOptions, setUiOptions] = useState(graphOptions)
  const [isLoading, handlers] = useDisclosure(false)

  const onPreferenceChange = <
    T extends keyof typeof defaultScoreGraphPref
  >(key: T, val: (typeof defaultScoreGraphPref)[T]) => {
    setUiOptions(prev => {
      return { ...prev, [key]: val }
    })
  }

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setGraphOptions(uiOptions)
        handlers.close()
      }, 50)
    }
  }, [isLoading])

  return (
    <div className="pt-4">
      <p className="text-lg font-medium">{t("Final Audition Score-Attribute Chart")}</p>
      <div className="pt-4 w-[580px]">
        <ChipGroup multiple isEnum={false} value={uiOptions.ranks} onChange={(value) => onPreferenceChange("ranks", value)}>
          {
            rankPatterns
              // .filter(x => displayRanks.includes(x[0] as keyof typeof produceEvaBorder))
              .map(rankPattern => {
                return (
                  <IconChip key={rankPattern.grade} variant="outline" value={rankPattern.description}>{rankPattern.description}</IconChip>
                )
              })
          }
        </ChipGroup>
        <Button className="my-2" size="xs"
          loading={isLoading}
          onClick={() => {
            handlers.open()
          }}
        >
          {t("Apply")}
        </Button>
      </div>
      <div className="pt-4">
        <Chart data={data} graphOptions={graphOptions} />
      </div>
    </div>
  )
}

const Chart = memo(({
  data,
  graphOptions,
}: {
  data: {
    [x: string]: number;
    totalAttr: number;
  }[],
  graphOptions: typeof defaultScoreGraphPref,
}) => {
  const { t } = useTranslation()
  const filteredData = filterOptions(
    data,
    graphOptions.ranks,
  )
  return (
    <AreaChart
      h={500}
      data={filteredData}
      dataKey="totalAttr"
      series={[
        { name: 'SS+', color: '#c85d5d' },
        { name: 'SS', color: '#c65dc8' },
        { name: 'S+', color: '#625dc8' },
        { name: 'S', color: '#5dbdc8' },
        { name: 'A+', color: '#5dc86b' },
        { name: 'A', color: '#bac85d' },
        { name: 'B+', color: '#c8ad5d' },
        { name: 'B', color: '#c8562f' },
      ]}
      curveType="linear"
      xAxisLabel={t("Total Attribute")}
      yAxisLabel={t("Required Score")}
      fillOpacity={0.3}
      strokeWidth={1}
      dotProps={{ r: 0.2 }}
    />
  )
})
Chart.displayName = "Attribute-Score Chart"
