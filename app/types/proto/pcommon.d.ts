// Generated code. DO NOT EDIT!

import * as penum from './penum';

export type Achievement = {
  achievementId: string
  threshold: number
}
export type AntiCheatCriticalResult = {
  records: AntiCheatCriticalResult_Record[]
  logs: AntiCheatCriticalResult_Log[]
}
type AntiCheatCriticalResult_Log = {
  id: string
  lines: string[]
}
type AntiCheatCriticalResult_Record = {
  tag: string
  id: string
  expected: string
  actual: string
}
export type AntiCheatSummaryResult = {
  scores: AntiCheatSummaryResult_Score[]
}
type AntiCheatSummaryResult_Score = {
  id: string
  calculatedScore: number
  loggedScore: number
}
export type CoinGasha = {
  id: string
  type: penum.CoinGashaType
  name: string
  description: string
  assetId: string
  coinGashaButtonId: string
  featureRewardResetDay: number
  featureGashaRewards: CoinGashaReward[]
  commonGashaRewards: CoinGashaReward[]
  prevBoxList: CoinGashaBox[]
  nextBoxList: CoinGashaBox[]
  boxResetType: penum.CoinGashaBoxResetTypeType
  resetCount: number
  isResettable: boolean
  totalDrawCount: number
  drawCountRewards: CoinGashaDrawCountReward[]
  unlock: boolean
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
  order: number
}
export type CoinGashaBox = {
  featureGashaRewards: CoinGashaReward[]
  commonGashaRewards: CoinGashaReward[]
}
export type CoinGashaDrawCountReward = {
  drawCount: number
  reward: Reward
}
export type CoinGashaReward = {
  reward: Reward
  remainingDrawCount: number
  maxEmissionCount: number
  isPickup: boolean
}
export type ConsumptionResult = {
  resourceType: penum.ResourceType
  resourceId: string
  quantity: string
  beforeQuantity: string
  afterQuantity: string
}
export type Event = {
  eventType: penum.EventType
  eventId: string
  homeIconAssetId: string
  bannerAssetId: string
  noti: boolean
  dailyMissionGroupId: string
  missionGroupId: string
  missionDailyReleaseGroupId: string
  missionPanelSheetGroupId: string
  storyGroupId: string
  itemId: string
  characterIds: string[]
  dearnessMissionPanelSheetGroupIds: string[]
  startTime: string
  endTime: string
  fixRankTime: string
  closeTime: string
  priority: number
}
export type ExamAiBaseModel = {
  modelVersion: string
  env: string
  tag: string
  masterVersion: string
  name: string
  planType: penum.ProducePlanType
  staminaMin: number
  staminaMax: number
  maxStaminaMin: number
  maxStaminaMax: number
  limitTurnMin: number
  limitTurnMax: number
  limitBorderMin: number
  limitBorderMax: number
  clearBorderMin: number
  clearBorderMax: number
  produceCardCountMin: number
  produceCardCountMax: number
  produceItemCountMin: number
  produceItemCountMax: number
}
export type ExamAntiCheatTarget = {
  features: penum.ExamGameType[]
  dates: string[]
  userIds: string[]
  logIds: string[]
}
export type ExamBattleAutoPlayer = {
  characterId: string
  idolCardId: string
  planType: penum.ProducePlanType
  examEffectType: penum.ProduceExamEffectType
  idolCardLevelLimitRank: penum.IdolCardLevelLimitRank
  idolCardPotentialRank: penum.IdolCardPotentialRank
  power: number
  seed: string
  vocal: number
  dance: number
  visual: number
  vocalBonusPermil: number
  danceBonusPermil: number
  visualBonusPermil: number
  maxStamina: number
  produceCards: ProduceCard[]
  produceItemIds: string[]
  rank: number
  score: number
  vocalScore: number
  danceScore: number
  visualScore: number
  selectIndexList: number[]
}
export type ExamBattleAutoRequest = {
  appVersion: string
  masterVersion: string
  masterHash: string
  vocal: number
  dance: number
  visual: number
  examSettingId: string
  stages: ExamBattleAutoStage[]
}
export type ExamBattleAutoStage = {
  limitTurn: number
  produceExamGimmickEffectGroupId: string
  selfPlayers: ExamBattleAutoPlayer[]
  rivalPlayers: ExamBattleAutoPlayer[]
}
export type ExamBattleAutoStageResult = {
  selfPlayers: ExamBattleAutoStageResult_Player[]
  rivalPlayers: ExamBattleAutoStageResult_Player[]
}
type ExamBattleAutoStageResult_Player = {
  score: number
  vocalScore: number
  danceScore: number
  visualScore: number
  list: number[]
}
export type ExamBattleResult = {
  rank: number
  score: number
  stamina: number
  produceDrinkIds: string[]
  produceItems: ProduceItem[]
  examTriggerCounts: ExamTriggerCount[]
  vocalScore: number
  danceScore: number
  visualScore: number
}
export type ExamCommandLog = {
  commandType: penum.ExamCommandType
  phaseType: penum.ExamPhaseType
  selectIndexes: number[]
  useIndex: number
  useProduceCard: ProduceCard
  useProduceDrinkId: string
}
export type ExamTriggerCount = {
  produceExamTriggerId: string
  count: number
}
export type ExamTurnEndLog = {
  turn: number
  score: number
  stamina: number
  consumedStamina: number
  block: number
  additionBlock: number
  parameterType: penum.ProduceParameterType
  idolStatusType: penum.ExamIdolStatusType
  idolStatusStepCount: number
  startPlayHandProduceCards: ProduceCard[]
  startPlayStatuses: string[]
  startPlayHoldProduceCards: ProduceCard[]
  commands: ExamCommandLog[]
}
export type Gasha = {
  id: string
  type: penum.GashaType
  name: string
  description: string
  gashaButtons: GashaButton[]
  gashaStepUp: GashaStepUp
  gashaSelectPickup: GashaSelectPickup
  gashaCardBonusId: string
  gashaPoint: GashaPoint
  bonusRewards: Reward[]
  bannerAssetId: string
  bannerLabelAssetId: string
  movieAssetId: string
  screenAssetId: string
  appealTextAssetId: string
  noticeId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  hasIdolCard: boolean
  pickupIdolCardSkinIds: string[]
  pickupSupportCardIds: string[]
  backgroundPickupIdolCardSkins: GashaBackgroundPickup[]
  backgroundPickupSupportCards: GashaBackgroundPickup[]
  animationBackgroundAssetId: string
  startTime: string
  endTime: string
  order: number
}
export type GashaBackgroundPickup = {
  idolCardSkinId: string
  supportCardId: string
  movieAssetId: string
  screenAssetId: string
  rewards: Reward[]
}
export type GashaButton = {
  id: string
  remainingDrawCount: number
  remainingDiscountDrawCount: number
}
export type GashaPoint = {
  gashaPointId: string
  point: number
  exchangeable: boolean
  name: string
}
export type GashaSelectPickup = {
  idolCardSkinIds: string[]
  supportCardIds: string[]
  pickupRewards: Reward[]
  pickupCount: number
  drawCount: number
}
export type GashaStepUp = {
  number: number
  isLimited: boolean
  steps: GashaStepUpStep[]
}
export type GashaStepUpStep = {
  number: number
  stepLabelColor: string
  appealAssetId: string
  isFeature: boolean
  bonusRewards: Reward[]
  gashaButtonId: string
}
export type GuildMission = {
  number: number
  storyEventGuildMissionId: string
  produceConditionSetDescription1: string
  produceConditionSetDescription2: string
  produceConditionSetDescription3: string
  produceConditionSetCount: number
  threshold: number
  progress: number
  reward: Reward
  received: boolean
  mvpProfile: SimpleProfile
  icon: GuildMission_Icon
}
type GuildMission_Icon = {
  type: penum.ProduceConditionType
  resourceId1: string
  resourceId2: string
  grade: penum.ResultGrade
}
export type GuildMissionHistory = {
  number: number
  storyEventGuildMissionId: string
  profile: SimpleProfile
  phaseType: penum.GuildMissionPhaseType
  progressedTime: string
}
export type GvgRaidGuild = {
  name: string
  achievement: Achievement
  point: number
  rank: number
}
export type GvgRaidSetUpDeck = {
  slots: GvgRaidSlot[]
}
export type GvgRaidSlot = {
  mainUserMemoryId: string
  subUserMemoryIds: string[]
}
export type HomeBanner = {
  assetId: string
  linkType: penum.LinkType
  linkId: string
  viewConditionSetId: string
  startTime: string
  endTime: string
  priority: number
}
export type HomeNavigation = {
  description: string
  noticeId: string
  startTime: string
  endTime: string
  priority: number
}
export type IdolCard = {
  idolCardId: string
  levelLimitRank: penum.IdolCardLevelLimitRank
  potentialRank: penum.IdolCardPotentialRank
  isClearTrueEnd: boolean
}
export type Meishi = {
  publicUserId: string
  meishiBase: MeishiBase
  objects: MeishiObject[]
  imagePath: string
  timeline: string
}
export type MeishiBase = {
  layoutNumber: number
  vertical: boolean
  beforeIdolCardId: string
  afterIdolCardId: string
  supportCardId: string
  meishiBaseAssetId: string
  memoryAssetId: string
  imagePath: string
  moviePath: string
  userMemoryId: string
  userPhotoId: string
  userMovieId: string
  meishiBaseColorId: string
  beforeIdolCardSkinId: string
  afterIdolCardSkinId: string
}
export type MeishiObject = {
  type: penum.MeishiObjectType
  userName: string
  vertical: boolean
  displayPublicUserId: boolean
  publicUserId: string
  displayPvpRateGrade: boolean
  grade: penum.PvpRateGrade
  displayProducerLevel: boolean
  producerLevel: number
  displayFanCount: boolean
  fanCount: string
  displayComment: boolean
  comment: string
  achievementId: string
  achievement: Achievement
  meishiIllustrationAssetId: string
  idolCardSkinId: string
  supportCardId: string
  produceCardId: string
  produceItemId: string
  produceDrinkId: string
  imagePath: string
  moviePath: string
  userPhotoId: string
  userMemoryId: string
  userMovieId: string
  meishiBaseAssetId: string
  memoryAssetId: string
  meishiTextColorId: string
  positionX: number
  positionY: number
  size: number
  lock: boolean
  background: boolean
  layer: number
  metadata: string
}
export type Memory = {
  userMemoryId: string
  assetId: string
  imagePath: string
  grade: penum.ResultGrade
  power: number
  characterId: string
  idolCardId: string
  idolCardSkinId: string
  planType: penum.ProducePlanType
  idolCardLevelLimitRank: penum.IdolCardLevelLimitRank
  idolCardPotentialRank: penum.IdolCardPotentialRank
  noProduceHistory: boolean
  isHighScoreRush: boolean
  produceCard: ProduceCard
  produceCardPhaseType: penum.ProduceMemoryProduceCardPhaseType
  abilities: MemoryAbility[]
  vocal: number
  dance: number
  visual: number
  stamina: number
  examBattleProduceCards: ProduceCard[]
  examBattleProduceItemIds: string[]
}
export type MemoryAbility = {
  id: string
  level: number
}
export type ProduceCampaign = {
  type: penum.ProduceCampaignType
  name: string
  description: string
  assetId: string
  produceGroupId: string
  produceId: string
  dailyCount: number
  termCount: number
  remainingCount: number
  isHalf: boolean
  memoryRentalCount: number
  appealRewards: Reward[]
  memoryRerollCount: number
  startTime: string
  endTime: string
  order: number
}
export type ProduceCard = {
  id: string
  upgradeCount: number
  customizes: ProduceCardCustomize[]
}
export type ProduceCardCustomize = {
  id: string
  customizeCount: number
}
export type ProduceConsumptionResult = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  quantity: number
  beforeQuantity: number
  afterQuantity: number
}
export type ProduceDescriptionSegment = {
  produceDescriptionType: penum.ProduceDescriptionType
  examDescriptionType: penum.ExamDescriptionType
  examEffectType: penum.ProduceExamEffectType
  produceCardGrowEffectType: penum.ProduceCardGrowEffectType
  produceCardCategory: penum.ProduceCardCategory
  produceCardMovePositionType: penum.ProduceCardMovePositionType
  produceStepType: penum.ProduceStepType
  text: string
  targetId: string
  targetLevel: number
  effectValue1: number
  effectValue2: number
  effectCount: number
  turn: number
  costValue: number
  produceDescriptionSwapId: string
  originProduceExamTriggerId: string
  originProduceExamEffectId: string
  originProduceCardStatusEnchantId: string
  isCost: boolean
  isOnlyOutGame: boolean
  changeColor: boolean
}
export type ProduceEffectResult = {
  effectType: penum.ProduceEffectType
  produceEffectId: string
  origin: ProduceTriggerOrigin
  effectValue: number
  effectTargetId: string
  beforeMaxStamina: number
  afterMaxStamina: number
  beforeStamina: number
  afterStamina: number
  beforeProducePoint: number
  afterProducePoint: number
  beforeVoteCount: number
  afterVoteCount: number
  beforeVocal: number
  afterVocal: number
  beforeDance: number
  afterDance: number
  beforeVisual: number
  afterVisual: number
  beforeProduceCards: ProduceCard[]
  afterProduceCards: ProduceCard[]
  providedRewards: ProduceRewardResult[]
  beforeHighScoreGold: number
  afterHighScoreGold: number
  effectNumbers: number[]
  ineffective: boolean
}
export type ProduceExamEndResult = {
  stepType: penum.ProduceStepType
  produceDrinkIds: string[]
  produceItems: ProduceItem[]
  producePoint: number
  stamina: number
  maxStamina: number
  resultTargetValue: number
  successThreshold: number
  resultTargetValueLimit: number
  examTriggerCounts: ExamTriggerCount[]
}
export type ProduceHistory = {
  produceId: string
  score: number
  grade: penum.ResultGrade
  userName: string
  producerLevel: number
  clearedTime: string
  idolCardId: string
  idolCardSkinId: string
  levelLimitRank: penum.IdolCardLevelLimitRank
  potentialRank: penum.IdolCardPotentialRank
  trueEndProduceTypes: penum.ProduceType[]
  auditions: ProduceHistory_Audition[]
  deckSupportCards: ProduceHistory_DeckSupportCard[]
  deckMemories: ProduceHistory_DeckMemory[]
  produceCards: ProduceHistory_DeckProduceCard[]
  produceItemIds: string[]
  memory: Memory
  vocal: number
  dance: number
  visual: number
  vocalGrowthRatePermil: number
  danceGrowthRatePermil: number
  visualGrowthRatePermil: number
  maxStamina: number
  voteCount: number
  isHighScoreRush: boolean
  highScoreGold: number
}
type ProduceHistory_Audition = {
  stepType: penum.ProduceStepType
  stepSelectNumber: number
  rank: number
}
type ProduceHistory_DeckMemory = {
  memory: Memory
  isRental: boolean
}
type ProduceHistory_DeckProduceCard = {
  produceCard: ProduceCard
  fromMemory: boolean
}
type ProduceHistory_DeckSupportCard = {
  id: string
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
  isRental: boolean
}
export type ProduceItem = {
  produceItemId: string
  fireCount: number
}
export type ProduceLessonGrowthResult = {
  vocal: number
  dance: number
  visual: number
  hardBonusVocal: number
  hardBonusDance: number
  hardBonusVisual: number
  growthRateBonusVocal: number
  growthRateBonusDance: number
  growthRateBonusVisual: number
  auditionParameterGrowthRateVocal: number
  auditionParameterGrowthRateDance: number
  auditionParameterGrowthRateVisual: number
}
export type ProduceMemoryRewardResult = {
  providedRewards: ProduceRewardResult[]
  origin: ProduceTriggerOrigin
}
export type ProduceRewardResult = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  resourceLevel: number
  quantity: number
  customizes: ProduceCardCustomize[]
}
export type ProduceTriggerOrigin = {
  originType: penum.ProduceTriggerOriginType
  originOwnerId: string
  originId: string
  originLevel: number
}
export type ProducerLevelUnlock = {
  level: number
  targets: ProducerLevelUnlockTarget[]
  reward: Reward
  bonusRewards: Reward[]
}
export type ProducerLevelUnlockTarget = {
  type: penum.ProducerLevelUnlockType
  id: string
  quantity: number
}
export type PvpRateExamBattleResult = {
  examBattleAutoRequest: ExamBattleAutoRequest
  selfStageResultScoreList: number[]
  rivalStageResultScoreList: number[]
}
export type PvpRateSetupUnitStageFormation = {
  stage: penum.PvpRateStageType
  slots: PvpRateSetupUnitStageFormation_Slot[]
}
type PvpRateSetupUnitStageFormation_Slot = {
  mainUserMemoryId: string
  subUserMemoryId: string
}
export type Reward = {
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
}
export type RewardResult = {
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
  beforeQuantity: string
  afterQuantity: string
  isNew: boolean
  isTruncate: boolean
  isGift: boolean
  isCampaign: boolean
  isItemEffect: boolean
}
export type SimpleProfile = {
  publicUserId: string
  name: string
  level: number
  lastLoginTime: string
  comment: string
  meishi: Meishi
}
export type StartupNotification = {
  id: string
  type: penum.StartupNotificationType
  effectType: penum.StartupNotificationEffectType
  horizontalMovieAssetId: string
  verticalMovieAssetId: string
  linkTitle: string
  linkType: penum.LinkType
  linkId: string
  storyId: string
  imageAssetId: string
  noticeId: string
  shopItemId: string
  shopItemPurchasedCount: number
  shopItemNextResetTime: string
  priority: number
}
export type StoryEventBonus = {
  characterBonuses: StoryEventBonus_CharacterBonus[]
  idolCardBonuses: StoryEventBonus_IdolCardBonus[]
  supportCardBonuses: StoryEventBonus_SupportCardBonus[]
}
type StoryEventBonus_CharacterBonus = {
  characterIds: string[]
  permil: number
  idolCardRarities: penum.IdolCardRarity[]
  potentialRankBonusPermils: StoryEventBonus_CharacterBonus_PotentialRankBonusPermil[]
}
type StoryEventBonus_CharacterBonus_PotentialRankBonusPermil = {
  potentialRank: penum.IdolCardPotentialRank
  permil: number
}
type StoryEventBonus_IdolCardBonus = {
  idolCardIds: string[]
  potentialRankBonusPermils: StoryEventBonus_IdolCardBonus_PotentialRankBonusPermil[]
}
type StoryEventBonus_IdolCardBonus_PotentialRankBonusPermil = {
  potentialRank: penum.IdolCardPotentialRank
  permil: number
}
type StoryEventBonus_SupportCardBonus = {
  supportCardIds: string[]
  levelLimitRankBonusPermils: StoryEventBonus_SupportCardBonus_LevelLimitRankBonusPermil[]
}
type StoryEventBonus_SupportCardBonus_LevelLimitRankBonusPermil = {
  levelLimitRank: penum.SupportCardLevelLimitRank
  permil: number
}
export type StoryEventPointReward = {
  point: number
  reward: Reward
  feature: boolean
  repeat: boolean
  repeatPoint: number
}
export type StoryEventProduceResult = {
  pointResult: StoryEventProduceResult_PointResult
  coinResult: StoryEventProduceResult_CoinResult
  rewardResults: RewardResult[]
  storyEventType: penum.StoryEventType
  titleAssetId: string
  storyGroupId: string
  gradationColor1: string
  gradationColor2: string
  backgroundAssetId: string
  bgmAssetId: string
  sceneLayoutId: string
  sceneLayoutCollectionId: string
  consumptionItemId: string
}
type StoryEventProduceResult_CoinResult = {
  storyEventId: string
  resourceType: penum.ResourceType
  resourceId: string
  baseCoinQuantity: number
  bonusCoinQuantity: number
  bonusPermil: number
}
type StoryEventProduceResult_PointResult = {
  storyEventId: string
  bonusPermil: number
  beforePoint: number
  afterPoint: number
  allRewards: StoryEventPointReward[]
  provideRewards: StoryEventPointReward[]
}
export type SupportCard = {
  id: string
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
}
export type TowerLayerHistory = {
  userId: string
  publicUserId: string
  userName: string
  producerLevel: number
  clearRank: number
  score: number
  memories: Memory[]
  isDefault: boolean
  playTime: string
}
