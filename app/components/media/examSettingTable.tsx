import { Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { ExamSetting } from "~/types/proto/pmaster";
import tableClasses from '~/theme/Table.module.css';

export function ExamSettingTable({
  examSetting,
  className,
}: {
  examSetting: ExamSetting,
  className?: string,
}) {
  const { t } = useTranslation()
  const examSettingsData = {
    caption: t("Contest Configurations"),
    head: [t("Element"), t("Value")],
    body: Object.entries(examSetting)
      .filter(([_, v]) => typeof v === 'number')
      .map(([k, v]) => {
        if (typeof v === 'number') {
          return [k, v]
        }
        return []
      })
  }
  return (
    <div className={`${className}`}>
      <Table data={examSettingsData} captionSide="top" classNames={tableClasses} striped />
    </div>
  )
}
