import { TypographyStylesProvider } from "@mantine/core"
import { MetaFunction } from "@remix-run/react"
import { getLocalString } from "~/i18n"
import AboutMDX from "~/routes/about/about.mdx"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-about")
  return [
    { title: title },
  ]
}

export default function About() {
  return (
    <article className="p-4">
      <TypographyStylesProvider>
        <AboutMDX />
      </TypographyStylesProvider>
    </article>
  )
}
