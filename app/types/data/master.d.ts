import {
  NoticeInfo,
  PvpRateGetResponse
} from "~/types/proto/papi"
import {
  Event,
} from "~/types/proto/pcommon"
import {
  ProduceEffectType,
  ProduceExamEffectType,
  ProducePlanType
} from "~/types/proto/penum"
import {
  Achievement,
  AchievementProgress,
  Character,
  CharacterDetail,
  CharacterTrueEndBonus,
  EventLabel,
  ExamInitialDeck,
  ExamSetting,
  Produce,
  ProduceEffectIcon,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  PvpRateConfig,
  PvpRateConfig_Stage,
  StoryEvent,
  ResultGradePattern,
  GuildReaction,
  ProduceDescriptionLabel,
  ProduceDescriptionProduceEffect,
  ProduceDescriptionExamEffect,
} from "~/types/proto/pmaster"
import { XProduceCard } from "./pcard"

export type XMaster = {
  version: string,
  characters: { [id: string]: Character },
  produceEffectIcons: { [type in ProduceEffectType]: ProduceEffectIcon },
  produces: { [id: string]: Produce },
  examInitialDecks: { [id: string]: ExamInitialDeck },
  produceDescriptionEffectTypes: { [type in ProduceEffectType]: ProduceDescriptionProduceEffect },
  produceDescriptionExamEffectType: { [type in ProduceExamEffectType]: ProduceDescriptionExamEffect },
  characterTrueEndBonus: { [id: string]: CharacterTrueEndBonus },
  characterTrueEndBonuses: { [id: string]: CharacterTrueEndBonus[] },
  noticeList: {
    infoList: NoticeInfo[]
    bugList: NoticeInfo[]
    prList: NoticeInfo[]
  },
  events: (
    Event &
    { storyEvent?: StoryEvent }
  )[],
  eventLabels: EventLabel[],
  pvp?: Pick<PvpRateGetResponse, 'startTime' | 'endTime' | 'pvpRateConfigId'> &
  {
    pvpRateConfig: Omit<PvpRateConfig, 'stages'> &
    { examSetting: ExamSetting } &
    { produceExamBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
    { commonProduceCards: Partial<{ [x in ProducePlanType]: XProduceCard[] }> } &
    {
      stages: (
        PvpRateConfig_Stage &
        { produceItems?: ProduceItem[] } &
        { examGimmicks?: ProduceExamGimmickEffectGroup[] }
      )[]
    }
  },
  characterDetails: { [id: string]: CharacterDetail[] },
  achievements: { [id: string]: Achievement & { progress: AchievementProgress[] } },
  resultGradePatterns: XResultGradePattern[],
  guildReactions: GuildReaction[],
  produceDescriptionLabels: { [id: string]: ProduceDescriptionLabel },
  produceGroups: ProduceGroup[],
}

export type XResultGradePattern = ResultGradePattern & {
  description: string,
}
