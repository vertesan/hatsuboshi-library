import { arrowDaUp, arrowViUp, arrowVoUp } from "~/assets/media";
import { AttributeIcon } from "~/components/media/attributeIcon";
import { ProduceParameterType } from "~/types/proto/penum";

export function AttributeGrowthRow({
  vo,
  da,
  vi,
  className,
}: {
  vo: number,
  da: number,
  vi: number,
  className?: string,
}) {
  return (
    <div className={`flex flex-row ${className}`} >
      <span className="px-2 sm:px-4 text-center">
        <img src={arrowVoUp} alt="voup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
        &nbsp;{`Vo + ${vo / 10}%`}
      </span>
      <span className="px-2 sm:px-4 text-center border-l-2 dark:border-zinc-600">
        <img src={arrowDaUp} alt="voup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
        &nbsp;{`Da + ${da / 10}%`}
      </span>
      <span className="px-2 sm:px-4 text-center border-l-2 dark:border-zinc-600">
        <img src={arrowViUp} alt="voup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
        &nbsp;{`Vi + ${vi / 10}%`}
      </span>
    </div>
  )
}
