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
  ProduceDescription,
  ProduceDescriptionProduceEffectType,
  ProduceDescriptionProduceExamEffectType,
  ProduceEffectIcon,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  PvpRateConfig,
  PvpRateConfig_Stage,
  StoryEvent,
  ResultGradePattern,
} from "~/types/proto/pmaster"
import { XProduceCard } from "./pcard"

export type XMaster = {
  version: string,
  characters: { [id: string]: Character },
  produceDescriptions: { [id: string]: ProduceDescription },
  produceEffectIcons: { [type in ProduceEffectType]: ProduceEffectIcon },
  produces: { [id: string]: Produce },
  examInitialDecks: { [id: string]: ExamInitialDeck },
  produceDescriptionEffectTypes: { [type in ProduceEffectType]: ProduceDescriptionProduceEffectType },
  produceDescriptionExamEffectType: { [type in ProduceExamEffectType]: ProduceDescriptionProduceExamEffectType },
  characterTrueEndBonus: { [id: string]: CharacterTrueEndBonus },
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
}

export type XResultGradePattern = ResultGradePattern & {
  description: string,
}
