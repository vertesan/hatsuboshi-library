import { useRef, useEffect } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null)
  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return
        e.preventDefault()
        el.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })
      }
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [])
  return elRef
}
