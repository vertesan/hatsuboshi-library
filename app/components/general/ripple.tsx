import { memo, useEffect, useRef } from "react"

function getDim(el: HTMLElement | null, dim: "w" | "h") {
  let dimLen = 0
  if (el) {
    if (dim === "w") {
      dimLen = el.offsetWidth;
    } else {
      dimLen = el.offsetHeight;
    }
    const style = getComputedStyle(el);
    dimLen = dimLen - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth));
  }
  return dimLen
}

function getOuterDim(el: HTMLElement | null, dim: "w" | "h") {
  let dimLen = 0
  if (el) {
    if (dim === "w") {
      dimLen = el.getBoundingClientRect().width || el.offsetWidth;
    } else {
      dimLen = el.getBoundingClientRect().height || el.offsetHeight;
    }
  }
  return dimLen
}

function getOffset(el: HTMLElement | null) {
  if (el) {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    }
  }
  return {
    top: 0,
    left: 0,
  }
}

const Ripple = memo(function Ripple({
  targetRef,
}: {
  targetRef: React.MutableRefObject<HTMLElement | null>,
}) {
  const ref = useRef<HTMLElement>(null)

  const getTarget = () => {
    return ref.current && ref.current.parentElement;
  }

  const bindEvents = () => {
    if (targetRef.current) {
      targetRef.current.addEventListener('pointerdown', onPointerDown);
    }
  }

  const unbindEvents = () => {
    if (targetRef.current) {
      targetRef.current.removeEventListener('pointerdown', onPointerDown)
    }
  }

  const setDimensions = () => {
    if (ref.current && !getDim(ref.current, "h") && !getDim(ref.current, "w")) {
      const d = Math.max(getOuterDim(targetRef.current, "h"), getOuterDim(targetRef.current, "w"));
      ref.current.style.height = d + 'px';
      ref.current.style.width = d + 'px';
    }
  }

  const activateRipple = (offsetX: number, offsetY: number) => {
    if (!ref.current) {
      return
    }
    ref.current.classList.remove("animate-ripple")
    setDimensions()
    ref.current.style.top = offsetY + 'px';
    ref.current.style.left = offsetX + 'px';
    ref.current.classList.add("animate-ripple")
  }

  const onPointerDown = (e: MouseEvent) => {
    const offset = getOffset(targetRef.current)
    const offsetX = e.pageX - offset.left + document.body.scrollLeft - getDim(ref.current, "w") / 2;
    const offsetY = e.pageY - offset.top + document.body.scrollTop - getDim(ref.current, "h") / 2;
    activateRipple(offsetX, offsetY)
  }

  const onAnimationEnd: React.AnimationEventHandler<HTMLSpanElement> = (event) => {
    event.currentTarget?.classList.remove("animate-ripple")
  }

  useEffect(() => {
    if (ref.current) {
      setDimensions()
      bindEvents()
    }
    return () => {
      if (ref.current) {
        // targetRef.current = null
        unbindEvents()
      }
    }
  }, [])

  return (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className="absolute block rounded-full bg-[rgba(255,255,255,0.5)] scale-[0.001]"
      onAnimationEnd={onAnimationEnd}
    ></span>
  )
})

export default Ripple
