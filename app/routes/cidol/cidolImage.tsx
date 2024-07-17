import { getCidolFullImgUrl0, getCidolFullImgUrl1 } from "~/assets/media";
import { ExamEffectIcon } from "~/components/media/buffIcon";
import { LimitIcon } from "~/components/media/limitIcon";
import { PlanIcon } from "~/components/media/planIcon";
import { PotentialIcon } from "~/components/media/potentialIcon";
import { RarityIcon } from "~/components/media/rarityIcon";
import { XIdolCard } from "~/types";
import { IdolCardLevelLimitRank, IdolCardPotentialRank } from "~/types/proto/penum";

export function CidolImage({
  card,
  assetSkinId,
  limitLevel,
  potentialLevel,
  showIcons = true,
}: {
  card: XIdolCard,
  assetSkinId?: string,
  limitLevel?: IdolCardLevelLimitRank,
  potentialLevel?: IdolCardPotentialRank,
  showIcons?: boolean,
}) {
  let imgUrl = getCidolFullImgUrl1(card.assetId)
  if (assetSkinId) {
    imgUrl = getCidolFullImgUrl1(assetSkinId)
  }
  if (limitLevel !== undefined && limitLevel < IdolCardLevelLimitRank._4) {
    if (!assetSkinId) {
      imgUrl = getCidolFullImgUrl0(card.assetId)
    } else {
      imgUrl = getCidolFullImgUrl0(assetSkinId)
    }
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden max-h-full max-w-full">
      <img
        src={imgUrl}
        alt={card.id}
        className="object-fill z-0"
      />
      {showIcons
        ? <>
          <div className="absolute left-2 top-2 gap-2 flex flex-col h-[30%] justify-start content-center">
            <PlanIcon planType={card.planType} className="h-1/3" />
            <ExamEffectIcon effectType={card.examEffectType} className="h-1/3" />
          </div>

          <div className="h-[10%] absolute left-2 bottom-2 flex flex-row gap-2">
            <RarityIcon rarity={card.rarity} className="h-full flex-none" />
          </div>
          <div className="absolute bottom-2 right-2 h-[8%] flex flex-row gap-1">
            <LimitIcon limitLevel={limitLevel ?? 0} />
            <PotentialIcon potentialLevel={potentialLevel ?? 0} />
          </div>

          <p className="absolute right-2 top-2 text-md font-black text-transparent sm:text-white sm:text-outline-black sm:dark:text-white sm:dark:text-outline-black">
            {card.name}
          </p>
        </>
        : null
      }
    </div>
  )
}
