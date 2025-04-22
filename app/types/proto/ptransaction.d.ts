// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';

export type User = {
  serverUserId: string
  publicUserId: string
  tutorialClearedTime: string
  receivedTutorialRewardIdolCard: boolean
  dmmGamesId: string
}
export type UserActionPoint = {
  quantity: number
  quantityUpdateTime: string
}
export type UserAuthProvider = {
  authProviderType: penum.AuthProviderType
}
export type UserBalance = {
  freeBalance: number
  paidBalance: number
}
export type UserBanWarning = {
  isConfirmationRequired: boolean
}
export type UserCharacter = {
  characterId: string
  fanCount: string
  trueEndProduceTypes: penum.ProduceType[]
}
export type UserCharacterCostume = {
  characterId: string
  setType: penum.CostumeSetType
  costumeHeadId: string
  costumeId: string
}
export type UserCharacterRoster = {
  characterId: string
  viewedPlayable: boolean
}
export type UserComeback = {
  comebackId: string
  endTime: string
}
export type UserCostume = {
  costumeId: string
  checked: boolean
}
export type UserCostumeHead = {
  costumeHeadId: string
  checked: boolean
}
export type UserCount = {
  type: penum.CountType
  totalCount: string
  dailyCount: string
  updatedTime: string
}
export type UserDearnessStory = {
  characterId: string
  dearnessLevel: number
  satisfyDearnessProduceConditionSet: boolean
  read: boolean
}
export type UserGashaButton = {
  gashaId: string
  gashaButtonId: string
  lastDrawnTime: string
  todayDrawCount: number
  totalDrawCount: number
  discountTodayDrawCount: number
  discountTotalDrawCount: number
  redrawCount: number
}
export type UserGuild = {
  joinType: penum.GuildJoinType
}
export type UserHomeCharacter = {
  homeType: penum.HomeType
  characterId: string
  isRandom: boolean
}
export type UserIdolCard = {
  idolCardId: string
  levelLimitRank: penum.IdolCardLevelLimitRank
  potentialRank: penum.IdolCardPotentialRank
  idolCardSkinId: string
  createdTime: string
}
export type UserIdolCardSkin = {
  idolCardSkinId: string
}
export type UserInvitation = {
  totalInvitationPoint: string
  receivedInvitationPointRewardThreshold: string
  isCodeEntered: boolean
  codeEntryEndTime: string
}
export type UserItem = {
  itemId: string
  expiryTime: string
  quantity: string
}
export type UserMeishi = {
  number: number
  imagePath: string
  useUserMemoryIds: string[]
  useUserPhotoIds: string[]
  useUserMovieIds: string[]
  timeline: string
  baseLayoutNumber: number
  baseUserMemoryId: string
  baseUserPhotoId: string
  baseUserMovieId: string
}
export type UserMeishiBaseAsset = {
  meishiBaseAssetId: string
}
export type UserMeishiIllustrationAsset = {
  meishiIllustrationAssetId: string
}
export type UserMemory = {
  userMemoryId: string
  memoryTagId: string
  isProtected: boolean
  assetId: string
  imagePath: string
  grade: penum.ResultGrade
  power: number
  produceId: string
  characterId: string
  idolCardId: string
  idolCardSkinId: string
  planType: penum.ProducePlanType
  idolCardLevelLimitRank: penum.IdolCardLevelLimitRank
  idolCardPotentialRank: penum.IdolCardPotentialRank
  shotTime: string
  noProduceHistory: boolean
  inheritCount: number
  produceCard: pcommon.ProduceCard
  produceCardPhaseType: penum.ProduceMemoryProduceCardPhaseType
  abilities: UserMemory_MemoryAbility[]
  vocal: number
  dance: number
  visual: number
  stamina: number
  examBattleProduceCards: pcommon.ProduceCard[]
  examBattleProduceItemIds: string[]
  endingLiveType: penum.ProduceLiveType
  produceLiveType: penum.ProduceLiveType
  liveCostumeId: string
  liveCostumeHeadId: string
  reshootingCount: number
  musicId: string
  isHighScoreRush: boolean
}
type UserMemory_MemoryAbility = {
  id: string
  level: number
}
export type UserMemoryInherit = {
  userMemoryId: string
  examBattleProduceCards: pcommon.ProduceCard[]
}
export type UserMission = {
  missionId: string
  progress: string
  receivedThresholds: string[]
  isUnlock: boolean
  firstThresholdClearTime: string
}
export type UserMissionDailyReleaseGroup = {
  missionDailyReleaseGroupId: string
  startTime: string
}
export type UserMissionGroup = {
  missionGroupId: string
  received: boolean
}
export type UserMissionPass = {
  missionPassId: string
  receivedNormalThresholds: number[]
  receivedPremiumThresholds: number[]
  hasPremiumPass: boolean
  providedReceivedWeeklyMissionPassPoint: boolean
}
export type UserMissionPassPoint = {
  missionPassId: string
  missionPassPointId: string
  point: number
}
export type UserMissionPoint = {
  missionPointId: string
  point: number
  receivedPoints: number[]
}
export type UserMoney = {
  unreceivedTotalQuantity: number
  unreceivedTotalElapsedTimeSeconds: number
  lastReceivedTime: string
}
export type UserMovie = {
  userMovieId: string
  moviePath: string
  retakeCount: number
  meishiNumber: number
}
export type UserMusic = {
  musicId: string
}
export type UserPhoto = {
  userPhotoId: string
  imagePath: string
  idolCardId: string
  name: string
  shotTime: string
  isProtected: boolean
  characterIds: string[]
  photoBackgroundId: string
  reshootingCount: string
}
export type UserPhotoBackground = {
  photoBackgroundId: string
}
export type UserPhotoPose = {
  photoPoseId: string
}
export type UserPreference = {
  photoButtonExecuteType: penum.PhotoButtonExecuteType
}
export type UserProduce = {
  produceId: string
  playCount: number
  clearCount: number
}
export type UserProduceAdv = {
  assetId: string
}
export type UserProduceCard = {
  produceCardId: string
  produceCardUpgradeCount: number
}
export type UserProduceCardReward = {
  produceCardId: string
}
export type UserProduceCharacter = {
  characterId: string
  produceId: string
  unlockChallengeSlotNumber: number
}
export type UserProduceDrink = {
  produceDrinkId: string
}
export type UserProduceGroupCharacter = {
  characterId: string
  produceGroupId: string
  viewUnlockAnimationAuditionTypes: penum.ProduceStepAuditionType[]
  endingLiveType: penum.ProduceLiveType
  disableForceLiveCommon: boolean
}
export type UserProduceIdolCard = {
  produceId: string
  idolCardId: string
  challengeProduceItemIds: string[]
  liveType: penum.ProduceLiveType
}
export type UserProduceItem = {
  produceItemId: string
}
export type UserProduceLive = {
  musicId: string
  liveType: penum.ProduceLiveType
  viewed: boolean
}
export type UserProduceMemoryDeck = {
  produceType: penum.ProduceType
  number: number
  userMemoryIds: string[]
  name: string
}
export type UserProduceProgress = {
  produceGroupId: string
  produceId: string
  producerLevel: number
  characterId: string
  idolCardId: string
  idolCardSkinId: string
  idolCardLevelLimitRank: penum.IdolCardLevelLimitRank
  idolCardPotentialRank: penum.IdolCardPotentialRank
  satisfiedConditionSetIds: string[]
  produceBoostItemIds: string[]
  trueEndProduceTypes: penum.ProduceType[]
  hasForceLiveCommonIdolCard: boolean
  disableForceLiveCommon: boolean
  produceHighScoreId: string
  produceCampaigns: pcommon.ProduceCampaign[]
  status: penum.ProduceProgressStatus
  produceScore: number
  isFailedProduce: boolean
  stepNumber: number
  stepType: penum.ProduceStepType
  stepId: string
  effectStepType: penum.ProduceStepType
  effectStepId: string
  stepSelectNumber: number
  originStepType: penum.ProduceStepType
  inProgressStep: boolean
  continueCount: number
  produceNavigationNormalNumber: number
  produceNavigationAuditionNumber: number
  produceNavigationLoseNumber: number
  resultMemory: pcommon.Memory
  lastProduceEventCharacterGrowthNumber: number
  isChangeCostumeProduce: boolean
  isChangeCostumeLive: boolean
  isChangeCostumeTraining: boolean
  rentalPublicUserId: string
  vocal: number
  dance: number
  visual: number
  vocalGrowthRatePermil: number
  danceGrowthRatePermil: number
  visualGrowthRatePermil: number
  vocalAdditionalLimit: number
  danceAdditionalLimit: number
  visualAdditionalLimit: number
  stamina: number
  maxStamina: number
  staminaRecoverValueRatePermil: number
  staminaReduceValueRatePermil: number
  staminaRecoverDisableTurn: number
  producePoint: number
  producePointAdditionValueRatePermil: number
  producePointReduceValueRatePermil: number
  producePointGetDisableTurn: number
  voteCount: number
  highScoreGold: number
  characterProduceSkills: UserProduceProgress_ProduceSkill[]
  dearnessStoryDearnessLevel: number
  idolCardProduceSkills: UserProduceProgress_ProduceSkill[]
  produceCardRemainSelectRerollCount: number
  hiddenProduceCardReroll: boolean
  excludeProduceCardIds: string[]
  produceCardRemainExcludeCount: number
  hiddenProduceCardExclude: boolean
  produceItems: UserProduceProgress_ProduceItem[]
  produceItemGetDisableTurn: number
  produceDrinkIds: string[]
  produceDrinkGetDisableTurn: number
  auditionEffectParameterBonusPermil: number
  auditionNpcEnhancePermil: number
  eventSchoolStaminaPermil: number
  eventActivityProducePointPermil: number
  eventBusinessVoteCountPermil: number
  examSeedValue: number
  produceExamGimmickEffectGroupId: string
  examStatusEnchants: UserProduceProgress_ExamStatusEnchant[]
  lessonVocalSpChangeRatePermil: number
  lessonDanceSpChangeRatePermil: number
  lessonVisualSpChangeRatePermil: number
  examResultType: penum.ProduceExamResultType
  lessonGrowthResult: pcommon.ProduceLessonGrowthResult
  examEndResult: pcommon.ProduceExamEndResult
  lessonLimitUpScore: number
  examExtraTurn: number
  selfLessonTypeStaminaPermils: UserProduceProgress_SelfLessonTypeStaminaPermil[]
  liveType: penum.ProduceLiveType
  lessonPresentAdditionalProduceCardRewardCount: number
  customizeAdditionalProduceCardCount: number
  customizeDiscountPermils: number[]
  shopProduceCardUpgradePrice: number
  shopProduceCardDeletePrice: number
  shopDiscountPermils: number[]
  shopProduceCardUpgradeDiscountPermils: number[]
  shopProduceCardDeleteDiscountPermils: number[]
  shopProduceCardDiscounts: UserProduceProgress_ShopProduceCardDiscount[]
  shopProduceDrinkDiscountPermils: number[]
  shopRemainRerollCount: number
  hiddenShopReroll: boolean
  satisfyProduceExamTriggerIds: string[]
}
type UserProduceProgress_ExamStatusEnchant = {
  originType: penum.ProduceTriggerOriginType
  originOwnerId: string
  originId: string
  originLevel: number
  id: string
}
type UserProduceProgress_ProduceItem = {
  produceItemId: string
  fireCount: number
}
type UserProduceProgress_ProduceSkill = {
  id: string
  level: number
  triggerCount: number
}
type UserProduceProgress_SelfLessonTypeStaminaPermil = {
  lessonType: penum.ProduceStepLessonType
  permil: number
}
type UserProduceProgress_ShopProduceCardDiscount = {
  produceCardSearchId: string
  permils: number[]
}
export type UserProduceProgressAudition = {
  status: penum.ProduceProgressAuditionStatusType
  vocalPermil: number
  dancePermil: number
  visualPermil: number
  voteBonusPermil: number
  stepSelectNumber: number
  rank: number
  score: number
  stamina: number
  produceDrinkIds: string[]
  produceItemIds: string[]
  produceItemFireCounts: number[]
  examSkipCount: number
}
export type UserProduceProgressBusiness = {
  businessType: penum.ProduceStepBusinessType
  number: number
  name: string
  destinationNumber: number
  producePoint: number
  stamina: number
  excellentPermil: number
  produceStepEventDetailId: string
  excellentProduceStepEventDetailId: string
}
export type UserProduceProgressEffect = {
  number: number
  numbers: number[]
  type: penum.ProduceEffectType
  value: number
  rewards: UserProduceProgressEffect_Reward[]
  pickRangeType: penum.ProducePickRangeType
  pickCountMin: number
  pickCountMax: number
  pickIndexes: number[]
  activatedProduceItemIds: string[]
  isNext: boolean
  produceEffectId: string
  originType: penum.ProduceTriggerOriginType
  originId: string
  originLevel: number
  originOwnerId: string
  originProduceTriggerIds: string[]
}
type UserProduceProgressEffect_Reward = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  resourceLevel: number
  quantity: number
}
export type UserProduceProgressEvent = {
  produceStepEventDetailId: string
  number: number
  suggestionIndex: string
  success: boolean
}
export type UserProduceProgressMemory = {
  number: number
  userMemoryId: string
  isRental: boolean
  abilities: UserProduceProgressMemory_MemoryAbility[]
  memory: pcommon.Memory
}
type UserProduceProgressMemory_MemoryAbility = {
  id: string
  level: number
  triggerCount: number
}
export type UserProduceProgressPresent = {
  positionNumber: number
  received: boolean
  displayType: penum.ProduceDisplayType
  rewardCount: number
  pickCount: number
  rewards: UserProduceProgressPresent_Reward[]
  rewardIndexes: number[]
  isVoteBonus: boolean
}
type UserProduceProgressPresent_Reward = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  resourceLevel: number
  quantity: number
}
export type UserProduceProgressProduceCard = {
  number: number
  produceCardId: string
  upgradeCount: number
  deleted: boolean
  originType: penum.ProduceResourceOriginType
  customizes: pcommon.ProduceCardCustomize[]
  customizing: boolean
}
export type UserProduceProgressSchedule = {
  stepNumber: number
  addStepLevel: number
  vocalProduceStepSelfLessonId: string
  vocalSpProduceStepSelfLessonId: string
  danceProduceStepSelfLessonId: string
  danceSpProduceStepSelfLessonId: string
  visualProduceStepSelfLessonId: string
  visualSpProduceStepSelfLessonId: string
  stepTypes: penum.ProduceStepType[]
  selectedStepType: penum.ProduceStepType
  examResultType: penum.ProduceExamResultType
  refreshStamina: number
  auditionRank: number
  stepSelectNumber: number
  maxAuditionStepSelectNumber: number
}
export type UserProduceProgressShop = {
  positionNumber: number
  purchased: boolean
  resourceType: penum.ProduceResourceType
  resourceId: string
  upgradeCount: number
  price: number
  discountPermil: number
  effectDiscountPermils: number[]
  effectResourceDiscountPermils: number[]
  nextPrice: number
  lock: boolean
  highScoreReward: boolean
}
export type UserProduceProgressSupportCard = {
  number: number
  isRental: boolean
  supportCardId: string
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
  produceSkillIds: string[]
  produceSkillLevels: string[]
  produceSkillTriggerCounts: string[]
  produceSkills: UserProduceProgressSupportCard_ProduceSkill[]
  eventStaminaRecoverUpPermil: number
  eventProducePointAdditionValueUpPermil: number
  eventParameterAdditionValueUpPermil: number
  eventProbabilityUpPermyriad: number
  produceCardUpgradePermil: number
  eventProduceCardUpgrade: boolean
}
type UserProduceProgressSupportCard_ProduceSkill = {
  id: string
  level: number
  triggerCount: number
}
export type UserProduceRerollMemory = {
  number: number
  resultMemory: pcommon.Memory
}
export type UserProduceStartAchievement = {
  achievementId: string
  progress: string
}
export type UserProduceStory = {
  storyId: string
  read: boolean
}
export type UserProduceSupportCardDeck = {
  produceType: penum.ProduceType
  number: number
  supportCardIds: string[]
  name: string
}
export type UserProfile = {
  name: string
  bornMonth: number
  bornDay: number
  lastBirthdayUpdatedTime: string
  supportCardId: string
  userMemoryId: string
  comment: string
  exp: string
  totalFanCount: string
  additionFollowLimitCount: number
  selectedMeishiNumber: number
  maxPvpRateUnitPower: number
}
export type UserPvpRate = {
  grade: penum.PvpRateGrade
  bestGrade: penum.PvpRateGrade
  isInitializedCurrentSeason: boolean
  phaseType: penum.PvpRatePhaseType
  rivalMatchTime: string
  supportBonusPermyriad: number
}
export type UserPvpRateUnit = {
  stageFormations: pcommon.PvpRateSetupUnitStageFormation[]
}
export type UserShopItem = {
  shopItemId: string
  lastPurchaseTime: string
  purchasedCount: string
}
export type UserStory = {
  storyId: string
  isUnlocked: boolean
  read: boolean
}
export type UserSupportCard = {
  supportCardId: string
  stockQuantity: number
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
  createdTime: string
}
export type UserTime = {
  timeType: penum.TimeType
  dataOfTime: string
}
export type UserTower = {
  towerId: string
  layerCount: number
  clearLayerCount: number
  totalClearRank: number
  receivedLayerCount: number
  userMemoryIds: string[]
}
export type UserTutorial = {
  type: penum.TutorialType
  step: number
}
export type UserWork = {
  type: penum.WorkType
  durationMinutes: number
  level: number
  characterId: string
  characterDearnessLevel: number
  startedTime: string
  lastSkippedTime: string
  skipCount: number
  totalFinishCount: number
  fixedIsExcellent: boolean
}
export type UserWorkCharacter = {
  characterId: string
  isFine: boolean
  totalFinishCount: number
}
