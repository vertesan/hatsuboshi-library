import { Chip, ChipGroupProps, ChipProps } from "@mantine/core";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

export const IconChip = forwardRef(_IconChip)
_IconChip.displayName = "IconChip"

function _IconChip<T extends { [_: number]: string }>({
  value,
  iconSrc,
  iconComponent,
  enumObj,
  noLabel = false,
  iconType = "default",
  children,
  className,
  ...props
}: {
  value: string | number,
  iconSrc?: string,
  iconComponent?: JSX.Element,
  enumObj?: T,
  noLabel?: boolean,
  iconType?: "default" | "chara",
  className?: string,
} & Partial<ChipProps>, ref: React.Ref<HTMLDivElement>) {
  const { t } = useTranslation()
  const label = typeof value === "number" && enumObj
    ? t(enumObj[value])
    : t(value.toString())
  return (
    <div ref={ref}>
      <Chip size={iconType === "chara" ? "sm" : "sm"} value={value.toString()} className={`flex items-center justify-center overflow-visible ${className}`} {...props}>
        <div className="flex justify-center items-center gap-[2px]">
          {iconComponent
            ? iconComponent
            : iconSrc
              ? (
                <div className={`relative aspect-square ${iconType === "chara" ? "w-8" : "w-4"}`}>
                  <img src={iconSrc} alt={label} className="object-fill" />
                </div>
              )
              : null
          }
          {noLabel
            ? null
            : <span>{children ? children : label}</span>
          }
        </div>
      </Chip>
    </div>
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
