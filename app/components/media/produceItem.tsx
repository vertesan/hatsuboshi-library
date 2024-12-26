import React from "react"
import { getAssetImgUrl } from "~/assets/media"
import { ProduceItemRarity } from "~/types/proto/penum"
import { ProduceItem } from "~/types/proto/pmaster"
import * as media from "~/assets/media"
import { HoverCard } from "@mantine/core"
import { EffectDescription } from "~/components/media/effectDescription"
import { PlusIcon } from "~/components/media/plusIcon"

/** Remember to set position (relative or absolute) attribute */
export function ProduceItemIcon({
  item,
  withHoverDescription,
  className,
  ...props
}: {
  item: ProduceItem,
  withHoverDescription?: boolean,
  className: string | undefined
} & Omit<React.ComponentProps<'div'>, 'className'>) {
  const bgIcon = (() => {
    switch (item.rarity) {
      case ProduceItemRarity.Ssr: return media.pItemBgSsr
      case ProduceItemRarity.Sr: return media.pItemBgSr
      case ProduceItemRarity.R: return media.pItemBgR
      default: return media.pItemBgN
    }
  })()
  const itemElement = (
    <div className={`aspect-square overflow-hidden border-2 rounded-lg border-zinc-500 ${className}`} {...props}>
      <img
        src={bgIcon}
        alt={bgIcon}
        className="absolute object-fill"
      />
      <img
        src={getAssetImgUrl(item.assetId)}
        alt={item.id}
        className="absolute inset-[10%] h-[80%] w-[80%]"
      />
      {item.isUpgraded
        ? <PlusIcon
          upgradeCount={1}
          className="absolute top-0 right-0 w-1/3"
        />
        : null
      }
    </div>
  )

  return withHoverDescription
    ? <HoverCard shadow="md" closeDelay={50} width={260} withArrow arrowSize={8} offset={2} position="top">
      <HoverCard.Target>{itemElement}</HoverCard.Target>
      <HoverCard.Dropdown onClick={(e) => { e.preventDefault() }}>
        <p className="font-medium pb-1 text-md dark:text-white">{item.name}</p>
        <EffectDescription descriptions={item.produceDescriptions} />
      </HoverCard.Dropdown>
    </HoverCard>
    : itemElement
}
