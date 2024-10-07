import { TypographyStylesProvider } from "@mantine/core"
import { MetaFunction } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { getLocalString } from "~/i18n"
import MemoryMDX from "~/routes/help.memories/memories.mdx"
import MemoryMDXzh_Hans from "~/routes/help.memories/memories_zh-Hans.mdx"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-help-memories")
  return [
    { title: title },
  ]
}

export default function HelpMemories() {
  const { i18n } = useTranslation()
  let mdx: JSX.Element
  switch (i18n.language) {
    case "zh-Hans":
      mdx = <MemoryMDXzh_Hans />
      break
    default:
      mdx = <MemoryMDX />
      break
  }

  return (
    <article className="p-4 max-w-[720px]">
      <TypographyStylesProvider>
        {mdx}
      </TypographyStylesProvider>
    </article>
  )
}
