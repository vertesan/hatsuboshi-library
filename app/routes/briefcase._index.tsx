import { Tabs } from "@mantine/core"
import { MetaFunction } from "@remix-run/react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { PlanIcon } from "~/components/media/planIcon"
import { MasterContext } from "~/contexts/masterContext"
import { getLocalString } from "~/i18n"
import { CommonTab } from "~/routes/briefcase/commonTab"
import { LogicTab } from "~/routes/briefcase/logicTab"
import { SenseTab } from "~/routes/briefcase/senseTab"
import { ProducePlanType } from "~/types/proto/penum"
import { AnomaryTab } from "./briefcase/anormaryTab"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-briefcase")
  return [
    { title: title },
  ]
}

export default function Briefcase() {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <Tabs defaultValue="common">
        <Tabs.List>
          <Tabs.Tab
            value="common"
            leftSection={<PlanIcon planType={ProducePlanType.Common} className="h-6 w-6 aspect-square" />}
          >
            {t("Common")}
          </Tabs.Tab>
          <Tabs.Tab
            value="sense"
            leftSection={<PlanIcon planType={ProducePlanType.Plan1} className="h-6 w-6 aspect-square" />}
          >
            {t("plan-sense")}
          </Tabs.Tab>
          <Tabs.Tab
            value="logic"
            leftSection={<PlanIcon planType={ProducePlanType.Plan2} className="h-6 w-6 aspect-square" />}
          >
            {t("plan-logic")}
          </Tabs.Tab>
          <Tabs.Tab
            value="anomary"
            leftSection={<PlanIcon planType={ProducePlanType.Plan3} className="h-6 w-6 aspect-square" />}
          >
            {t("plan-anomary")}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="common">
          <CommonTab />
        </Tabs.Panel>

        <Tabs.Panel value="sense">
          <SenseTab />
        </Tabs.Panel>

        <Tabs.Panel value="logic">
          <LogicTab />
        </Tabs.Panel>

        <Tabs.Panel value="anomary">
          <AnomaryTab />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
