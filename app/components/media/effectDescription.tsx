import { useContext } from "react";
import { buffTypeBackground, getExamEffectImgUrl, growBuffTypeBackground, staminaIcon } from "~/assets/media";
import { MasterContext } from "~/contexts/masterContext";
import { ProduceDescriptionSegment } from "~/types/proto/pcommon";
import { ProduceCardGrowEffectType, ProduceDescriptionType } from "~/types/proto/penum";

export function EffectDescription({
  descriptions,
  deepScan = false,
  className,
}: {
  descriptions: ProduceDescriptionSegment[],
  deepScan?: boolean,
  className?: string,
}) {
  // const {
  //   produceDescriptions,
  //   produceDescriptionExamEffectType
  // } = useContext(MasterContext)

  const targetIdSet = new Set()

  const scanDescription = (descriptions: ProduceDescriptionSegment[]) => {
    const element = descriptions.reduce((acc, cur) => {
      let text = cur.text
      if (cur.changeColor || cur.produceDescriptionType === ProduceDescriptionType.ProduceCard) {
        text = `<span class='text-sky-500'>${text}</span>`
      }
      if (cur.produceDescriptionType === ProduceDescriptionType.ProduceDescription) {
        text = `<span class='text-sky-600'>${text}</span>`
        targetIdSet.add(cur.targetId)
      }
      // buff icon cases
      if (cur.produceDescriptionType === ProduceDescriptionType.ProduceExamEffectType) {
        const bgImg = buffTypeBackground[cur.examEffectType as keyof typeof buffTypeBackground]
        const iconImg = getExamEffectImgUrl(cur.examEffectType, ProduceDescriptionType.ProduceExamEffectType)
        text = getBuffText(bgImg, iconImg, text)
        targetIdSet.add(cur.targetId)
      } else if (cur.produceDescriptionType === ProduceDescriptionType.ProduceCardGrowEffectType &&
        cur.produceCardGrowEffectType === ProduceCardGrowEffectType.CostAdd
      ) {
        text = getCostText(text)
      } else if (
        cur.produceDescriptionType === ProduceDescriptionType.ProduceCardGrowEffectType
      ) {
        const bgImg = growBuffTypeBackground[cur.produceCardGrowEffectType as keyof typeof growBuffTypeBackground]
        const iconImg = getExamEffectImgUrl(cur.produceCardGrowEffectType, ProduceDescriptionType.ProduceCardGrowEffectType)
        text = getBuffText(bgImg, iconImg, text)
        targetIdSet.add(cur.targetId)
      }
      return acc + text
    }, "")
    return element
  }
  const htmlString = scanDescription(descriptions)

  return (
    <p
      className={`whitespace-pre-wrap ${className ? className : "text-xs sm:text-sm"}`}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    >
    </p>
  )
}

function getBuffText(
  bgImg: string,
  iconImg: string,
  text: string,
): string {
  const buffIcon =
    `<div class="relative inline-block align-text-top aspect-square overflow-visible h-5 w-5">` +
    `<img src=${bgImg} alt="" class="object-fill absolute inset-0" />` +
    `<div class="absolute inset-0 h-full w-full flex items-center justify-center">` +
    `<img src=${iconImg} alt="" class="object-fill h-[80%] w-[80%]" />` +
    `</div>` +
    `</div>`
  return `<span class='bg-[#ebecfa] dark:bg-[#414145] rounded-md'>${buffIcon}${text}</span>`
}

function getCostText(
  text: string,
) {
  const buffIcon =
    `<div class="relative inline-block align-text-top aspect-square overflow-visible h-5 w-5">` +
    `<img src=${staminaIcon} alt="" class="object-fill absolute inset-0" />` +
    `</div>`
  return `<span class='bg-[#ebecfa] dark:bg-[#414145] rounded-md'>${buffIcon}${text}</span>`
}
