import { AreaChart } from "@mantine/charts";
import { Button } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChipGroup, IconChip } from "~/components/general/chips";
import NumberCompose from "~/components/general/numberCompose";
import { defaultScoreGraphPref } from "~/data/briefcase";
import { produceEvaBorder } from "~/data/calculation";
import { displayRanks, filterOptions, getDefinedChatData } from "~/data/chats";

export function CommonTab() {
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

  const data = useMemo(() => getDefinedChatData(), [])

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
        <ChipGroup multiple isEnum={false} value={uiOptions.ranks} onChange={(value) => onPreferenceChange("ranks", value as (keyof typeof produceEvaBorder)[])}>
          {
            Object.entries(produceEvaBorder)
              .filter(x => displayRanks.includes(x[0] as keyof typeof produceEvaBorder))
              .map(([key, value]) => {
                return (
                  <IconChip key={key} variant="outline" value={key}>{value.description}</IconChip>
                )
              })
          }
        </ChipGroup>
        <NumberCompose
          className="pt-4"
          width={70}
          controlWidth={50}
          max={4500} min={1500} step={100}
          value={uiOptions.xreferenceLine}
          label={t("X-Axis Reference Line")}
          setValue={(value) => onPreferenceChange("xreferenceLine", value)}
        />
        <NumberCompose
          className="pt-2"
          width={78}
          controlWidth={68}
          max={80000} min={0} step={10000}
          value={uiOptions.yreferenceLine}
          label={t("Y-Axis Reference Line")}
          setValue={(value) => onPreferenceChange("yreferenceLine", value)}
        />
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
      referenceLines={[
        { y: graphOptions.yreferenceLine, label: graphOptions.yreferenceLine.toString(), color: 'gray.6' },
        { x: graphOptions.xreferenceLine, label: graphOptions.xreferenceLine.toString(), color: 'gray.6' },
      ]}
    />
  )
})
Chart.displayName = "Attribute-Score Chart"
