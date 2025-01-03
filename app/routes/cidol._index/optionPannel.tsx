import { Button, Divider, Switch, Tooltip } from "@mantine/core";
import { Dispatch, SetStateAction, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getExamEffectImgUrl, getSDFaceImgUrl, plan1Icon, plan2Icon, plan3Icon, supportAttrDanceIcon, supportAttrVisualIcon, supportAttrVocalIcon } from "~/assets/media";
import { ChipGroup, IconChip } from "~/components/general/chips";
import NumberCompose from "~/components/general/numberCompose";
import Ripple from "~/components/general/ripple";
import { filterPlayables } from "~/data/characters";
import { defaultIdolCardFilter } from "~/data/idolCardFilters";
import { XMaster } from "~/types";
import { IdolCardFilter } from "~/types/data/cidol";
import { IdolCardRarity, ProduceDescriptionType, ProduceExamEffectType, ProducePlanType } from "~/types/proto/penum";

export function OptionPannel({
  filter,
  setFilterAndJump,
  setFilter,
  options: {
    examEffectTypes,
    characters,
  }
}: {
  filter: IdolCardFilter,
  setFilterAndJump: Dispatch<SetStateAction<IdolCardFilter>>,
  setFilter: Dispatch<SetStateAction<IdolCardFilter>>,
  options: {
    examEffectTypes: { value: ProduceExamEffectType, label: string }[],
    characters: XMaster['characters'],
  }
}) {
  const { t, i18n } = useTranslation()
  const ref = useRef(null)
  const onFilterChangeJump = <T extends keyof IdolCardFilter>(key: T, val: IdolCardFilter[T]) => {
    setFilterAndJump(prev => {
      return { ...prev, [key]: val }
    })
  }
  const onFilterChange = <T extends keyof IdolCardFilter>(key: T, val: IdolCardFilter[T]) => {
    setFilter(prev => {
      return { ...prev, [key]: val }
    })
  }

  return (
    <div>
      <Button size="xs" ref={ref}
        onClick={() => { setFilterAndJump(defaultIdolCardFilter) }}
      >
        {t("Reset")}
        <Ripple targetRef={ref} />
      </Button>
      <Divider labelPosition="left" my="sm" label={t("Rarity")} />
      <ChipGroup multiple isEnum value={filter.rarities} onChange={(value) => onFilterChangeJump("rarities", value)}>
        <IconChip variant="outline" value={IdolCardRarity.Ssr}>SSR</IconChip>
        <IconChip variant="outline" value={IdolCardRarity.Sr}>SR</IconChip>
        <IconChip variant="outline" value={IdolCardRarity.R}>R</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Produce Plan")} />
      <ChipGroup multiple isEnum value={filter.planTypes} onChange={(value) => onFilterChangeJump("planTypes", value)}>
        <IconChip variant="outline" value={ProducePlanType.Plan1} iconSrc={plan1Icon}>{t("plan-sense")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan2} iconSrc={plan2Icon}>{t("plan-logic")}</IconChip>
        <IconChip variant="outline" value={ProducePlanType.Plan3} iconSrc={plan3Icon}>{t("plan-anomary")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Attribute")} />
      <Switch
        checked={filter.countSecondaryAttr}
        size="sm"
        label={t("Count secondary attribute in")}
        className="pb-2"
        onChange={(event) => onFilterChangeJump("countSecondaryAttr", event.currentTarget.checked)}
      />
      <ChipGroup isEnum={false} multiple value={filter.attributes} onChange={(value) => onFilterChangeJump("attributes", value as ("dance" | "vocal" | "visual")[])}>
        <IconChip variant="outline" value="vocal" iconSrc={supportAttrVocalIcon}>{t("attr-vocal")}</IconChip>
        <IconChip variant="outline" value="dance" iconSrc={supportAttrDanceIcon}>{t("attr-dance")}</IconChip>
        <IconChip variant="outline" value="visual" iconSrc={supportAttrVisualIcon}>{t("attr-visual")}</IconChip>
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Main Effect")} />

      <ChipGroup isEnum multiple value={filter.effectTypes} onChange={(value) => onFilterChangeJump("effectTypes", value)}>
        {examEffectTypes.map((effectType, idx) => {
          return (
            <IconChip key={idx} variant="outline"
              value={effectType.value}
              iconSrc={getExamEffectImgUrl(effectType.value, ProduceDescriptionType.ProduceExamEffectType)}
              iconComponent={
                <div className="relative aspect-square w-4 mr-0.5 inline-block align-[-3px]">
                  <img className="invert dark:invert-0" src={getExamEffectImgUrl(effectType.value, ProduceDescriptionType.ProduceExamEffectType)} alt={effectType.label} />
                </div>
              }
            >
              {effectType.label}
            </IconChip>
          )
        })}
      </ChipGroup>
      <Divider labelPosition="left" my="sm" label={t("Characters")} />
      <ChipGroup multiple isEnum={false} value={filter.characters} onChange={(value) => onFilterChangeJump("characters", value)}>
        {
          Object.entries(filterPlayables(characters))
            .map(([charaId, chara]) =>
              <Tooltip key={charaId} label={chara.lastName + chara.firstName}>
                <IconChip
                  key={charaId}
                  noLabel
                  variant="outline"
                  value={charaId}
                  iconSrc={getSDFaceImgUrl(charaId)}
                  iconType="chara"
                />
              </Tooltip>
            )
        }
      </ChipGroup>

      <Divider labelPosition="left" my="sm" label={t("Misc")} />
      <NumberCompose className="pb-2" readOnly width={35} max={6} min={0} step={1} value={filter.limitLevel} label={t("Training Level ")}
        setValue={(value) => onFilterChange("limitLevel", value)}
      />
      <NumberCompose readOnly width={35} max={4} min={0} step={1} value={filter.potentialLevel} label={t("Potential Level")}
        setValue={(value) => onFilterChange("potentialLevel", value)}
      />
    </div>
  )
}
