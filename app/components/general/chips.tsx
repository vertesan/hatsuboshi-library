import { Chip, ChipGroupProps, ChipProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

export function IconChip<T extends { [_: number]: string }>({
  value,
  iconSrc,
  iconComponent,
  enumObj,
  children,
  ...props
}: {
  value: string | number,
  iconSrc?: string,
  iconComponent?: JSX.Element,
  enumObj?: T,
} & Partial<ChipProps>) {
  const { t } = useTranslation()
  const label = typeof value === "number" && enumObj
    ? t(enumObj[value])
    : t(value.toString())
  return (
    <Chip size="sm" value={value.toString()} {...props}>
      {iconComponent
        ? iconComponent
        : iconSrc
          ? (
            <div className="relative aspect-square w-4 mr-0.5 inline-block align-[-3px]">
              <img src={iconSrc} alt={label} />
            </div>
          )
          : null
      }
      <span>{children ? children : label}</span>
    </Chip>
  )
}

type ValueType<M extends boolean, E extends boolean> =
  M extends true
  ? E extends true ? number[] : string[]
  : E extends true ? number | null : string | null

export function ChipGroup<M extends boolean, E extends boolean>({
  children,
  value,
  multiple,
  isEnum,
  onChange,
}: {
  value: ValueType<M, E>,
  multiple: M,
  isEnum: E,
  onChange: (v: ValueType<M, E>) => void,
} & Omit<ChipGroupProps, "value" | "onChange" | "multiple">) {

  const doChange = (v: M extends true ? string[] : string) => {
    if (typeof v === "string") {
      if (isEnum) {
        onChange(Number(v) as ValueType<M, E>)
      } else {
        onChange(v as ValueType<M, E>)
      }
    } else {
      if (v.every(x => !Number.isNaN(Number(x)))) {
        onChange(v.map(Number) as ValueType<M, E>)
      } else {
        onChange(v as ValueType<M, E>)
      }
    }
  }

  const val =
    value
      ? multiple
        ? isEnum
          ? (value as number[]).map(String)
          : value as string[]
        : isEnum
          ? value?.toString()
          : value as string
      : null

  return (
    <Chip.Group
      value={val as M extends true ? string[] : string | null}
      onChange={(v) => { doChange(v) }}
      multiple={multiple}
    >
      <div className="flex flex-row flex-wrap gap-2">
        {children}
      </div>
    </Chip.Group>
  )
}
