import { useContext } from "react";
import { buffTypeBackground, getExamEffectImgUrl } from "~/assets/media";
import { MasterContext } from "~/contexts/masterContext";
import { ProduceDescriptionElement } from "~/types/proto/pcommon";
import { ProduceDescriptionType } from "~/types/proto/penum";

export function EffectDescription({
  descriptions,
  deepScan = false,
}: {
  descriptions: ProduceDescriptionElement[],
  deepScan?: boolean,
}) {
  const {
    produceDescriptions,
    produceDescriptionExamEffectType
  } = useContext(MasterContext)

  const targetIdSet = new Set()

  const scanDescription = (descriptions: ProduceDescriptionElement[]) => {
    const element = descriptions.reduce((acc, cur) => {
      let text = cur.text
      if (cur.changeColor) {
        text = `<span class='text-sky-500'>${text}</span>`
      }
      if (cur.type === ProduceDescriptionType.ProduceDescription) {
        text = `<span class='text-sky-600'>${text}</span>`
        targetIdSet.add(cur.targetId)
      }
      if (cur.type === ProduceDescriptionType.ProduceExamEffectType) {
        const bgImg = buffTypeBackground[cur.examEffectType]
        const iconImg = getExamEffectImgUrl(cur.examEffectType)
        const buffIcon =
          `<div class="relative inline-block align-text-top aspect-square overflow-visible h-5 w-5">` +
          `<img src=${bgImg} alt="" class="object-fill absolute inset-0" />` +
          `<div class="absolute inset-0 h-full w-full flex items-center justify-center">` +
          `<img src=${iconImg} alt="" class="object-fill h-[80%] w-[80%]" />` +
          `</div>` +
          `</div>`
        text = `<span class='bg-[#ebecfa] dark:bg-[#414145] rounded-md'>${buffIcon}${text}</span>`
        targetIdSet.add(cur.targetId)
      }
      return acc + text
    }, "")
    return element
  }
  const htmlString = scanDescription(descriptions)

  return (
    <p
      className="whitespace-pre-wrap text-xs sm:text-sm"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    >
    </p>
  )
}
