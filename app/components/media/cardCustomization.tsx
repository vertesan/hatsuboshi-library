import { Badge, Divider, List } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { pPoint } from "~/assets/media"
import { EffectDescription } from "~/components/media/effectDescription"
import { permilGrowEffects } from "~/data/permilGrowEffects"
import { UnArray } from "~/types"
import { XCustProduceCard } from "~/types/data/pcard"

export function CustomizationView({
  pCard,
  hideEva = false,
}: {
  pCard: XCustProduceCard,
  hideEva?: boolean,
}) {
  const { t } = useTranslation()
  return (
    <div className="pt-2">
      <Divider size="xs" className="pt-2" />
      <List size="sm" className="list-disc">
        <List.Item>{t("Customizable Limits")}: {pCard.maxCustomizeCount}</List.Item>
        {hideEva ? null : <List.Item>{t("Customization Eva")}: {pCard.customizeEvaluation}</List.Item>}
      </List>
      {
        pCard.customizeEffects.map((customizeEffects, idx) => {
          return (
            <CustomizationRow key={idx} customizeEffects={customizeEffects} />
          )
        })
      }
    </div>
  )
}

export function CustomizationRow({
  customizeEffects,
}: {
  customizeEffects: UnArray<XCustProduceCard['customizeEffects']>
}) {
  const { t } = useTranslation()
  return (
    <div>
      <p><Badge>{customizeEffects.at(0)?.growEffects.at(0)?.growEffectDescription?.name}</Badge></p>
      {
        customizeEffects.map((customizeEffect, idx) => {
          return (
            <div key={idx}>
              <p className="text-sm py-1">
                <Badge color="orange" variant="light">{t("Level ")}{customizeEffect.customizeCount}</Badge>
                <div className="relative inline-block align-text-top aspect-square overflow-visible h-5 w-5">
                  <img src={pPoint} alt="P-Point: " className="object-fill absolute inset-0" />
                </div>
                {customizeEffect.producePoint}
              </p>
              {
                customizeEffect.growEffects.map((growEffect, idx2) => {
                  return (
                    <div key={idx2} className="">
                      {growEffect.examEffect
                        ? <EffectDescription descriptions={growEffect.examEffect.produceDescriptions} />
                        : <p className="text-sm whitespace-pre-wrap">
                          {
                            growEffect.produceCardStatusEnchant
                              ? <EffectDescription descriptions={growEffect.produceCardStatusEnchant.produceDescriptions} />
                              : customizeEffect.description !== ""
                                ? customizeEffect.description.replaceAll("\\n", "")
                                : growEffect.growEffectDescription.produceCardCustomizeDescription.replaceAll("\\n", "")
                          }
                          {growEffect.value !== 0
                            ? permilGrowEffects.includes(growEffect.effectType)
                              ? growEffect.value / 10 + "%"
                              : growEffect.value
                            : null
                          }
                        </p>
                      }
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
