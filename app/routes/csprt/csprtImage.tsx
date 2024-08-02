import { RarityIcon } from "~/components/media/rarityIcon";
import { SupportCardTypeIcon } from "~/components/media/supportCardTypeIcon";
import { XSupportCard } from "~/types";
import { getCsprtFullImgUrl } from "~/assets/media";
import { ProduceItemIcon } from "~/components/media/produceItem";
import { ProduceCardIcon } from "~/components/media/produceCard";
import { ProduceEffectType } from "~/types/proto/penum";
import { ProduceEventEffectIcon } from "~/components/media/effectIcon";

export function CsprtImage({
  card,
  level,
  showIcons = false,
  showUpgraded = false,
}: {
  card: XSupportCard,
  level?: number,
  showIcons?: boolean,
  showUpgraded?: boolean,
}) {
  let produceItem, produceCard, produceEvents
  if (showIcons) {
    produceItem = showUpgraded
      ? card.produceItems.at(-1)
      : card.produceItems.at(0)

    produceCard = showUpgraded
      ? card.produceCards.at(1)
      : card.produceCards.at(0)

    produceEvents = card.produceEvents.filter(event => {
      return !event.produceEffects.some(effect => effect.produceEffectType === ProduceEffectType.ProduceReward)
    })
  }
  return (
    <div className="relative aspect-video overflow-hidden max-h-full max-w-full">
      <img
        src={getCsprtFullImgUrl(card.assetId)}
        alt={card.id}
        className="object-fill z-0"
      />
      {showIcons
        ? <>
          <SupportCardTypeIcon cardType={card.type} className="w-[7%] absolute left-2 top-2" />
          <div className="h-[14%] absolute left-2 bottom-2 flex flex-row gap-2">
            <RarityIcon rarity={card.rarity} className="h-full flex-none" />
            {level
              ? <p className="flex-none self-end font-black text-white text-outline-black dark:text-white dark:text-outline-black">
                <span className="text-xl md:text-3xl">Lv</span><span className="text-2xl md:text-4xl">{level}</span>
              </p>
              : null}
          </div>
          <p className="absolute right-2 top-2 text-lg font-black text-white text-outline-black dark:text-white dark:text-outline-black">
            {card.name}
          </p>
          <div className="absolute bottom-2 right-2 flex flex-row gap-1 items-end">
            {
              produceItem
                ? <ProduceItemIcon
                  item={produceItem}
                  withHoverDescription
                  onClick={(e) => { e.preventDefault() }}
                  className="relative h-[58px] w-[58px] sm:h-[74px] sm:w-[74px] cursor-default"
                />
                : null
            }
            {
              produceCard
                ? <ProduceCardIcon
                  card={produceCard}
                  withHoverDescription
                  onClick={(e) => { e.preventDefault() }}
                  className="relative h-[58px] w-[58px] sm:h-[74px] sm:w-[74px] cursor-default"
                />
                : null
            }
            {
              produceEvents?.map(event => {
                return (
                  <ProduceEventEffectIcon
                    key={event.id}
                    withHoverDescription
                    onClick={(e) => { e.preventDefault() }}
                    className="relative h-[52px] w-[52px] sm:w-[62px] sm:h-[62px] cursor-default"
                    produceEvent={event}
                  />
                )
              })
            }
          </div>
        </>
        : null
      }
    </div>
  )
}
