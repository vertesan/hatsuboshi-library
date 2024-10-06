import { Accordion, Table, TableData } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { sliceArrayIntoChunks } from "~/data/chats";
import { XResultGradePattern } from "~/types";

export function TableTab({
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
  const slices = sliceArrayIntoChunks(data, 100)

  return (
    <div className="pt-4">
      <p className="text-lg font-medium">{t("Final Audition Attribute-Score Table")}</p>
      <div className="pt-4 max-w-[540px]">
        <Accordion variant="separated">
          {slices.map((slice, idx) => {
            return (
              <Accordion.Item key={idx} value={idx.toString()}>
                <Accordion.Control>{`${slice.at(0)?.totalAttr} ~ ${slice.at(-1)?.totalAttr}`}</Accordion.Control>
                <Accordion.Panel>
                  <AttrScoreTable
                    key={idx}
                    rankPatterns={rankPatterns}
                    data={slice}
                  />
                </Accordion.Panel>
              </Accordion.Item>
            )
          })}
        </Accordion>

      </div>
    </div>
  )
}

function AttrScoreTable({
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
  const ranks = rankPatterns.map(rankPattern => rankPattern.description)
  const head = [t("Total Attr."), ...ranks]
  const body = data.map(row => {
    return [
      row.totalAttr.toString(),
      ...ranks.map(rank => {
        return row[rank]?.toString() ?? "9999999+"
      })
    ]
  })

  const tableData: TableData = {
    head: head,
    body: body,
    foot: head,
  }
  return (
    <Table.ScrollContainer minWidth={420}>
      <Table data={tableData} stickyHeader striped highlightOnHover />
    </Table.ScrollContainer>
  )
}
