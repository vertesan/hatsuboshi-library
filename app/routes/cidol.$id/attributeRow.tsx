import { AttributeIcon } from "~/components/media/attributeIcon";
import { ProduceParameterType } from "~/types/proto/penum";

export function AttributeRow({
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
        <AttributeIcon attribute={ProduceParameterType.Vocal}
          className="inline-block align-text-bottom h-4 w-4 mr-1"
        />
        {`Vo + ${vo}`}
      </span>
      <span className="px-2 sm:px-4 text-center border-l-2 dark:border-zinc-600">
        <AttributeIcon attribute={ProduceParameterType.Dance}
          className="inline-block align-text-bottom h-4 w-4 mr-1"
        />
        {`Da + ${da}`}
      </span>
      <span className="px-2 sm:px-4 text-center border-l-2 dark:border-zinc-600">
        <AttributeIcon attribute={ProduceParameterType.Visual}
          className="inline-block align-text-bottom h-4 w-4 mr-1"
        />
        {`Vi + ${vi}`}
      </span>
    </div>
  )
}
