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
  Character,
  CharacterTrueEndBonus,
  ExamInitialDeck,
  ExamSetting,
  Produce,
  ProduceCard,
  ProduceDescription,
  ProduceDescriptionProduceEffectType,
  ProduceDescriptionProduceExamEffectType,
  ProduceEffectIcon,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  PvpRateConfig,
  StoryEvent,
  PvpRateConfig_Stage,
  CharacterDetail,
  Achievement,
  AchievementProgress,
  EventLabel,
} from "~/types/proto/pmaster"
import { UnArray } from "~/types/utils"

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
    { commonProduceCards: Partial<{ [x in ProducePlanType]: ProduceCard[] }> } &
    {
      stages: (
        PvpRateConfig_Stage &
        { produceItem?: ProduceItem } &
        { examGimmicks?: ProduceExamGimmickEffectGroup[] }
      )[]
    }
  },
  characterDetails: { [id: string]: CharacterDetail[] },
  achievements: { [id: string]: Achievement & { progress: AchievementProgress[] } }
}
