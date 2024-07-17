import { MultiSelect, MultiSelectProps } from "@mantine/core";

type DataType = number[]
  | { group: string, items: number[] }[]
  | { value: number, label: string }[]
  | { group: string, items: { value: number, label: string }[] }[]

export function MultiSelectEnum({
  data,
  value,
  onChange,
  ...props
}: {
  data: DataType,
  value: number[],
  onChange: (value: number[]) => void,
} & Omit<MultiSelectProps, "data" | "value" | "onChange">) {
  const _data = data.length === 0
    ? []
    : typeof data[0] === 'number'
      ? data.map(String)
      : 'value' in data[0]
        ? (data as { value: number, label: string }[]).map(it => ({ value: it.value.toString(), label: it.label }))
        : typeof data[0].items.at(0) === 'number'
          ? (data as { group: string, items: number[] }[]).map(d => ({ group: d.group, items: d.items.map(item => item.toString()) }))
          : (data as { group: string, items: { value: number, label: string }[] }[]).map(d => {
            return {
              group: d.group,
              items: d.items.map(item => ({ value: item.value.toString(), label: item.label }))
            }
          })
  const _value = value.map(String)
  const _onChange = (v: string[]) => {
    onChange(v.map(Number))
  }
  return (
    <MultiSelect
      data={_data}
      value={_value}
      onChange={_onChange}
      comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 150, timingFunction: "ease-in-out" } }}
      {...props}
    />
  )
}
