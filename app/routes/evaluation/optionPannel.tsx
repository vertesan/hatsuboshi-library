import { Button, Divider, MultiSelect, Switch, useMantineTheme } from "@mantine/core";
import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { plan1Icon, plan2Icon, plan3Icon, planCommonIcon } from "~/assets/media";
import { ChipGroup, IconChip } from "~/components/general/chips";
import { MultiSelectEnum } from "~/components/general/multiSelect";
import Ripple from "~/components/general/ripple";
import { characterMultiSelectRenderOption } from "~/components/media/characterMultiSelectRenderOption";
import { defaultEvaluationFilter } from "~/data/evaluationFilter";
import { constructCharacters } from "~/data/idolCardFilters";
import { EvaluationCardFilter, XMaster } from "~/types";
import { ProduceCardCategory, ProduceCardRarity, ProduceExamEffectType, ProducePlanType } from "~/types/proto/penum";

export function OptionPannel({
  filter,
  setFilterAndJump,
  setFilter,
  options: {
    characters,
    examEffectTypes,
  }
}: {
  filter: EvaluationCardFilter,
  setFilterAndJump?: Dispatch<SetStateAction<EvaluationCardFilter>>,
  setFilter: Dispatch<SetStateAction<EvaluationCardFilter>>,
  options: {
    characters: XMaster['characters'],
    examEffectTypes: { value: ProduceExamEffectType, label: string }[],
  }
}) {
  return (
    <EvaOptionPannel
      filter={filter}
      setFilterAndJump={setFilterAndJump ?? setFilter}
      setFilter={setFilter}
      options={{ characters, examEffectTypes }}
      withGrades={false}
      noJump={true}
    />
  )
}

export function EvaOptionPannel({
  filter,
  setFilterAndJump,
  setFilter,
  options: {
    characters,
    examEffectTypes,
  },
  withGrades = false,
  noJump = true,
}: {
  filter: EvaluationCardFilter,
  setFilterAndJump: Dispatch<SetStateAction<EvaluationCardFilter>>,
  setFilter: Dispatch<SetStateAction<EvaluationCardFilter>>,
  options: {
    characters: XMaster['characters'],
    examEffectTypes: { value: ProduceExamEffectType, label: string }[],
  },
  withGrades?: boolean,
  noJump?: boolean,
}) {
  const { t } = useTranslation()
  const theme = useMantineTheme()
  const ref = useRef(null)
  const onFilterChange = <T extends keyof EvaluationCardFilter>(key: T, val: EvaluationCardFilter[T]) => {
    if (noJump) {
      setFilter(prev => {
        return { ...prev, [key]: val }
      })
    } else {
      setFilterAndJump(prev => {
        return { ...prev, [key]: val }
      })
    }
  }

  const charactersMultiSelectData = useMemo(() => {
    return constructCharacters(characters)
  }, [])

  return (
    <div>
      <Button size="xs" ref={ref}
        onClick={() => { setFilterAndJump(defaultEvaluationFilter) }}
      >
        {t("Reset")}
        <Ripple targetRef={ref} />
      </Button>
      <Divider labelPosition="left" my="sm" label={t("Rarity")} />
      <ChipGroup multiple isEnum value={filter.rarities} onChange={(value) => onFilterChange("rarities", value)}>
        <IconChip variant="outline" value={ProduceCardRarity.Legend}>LR</IconChip>
        <IconChip variant="outline" value={ProduceCardRarity.Ssr}>SSR</IconChip>
        <IconChip variant="outline" value={ProduceCardRarity.Sr}>SR</IconChip>
        <IconChip variant="outline" value={ProduceCardRarity.R}>R</IconChip>
        <IconChip variant="outline" value={ProduceCardRarity.N}>N</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Produce Plan")} />
      <ChipGroup multiple isEnum value={filter.planTypes} onChange={(value) => onFilterChange("planTypes", value)}>
        <IconChip variant="outline" value={ProducePlanType.Common} iconSrc={planCommonIcon}>{t("plan-free")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan1} iconSrc={plan1Icon}>{t("plan-sense")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan2} iconSrc={plan2Icon}>{t("plan-logic")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan3} iconSrc={plan3Icon}>{t("plan-anomary")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Category")} />
      <ChipGroup multiple isEnum value={filter.categories} onChange={(value) => onFilterChange("categories", value)}>
        <IconChip variant="outline" value={ProduceCardCategory.ActiveSkill}>{t(ProduceCardCategory[ProduceCardCategory.ActiveSkill])}</IconChip>
        <IconChip variant="outline" value={ProduceCardCategory.MentalSkill}>{t(ProduceCardCategory[ProduceCardCategory.MentalSkill])}</IconChip>
        <IconChip variant="outline" value={ProduceCardCategory.Trouble}>{t(ProduceCardCategory[ProduceCardCategory.Trouble])}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Origin")} />
      <ChipGroup multiple isEnum={false} value={filter.origin} onChange={(value) => onFilterChange("origin", value as ('none' | 'cidol' | 'csprt')[])}>
        <IconChip variant="outline" value="none">{t("None")}</IconChip>
        <IconChip variant="outline" value="cidol">{t("P-Idol")}</IconChip>
        <IconChip variant="outline" value="csprt">{t("S-Card")}</IconChip>
      </ChipGroup>
      {withGrades
        ? <>
          <Divider labelPosition="left" my="sm" label={t("Grades")} />
          <ChipGroup multiple isEnum value={filter.grades} onChange={(value) => onFilterChange("grades", value)}>
            <IconChip variant="outline" value={0} disabled={filter.displayCustomization}>{t("Normal")}</IconChip>
            <IconChip variant="outline" value={1} disabled={filter.displayCustomization}>{t("Enhanced")}</IconChip>
          </ChipGroup>
        </>
        : null
      }
      <Divider labelPosition="left" my="sm" label={t("Effects")} />
      <MultiSelectEnum
        clearable
        checkIconPosition="left"
        data={examEffectTypes}
        value={filter.effectTypes}
        comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 150, timingFunction: "ease-in-out" } }}
        onChange={(value) => onFilterChange("effectTypes", value)}
      />
      <Divider labelPosition="left" my="sm" label={t("Characters")} />
      <MultiSelect
        clearable
        checkIconPosition="left"
        data={charactersMultiSelectData}
        value={filter.characters}
        comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 150, timingFunction: "ease-in-out" } }}
        renderOption={characterMultiSelectRenderOption}
        onChange={(value) => onFilterChange("characters", value)}
      />
      <Divider labelPosition="left" my="sm" label={t("Misc")} />
      <Switch
        checked={filter.requirePLevel}
        size="sm"
        label={t("Has P-Level Precondition")}
        onChange={(event) => onFilterChange("requirePLevel", event.currentTarget.checked)}
      />
      <Switch
        checked={filter.displayUnderX}
        size="sm"
        label={t("Display Evaluations Under S")}
        className="pt-2"
        onChange={(event) => onFilterChange("displayUnderX", event.currentTarget.checked)}
      />
    </div>
  )
}
