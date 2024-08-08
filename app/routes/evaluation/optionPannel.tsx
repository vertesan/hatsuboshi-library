import { Dispatch, SetStateAction } from "react"
import { ProduceCardFilter, XMaster } from "~/types"
import { ProduceExamEffectType } from "~/types/proto/penum"
import { CardOptionPannel } from "../pcard/optionPannel"

export function OptionPannel({
  filter,
  setFilterAndJump,
  setFilter,
  options: {
    characters,
    examEffectTypes,
  }
}: {
  filter: ProduceCardFilter,
  setFilterAndJump?: Dispatch<SetStateAction<ProduceCardFilter>>,
  setFilter: Dispatch<SetStateAction<ProduceCardFilter>>,
  options: {
    characters: XMaster['characters'],
    examEffectTypes: { value: ProduceExamEffectType, label: string }[],
  }
}) {
  return (
    <CardOptionPannel
      filter={filter}
      setFilterAndJump={setFilterAndJump ?? setFilter}
      setFilter={setFilter}
      options={{ characters, examEffectTypes }}
      withGrades={false}
      noJump={true}
    />
  )
}
