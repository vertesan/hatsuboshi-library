// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';
import * as ptransaction from './ptransaction.d.ts';
import * as pmaster from './pmaster.d.ts';

export type DearnessStoryUnlock = {
  characterId: string
  storyId: string
}
export type Mission = {
  missionId: string
  threshold: number
}
export type PvpRateSeasonTop = {
  statusType: penum.PvpRateSeasonStatusType
  rate: number
  rank: number
  maxDailyPlayCount: number
  remainingDailyPlayCount: number
  currentSeasonStartTime: string
  currentSeasonEndTime: string
}
export type Response = {
  updatedData: UserData
  deletedData: UserData
  clearMissions: pmaster.Mission[]
  producerLevelUnlocks: pcommon.ProducerLevelUnlock[]
  dearnessStoryUnlocks: DearnessStoryUnlock[]
  anotherCostumeIds: string[]
  anotherCostumeHeadIds: string[]
}
export type UserData = {
  user: ptransaction.User
  userActionPoint: ptransaction.UserActionPoint
  userAuthProviderList: ptransaction.UserAuthProvider[]
  userBalance: ptransaction.UserBalance
  userBanWarning: ptransaction.UserBanWarning
  userCharacterList: ptransaction.UserCharacter[]
  userCharacterCostumeList: ptransaction.UserCharacterCostume[]
  userCharacterRosterList: ptransaction.UserCharacterRoster[]
  userComebackList: ptransaction.UserComeback[]
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
  userPreference: ptransaction.UserPreference
  userProduceList: ptransaction.UserProduce[]
  userProduceAdvList: ptransaction.UserProduceAdv[]
  userProduceCardList: ptransaction.UserProduceCard[]
  userProduceCardRewardList: ptransaction.UserProduceCardReward[]
  userProduceCharacterList: ptransaction.UserProduceCharacter[]
  userProduceDrinkList: ptransaction.UserProduceDrink[]
  userProduceIdolCardList: ptransaction.UserProduceIdolCard[]
  userProduceItemList: ptransaction.UserProduceItem[]
  userProduceLiveList: ptransaction.UserProduceLive[]
  userProduceMemoryDeckList: ptransaction.UserProduceMemoryDeck[]
  userProduceProgress: ptransaction.UserProduceProgress
  userProduceProgressAudition: ptransaction.UserProduceProgressAudition
  userProduceProgressEffectList: ptransaction.UserProduceProgressEffect[]
  userProduceProgressEventList: ptransaction.UserProduceProgressEvent[]
  userProduceProgressMemoryList: ptransaction.UserProduceProgressMemory[]
  userProduceProgressPresentList: ptransaction.UserProduceProgressPresent[]
  userProduceProgressProduceCardList: ptransaction.UserProduceProgressProduceCard[]
  userProduceProgressScheduleList: ptransaction.UserProduceProgressSchedule[]
  userProduceProgressShopList: ptransaction.UserProduceProgressShop[]
  userProduceProgressSupportCardList: ptransaction.UserProduceProgressSupportCard[]
  userProduceRerollMemoryList: ptransaction.UserProduceRerollMemory[]
  userProduceStartAchievementList: ptransaction.UserProduceStartAchievement[]
  userProduceStoryList: ptransaction.UserProduceStory[]
  userProduceSupportCardDeckList: ptransaction.UserProduceSupportCardDeck[]
  userProfile: ptransaction.UserProfile
  userPvpRate: ptransaction.UserPvpRate
  userPvpRateUnit: ptransaction.UserPvpRateUnit
  userShopItemList: ptransaction.UserShopItem[]
  userStoryList: ptransaction.UserStory[]
  userSupportCardList: ptransaction.UserSupportCard[]
  userTimeList: ptransaction.UserTime[]
  userTowerList: ptransaction.UserTower[]
  userTutorialList: ptransaction.UserTutorial[]
  userWorkList: ptransaction.UserWork[]
  userWorkCharacterList: ptransaction.UserWorkCharacter[]
}
