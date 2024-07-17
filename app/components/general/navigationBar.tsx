import { Progress } from "@mantine/core";
import { useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";

const middleAnchor = 90

export default function NavigationBar() {
  console.log("rendering navigation bar")
  const [progress, setProgress] = useState({ value: 0, visible: false })
  const state = useNavigation().state

  useEffect(() => {
    if (state === "idle" && progress.value === 100 && progress.visible === true) {
      new Promise((resolve) => setTimeout(resolve, 200)).then(() => setProgress({ value: 0, visible: false }))
    } else if (state !== "idle" && progress.value === 0) {
      setProgress({ value: middleAnchor, visible: true })
    } else if (state === "idle" && progress.value === middleAnchor) {
      setProgress({ value: 100, visible: true })
    }
  }, [state, progress])

  return (
    <Progress
      className={`fixed top-0 left-0 right-0 z-[9999] ${progress.visible ? "" : "invisible"}`}
      value={progress.value}
      transitionDuration={30000}
      size="xs"
    />
  )
}
