import { memo } from "react";
import { idolStaminaIcon } from "~/assets/media";

function _IdolStaminaIcon({
  className,
}: {
  className?: string,
}) {
  return (
    <div className={`${className} aspect-square overflow-hidden`}>
      <img
        src={idolStaminaIcon}
        alt={idolStaminaIcon}
        className="object-fill max-w-full max-h-full"
      />
    </div>
  )
}

export const IdolStaminaIcon = memo(_IdolStaminaIcon)
