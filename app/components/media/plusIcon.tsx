import React, { memo } from "react";
import { upgradedIcon } from "~/assets/media";

/** Remember to set position className (relative/absolute) */
function _PlusIcon({
  upgradeCount,
  className,
  ...props
}: {
  upgradeCount: number,
  className?: string,
} & React.ComponentProps<'div'>) {

  const icons = []
  for (let i = 0; i < upgradeCount; i++) {
    icons.push(<img key={i} src={upgradedIcon} alt="enhanced" className="object-contain" />)
  }

  return (
    <div className={`flex flex-col justify-center ${className}`} {...props}>
      {icons}
    </div>
  )
}

export const PlusIcon = memo(_PlusIcon)
