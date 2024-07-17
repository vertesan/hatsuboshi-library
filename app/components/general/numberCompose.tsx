import { ActionIcon, NumberInput, NumberInputHandlers } from "@mantine/core";
import { useRef } from "react";
import Ripple from "./ripple";

export default function NumberCompose({
  step,
  min,
  max,
  value,
  width,
  setValue,
  label,
  readOnly,
  className,
}: {
  step: number,
  min: number,
  max: number,
  value: number,
  width: number,
  setValue: (v: number) => void,
  label?: string,
  readOnly?: boolean,
  className?: string,
}) {
  const handlersRef = useRef<NumberInputHandlers>(null);
  const actionIconDeRef = useRef(null);
  const actionIconInRef = useRef(null);
  return (
    <div className={`flex flex-row items-center gap-2 ${className}`} >
      <p className="whitespace-pre-wrap">{label}</p>
      <ActionIcon
        variant="light"
        onClick={() => handlersRef.current?.decrement()}
        ref={actionIconDeRef}
      >
        -{step}
        <Ripple targetRef={actionIconDeRef} />
      </ActionIcon>
      <NumberInput
        hideControls
        handlersRef={handlersRef}
        step={step}
        min={min}
        max={max}
        w={width}
        size="sm"
        readOnly={readOnly}
        value={value}
        allowNegative={true}
        allowDecimal={false}
        onChange={(val) => {
          setValue(+val)
        }}
      />
      <ActionIcon
        variant="light"
        onClick={() => handlersRef.current?.increment()}
        ref={actionIconInRef}
      >
        +{step}
        <Ripple targetRef={actionIconInRef} />
      </ActionIcon>
    </div>
  )
}
