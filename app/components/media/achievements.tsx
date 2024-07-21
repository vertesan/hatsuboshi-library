import { Divider, HoverCard } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { getAssetImgUrl } from "~/assets/media";
import { MissionType } from "~/types/proto/penum";
import { Achievement, AchievementProgress } from "~/types/proto/pmaster";
import dividerClasses from "~/theme/partial/Divider.module.css"

export function AchievementView({
  achievements,
}: {
  achievements: (Achievement & {
    progress: AchievementProgress[]
  })[]
}) {
  const { t } = useTranslation()
  achievements
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => {
      if (a.id < b.id) return -1
      if (a.id > b.id) return 1
      return 0
    })
  const masterAchievement = achievements.find(x => x.isMasterAchievement)
  const trueEndAchievement = achievements.find(x => x.isTrueEndAchievement)
  const towerAchievement = achievements.find(x => x.missionType === MissionType.AbsoluteTowerCharacterTotalClearRank)
  return (
    <div className="grid grid-cols-6 px-4 gap-y-2">
      <Divider className="col-span-6 py-2" size="xs" label={t("Master")} classNames={dividerClasses} />
      {masterAchievement
        ? <div className="col-span-3">
          <AchievementItem achievement={masterAchievement} />
        </div>
        : null
      }
      {trueEndAchievement
        ? <div className="col-span-3">
          <AchievementItem achievement={trueEndAchievement} />
        </div>
        : null
      }
      <Divider className="col-span-6 py-2" size="xs" label={t("Tower")} classNames={dividerClasses} />
      {towerAchievement
        ? <div className="col-span-6">
          <AchievementItem achievement={towerAchievement} />
        </div>
        : null
      }
      <Divider className="col-span-6 py-2" size="xs" label={t("Basic")} classNames={dividerClasses} />
      {achievements
        .filter(x =>
          x.missionType !== MissionType.AbsoluteTowerCharacterTotalClearRank &&
          !x.isMasterAchievement &&
          !x.isTrueEndAchievement
        ).map((achievement, idx) => {
          return (
            <div key={idx} className="col-span-2">
              <AchievementItem achievement={achievement} />
            </div>
          )
        })}
    </div>
  )
}

function AchievementItem({
  achievement
}: {
  achievement: Achievement & {
    progress: AchievementProgress[]
  }
}) {
  let variableText = achievement.progress
    .map(x => x.threshold)
    .join(",")
  if (achievement.progress.length > 1) {
    variableText = `{${variableText}}`
  }
  const description =
    achievement.description
      .replace("{threshold}", variableText)
  return (
    <HoverCard shadow="md" closeDelay={30} width={240} withArrow arrowSize={8} offset={2} position="bottom">
      <HoverCard.Target>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 aspect-square">
            <img className="object-contain" alt="achievement icon"
              src={getAssetImgUrl(achievement.progress[0].assetId)}
            />
          </div>
          <p>{achievement.name}</p>
        </div>
      </HoverCard.Target>
      <HoverCard.Dropdown className="break-all">
        {description}
      </HoverCard.Dropdown>
    </HoverCard>
  )
}
