import { useDraggable } from "@dnd-kit/core";
import { XProduceCard } from "~/types";
import { ProduceCardIcon } from "./produceCard";

export function DraggableProduceCard({
  card,
  draggableId,
  character = "kllj",
  withHoverDescription,
  closeDelay = 50,
  className,
  ...props
}: {
  card: XProduceCard,
  draggableId?: string,
  character?: string,
  withHoverDescription?: boolean,
  closeDelay?: number,
  className?: string,
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>) {
  const { attributes, isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: draggableId ?? card.id,
  })
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 999,
  } : undefined
  return (
    <div className={isDragging && draggableId ? "absolute" : ""} ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ProduceCardIcon
        card={card}
        character={character}
        withHoverDescription={withHoverDescription}
        closeDelay={closeDelay}
        className={className}
        {...props}
      />
    </div>
  )
}
