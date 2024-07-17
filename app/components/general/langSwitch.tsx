import { ActionIcon, HoverCard, SegmentedControl } from "@mantine/core"
import { IconLanguageHiragana } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { supportedLngs } from "~/i18n"
import segmentclasses from '~/theme/partial/SegmentedControl.langSwitch.module.css'

export default function LangSwitch() {
  const { i18n } = useTranslation()
  const entries = Object.entries(supportedLngs)

  return (
    <HoverCard
      withArrow
    >
      <HoverCard.Target>
        <ActionIcon
          variant="subtle"
          className="rounded-full h-9 w-9"
          aria-label="language switch"
        >
          <IconLanguageHiragana className="w-[70%] h-[70%]" stroke={1.5} />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown
        className="p-0"
      >
        <SegmentedControl
          classNames={segmentclasses}
          value={i18n.language}
          onChange={i18n.changeLanguage}
          data={entries.map(([key, val]) => ({
            label: val,
            value: key
          }))}
        />
      </HoverCard.Dropdown>
    </HoverCard>
  )
}
