// Generated code. DO NOT EDIT!

import * as penum from './penum';
import type * as pcommon from './pcommon.d.ts';
import type * as ptransaction from './ptransaction.d.ts';
import type * as pmaster from './pmaster.d.ts';

export type CompetitionPreSeasonResult = {
  seasonStartTime: string
  seasonEndTime: string
  beforeGrade: penum.CompetitionGrade
  rank: string
  totalHighScore: string
  rewards: pcommon.Reward[]
}
export type CompetitionSeasonTop = {
  statusType: penum.CompetitionSeasonStatusType
  rank: number
  highScore: string
  remainingDailyPlayCount: number
  startTime: string
  endTime: string
  isPreSeason: boolean
}
export type DearnessStoryUnlock = {
  characterId: string
  storyId: string
}
export type Mission = {
  missionId: string
  threshold: number
}
export type ProduceHighScoreRushExternalProduceReward = {
  examEffectType: penum.ProduceExamEffectType
  produceCardIds: string[]
  produceItemIds: string[]
  produceDrinkIds: string[]
}
export type ProduceHighScoreRushOverrideExternalProduceReward = {
  examEffectType: penum.ProduceExamEffectType
  produceId: string
  produceItemIds: string[]
}
export type PvpRateSeasonResult = {
  seasonStartTime: string
  seasonEndTime: string
  beforeGrade: penum.PvpRateGrade
  afterGrade: penum.PvpRateGrade
  rank: number
  rate: number
  rewards: pcommon.Reward[]
  prevSeasonGrade: penum.PvpRateGrade
  isNotPlayPrevSeason: boolean
}
export type PvpRateSeasonTop = {
  statusType: penum.PvpRateSeasonStatusType
  rate: number
  rank: number
  maxDailyPlayCount: number
  remainingDailyPlayCount: number
  currentSeasonStartTime: string
  currentSeasonEndTime: string
  nextSeasonPrepareStartTime: string
}
export type RankReward = {
  upperRank: number
  lowerRank: number
  borderScore: string
  rewards: pcommon.Reward[]
}
export type Refine = {
  refineId: string
  refineName: string
  startTime: string
  endTime: string
  closeTime: string
}
export type Response = {
  updatedData: UserData
  deletedData: UserData
  clearMissions: pmaster.Mission[]
  producerLevelUnlocks: pcommon.ProducerLevelUnlock[]
  dearnessStoryUnlocks: DearnessStoryUnlock[]
  anotherCostumeIds: string[]
  anotherCostumeHeadIds: string[]
  storyEventRewards: StoryEventReward[]
  clearTrailMissions: TrailMission[]
}
export type StoryEventReward = {
  storyEventId: string
  pointRewards: pcommon.StoryEventPointReward[]
}
export type TrailMission = {
  name: string
  threshold: number
}
export type UserData = {
  user: ptransaction.User
  userActionPoint: ptransaction.UserActionPoint
  userAuthProviderList: ptransaction.UserAuthProvider[]
  userBadgeList: ptransaction.UserBadge[]
  userBalance: ptransaction.UserBalance
  userBanWarning: ptransaction.UserBanWarning
  userCharacterList: ptransaction.UserCharacter[]
  userCharacterCostumeList: ptransaction.UserCharacterCostume[]
  userCharacterRosterList: ptransaction.UserCharacterRoster[]
  userComebackList: ptransaction.UserComeback[]
  userCompetition: ptransaction.UserCompetition
  userCompetitionDeckList: ptransaction.UserCompetitionDeck[]
  userCompetitionSeasonDeckList: ptransaction.UserCompetitionSeasonDeck[]
  userCostumeList: ptransaction.UserCostume[]
  userCostumeHeadList: ptransaction.UserCostumeHead[]
  userCountList: ptransaction.UserCount[]
  userDearnessStoryList: ptransaction.UserDearnessStory[]
  userGashaButtonList: ptransaction.UserGashaButton[]
  userGuild: ptransaction.UserGuild
  userHomeCharacterList: ptransaction.UserHomeCharacter[]
  userIdolCardList: ptransaction.UserIdolCard[]
  userIdolCardSkinList: ptransaction.UserIdolCardSkin[]
  userInvitation: ptransaction.UserInvitation
  userItemList: ptransaction.UserItem[]
  userMeishiList: ptransaction.UserMeishi[]
  userMeishiBaseAssetList: ptransaction.UserMeishiBaseAsset[]
  userMeishiIllustrationAssetList: ptransaction.UserMeishiIllustrationAsset[]
  userMemoryList: ptransaction.UserMemory[]
  userMemoryInherit: ptransaction.UserMemoryInherit
  userMemoryRemake: ptransaction.UserMemoryRemake
  userMemoryRemakeResultList: ptransaction.UserMemoryRemakeResult[]
  userMissionList: ptransaction.UserMission[]
  userMissionDailyReleaseGroupList: ptransaction.UserMissionDailyReleaseGroup[]
  userMissionGroupList: ptransaction.UserMissionGroup[]
  userMissionPassList: ptransaction.UserMissionPass[]
  userMissionPassPointList: ptransaction.UserMissionPassPoint[]
  userMissionPointList: ptransaction.UserMissionPoint[]
  userMoney: ptransaction.UserMoney
  userMovieList: ptransaction.UserMovie[]
  userMusicList: ptransaction.UserMusic[]
  userPhotoList: ptransaction.UserPhoto[]
  userPhotoBackgroundList: ptransaction.UserPhotoBackground[]
  userPhotoPoseList: ptransaction.UserPhotoPose[]
  userPlayGames: ptransaction.UserPlayGames
  userPreference: ptransaction.UserPreference
  userProduceList: ptransaction.UserProduce[]
  userProduceAdvList: ptransaction.UserProduceAdv[]
  userProduceCardList: ptransaction.UserProduceCard[]
  userProduceCardConversionList: ptransaction.UserProduceCardConversion[]
  userProduceCardRewardList: ptransaction.UserProduceCardReward[]
  userProduceCardSkinList: ptransaction.UserProduceCardSkin[]
  userProduceCardSkinPreferenceList: ptransaction.UserProduceCardSkinPreference[]
  userProduceCharacterList: ptransaction.UserProduceCharacter[]
  userProduceDrinkList: ptransaction.UserProduceDrink[]
  userProduceGroupCharacterList: ptransaction.UserProduceGroupCharacter[]
  userProduceGrowthPanelList: ptransaction.UserProduceGrowthPanel[]
  userProduceIdolCardList: ptransaction.UserProduceIdolCard[]
  userProduceItemList: ptransaction.UserProduceItem[]
  userProduceLiveList: ptransaction.UserProduceLive[]
  userProduceMemoryDeckList: ptransaction.UserProduceMemoryDeck[]
  userProduceProgress: ptransaction.UserProduceProgress
  userProduceProgressAudition: ptransaction.UserProduceProgressAudition
  userProduceProgressBusinessList: ptransaction.UserProduceProgressBusiness[]
  userProduceProgressEffectList: ptransaction.UserProduceProgressEffect[]
  userProduceProgressEventList: ptransaction.UserProduceProgressEvent[]
  userProduceProgressIntervalList: ptransaction.UserProduceProgressInterval[]
  userProduceProgressMemoryList: ptransaction.UserProduceProgressMemory[]
  userProduceProgressPresentList: ptransaction.UserProduceProgressPresent[]
  userProduceProgressProduceCardList: ptransaction.UserProduceProgressProduceCard[]
  userProduceProgressProduceCustomizeItemList: ptransaction.UserProduceProgressProduceCustomizeItem[]
  userProduceProgressScheduleList: ptransaction.UserProduceProgressSchedule[]
  userProduceProgressShopList: ptransaction.UserProduceProgressShop[]
  userProduceProgressSupportCardList: ptransaction.UserProduceProgressSupportCard[]
  userProduceRerollMemoryList: ptransaction.UserProduceRerollMemory[]
  userProduceStartAchievementList: ptransaction.UserProduceStartAchievement[]
  userProduceStoryList: ptransaction.UserProduceStory[]
  userProduceSupportCardDeckList: ptransaction.UserProduceSupportCardDeck[]
  userProfile: ptransaction.UserProfile
  userPvpRate: ptransaction.UserPvpRate
  userPvpRateDeckList: ptransaction.UserPvpRateDeck[]
  userPvpRateUnit: ptransaction.UserPvpRateUnit
  userRefineAdvList: ptransaction.UserRefineAdv[]
  userRefineMemoryDeckList: ptransaction.UserRefineMemoryDeck[]
  userRefineProgress: ptransaction.UserRefineProgress
  userRefineProgressEffectList: ptransaction.UserRefineProgressEffect[]
  userRefineProgressExamMissionList: ptransaction.UserRefineProgressExamMission[]
  userRefineProgressPresentList: ptransaction.UserRefineProgressPresent[]
  userRefineProgressProduceCardList: ptransaction.UserRefineProgressProduceCard[]
  userRefineProgressSectionStepList: ptransaction.UserRefineProgressSectionStep[]
  userRefineProgressSetupList: ptransaction.UserRefineProgressSetup[]
  userRefineProgressSubProduceCardList: ptransaction.UserRefineProgressSubProduceCard[]
  userShopItemList: ptransaction.UserShopItem[]
  userStoryList: ptransaction.UserStory[]
  userSupportCardList: ptransaction.UserSupportCard[]
  userTimeList: ptransaction.UserTime[]
  userTowerList: ptransaction.UserTower[]
  userTutorialList: ptransaction.UserTutorial[]
  userWebStore: ptransaction.UserWebStore
  userWorkList: ptransaction.UserWork[]
  userWorkCharacterList: ptransaction.UserWorkCharacter[]
}
