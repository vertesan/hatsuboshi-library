import { TypographyStylesProvider } from "@mantine/core"
import { MetaFunction } from "@remix-run/react"
import { getLocalString } from "~/i18n"
import MemoryMDX from "~/routes/help.memories/memories.mdx"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-help-memories")
  return [
    { title: title },
  ]
}

export default function About() {
  return (
    <article className="p-4 max-w-[720px]">
      <TypographyStylesProvider>
        <MemoryMDX />
      </TypographyStylesProvider>
    </article>
  )
}
