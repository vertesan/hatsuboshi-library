import { Button, Divider, MultiSelect, MultiSelectProps, Switch } from "@mantine/core";
import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  plan1Icon,
  plan2Icon,
  plan3Icon,
  planCommonIcon,
  supportAttrAssistIcon,
  supportAttrDanceIcon,
  supportAttrVisualIcon,
  supportAttrVocalIcon
} from "~/assets/media";
import { ChipGroup, IconChip } from "~/components/general/chips";
import { MultiSelectEnum } from "~/components/general/multiSelect";
import NumberCompose from "~/components/general/numberCompose";
import Ripple from "~/components/general/ripple";
import { characterMultiSelectRenderOption } from "~/components/media/characterMultiSelectRenderOption";
import { ProduceEffectIcon } from "~/components/media/effectIcon";
import { constructCharacters, constructProduceEffectTypes, constructProducePhaseTypes, defaultSupportCardFilter } from "~/data/supportCardFilters";
import { SupportCardFilter, XMaster } from "~/types";
import { ProduceEffectType, ProducePlanType, SupportCardRarity, SupportCardType } from "~/types/proto/penum";

export function OptionPannel({
  filter,
  setFilterAndJump,
  setFilter,
  options: {
    thirdEventEffectTypes,
    characters,
  }
}: {
  filter: SupportCardFilter,
  setFilterAndJump: Dispatch<SetStateAction<SupportCardFilter>>,
  setFilter: Dispatch<SetStateAction<SupportCardFilter>>,
  options: {
    thirdEventEffectTypes: ProduceEffectType[],
    characters: XMaster['characters'],
  }
}) {
  const { t, i18n } = useTranslation()
  const ref = useRef(null)
  const produceTypesMultiSelectData = useMemo(() => {
    return constructProduceEffectTypes(filter.showAllEffects, t)
  }, [i18n.language, filter.showAllEffects])

  const charactersMultiSelectData = useMemo(() => {
    return constructCharacters(characters)
  }, [])

  const producePhaseMultiSelectData = useMemo(() => {
    return constructProducePhaseTypes(t)
  }, [i18n.language])

  const onFilterChangeJump = <T extends keyof SupportCardFilter>(key: T, val: SupportCardFilter[T]) => {
    setFilterAndJump(prev => {
      return { ...prev, [key]: val }
    })
  }
  const onFilterChange = <T extends keyof SupportCardFilter>(key: T, val: SupportCardFilter[T]) => {
    setFilter(prev => {
      return { ...prev, [key]: val }
    })
  }

  const effectMultiSelectRenderOption: MultiSelectProps['renderOption'] = ({ option }) => (
    <div className="flex gap-2 justify-start items-center">
      <div>
        <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={+option.value} />
      </div>
      <div>
        {option.label}
      </div>
    </div>
  )

  return (
    <div>
      <Button size="xs" ref={ref}
        onClick={() => { setFilterAndJump(defaultSupportCardFilter) }}
      >
        {t("Reset")}
        <Ripple targetRef={ref} />
      </Button>
      <Divider labelPosition="left" mt="sm" label={t("Rarity")} />
      <Switch
        checked={filter.welfareAsSr}
        size="sm"
        label={t("Treat welfare SSR as SR")}
        className="py-2"
        onChange={(event) => onFilterChange("welfareAsSr", event.currentTarget.checked)}
      />
      <ChipGroup multiple isEnum value={filter.rarities} onChange={(value) => onFilterChangeJump("rarities", value)}>
        <IconChip variant="outline" value={SupportCardRarity.Ssr}>SSR</IconChip>
        <IconChip variant="outline" value={SupportCardRarity.Sr}>SR</IconChip>
        <IconChip variant="outline" value={SupportCardRarity.R}>R</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Produce Plan")} />
      <ChipGroup multiple isEnum value={filter.planTypes} onChange={(value) => onFilterChangeJump("planTypes", value)}>
        <IconChip variant="outline" value={ProducePlanType.Common} iconSrc={planCommonIcon}>{t("plan-free")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan1} iconSrc={plan1Icon}>{t("plan-sense")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan2} iconSrc={plan2Icon}>{t("plan-logic")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan3} iconSrc={plan3Icon}>{t("plan-anomary")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Attribute")} />
      <ChipGroup multiple isEnum value={filter.attributes} onChange={(value) => onFilterChangeJump("attributes", value)}>
        <IconChip variant="outline" value={SupportCardType.Assist} iconSrc={supportAttrAssistIcon}>{t("attr-assist")}</IconChip>
        <IconChip variant="outline" value={SupportCardType.Vocal} iconSrc={supportAttrVocalIcon}>{t("attr-vocal")}</IconChip>
        <IconChip variant="outline" value={SupportCardType.Dance} iconSrc={supportAttrDanceIcon}>{t("attr-dance")}</IconChip>
        <IconChip variant="outline" value={SupportCardType.Visual} iconSrc={supportAttrVisualIcon}>{t("attr-visual")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Reward Type")} />
      <ChipGroup multiple isEnum={false} value={filter.rewardTypes} onChange={(value) => onFilterChangeJump("rewardTypes", value as SupportCardFilter["rewardTypes"])}>
        <IconChip variant="outline" value="citem">{t("Contest Item")}</IconChip>
        <IconChip variant="outline" value="pitem">{t("Produce Item")}</IconChip>
        <IconChip variant="outline" value="card">{t("Card")}</IconChip>
        <IconChip variant="outline" value="none">{t("None")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Event Effect")} />
      <ChipGroup multiple isEnum value={filter.eventEffectTypes} onChange={(value) => onFilterChangeJump("eventEffectTypes", value)}>
        {thirdEventEffectTypes.map(effect => {
          return (
            <IconChip key={effect} variant="outline" value={effect}>{t(ProduceEffectType[effect])}</IconChip>
          )
        })}
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Produce Effect")} />
      <Switch
        checked={filter.produceEffectOperator === "AND"}
        size="sm"
        onLabel="AND"
        offLabel="OR"
        label={t("Inline operator")}
        onChange={(event) => onFilterChange("produceEffectOperator", event.currentTarget.checked ? "AND" : "OR")}
      />
      <Switch
        checked={filter.showAllEffects}
        size="sm"
        label={t("Show all effects")}
        className="py-2"
        onChange={(event) => onFilterChange("showAllEffects", event.currentTarget.checked)}
      />
      <MultiSelectEnum
        clearable
        checkIconPosition="left"
        data={produceTypesMultiSelectData}
        value={filter.produceEffectTypes}
        renderOption={effectMultiSelectRenderOption}
        maxDropdownHeight={280}
        onChange={(value) => onFilterChangeJump("produceEffectTypes", value)}
      />
      <Divider labelPosition="left" my="sm" label={t("Produce Effect Trigger")} />
      <MultiSelectEnum
        clearable
        checkIconPosition="left"
        data={producePhaseMultiSelectData}
        value={filter.producePhaseType}
        onChange={(value) => onFilterChangeJump("producePhaseType", value)}
      />
      <Divider labelPosition="left" my="sm" label={t("Event Characters")} />
      <MultiSelect
        clearable
        checkIconPosition="left"
        data={charactersMultiSelectData}
        value={filter.characters}
        renderOption={characterMultiSelectRenderOption}
        comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 150, timingFunction: "ease-in-out" } }}
        onChange={(value) => onFilterChangeJump("characters", value)}
      />
      <Divider labelPosition="left" my="sm" label={t("Misc")} />
      <Switch
        checked={filter.showEnhanced}
        size="sm"
        label={t("Show enhanced cards/items if available")}
        onChange={(event) => onFilterChange("showEnhanced", event.currentTarget.checked)}
      />
      <div className="py-1"></div>
      <NumberCompose width={42} max={60} min={1} step={5} value={filter.level} label={t("Card Level")}
        setValue={(value) => onFilterChange("level", value)}
      />
    </div>
  )
}
