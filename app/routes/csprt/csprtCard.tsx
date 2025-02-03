import { Card } from "@mantine/core";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AttributeIcon } from "~/components/media/attributeIcon";
import { SupportAbility } from "~/components/media/supportAbility";
import { XSupportCard } from "~/types";
import { CsprtImage } from "./csprtImage";
import { supportCardMaxLevel } from "~/data/supportCardFilters";

export function CsprtCard({
  card,
  matchedSkills,
  showEnhanced = false,
  disableLink = false,
  showCustom = false,
  level,
}: {
  card: XSupportCard,
  matchedSkills?: Set<number>,
  showEnhanced?: boolean,
  disableLink?: boolean,
  showCustom?: boolean,
  level?: number,
}) {
  const { t } = useTranslation()
  if (level && level > supportCardMaxLevel[card.rarity]) {
    level = supportCardMaxLevel[card.rarity]
  }
  const csprtImageComponent = <CsprtImage level={level} card={card} showCustom={showCustom} showIcons showUpgraded={showEnhanced} />
  return (
    <Card
      className="w-full max-w-[600px] xl:w-[580px] shadow-sm"
    >
      <Card.Section>
        {disableLink
          ? csprtImageComponent
          : <Link to={`/csprt/${card.id}`}>
            {csprtImageComponent}
          </Link>
        }
      </Card.Section>
      <div className="py-2 flex flex-row items-center">
        <AttributeIcon attribute={card.produceCardUpgradeLessonParameterType} className="h-4 w-4" />
        <p>&nbsp;{t("Lesson support chance:")}&nbsp;{card.produceCardUpgradePermil / 10}%</p>
      </div>
      <Card.Section className="grid grid-cols-2 gap-2">
        {card.produceSkills.map((skills, idx) => (
          <SupportAbility key={idx}
            supportCardSkillLevels={skills}
            level={{ cardLevel: level }}
            className={matchedSkills?.has(idx) ? "border-sky-600 dark:border-sky-600" : "dark:border-zinc-700"}
          />
        ))}
      </Card.Section>
    </Card>
  )
}
