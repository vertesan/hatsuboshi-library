import { Tabs } from "@mantine/core"
import { useContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { routeCharts, tableIcon } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"
import { ChartTab } from "~/routes/charts/chartTab"
import { ResultGrade } from "~/types/proto/penum"
import { TableTab } from "~/routes/charts/tableTab"
import { getDefinedChatData } from "~/data/chats"

const MIN_RANK = ResultGrade.APlus

export default function Charts() {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  const rankPatterns = useMemo(
    () => xMaster.resultGradePatterns.filter(x => x.grade >= MIN_RANK)
    , [xMaster]
  )
  const data = useMemo(() => getDefinedChatData(rankPatterns), [rankPatterns])

  return (
    <div className="p-4">
      <Tabs defaultValue={window.screen.width >= 1280 ? "chart" : "table"} keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab
            value="chart"
            leftSection={<img src={routeCharts} alt="chart" className="h-5 w-5 aspect-square" />}
          >
            {t("Chart")}
          </Tabs.Tab>
          <Tabs.Tab
            value="table"
            leftSection={<img src={tableIcon} alt="chart" className="h-5 w-5 aspect-square" />}
          >
            {t("Table")}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="chart">
          <ChartTab rankPatterns={rankPatterns} data={data} />
        </Tabs.Panel>

        <Tabs.Panel value="table">
          <TableTab rankPatterns={rankPatterns} data={data} />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
