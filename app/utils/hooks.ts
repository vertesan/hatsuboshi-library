import { useRef, useEffect } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null)

  useEffect(() => {
    const el = elRef.current
    let translatePosition = 0
    let mainWidth = 0

    if (el) {
      if (mainWidth === 0) {
        const matches = document.querySelectorAll<HTMLDivElement>("div.horizontal-scroll");
        if (matches.length > 0) {
          mainWidth = matches[0].offsetWidth
        }
      }

      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return
        // no need to prevent default when using css fashioned scrolling
        // e.preventDefault()

        if (el.scrollLeft !== 0) {
          translatePosition = -el.scrollLeft
          el.scrollLeft = 0
        } else {
          el.style.transitionDuration = "150ms"
          let diff = translatePosition -= e.deltaY
          if (diff > 0) {
            diff = 0
          } else if (-diff > el.offsetWidth - mainWidth) {
            diff = -el.offsetWidth + mainWidth
          }
          translatePosition = diff
        }

        el.style.position = "fixed"
        el.style.transform = `translate3d(${translatePosition}px, 0, 0)`

        // el.scrollBy({
        //   left: e.deltaY,
        //   behavior: "auto",
        // })
      }

      const onTouchStarted = (e: Event) => {
        if (translatePosition !== 0) {
          el.style.position = "relative"
          el.style.transform = "translate3d(0, 0, 0)"
          el.style.transitionDuration = "0s"
          el.scrollTo({
            left: -translatePosition,
            behavior: "instant",
          })
          translatePosition = 0
        }
      }

      el.addEventListener("wheel", onWheel, { passive: true })
      el.addEventListener("touchstart", onTouchStarted, { passive: true })

      return () => {
        el.removeEventListener("wheel", onWheel)
        el.removeEventListener("wheel", onTouchStarted)
      }
    }
  }, [])
  return elRef
}
