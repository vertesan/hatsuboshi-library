import { Skeleton } from "@mantine/core"
import React, { useEffect, useRef, useState } from "react"

export function PulseImage({
  src,
  alt,
  className,
}: {
  src: string,
  alt: string,
  className?: string,
}, props: React.ComponentPropsWithoutRef<'img'>) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imgEl = imgRef.current
    if (imgEl) {
      const onLoad = (ev: Event) => {
        setIsLoading(false)
      }
      imgEl.addEventListener('load', onLoad)
      return () => imgEl.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <Skeleton className={`${className}`} visible={isLoading}>
      <img ref={imgRef} src={src} alt={alt} className={`${className}`} {...props} />
    </Skeleton>
  )
}
