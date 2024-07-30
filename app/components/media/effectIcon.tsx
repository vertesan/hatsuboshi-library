import { HoverCard } from "@mantine/core"
import React, { forwardRef, memo, useContext } from "react"
import { getAssetImgUrl } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"
import { XSupportCard } from "~/types"
import { ProduceEffectType } from "~/types/proto/penum"
import { UnArray } from "~/types/utils"
import { EffectDescription } from "~/components/media/effectDescription"

const _ProduceEffectIcon = forwardRef(function _ProduceEffectIcon({
  effectType,
  className,
  ...props
}: {
  effectType: ProduceEffectType,
  className?: string,
} & React.ComponentPropsWithoutRef<'div'>,
  ref: React.LegacyRef<HTMLDivElement>,
) {
  const { produceEffectIcons } = useContext(MasterContext)
  const iconRecord = produceEffectIcons[effectType]

  const bgUrl = getAssetImgUrl(iconRecord.backgroundAssetId)
  const iconUrl = getAssetImgUrl(iconRecord.iconAssetId)

  return (
    <div className={`aspect-square overflow-hidden rounded-md ${className}`} ref={ref} {...props} >
      <img src={bgUrl} alt="background" className="absolute object-fill" />
      <img src={iconUrl} alt="icon" className="absolute object-fill" />
    </div>
  )
})

export function ProduceEventEffectIcon({
  produceEvent,
  withHoverDescription,
  className,
  ...props
}: {
  produceEvent: UnArray<XSupportCard['produceEvents']>,
  withHoverDescription?: boolean,
  className?: string,
} & React.ComponentPropsWithoutRef<'div'>) {

  return withHoverDescription
    ? produceEvent.produceEffects.map((effect, idx) => (
      <HoverCard key={idx} shadow="md" closeDelay={50} width={220} withArrow arrowSize={8} offset={2} position="top">
        <HoverCard.Target>
          <ProduceEffectIcon key={effect.id} effectType={effect.produceEffectType} className={className} {...props} />
        </HoverCard.Target>
        <HoverCard.Dropdown onClick={(e) => { e.preventDefault() }}>
          <EffectDescription descriptions={produceEvent.descriptions} />
        </HoverCard.Dropdown>
      </HoverCard>
    ))
    : produceEvent.produceEffects.map(effect =>
      <ProduceEffectIcon key={effect.id} effectType={effect.produceEffectType} className={className} {...props} />
    )
}

export const ProduceEffectIcon = memo(_ProduceEffectIcon)
