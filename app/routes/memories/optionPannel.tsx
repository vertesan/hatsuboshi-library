import { Button, Divider, MultiSelect, MultiSelectProps, Switch } from "@mantine/core";
import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  getResultGradeImgUrl,
  plan1Icon,
  plan2Icon,
  plan3Icon,
  planCommonIcon
} from "~/assets/media";
import { ChipGroup, IconChip } from "~/components/general/chips";
import Ripple from "~/components/general/ripple";
import { ProduceCardIcon } from "~/components/media/produceCard";
import { constructCharacters } from "~/data/supportCardFilters";
import { constructCards, defaultUserMemoryFilter, sortMemories } from "~/data/userMemory";
import { UserMemoryFilter, UserMemorySort, XMaster, XMemoryInspector } from "~/types";
import { ProducePlanType, ResultGrade } from "~/types/proto/penum";

export function OptionPannel({
  filter,
  sort,
  setFilter,
  setSort,
  options: {
    characters,
    cardSelectList,
    xCardsMap,
  }
}: {
  filter: UserMemoryFilter,
  sort: UserMemorySort,
  setFilter: Dispatch<SetStateAction<UserMemoryFilter>>,
  setSort: Dispatch<SetStateAction<UserMemorySort>>,
  options: {
    characters: XMaster['characters'],
    cardSelectList: ReturnType<typeof constructCards>,
    xCardsMap: XMemoryInspector['produceCards'],
  }
}) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const charactersMultiSelectData = useMemo(() => {
    return constructCharacters(characters)
  }, [])

  const onFilterChange = <T extends keyof UserMemoryFilter>(key: T, val: UserMemoryFilter[T]) => {
    setFilter(prev => {
      return { ...prev, [key]: val }
    })
  }

  const onSortChange = <T extends keyof UserMemorySort>(key: T, val: UserMemorySort[T]) => {
    setSort(prev => {
      return { ...prev, [key]: val }
    })
  }

  const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
    <div className="flex gap-2 justify-start items-center">
      <div>
        <ProduceCardIcon
          card={xCardsMap[option.value + "-0"]}
          character="kllj"
          className="relative h-12 w-12"
        />
      </div>
      <div>
        {option.label}
      </div>
    </div>
  )

  return (
    <div>
      <Button size="xs" ref={ref}
        onClick={() => { setFilter(defaultUserMemoryFilter) }}
      >
        {t("Reset")}
        <Ripple targetRef={ref} />
      </Button>
      <Divider labelPosition="left" my="sm" label={t("Produce Plan")} />
      <ChipGroup multiple isEnum value={filter.planTypes} onChange={(value) => onFilterChange("planTypes", value)}>
        <IconChip variant="outline" value={ProducePlanType.Plan1} iconSrc={plan1Icon}>{t("plan-sense")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan2} iconSrc={plan2Icon}>{t("plan-logic")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan3} iconSrc={plan3Icon}>{t("plan-anomary")}</IconChip>
      </ChipGroup>

      <Divider labelPosition="left" my="sm" label={t("Grade")} />
      <ChipGroup multiple isEnum value={filter.grades} onChange={(value) => onFilterChange("grades", value)}>
        {
          Object.entries(ResultGrade)
            .filter(([k, v]) => typeof v === "string" && v !== "Unknown")
            .reverse()
            .map(([k, v]) =>
              <IconChip key={k} noLabel variant="outline" value={+k} iconSrc={getResultGradeImgUrl(+k)}>
              </IconChip>
            )
        }
      </ChipGroup>

      <Divider labelPosition="left" my="sm" label={t("Characters")} />
      <MultiSelect
        clearable
        checkIconPosition="left"
        data={charactersMultiSelectData}
        value={filter.characters}
        comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 150, timingFunction: "ease-in-out" } }}
        onChange={(value) => onFilterChange("characters", value)}
      />

      <Divider labelPosition="left" my="sm" label={t("Protection")} />
      <ChipGroup
        isEnum={false}
        multiple={false}
        value={filter.isProtected === null ? "all" : filter.isProtected ? "true" : "false"}
        onChange={(value) => onFilterChange("isProtected", value === "all" ? null : value === "true" ? true : false)}
      >
        <IconChip variant="outline" value="true">{t("Protected")}</IconChip>
        <IconChip variant="outline" value="false">{t("Non-Protected")}</IconChip>
        <IconChip variant="outline" value="all">{t("All")}</IconChip>
      </ChipGroup>


      <Divider labelPosition="left" my="sm" label={t("Tagging")} />
      <ChipGroup
        isEnum={false}
        multiple={false}
        value={filter.hasTag === null ? "all" : filter.hasTag ? "true" : "false"}
        onChange={(value) => onFilterChange("hasTag", value === "all" ? null : value === "true" ? true : false)}
      >
        <IconChip variant="outline" value="true">{t("Tagged")}</IconChip>
        <IconChip variant="outline" value="false">{t("Non-Tagged")}</IconChip>
        <IconChip variant="outline" value="all">{t("All")}</IconChip>
      </ChipGroup>

      <Divider labelPosition="left" my="sm" label={t("Inherited Card")} />
      <Switch
        checked={filter.inheritedEnhanced}
        size="sm"
        label={t("Enhanced")}
        className="pb-2"
        onChange={(event) => onFilterChange("inheritedEnhanced", event.currentTarget.checked)}
      />
      <MultiSelect
        clearable
        checkIconPosition="left"
        maxDropdownHeight={350}
        data={cardSelectList}
        value={filter.inheritedCardIds}
        renderOption={renderMultiSelectOption}
        onChange={(value) => onFilterChange("inheritedCardIds", value)}
      />

      <Divider labelPosition="left" my="sm" label={t("Sorting")} />
      <Switch
        checked={sort.ascending}
        size="sm"
        className="pb-2"
        // onLabel="AND"
        // offLabel="OR"
        label={t("Ascending")}
        onChange={(event) => onSortChange("ascending", event.currentTarget.checked)}
      />
      <ChipGroup
        isEnum={false}
        multiple={false}
        value={sort.sortKey}
        onChange={(value) => onSortChange("sortKey", (value ?? "date") as UserMemorySort['sortKey'])}
      >
        <IconChip variant="outline" value="date">{t("Date")}</IconChip>
        <IconChip variant="outline" value="power">{t("Power")}</IconChip>
      </ChipGroup>
    </div>
  )
}
