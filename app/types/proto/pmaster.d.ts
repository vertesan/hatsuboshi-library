// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';

export type Achievement = {
  id: string
  category: penum.AchievementCategory
  name: string
  description: string
  missionType: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  viewConditionSetId: string
  unlockConditionSetId: string
  masterAchievementInitialRank: number
  isTrueEndAchievement: boolean
  isMasterAchievement: boolean
  characterId: string
  viewProduceResult: boolean
  order: number
}
export type AchievementList = {
  list: pcommon.Achievement[]
}
export type AchievementProgress = {
  achievementId: string
  threshold: number
  assetId: string
  rewards: pcommon.Reward[]
  index: number
}
export type AchievementProgressList = {
  list: AchievementProgress[]
}
export type AppReview = {
  type: penum.AppReviewType
  conditionSetId: string
  gashaId: string
  mainTaskGroupId: string
  mainTaskNumber: number
  achievementId: string
  achievementProgressThreshold: number
  produceId: string
}
export type AppReviewList = {
  list: AppReview[]
}
export type AssetDownload = {
  id: string
  type: penum.AssetDownloadType
}
export type AssetDownloadList = {
  list: AssetDownload[]
}
export type Bgm = {
  page: string
  name: string
  bgmAssetId: string
  order: number
  viewStartTime: string
  viewEndTime: string
}
export type BgmList = {
  list: Bgm[]
}
export type Character = {
  id: string
  lastName: string
  firstName: string
  alphabetLastName: string
  alphabetFirstName: string
  isPlayable: boolean
  personalityType: penum.CharacterPersonalityType
  characterTrueEndBonusId: string
  achievementIds: string[]
  masterAchievementId: string
  idolCardIds: string[]
  supportCardIds: string[]
  viewConditionSetId: string
  normalCostumeHeadId: string
  trainingCostumeHeadId: string
  liveCostumeHeadId: string
  normalCostumeId: string
  trainingCostumeId: string
  liveCostumeId: string
  otherStoryIds: string[]
  potentialRank1VoiceAssetId: string
  potentialRank3VoiceAssetId: string
  potentialRank4VoiceAssetId: string
  standingListPositionX: number
  standingListPositionY: number
  rosterDetailPositionX: number
  rosterDetailPositionY: number
  storyPositionX: number
  storyPositionY: number
  produceHighScorePositionX: number
  produceHighScorePositionY: number
  order: number
}
export type CharacterAdv = {
  characterId: string
  name: string
  regexp: string
  notIdol: boolean
}
export type CharacterAdvList = {
  list: CharacterAdv[]
}
export type CharacterColor = {
  characterId: string
  mainColor: string
  gradientColor1: string
  gradientColor2: string
  textColor: string
  labelTextColor: string
}
export type CharacterColorList = {
  list: CharacterColor[]
}
export type CharacterDearnessLevel = {
  characterId: string
  dearnessLevel: number
  advAssetId: string
  storyId: string
  produceConditionDescription: string
  produceConditionAchievementId: string
  produceConditionAchievementThreshold: number
  produceSkills: CharacterDearnessLevel_ProduceSkill[]
  rewards: pcommon.Reward[]
  ignoreReport: boolean
}
type CharacterDearnessLevel_ProduceSkill = {
  id: string
  level: number
}
export type CharacterDearnessLevelList = {
  list: CharacterDearnessLevel[]
}
export type CharacterDearnessStoryGashaCampaign = {
  characterId: string
  storyGroupId: string
}
export type CharacterDearnessStoryGashaCampaignList = {
  list: CharacterDearnessStoryGashaCampaign[]
}
export type CharacterDetail = {
  characterId: string
  type: penum.CharacterDetailType
  content: string
  order: number
}
export type CharacterDetailList = {
  list: CharacterDetail[]
}
export type CharacterList = {
  list: Character[]
}
export type CharacterProduceStory = {
  characterId: string
  produceGroupId: string
  eventCharacterProduceStoryIds: string[]
  eventCharacterGrowthProduceStoryIds: string[]
  eventCampaignProduceStoryIds: string[]
  eventActivityProduceStoryIds: string[]
  eventSchoolProduceStoryIds: string[]
  eventBusinessProduceStoryIds: string[]
}
export type CharacterProduceStoryList = {
  list: CharacterProduceStory[]
}
export type CharacterPushMessage = {
  characterId: string
  type: penum.PushType
  number: number
  title: string
  message: string
}
export type CharacterPushMessageList = {
  list: CharacterPushMessage[]
}
export type CharacterTrueEndAchievement = {
  characterId: string
  produceType: penum.ProduceType
  trueEndAchievement: CharacterTrueEndAchievement_Achievement
  targetAchievements: CharacterTrueEndAchievement_Achievement[]
}
type CharacterTrueEndAchievement_Achievement = {
  id: string
  threshold: number
}
export type CharacterTrueEndAchievementList = {
  list: CharacterTrueEndAchievement[]
}
export type CharacterTrueEndBonus = {
  id: string
  produceType: penum.ProduceType
  produceVocal: number
  produceDance: number
  produceVisual: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  produceStamina: number
}
export type CharacterTrueEndBonusList = {
  list: CharacterTrueEndBonus[]
}
export type CoinGashaButton = {
  id: string
  name: string
  description: string
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
  maxDrawCount: number
}
export type CoinGashaButtonList = {
  list: CoinGashaButton[]
}
export type ConditionSet = {
  id: string
  number: number
  conditionOperatorType: penum.ConditionOperatorType
  conditionType: penum.ConditionType
  resourceId1: string
  resourceId2: string
  minMaxType: penum.ConditionMinMaxType
  min: string
  max: string
  beforeTime: string
  afterTime: string
  description: string
}
export type ConditionSetList = {
  list: ConditionSet[]
}
export type ConsumptionSet = {
  id: string
  number: number
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
}
export type ConsumptionSetList = {
  list: ConsumptionSet[]
}
export type Costume = {
  id: string
  characterId: string
  name: string
  motifId: string
  description: string
  costumeColorGroupId: string
  costumeHeadId: string
  defaultCostumeHeadId: string
  voiceGroupId: string
  resourceOriginType: penum.ResourceOriginType
  targetId: string
  isTraining: boolean
  isBarefoot: boolean
  isCommonThumbnail: boolean
  invalidCostumeFeatureTypes: penum.CostumeFeatureType[]
  viewConditionSetId: string
  viewStartTime: string
  order: number
}
export type CostumeColorGroup = {
  id: string
  costumeHeadIds: string[]
  idolCardSkinId: string
}
export type CostumeColorGroupList = {
  list: CostumeColorGroup[]
}
export type CostumeHead = {
  id: string
  characterId: string
  name: string
  hairAssetId: string
  faceAssetId: string
  description: string
  resourceOriginType: penum.ResourceOriginType
  targetId: string
  isTraining: boolean
  noGashaAppeal: boolean
  viewConditionSetId: string
  viewStartTime: string
  order: number
}
export type CostumeHeadList = {
  list: CostumeHead[]
}
export type CostumeList = {
  list: Costume[]
}
export type CostumeMotion = {
  characterId: string
  motionType: penum.CostumeMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type CostumeMotionList = {
  list: CostumeMotion[]
}
export type CostumePhotoGroup = {
  id: string
  characterId: string
  number: number
  costumeIds: string[]
}
export type CostumePhotoGroupList = {
  list: CostumePhotoGroup[]
}
export type DearnessStoryCampaign = {
  id: string
  characterId: string
  storyGroupId: string
  startTime: string
  endTime: string
}
export type DearnessStoryCampaignList = {
  list: DearnessStoryCampaign[]
}
export type DeepLinkTransition = {
  type: string
}
export type DeepLinkTransitionList = {
  list: DeepLinkTransition[]
}
export type EffectGroup = {
  id: string
  name: string
  examEffectType: penum.ProduceExamEffectType
  produceEffectType: penum.ProduceEffectType
  hiddenFilter: boolean
  order: number
}
export type EffectGroupList = {
  list: EffectGroup[]
}
export type EventLabel = {
  eventType: penum.EventType
  name: string
  color: string
}
export type EventLabelList = {
  list: EventLabel[]
}
export type EventStoryCampaign = {
  id: string
  description: string
  storyGroupIds: string[]
  startTime: string
  endTime: string
}
export type EventStoryCampaignList = {
  list: EventStoryCampaign[]
}
export type ExamInitialDeck = {
  id: string
  produceCardIds: string[]
  produceCardUpgradeCounts: number[]
}
export type ExamInitialDeckList = {
  list: ExamInitialDeck[]
}
export type ExamMotion = {
  characterId: string
  type: penum.ExamMotionTargetType
  motionType: penum.ExamMotionType
  number: number
  facialMotionId: string
  bodyMotionId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
  produceGroupIds: string[]
}
export type ExamMotionList = {
  list: ExamMotion[]
}
export type ExamOutGameMotion = {
  characterId: string
  type: penum.ExamMotionTargetType
  motionType: penum.ExamOutGameMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type ExamOutGameMotionList = {
  list: ExamOutGameMotion[]
}
export type ExamSetting = {
  id: string
  auditionSupportUpgradeAdded: boolean
  examStaminaConsumptionDownPermil: number
  examStaminaConsumptionAddPermil: number
  examBlockAddDownPermil: number
  examStaminaConsumptionAddDownPermil: number
  examStaminaReduceChange: number
  examStaminaConsumptionDownAddPermil: number
  examConcentrationLessonValueMultiplePermil: number
  fullPowerPlayableValueAdd: number
  examFullPowerLessonValueMultiplePermil: number
  holdLimit: number
  handLimit: number
  turnStartDistribute: number
  examGimmickParameterDebuffPermil: number
  examParameterBuffPermil: number
  examTurnEndRecoveryStamina: number
  produceExamPanicStaminaCandidates: number[]
  examParameterBuffMultiplePerTurnPermil: number
  preservationReleasePlayableValueAdd1: number
  preservationReleasePlayableValueAdd2: number
  preservationReleaseBlockAdd1: number
  preservationReleaseBlockAdd2: number
  preservationReleaseEnthusiastic1: number
  preservationReleaseEnthusiastic2: number
  examConcentrationLessonValueMultiplePermil1: number
  examConcentrationLessonValueMultiplePermil2: number
  examPreservationLessonValueMultiplePermil1: number
  examPreservationLessonValueMultiplePermil2: number
  examConcentrationStaminaMultiplePermil1: number
  examConcentrationStaminaMultiplePermil2: number
  examPreservationStaminaMultiplePermil1: number
  examPreservationStaminaMultiplePermil2: number
  examConcentrationStaminaPenetrateReduce1: number
  examConcentrationStaminaPenetrateReduce2: number
  examCardSelectEvaluationTriggerCoefficientEnable: boolean
  examDrawCountLimitFixed: boolean
  examAutoPlayEnableVersion: number
  examAutoPlaySearchCommandLimit: number
}
export type ExamSettingList = {
  list: ExamSetting[]
}
export type ExamSimulation = {
  id: string
  stamina: number
  maxStamina: number
  clearBorder: number
  limitBorder: number
  limitTurn: number
  produceExamGimmickEffectGroupId: string
}
export type ExamSimulationList = {
  list: ExamSimulation[]
}
export type FeatureLock = {
  tutorialType: penum.TutorialType
  name: string
  description: string
  routeDescription: string
  unlockConditionSetId: string
  isForce: boolean
}
export type FeatureLockList = {
  list: FeatureLock[]
}
export type ForceAppVersion = {
  platformType: penum.PlatformType
  majorVersion: number
  minorVersion: number
  patchVersion: number
}
export type ForceAppVersionList = {
  list: ForceAppVersion[]
}
export type GashaAnimation = {
  rarity: penum.GashaAnimationRarity
  keepRatio: number
  ratio1: number
  ratio2: number
  ratio3: number
  ratio4: number
  freezeRatio: number
  freezeRatio1: number
  freezeRatio2: number
}
export type GashaAnimationList = {
  list: GashaAnimation[]
}
export type GashaAnimationStep = {
  rarity: penum.GashaAnimationRarity
  currentStepType: penum.GashaAnimationStepType
  currentNumber: number
  nextStepType: penum.GashaAnimationStepType
  nextNumber: number
  ratio: number
}
export type GashaAnimationStepList = {
  list: GashaAnimationStep[]
}
export type GashaButton = {
  id: string
  name: string
  description: string
  type: penum.GashaButtonType
  rewardCount: number
  fixRewardCount: number
  resourceType: penum.ResourceType
  resourceId: string
  limitType: penum.GashaLimitType
  limitCount: number
  resourceQuantity: number
  maxDrawCount: number
  discountLimitType: penum.GashaLimitType
  discountLimitCount: number
  discountResourceQuantity: number
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
  appealType: penum.GashaButtonAppealType
  appealText: string
}
export type GashaButtonList = {
  list: pcommon.GashaButton[]
}
export type GuildDonationItem = {
  itemId: string
  order: number
}
export type GuildDonationItemList = {
  list: GuildDonationItem[]
}
export type GuildReaction = {
  id: string
  assetId: string
  order: number
}
export type GuildReactionList = {
  list: GuildReaction[]
}
export type GvgRaid = {
  id: string
  name: string
  titleAssetId: string
  bannerAssetId: string
  storyGroupId: string
  examSettingId: string
  order: number
}
export type GvgRaidList = {
  list: GvgRaid[]
}
export type GvgRaidStageLoop = {
  gvgRaidId: string
  stageNumber: number
  loopCount: number
  clearScore: number
  turn: number
  vocal: number
  dance: number
  visual: number
  stagePlanType: penum.ProducePlanType
  characterCount: number
  characterIds: string[]
  produceExamBattleScoreConfigId: string
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  maxSubMemoryCounts: number[]
  challengeRewardSetId: string
  startTimelineAssetId: string
  examTimelineAssetId: string
  resultTimelineAssetId: string
  examBgmAssetId: string
  timelineBackgroundAssetId: string
  mapVignetteIconAssetId: string
  changePointPermil: number
}
export type GvgRaidStageLoopList = {
  list: GvgRaidStageLoop[]
}
export type HelpCategory = {
  id: string
  name: string
  assetIds: string[]
  texts: string[]
  hiddenHelpList: boolean
  order: number
}
export type HelpCategoryList = {
  list: HelpCategory[]
}
export type HelpContent = {
  helpCategoryId: string
  id: string
  name: string
  order: number
  detailUrl: string
}
export type HelpContentList = {
  list: HelpContent[]
}
export type HelpInfo = {
  type: string
  helpCategoryIds: string[]
  openHelpCategoryId: string
  openHelpContentId: string
}
export type HelpInfoList = {
  list: HelpInfo[]
}
export type HomeBoard = {
  prefabId: string
  conditionSetId: string
  priority: number
}
export type HomeBoardList = {
  list: HomeBoard[]
}
export type HomeMonitor = {
  movieAssetId: string
  characterId: string
  conditionSetId: string
  priority: number
}
export type HomeMonitorList = {
  list: HomeMonitor[]
}
export type HomeMotion = {
  characterId: string
  locationType: penum.HomeLocationType
  motionType: penum.HomeMotionType
  number: number
  conditionSetId: string
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
  isPrioritized: boolean
}
export type HomeMotionList = {
  list: HomeMotion[]
}
export type HomeTime = {
  startHour: number
  startMinute: number
  type: penum.HomeTimeType
}
export type HomeTimeList = {
  list: HomeTime[]
}
export type IdolCard = {
  id: string
  characterId: string
  originalIdolCardSkinId: string
  assetId: string
  name: string
  rarity: penum.IdolCardRarity
  isLimited: boolean
  anotherCostumeHeadId: string
  anotherCostumeId: string
  idolCardPotentialId: string
  idolCardPotentialProduceSkillId: string
  idolCardLevelLimitId: string
  idolCardLevelLimitProduceSkillId: string
  planType: penum.ProducePlanType
  idolCardLevelLimitStatusUpId: string
  produceVocal: number
  produceDance: number
  produceVisual: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  produceStamina: number
  produceStepAuditionDifficultyId: string
  examInitialDeckId: string
  produceCardId: string
  beforeProduceItemId: string
  afterProduceItemId: string
  examEffectType: penum.ProduceExamEffectType
  produceChallengeSlotId: string
  potentialRankVoiceAssetId: string
  produceSelectVoiceAssetId: string
  produceScheduleFrontVoiceGroupId: string
  produceScheduleBackVoiceGroupId: string
  useProduceCardVoiceAssetId: string
  viewStartTime: string
  order: string
  produceStoryIds: string[]
  achievementIds: string[]
}
export type IdolCardLevelLimit = {
  id: string
  rank: penum.IdolCardLevelLimitRank
  consumptionSetId: string
}
export type IdolCardLevelLimitList = {
  list: IdolCardLevelLimit[]
}
export type IdolCardLevelLimitProduceSkill = {
  id: string
  produceSkillId: string
  produceSkillLevel: number
  rank: penum.IdolCardLevelLimitRank
  order: number
}
export type IdolCardLevelLimitProduceSkillList = {
  list: IdolCardLevelLimitProduceSkill[]
}
export type IdolCardLevelLimitStatusUp = {
  id: string
  rank: penum.IdolCardLevelLimitRank
  effectTypes: penum.IdolCardLevelLimitEffectType[]
  effectValue: number
  produceVocal: number
  produceDance: number
  produceVisual: number
  isIllustrationChange: boolean
}
export type IdolCardLevelLimitStatusUpList = {
  list: IdolCardLevelLimitStatusUp[]
}
export type IdolCardList = {
  list: pcommon.IdolCard[]
}
export type IdolCardPiece = {
  idolCardId: string
  itemId: string
  releaseConsumptionQuantity: number
  exchangeReward: pcommon.Reward
}
export type IdolCardPieceList = {
  list: IdolCardPiece[]
}
export type IdolCardPieceQuantity = {
  rarity: penum.IdolCardRarity
  quantity: number
}
export type IdolCardPieceQuantityList = {
  list: IdolCardPieceQuantity[]
}
export type IdolCardPotential = {
  id: string
  rank: penum.IdolCardPotentialRank
  effectTypes: penum.IdolCardPotentialEffectType[]
  effectValue: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  anotherCostumeProvide: boolean
  consumptionPiece: number
}
export type IdolCardPotentialList = {
  list: IdolCardPotential[]
}
export type IdolCardPotentialProduceSkill = {
  id: string
  produceSkillId: string
  produceSkillLevel: number
  rank: penum.IdolCardPotentialRank
  order: number
}
export type IdolCardPotentialProduceSkillList = {
  list: IdolCardPotentialProduceSkill[]
}
export type IdolCardSimulation = {
  idolCardId: string
  number: number
  produceCardSimulationGroupId: string
  produceItemSimulationGroupId: string
  supportCardSimulationGroupId: string
  examSimulationId: string
}
export type IdolCardSimulationList = {
  list: IdolCardSimulation[]
}
export type IdolCardSkin = {
  id: string
  idolCardId: string
  name: string
  assetId: string
  costumeHeadId: string
  costumeId: string
  musicId: string
  idolCardSsrAnimationStartMilliseconds: number
  homeVoiceGroupId: string
  detailVoiceGroupId: string
  beforeLevelLimitRankVoiceAssetId: string
  afterLevelLimitRankVoiceAssetId: string
  produceSelectVoiceAssetId: string
  produceSelectFacialAssetId: string
  produceSelectBodyAssetId: string
  produceScheduleVoiceGroupId: string
  hasProduceIdolAnimation: boolean
  hasGashaAnimation: boolean
  isProduceIdolAnimationStillCard: boolean
  beforeListPositionX: number
  beforeListPositionY: number
  beforeListScale: number
  afterListPositionX: number
  afterListPositionY: number
  afterListScale: number
  beforeDetailPositionX: number
  beforeDetailPositionY: number
  beforeDetailScale: number
  afterDetailPositionX: number
  afterDetailPositionY: number
  afterDetailScale: number
  viewStartTime: string
  order: string
}
export type IdolCardSkinList = {
  list: IdolCardSkin[]
}
export type IdolCardSkinSelectReward = {
  id: string
  idolCardSkinId: string
  movieAssetId: string
  difficultyType: penum.IdolCardDifficultyType
}
export type IdolCardSkinSelectRewardList = {
  list: IdolCardSkinSelectReward[]
}
export type InvitationMission = {
  producerLevel: number
  rewardQuantity: number
}
export type InvitationMissionList = {
  list: InvitationMission[]
}
export type InvitationPointReward = {
  threshold: number
  reward: pcommon.Reward
}
export type InvitationPointRewardList = {
  list: InvitationPointReward[]
}
export type Item = {
  id: string
  name: string
  description: string
  acquisitionRouteDescription: string
  assetId: string
  type: penum.ItemType
  rarity: penum.ItemRarity
  commonLimitTime: string
  personalLimitDay: number
  sellPrice: number
  effectValue: number
  viewWithoutPossession: boolean
  exchangeType: penum.ExchangeType
  exchangeId: string
  gashaId: string
  coinGashaId: string
  shopCoinGashaId: string
  storyEventId: string
  idolCardRarity: penum.IdolCardRarity
  supportCardRarity: penum.SupportCardRarity
  gashas: Item_Gasha[]
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
  order: number
}
type Item_Gasha = {
  id: string
  bannerAssetId: string
  hasFixReward: boolean
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
}
export type ItemList = {
  list: Item[]
}
export type JewelConsumptionCount = {
  id: string
  minCount: number
  maxCount: number
  quantity: number
}
export type JewelConsumptionCountList = {
  list: JewelConsumptionCount[]
}
export type LimitItem = {
  type: penum.ItemType
  limit: number
}
export type LimitItemList = {
  list: LimitItem[]
}
export type Localization = {
  id: string
  description: string
}
export type LocalizationList = {
  list: Localization[]
}
export type LoginBonusMotion = {
  id: string
  order: number
  number: number
  facialAssetIds: string[]
  motionAssetIds: string[]
  voiceAssetIds: string[]
}
export type LoginBonusMotionList = {
  list: LoginBonusMotion[]
}
export type MainStoryChapter = {
  mainStoryPartId: string
  id: string
  title: string
  description: string
  storyAssetId: string
  mainStoryGroupId: string
  order: number
}
export type MainStoryChapterList = {
  list: MainStoryChapter[]
}
export type MainStoryPart = {
  id: string
  title: string
  assetId: string
  order: number
}
export type MainStoryPartList = {
  list: MainStoryPart[]
}
export type MainTask = {
  mainTaskGroupId: string
  number: number
  title: string
  description: string
  homeDescription: string
  missionType: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  missionId: string
  threshold: number
  viewConditionSetId: string
  unlockConditionSetId: string
  rewards: pcommon.Reward[]
  additionalRewards: pcommon.Reward[]
  unlockFeatureTutorialType: penum.TutorialType
}
export type MainTaskGroup = {
  id: string
  title: string
  mainTaskType: penum.MainTaskType
  viewConditionSetId: string
  order: number
}
export type MainTaskGroupList = {
  list: MainTaskGroup[]
}
export type MainTaskIcon = {
  missionType: penum.MissionType
  assetId: string
}
export type MainTaskIconList = {
  list: MainTaskIcon[]
}
export type MainTaskList = {
  list: MainTask[]
}
export type Media = {
  id: string
  name: string
  mediaType: penum.MediaType
  assetId: string
  thumbnailAssetId: string
  viewConditionSetId: string
  characterIds: string[]
  externalUrl: string
  fourPanelComicEpisode: number
  startTime: string
  endTime: string
  order: number
}
export type MediaList = {
  list: Media[]
}
export type MeishiBaseAsset = {
  id: string
  name: string
  isDefault: boolean
  meishiBaseAssetType: penum.MeishiBaseAssetType
  order: number
}
export type MeishiBaseAssetList = {
  list: MeishiBaseAsset[]
}
export type MeishiBaseColor = {
  id: string
  order: number
}
export type MeishiBaseColorList = {
  list: MeishiBaseColor[]
}
export type MeishiIllustrationAsset = {
  id: string
  type: penum.MeishiIllustrationType
  isDefault: boolean
  leftTopPositionX: number
  leftTopPositionY: number
  rightBottomPositionX: number
  rightBottomPositionY: number
  name: string
  weight: number
  height: number
  order: number
}
export type MeishiIllustrationAssetList = {
  list: MeishiIllustrationAsset[]
}
export type MeishiTextColor = {
  id: string
  order: number
}
export type MeishiTextColorList = {
  list: MeishiTextColor[]
}
export type MemoryAbility = {
  id: string
  level: number
  skillId: string
  evaluation: number
  rarity: penum.SkillRarity
  produceGroupIds: string[]
}
export type MemoryAbilityList = {
  list: pcommon.MemoryAbility[]
}
export type MemoryExchangeItem = {
  planType: penum.ProducePlanType
  itemId: string
}
export type MemoryExchangeItemList = {
  list: MemoryExchangeItem[]
}
export type MemoryExchangeItemQuantity = {
  grade: penum.ResultGrade
  quantity: number
}
export type MemoryExchangeItemQuantityList = {
  list: MemoryExchangeItemQuantity[]
}
export type MemoryGift = {
  id: string
  name: string
  description: string
  assetId: string
  grade: penum.ResultGrade
  idolCardId: string
  planType: penum.ProducePlanType
  produceCard: pcommon.ProduceCard
  produceCardPhaseType: penum.ProduceMemoryProduceCardPhaseType
  memoryAbilities: pcommon.MemoryAbility[]
  vocal: number
  dance: number
  visual: number
  stamina: number
  examBattleProduceCards: pcommon.ProduceCard[]
  examBattleProduceItemIds: string[]
}
export type MemoryGiftList = {
  list: MemoryGift[]
}
export type MemoryTag = {
  id: string
  defaultName: string
  assetId: string
  order: number
}
export type MemoryTagList = {
  list: MemoryTag[]
}
export type Mission = {
  id: string
  missionGroupId: string
  name: string
  category: penum.MissionCategory
  type: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  isLessThanTargetValue: boolean
  isEventMission: boolean
  missionDailyReleaseGroupId: string
  missionDailyReleaseDay: number
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
}
export type MissionDailyRelease = {
  missionDailyReleaseGroupId: string
  number: number
  missionGroupId: string
}
export type MissionDailyReleaseGroup = {
  id: string
  name: string
  logoAssetId: string
  bannerAssetId: string
  gradientColor1: string
  gradientColor2: string
  gradientColor3: string
  missionPointId: string
  conditionSetId: string
  fromStartTimeUnlock: boolean
  startTime: string
  endTime: string
}
export type MissionDailyReleaseGroupList = {
  list: MissionDailyReleaseGroup[]
}
export type MissionDailyReleaseList = {
  list: MissionDailyRelease[]
}
export type MissionGroup = {
  id: string
  name: string
  assetId: string
  missionPointId: string
  missionIds: string[]
  rewards: pcommon.Reward[]
  showHomeLimitedMission: boolean
  rewardName: string
  rewardAssetId: string
  conditionSetId: string
  order: number
}
export type MissionGroupList = {
  list: MissionGroup[]
}
export type MissionList = {
  list: Mission[]
}
export type MissionPanelSheet = {
  missionPanelSheetGroupId: string
  number: number
  name: string
  missionGroupId: string
  iconAssetId: string
  backgroundAssetId: string
  rewardAssetId: string
  backgroundGradientColor1: string
  backgroundGradientColor2: string
  panelGradientColors1: string[]
  panelGradientColors2: string[]
}
export type MissionPanelSheetGroup = {
  id: string
  name: string
  bannerAssetId: string
  conditionSetId: string
}
export type MissionPanelSheetGroupList = {
  list: MissionPanelSheetGroup[]
}
export type MissionPanelSheetList = {
  list: MissionPanelSheet[]
}
export type MissionPass = {
  id: string
  name: string
  description: string
  assetId: string
  missionPassPointId: string
  premiumPassShopItemId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
  order: number
}
export type MissionPassList = {
  list: MissionPass[]
}
export type MissionPassPoint = {
  id: string
  name: string
  assetId: string
}
export type MissionPassPointList = {
  list: MissionPassPoint[]
}
export type MissionPassProgress = {
  missionPassId: string
  threshold: number
  normalReward: pcommon.Reward
  premiumReward: pcommon.Reward
  feature: boolean
  repeat: boolean
  repeatPoint: number
}
export type MissionPassProgressList = {
  list: MissionPassProgress[]
}
export type MissionPoint = {
  id: string
  name: string
  resetTimingType: penum.ResetTimingType
  assetId: string
}
export type MissionPointList = {
  list: MissionPoint[]
}
export type MissionPointRewardSet = {
  missionPointId: string
  point: number
  isFeature: boolean
  rewards: pcommon.Reward[]
}
export type MissionPointRewardSetList = {
  list: MissionPointRewardSet[]
}
export type MissionProgress = {
  missionId: string
  threshold: number
  missionPoint: number
  rewards: pcommon.Reward[]
}
export type MissionProgressList = {
  list: MissionProgress[]
}
export type Money = {
  level: number
  makeMinutes: number
  makeQuantity: number
  makeQuantityLimit: number
}
export type MoneyList = {
  list: Money[]
}
export type Music = {
  id: string
  title: string
  displayTitle: string
  lyrics: string
  composer: string
  arranger: string
  jacketAssetId: string
  gameVersionAssetId: string
  shortVersionStartMilliseconds: number
  shortVersionEndMilliseconds: number
  viewConditionSetId: string
  unlockConditionSetId: string
  produceLiveUnlockItemConditionSetId: string
  externalUrl: string
  viewStartTime: string
  order: number
}
export type MusicHot = {
  id: string
  musicId: string
  startTime: string
  endTime: string
}
export type MusicHotList = {
  list: MusicHot[]
}
export type MusicList = {
  list: Music[]
}
export type MusicSinger = {
  musicId: string
  number: number
  characterId: string
  idolCardId: string
  idolCardSkinId: string
}
export type MusicSingerList = {
  list: MusicSinger[]
}
export type PhotoBackground = {
  id: string
  name: string
  bgmAssetId: string
  category: penum.PhotoBackgroundCategory
  maxCharacterCount: number
  enableLookTargetPositionNumbers: number[]
  backgroundAssetId: string
  timeTypes: penum.PhotoBackgroundTimeType[]
  photoBackgroundPrefab: string
  sceneLayoutId: string
  costumePhotoGroup: string
  ngCostumePhotoGroupId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
}
export type PhotoBackgroundList = {
  list: PhotoBackground[]
}
export type PhotoFacialLookTarget = {
  facialAssetId: string
  lookTargetType: penum.PhotoLookTargetType
}
export type PhotoFacialLookTargetList = {
  list: PhotoFacialLookTarget[]
}
export type PhotoFacialMotionGroup = {
  id: string
  number: number
  facialAssetId: string
  name: string
  disableAutoBlink: boolean
}
export type PhotoFacialMotionGroupList = {
  list: PhotoFacialMotionGroup[]
}
export type PhotoLookTargetVoiceCharacter = {
  characterId: string
  number: number
  voiceAssetId: string
}
export type PhotoLookTargetVoiceCharacterList = {
  list: PhotoLookTargetVoiceCharacter[]
}
export type PhotoPose = {
  id: string
  photoBackgroundId: string
  cameraNumbers: number[]
  positionNumbers: number[]
  characterId: string
  motionType: penum.PhotoPoseMotionType
  name: string
  lookTargetType: penum.PhotoLookTargetType
  disableLookTargetIdol: boolean
  motionAssetIds: string[]
  facialAssetIds: string[]
  propAssetIds: string[]
  photoReactionVoiceGroupId: string
  photoWaitVoiceGroupId: string
  photoFacialMotionGroupId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
}
export type PhotoPoseList = {
  list: PhotoPose[]
}
export type PhotoReactionVoiceGroup = {
  id: string
  number: number
  poseVoiceAssetId: string
  poseVoiceDelayMilliseconds: number
  reactionVoiceAssetId: string
  reactionVoiceDelayMilliseconds: number
}
export type PhotoReactionVoiceGroupList = {
  list: PhotoReactionVoiceGroup[]
}
export type PhotoWaitVoiceCharacter = {
  characterId: string
  number: number
  voiceAssetId: string
}
export type PhotoWaitVoiceCharacterList = {
  list: PhotoWaitVoiceCharacter[]
}
export type PhotoWaitVoiceGroup = {
  id: string
  number: number
  voiceAssetId: string
}
export type PhotoWaitVoiceGroupList = {
  list: PhotoWaitVoiceGroup[]
}
export type Produce = {
  id: string
  name: string
  baseStepLevel: number
  maxRefreshCount: number
  challengeViewConditionSetId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  examSettingId: string
  produceSettingId: string
  idolCardParameterGrowthLimit: number
  maxProduceEventCharacterGrowthNumber: number
  steps: number
  actionPointQuantity: number
  assetId: string
  produceNavigationNormalId: string
  produceNavigationAuditionId: string
  produceNavigationLoseId: string
  gradientColor1: string
  gradientColor2: string
  order: number
}
export type ProduceAdv = {
  produceType: penum.ProduceType
  type: penum.ProduceAdvType
  title: string
  assetId: string
}
export type ProduceAdvList = {
  list: ProduceAdv[]
}
export type ProduceCard = {
  id: string
  upgradeCount: number
  name: string
  assetId: string
  isCharacterAsset: boolean
  rarity: penum.ProduceCardRarity
  planType: penum.ProducePlanType
  category: penum.ProduceCardCategory
  stamina: number
  forceStamina: number
  costType: penum.ExamCostType
  costValue: number
  playProduceExamTriggerId: string
  playEffects: ProduceCard_PlayEffect[]
  playMovePositionType: penum.ProduceCardMovePositionType
  moveEffectTriggerType: penum.ProduceCardMoveEffectTriggerType
  moveProduceExamEffectIds: string[]
  isEndTurnLost: boolean
  isInitial: boolean
  isRestrict: boolean
  produceCardStatusEnchantId: string
  searchTag: string
  libraryHidden: boolean
  noDeckDuplication: boolean
  isReward: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  unlockProducerLevel: number
  rentalUnlockProducerLevel: number
  evaluation: number
  originIdolCardId: string
  originSupportCardId: string
  isInitialDeckProduceCard: boolean
  effectGroupIds: string[]
  produceCardCustomizeIds: string[]
  maxCustomizeCount: number
  viewStartTime: string
  isLimited: boolean
  order: string
}
type ProduceCard_PlayEffect = {
  produceExamTriggerId: string
  produceExamEffectId: string
  hideIcon: boolean
}
export type ProduceCardCustomize = {
  id: string
  customizeCount: number
  overwriteProduceCardGrowEffectType: penum.ProduceCardGrowEffectType
  description: string
  produceCardGrowEffectIds: string[]
  producePoint: number
}
export type ProduceCardCustomizeList = {
  list: pcommon.ProduceCardCustomize[]
}
export type ProduceCardCustomizeRarityEvaluation = {
  rarity: penum.ProduceCardRarity
  evaluation: number
}
export type ProduceCardCustomizeRarityEvaluationList = {
  list: ProduceCardCustomizeRarityEvaluation[]
}
export type ProduceCardGrowEffect = {
  id: string
  effectType: penum.ProduceCardGrowEffectType
  costType: penum.ExamCostType
  value: number
  playProduceExamTriggerId: string
  playEffectProduceExamTriggerId: string
  targetPlayEffectProduceExamTriggerIds: string[]
  playProduceExamEffectId: string
  targetPlayProduceExamEffectIds: string[]
  produceCardStatusEnchantId: string
  playMovePositionType: penum.ProduceCardMovePositionType
  effectGroupIds: string[]
}
export type ProduceCardGrowEffectList = {
  list: ProduceCardGrowEffect[]
}
export type ProduceCardList = {
  list: pcommon.ProduceCard[]
}
export type ProduceCardRandomPool = {
  id: string
  produceCardId: string
  upgradeCount: number
  ratio: number
}
export type ProduceCardRandomPoolList = {
  list: ProduceCardRandomPool[]
}
export type ProduceCardSearch = {
  id: string
  produceCardIds: string[]
  upgradeCounts: number[]
  planType: penum.ProducePlanType
  cardCategories: penum.ProduceCardCategory[]
  cardStatusType: penum.ProduceCardSearchStatusType
  orderType: penum.ProduceCardOrderType
  cardPositionType: penum.ProduceCardPositionType
  cardSearchTag: string
  produceCardRandomPoolId: string
  limitCount: number
  staminaMinMaxType: penum.ConditionMinMaxType
  staminaMin: number
  staminaMax: number
  examEffectType: penum.ProduceExamEffectType
  effectGroupIds: string[]
  isSelf: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceCardSearchList = {
  list: ProduceCardSearch[]
}
export type ProduceCardSimulation = {
  produceCardSimulationGroupId: string
  produceCardId: string
  produceCardUpgradeCount: number
  count: number
}
export type ProduceCardSimulationGroup = {
  id: string
  name: string
}
export type ProduceCardSimulationGroupList = {
  list: ProduceCardSimulationGroup[]
}
export type ProduceCardSimulationList = {
  list: ProduceCardSimulation[]
}
export type ProduceCardStatusEffect = {
  id: string
  produceExamTriggerId: string
  produceExamEffectIds: string[]
}
export type ProduceCardStatusEffectList = {
  list: ProduceCardStatusEffect[]
}
export type ProduceCardStatusEnchant = {
  id: string
  produceExamTriggerId: string
  produceCardGrowEffectIds: string[]
  triggerCount: number
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  effectGroupIds: string[]
}
export type ProduceCardStatusEnchantList = {
  list: ProduceCardStatusEnchant[]
}
export type ProduceCardTag = {
  id: string
  name: string
}
export type ProduceCardTagList = {
  list: ProduceCardTag[]
}
export type ProduceChallengeCharacter = {
  produceId: string
  characterId: string
  unlockConditionSetId: string
}
export type ProduceChallengeCharacterList = {
  list: ProduceChallengeCharacter[]
}
export type ProduceChallengeSlot = {
  id: string
  produceId: string
  number: number
  produceItemChallengeGroupId: string
  unlockDescription: string
}
export type ProduceChallengeSlotList = {
  list: ProduceChallengeSlot[]
}
export type ProduceCharacter = {
  produceId: string
  characterId: string
  forceLiveCommonIdolCardId: string
  unlockConditionSetId: string
}
export type ProduceCharacterAdv = {
  produceType: penum.ProduceType
  type: penum.ProduceAdvType
  characterId: string
  title: string
  assetId: string
}
export type ProduceCharacterAdvList = {
  list: ProduceCharacterAdv[]
}
export type ProduceCharacterList = {
  list: ProduceCharacter[]
}
export type ProduceDescriptionExamEffect = {
  type: penum.ProduceExamEffectType
  name: string
  produceDescriptionSwapId: string
  produceDescriptionLabelId: string
  examProduceDescriptionLabelId: string
  mainBuffMinThresholds: number[]
  noIcon: boolean
  noReference: boolean
}
export type ProduceDescriptionExamEffectList = {
  list: ProduceDescriptionExamEffect[]
}
export type ProduceDescriptionLabel = {
  id: string
  name: string
  produceDescriptionSwapId: string
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceDescriptionLabelList = {
  list: ProduceDescriptionLabel[]
}
export type ProduceDescriptionProduceCardGrowEffect = {
  type: penum.ProduceCardGrowEffectType
  name: string
  noIcon: boolean
  noReference: boolean
  produceDescriptionLabelId: string
  produceCardCustomizeDescription: string
}
export type ProduceDescriptionProduceCardGrowEffectList = {
  list: ProduceDescriptionProduceCardGrowEffect[]
}
export type ProduceDescriptionProduceCardMovePosition = {
  type: penum.ProduceCardMovePositionType
  produceDescriptionLabelId: string
  produceCardProduceDescriptionLabelId: string
}
export type ProduceDescriptionProduceCardMovePositionList = {
  list: ProduceDescriptionProduceCardMovePosition[]
}
export type ProduceDescriptionProduceEffect = {
  type: penum.ProduceEffectType
  name: string
  produceDescriptionLabelId: string
}
export type ProduceDescriptionProduceEffectList = {
  list: ProduceDescriptionProduceEffect[]
}
export type ProduceDescriptionProducePlan = {
  type: penum.ProducePlanType
  name: string
  produceDescriptionLabelId: string
  planDetailProduceDescriptionLabelId: string
}
export type ProduceDescriptionProducePlanList = {
  list: ProduceDescriptionProducePlan[]
}
export type ProduceDescriptionProduceStep = {
  type: penum.ProduceStepType
  name: string
  produceDescriptionLabelId: string
}
export type ProduceDescriptionProduceStepList = {
  list: ProduceDescriptionProduceStep[]
}
export type ProduceDescriptionSwap = {
  id: string
  swapType: penum.ProduceDescriptionSwapType
  text: string
}
export type ProduceDescriptionSwapList = {
  list: ProduceDescriptionSwap[]
}
export type ProduceDrink = {
  id: string
  assetId: string
  name: string
  planType: penum.ProducePlanType
  produceDrinkEffectIds: string[]
  rarity: penum.ProduceDrinkRarity
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  unlockProducerLevel: number
  effectGroupIds: string[]
  order: string
}
export type ProduceDrinkEffect = {
  id: string
  produceEffectId: string
  produceExamEffectId: string
}
export type ProduceDrinkEffectList = {
  list: ProduceDrinkEffect[]
}
export type ProduceDrinkList = {
  list: ProduceDrink[]
}
export type ProduceEffect = {
  id: string
  produceEffectType: penum.ProduceEffectType
  effectValueMin: number
  effectValueMax: number
  produceResourceType: penum.ProduceResourceType
  produceRewards: ProduceEffect_ProduceReward[]
  produceCardSearchId: string
  produceExamStatusEnchantId: string
  produceStepEventDetailId: string
  pickRangeType: penum.ProducePickRangeType
  pickCountMin: number
  pickCountMax: number
}
type ProduceEffect_ProduceReward = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  resourceLevel: number
}
export type ProduceEffectIcon = {
  type: penum.ProduceEffectType
  resourceType: penum.ProduceResourceType
  iconAssetId: string
  backgroundAssetId: string
  order: string
}
export type ProduceEffectIconList = {
  list: ProduceEffectIcon[]
}
export type ProduceEffectList = {
  list: ProduceEffect[]
}
export type ProduceEventCharacterGrowth = {
  characterId: string
  number: number
  title: string
  description: string
  vocal: number
  dance: number
  visual: number
  produceStepEventDetailId: string
}
export type ProduceEventCharacterGrowthList = {
  list: ProduceEventCharacterGrowth[]
}
export type ProduceEventSupportCard = {
  supportCardId: string
  number: number
  supportCardLevel: number
  produceStepEventDetailId: string
}
export type ProduceEventSupportCardList = {
  list: ProduceEventSupportCard[]
}
export type ProduceExamAutoCardSelectEvaluation = {
  type: penum.ExamPlayType
  examEffectType: penum.ProduceExamEffectType
  remainingTerm: number
  evaluationType: penum.ProduceExamAutoCardSelectEvaluationType
  evaluation: number
}
export type ProduceExamAutoCardSelectEvaluationList = {
  list: ProduceExamAutoCardSelectEvaluation[]
}
export type ProduceExamAutoEvaluation = {
  type: penum.ExamPlayType
  examEffectType: penum.ProduceExamEffectType
  remainingTerm: number
  evaluationType: penum.ProduceExamAutoEvaluationType
  evaluation: number
  examStatusEnchantCoefficientPermil: number
}
export type ProduceExamAutoEvaluationList = {
  list: ProduceExamAutoEvaluation[]
}
export type ProduceExamAutoGrowEffectEvaluation = {
  type: penum.ExamPlayType
  examEffectType: penum.ProduceExamEffectType
  remainingTerm: number
  growEffectType: penum.ProduceCardGrowEffectType
  evaluation: number
  examStatusEnchantCoefficientPermil: number
}
export type ProduceExamAutoGrowEffectEvaluationList = {
  list: ProduceExamAutoGrowEffectEvaluation[]
}
export type ProduceExamAutoPlayCardEvaluation = {
  produceCardId: string
  remainingTerm: number
  evaluation: number
}
export type ProduceExamAutoPlayCardEvaluationList = {
  list: ProduceExamAutoPlayCardEvaluation[]
}
export type ProduceExamAutoResourceEvaluation = {
  type: penum.ExamPlayType
  resourceType: penum.ProduceResourceType
  resourceId: string
  remainingTerm: number
  evaluationType: penum.ProduceExamAutoEvaluationType
  addition: number
  multiplication: number
}
export type ProduceExamAutoResourceEvaluationList = {
  list: ProduceExamAutoResourceEvaluation[]
}
export type ProduceExamAutoTriggerEvaluation = {
  type: penum.ExamPlayType
  examStatusEnchantProduceExamTriggerId: string
  coefficientPermil: number
}
export type ProduceExamAutoTriggerEvaluationList = {
  list: ProduceExamAutoTriggerEvaluation[]
}
export type ProduceExamBattleConfig = {
  id: string
  turn: number
  vocal: number
  dance: number
  visual: number
  produceExamBattleScoreConfigId: string
  vocalExcellent: number
  danceExcellent: number
  visualExcellent: number
  vocalBad: number
  danceBad: number
  visualBad: number
}
export type ProduceExamBattleConfigList = {
  list: ProduceExamBattleConfig[]
}
export type ProduceExamBattleNpcGroup = {
  id: string
  number: number
  characterId: string
  produceExamBattleNpcMobId: string
  scoreMin: number
  scoreMax: number
  vocalPermil: number
  dancePermil: number
  visualPermil: number
  opScorePermil: number
  midScorePermil: number
  edScorePermil: number
}
export type ProduceExamBattleNpcGroupList = {
  list: ProduceExamBattleNpcGroup[]
}
export type ProduceExamBattleNpcMob = {
  id: string
  name: string
  assetId: string
}
export type ProduceExamBattleNpcMobList = {
  list: ProduceExamBattleNpcMob[]
}
export type ProduceExamBattleScoreConfig = {
  id: string
  parameter: number
  vocalPermil: number
  dancePermil: number
  visualPermil: number
}
export type ProduceExamBattleScoreConfigList = {
  list: ProduceExamBattleScoreConfig[]
}
export type ProduceExamEffect = {
  id: string
  effectType: penum.ProduceExamEffectType
  effectValue1: number
  effectValue2: number
  effectCount: number
  effectTurn: number
  targetProduceCardId: string
  targetUpgradeCount: number
  targetExamEffectType: penum.ProduceExamEffectType
  produceCardSearchId: string
  movePositionType: penum.ProduceCardMovePositionType
  pickRangeType: penum.ProducePickRangeType
  pickCountMin: number
  pickCountMax: number
  chainProduceExamEffectId: string
  produceExamStatusEnchantId: string
  produceCardStatusEnchantId: string
  produceCardGrowEffectIds: string[]
  effectGroupIds: string[]
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  customizeProduceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceExamEffectList = {
  list: ProduceExamEffect[]
}
export type ProduceExamGimmickEffectGroup = {
  id: string
  priority: number
  remainingTurnPermil: number
  startTurn: number
  remainingTurn: number
  fieldStatusType: penum.ProduceExamFieldStatusType
  fieldStatusValue: number
  fieldStatusCheckType: penum.ProduceExamTriggerCheckType
  produceExamEffectId: string
  isPositive: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceExamGimmickEffectGroupList = {
  list: ProduceExamGimmickEffectGroup[]
}
export type ProduceExamStatusEnchant = {
  id: string
  assetId: string
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  produceExamTriggerId: string
  produceExamEffectIds: string[]
}
export type ProduceExamStatusEnchantList = {
  list: ProduceExamStatusEnchant[]
}
export type ProduceExamTrigger = {
  id: string
  phaseTypes: penum.ProduceExamPhaseType[]
  phaseValues: number[]
  fieldStatusCheckTypes: penum.ProduceExamTriggerCheckType[]
  fieldStatusTypes: penum.ProduceExamFieldStatusType[]
  fieldStatusValues: number[]
  fieldStatusProduceCardSearchIds: string[]
  produceCardSearchId: string
  upperSearchCount: number
  lowerSearchCount: number
  cardMovePositionType: penum.ProduceCardMovePositionType
  effectTypes: penum.ProduceExamEffectType[]
  lessonType: penum.ProduceStepLessonType
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  playProduceDescriptions: pcommon.ProduceDescriptionSegment[]
  playEffectProduceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceExamTriggerList = {
  list: ProduceExamTrigger[]
}
export type ProduceGroup = {
  id: string
  name: string
  type: penum.ProduceType
  produceIds: string[]
  assetId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  failedProduceMemoryAssetId: string
  description: string
  isForceLiveCommon: boolean
  disableForceLiveCommonEndingLiveType: penum.ProduceLiveType
  order: number
}
export type ProduceGroupList = {
  list: ProduceGroup[]
}
export type ProduceGroupLiveCommon = {
  characterId: string
  produceGroupId: string
  type: penum.ProduceLiveType
  musicId: string
  needForceLiveCommonIdolCard: boolean
  unlockConditionSetId: string
  thumbnailAssetId: string
  environmentAssetId: string
  timelineAssetId: string
  motionAssetIds: string[]
  liveMusicAssetId: string
  beforeAdvAssetId: string
  afterAdvAssetId: string
}
export type ProduceGroupLiveCommonList = {
  list: ProduceGroupLiveCommon[]
}
export type ProduceHighScore = {
  id: string
  name: string
  order: number
}
export type ProduceHighScoreList = {
  list: ProduceHighScore[]
}
export type ProduceItem = {
  id: string
  assetId: string
  rarity: penum.ProduceItemRarity
  name: string
  planType: penum.ProducePlanType
  fireLimit: number
  produceTriggerId: string
  produceTriggerIds: string[]
  produceItemEffectIds: string[]
  skills: ProduceItem_Skill[]
  libraryHidden: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
  evaluation: number
  isExamEffect: boolean
  originIdolCardId: string
  originSupportCardId: string
  isUpgraded: boolean
  effectGroupIds: string[]
  isChallenge: boolean
  viewStartTime: string
  isLimited: boolean
  order: string
}
type ProduceItem_Skill = {
  produceTriggerId: string
  produceItemEffectId: string
}
export type ProduceItemChallengeGroup = {
  id: string
  produceItemId: string
  lessonLimitUpScore: number
}
export type ProduceItemChallengeGroupList = {
  list: ProduceItemChallengeGroup[]
}
export type ProduceItemEffect = {
  id: string
  effectType: penum.ProduceItemEffectType
  effectTurn: number
  effectCount: number
  produceEffectId: string
  produceExamStatusEnchantId: string
}
export type ProduceItemEffectList = {
  list: ProduceItemEffect[]
}
export type ProduceItemList = {
  list: pcommon.ProduceItem[]
}
export type ProduceItemSimulation = {
  produceItemSimulationGroupId: string
  produceItemId: string
}
export type ProduceItemSimulationGroup = {
  id: string
  name: string
}
export type ProduceItemSimulationGroupList = {
  list: ProduceItemSimulationGroup[]
}
export type ProduceItemSimulationList = {
  list: ProduceItemSimulation[]
}
export type ProduceList = {
  list: Produce[]
}
export type ProduceLive = {
  musicId: string
  type: penum.ProduceLiveType
  unlockConditionSetId: string
  thumbnailAssetId: string
  environmentAssetId: string
  timelineAssetId: string
  beforeAdvAssetId: string
  afterAdvAssetId: string
  liveMusicAssetId: string
  motionAssetIds: string[]
}
export type ProduceLiveList = {
  list: ProduceLive[]
}
export type ProduceNavigation = {
  id: string
  number: number
  description: string
}
export type ProduceNavigationList = {
  list: ProduceNavigation[]
}
export type ProduceResultMotion = {
  characterId: string
  liveType: penum.ProduceLiveType
  number: number
  motionAssetId: string
  facialAssetId: string
  voiceAssetId: string
  produceGroupIds: string[]
}
export type ProduceResultMotionList = {
  list: ProduceResultMotion[]
}
export type ProduceScheduleBackground = {
  locationType: penum.ProduceScheduleLocationType
  backgroundAssetId: string
  sceneLayoutId: string
  monitorMovieId: string
  produceGroupIds: string[]
}
export type ProduceScheduleBackgroundList = {
  list: ProduceScheduleBackground[]
}
export type ProduceScheduleMotion = {
  characterId: string
  locationType: penum.ProduceScheduleLocationType
  staminaMotionType: penum.ProduceScheduleStaminaMotionType
  motionType: penum.ProduceScheduleMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type ProduceScheduleMotionList = {
  list: ProduceScheduleMotion[]
}
export type ProduceSetting = {
  id: string
  initialProducePoint: number
  produceDrinkPossessLimit: number
  refreshStaminaRecoveryPermil: number
  customizeProduceCardCount: number
  stepSkipStaminaRecoveryPermil: number
  beforeAuditionRefreshStaminaRecoveryPermil: number
  stepCustomizeStartAlertProducePointThreshold: number
  examStartAlertStaminaThreshold: number
  continueCount: number
  produceAuditionTrendAssessmentPermil: number
}
export type ProduceSettingList = {
  list: ProduceSetting[]
}
export type ProduceSkill = {
  id: string
  level: number
  rarity: penum.SkillRarity
  tag: string
  planType: penum.ProducePlanType
  activationCount: number
  produceEffectId1: string
  produceTriggerId1: string
  activationRatePermil1: number
  produceEffectId2: string
  produceTriggerId2: string
  activationRatePermil2: number
  produceEffectId3: string
  produceTriggerId3: string
  activationRatePermil3: number
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceSkillList = {
  list: ProduceSkill[]
}
export type ProduceStartMotion = {
  characterId: string
  motionType: penum.ProduceStartMotionType
  number: number
  motionAssetId: string
  facialAssetId: string
  voiceAssetId: string
}
export type ProduceStartMotionList = {
  list: ProduceStartMotion[]
}
export type ProduceStepAuditionCharacter = {
  characterId: string
  stepType: penum.ProduceStepType
  number: number
  successNextIdolAuditionRank: number
  failureNextIdolAuditionRank: number
  auditionSelectHeaderSilhouetteAssetId: string
}
export type ProduceStepAuditionCharacterList = {
  list: ProduceStepAuditionCharacter[]
}
export type ProduceStepAuditionDifficulty = {
  id: string
  produceId: string
  stepType: penum.ProduceStepType
  number: number
  rankThreshold: number
  parameterBaseLine: number
  baseScore: number
  forceEndScore: number
  produceExamBattleNpcGroupId: string
  produceExamBattleConfigId: string
  produceExamGimmickEffectGroupId: string
  auditionType: penum.ProduceStepAuditionType
  isUnlockAnimation: boolean
  voteCountBaseLine: number
  dearnessLevel: number
  voteCount: number
}
export type ProduceStepAuditionDifficultyList = {
  list: ProduceStepAuditionDifficulty[]
}
export type ProduceStepAuditionMotion = {
  characterId: string
  stepType: penum.ProduceStepType
  motionType: penum.ProduceStepAuditionMotionType
  number: number
  facialAssetId: string
  bodyAssetId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
  produceGroupIds: string[]
  auditionType: penum.ProduceStepAuditionType
}
export type ProduceStepAuditionMotionList = {
  list: ProduceStepAuditionMotion[]
}
export type ProduceStepEventDetail = {
  id: string
  suggestionType: penum.ProduceEventSuggestionType
  produceStoryId: string
  produceStoryGroupId: string
  produceEffectIds: string[]
  produceStepEventSuggestionIds: string[]
  supportCardId: string
  eventType: penum.ProduceEventType
  isBusinessExcellent: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceStepEventDetailList = {
  list: ProduceStepEventDetail[]
}
export type ProduceStepEventSuggestion = {
  id: string
  producePoint: number
  stamina: number
  produceCardId: string
  produceCardUpgradeCount: number
  produceEffectIds: string[]
  stepType: penum.ProduceStepType
  stepId: string
  successProbabilityPermyriad: number
  successProduceEffectIds: string[]
  successStepType: penum.ProduceStepType
  successStepId: string
  failProduceEffectIds: string[]
  failStepType: penum.ProduceStepType
  failStepId: string
  alwaysSuccessful: boolean
  produceEffectFireStep: number
  isCampaign: boolean
  produceDescriptions: pcommon.ProduceDescriptionSegment[]
}
export type ProduceStepEventSuggestionList = {
  list: ProduceStepEventSuggestion[]
}
export type ProduceStepFanPresentMotion = {
  characterId: string
  motionType: penum.ProduceStepFanPresentMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type ProduceStepFanPresentMotionList = {
  list: ProduceStepFanPresentMotion[]
}
export type ProduceStepLesson = {
  id: string
  name: string
  produceStepLessonLevelId: string
}
export type ProduceStepLessonLevel = {
  id: string
  progressLevel: number
  limitTurn: number
  successThreshold: number
  resultTargetValueLimit: number
}
export type ProduceStepLessonLevelList = {
  list: ProduceStepLessonLevel[]
}
export type ProduceStepLessonList = {
  list: ProduceStepLesson[]
}
export type ProduceStepSelfLesson = {
  id: string
  progressLevel: number
  stamina: number
  parameter: number
}
export type ProduceStepSelfLessonList = {
  list: ProduceStepSelfLesson[]
}
export type ProduceStepSelfLessonMotion = {
  characterId: string
  stepType: penum.ProduceStepType
  number: number
  motionAssetId: string
  voiceAssetId: string
  bgmAssetId: string
  sceneLayoutId: string
  cameraId: string
  propAssetIds: string[]
  disableLipSync: boolean
}
export type ProduceStepSelfLessonMotionList = {
  list: ProduceStepSelfLessonMotion[]
}
export type ProduceStepTransition = {
  characterId: string
  stepType: penum.ProduceStepType
  stepPhaseType: penum.ProduceStepPhaseType
  number: number
  costumeHeadId: string
  costumeId: string
  advAssetId: string
  voiceAssetId: string
  produceGroupId: string
}
export type ProduceStepTransitionList = {
  list: ProduceStepTransition[]
}
export type ProduceStory = {
  id: string
  type: penum.ProduceStoryType
  title: string
  advAssetId: string
  produceEventHintProduceConditionDescriptions: string[]
  viewConditionSetId: string
  unlockConditionSetId: string
  isBusinessExcellent: boolean
  order: number
}
export type ProduceStoryGroup = {
  id: string
  characterId: string
  produceStoryId: string
}
export type ProduceStoryGroupList = {
  list: ProduceStoryGroup[]
}
export type ProduceStoryList = {
  list: ProduceStory[]
}
export type ProduceTrigger = {
  id: string
  phaseType: penum.ProducePhaseType
}
export type ProduceTriggerList = {
  list: ProduceTrigger[]
}
export type ProduceWeekMotion = {
  characterId: string
  number: number
  costumeHeadId: string
  costumeId: string
  advAssetId: string
  voiceAssetId: string
}
export type ProduceWeekMotionList = {
  list: ProduceWeekMotion[]
}
export type ProducerLevel = {
  level: number
  totalExp: number
  unlockTargets: ProducerLevel_UnlockTarget[]
  reward: pcommon.Reward
  bonusRewards: pcommon.Reward[]
}
type ProducerLevel_UnlockTarget = {
  type: penum.ProducerLevelUnlockType
  id: string
  quantity: number
}
export type ProducerLevelList = {
  list: ProducerLevel[]
}
export type PvpRateCommonProduceCard = {
  id: string
  planType: penum.ProducePlanType
  produceCards: pcommon.ProduceCard[]
}
export type PvpRateCommonProduceCardList = {
  list: PvpRateCommonProduceCard[]
}
export type PvpRateConfig = {
  id: string
  description: string
  vocal: number
  dance: number
  visual: number
  examSettingId: string
  produceExamBattleScoreConfigId: string
  examBattleFirstRankBonusPermil: number
  pvpRateCommonProduceCardId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  startTimelineInitialTimePermil: number
  topAssetId: string
  stages: PvpRateConfig_Stage[]
}
type PvpRateConfig_Stage = {
  stageType: penum.PvpRateStageType
  planType: penum.ProducePlanType
  turn: number
  produceItemId: string
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  bgmAssetId: string
  startTimelineAssetId: string
  examTimelineAssetId: string
}
export type PvpRateConfigList = {
  list: PvpRateConfig[]
}
export type PvpRateMotion = {
  characterId: string
  motionType: penum.PvpRateMotionType
  number: number
  facialAssetId: string
  bodyAssetId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type PvpRateMotionList = {
  list: PvpRateMotion[]
}
export type PvpRateUnitSlotUnlock = {
  grade: penum.PvpRateGrade
  slotCountPerStage: number[]
}
export type PvpRateUnitSlotUnlockList = {
  list: PvpRateUnitSlotUnlock[]
}
export type ResultGradePattern = {
  type: penum.ResultGradeType
  grade: penum.ResultGrade
  threshold: number
}
export type ResultGradePatternList = {
  list: ResultGradePattern[]
}
export type Rule = {
  type: penum.RuleType
  platformType: penum.PlatformType
  number: number
  html: string
}
export type RuleList = {
  list: Rule[]
}
export type SeminarExamTransition = {
  examEffectType: penum.ProduceExamEffectType
  isLessonInt: number
  description: string
  seminarExamGroupId: string
  seminarExamId: string
  seminarExamGroupName: string
  seminarExamName: string
  produceIds: string[]
  rewards: pcommon.Reward[]
}
export type SeminarExamTransitionList = {
  list: SeminarExamTransition[]
}
export type Setting = {
  id: string
  giftDefaultLimitCount: number
  giftHistoryDefaultLimitCount: number
  meishiLimitCount: number
  meishiObjectLimitCount: number
  meishiFolderLimitCount: number
  newLabelTTL: number
  workSkipLimit: number
  workSkipConsumeMinutes: number
  profileBirthdayUpdateIntervalDays: number
  resetTimingHour: number
  resetTimingMinute: number
  resetTimingWeek: string
  resetTimingDay: number
  initialUserMeishiBaseAssetID: string
  rosterIgnoreReportDearnessLevels: number[]
  memoryLimitCount: number
  photoLimitCount: number
  actionPointRecoveryMinutes: number
  actionPointMaxValue: number
  moneyHomeDisplayPermil: number
  moneyReceivableMinimumMinutes: number
  workExcellentRewardQuantityCoefficientPermil: number
  fanCountLimit: string
  workFineCharacterMaxCountInDay: number
  workFineProbabilityPermil: number
  workFineFixDays: number
  friendBaseFollowLimitCount: number
  friendFollowerLimitCount: number
  friendCoinMaxDailyAccumulationCount: number
  friendCoinSupportCardRentalRewardQuantity: number
  friendCoinMemoryRentalRewardQuantity: number
  memoryPowerParameterCoefficientPermil: number
  memoryPowerStaminaCoefficientPermil: number
  memoryPowerProduceResourceEvaluationCoefficientPermil: number
  seminarExamSettingID: string
  initialUserName: string
  towerExamSettingID: string
  coinGashaNoticeDrawCount: number
  jewelShopID: string
  missionPassPointExchangeJewel: number
  officialXURL: string
  iosFaqURL: string
  androidFaqURL: string
  initialAchievementID: string
  inviteUserActiveMaxCount: number
  invitationEnterCodeRewardJewelQuantity: number
  invitationEnterCodeRewardProvideConditionSetID: string
  iosInquiryURL: string
  androidInquiryURL: string
  invitationEnterCodeConditionSetID: string
  userDeleteInquiryURL: string
  invitationNoticeID: string
  banWarningMessage: string
  seminarInitialParameter: number
  memoryCreateAbilityRToSsrPermil: number
  memoryCreateAbilitySrToSsrPermil: number
  memoryCreateProduceCardSrToSsrPermil: number
  memoryCreateExamBattleProduceCardSrToSsrPermil: number
  musicHotDisplayCount: number
  homeDailyMissionGroupID: string
  homeWeeklyMissionGroupID: string
  memoryCreateParameterSmall: number
  memoryCreateParameterMiddle: number
  memoryCreateParameterLarge: number
  towerViewConditionSetID: string
  seminarViewConditionSetID: string
  storyEventTipsAssetIDs: string[]
  storyEventPointLimit: number
  seminarGuidanceViewConditionSetID: string
  officialWebSiteURL: string
  iPPortalWebSiteURL: string
  photoNameLengthLimit: number
  homeEventEndTimeDisplayHour: number
  idolCardPieceExchangeItemID: string
  storyEventMainStoryTipsAssetIDs: string[]
  officialDiscordURL: string
  officialYouTubeIdolMasterURL: string
  officialYouTubeHatsuBoshiURL: string
  storyEventGuildMissionTipAssetIDs: string[]
  photoPoseWaitVoicePlayIntervalSeconds: number
  photoBackgroundDefaultBGMAssetID: string
  photoMaxShootingCount: number
  photoAutoShootingCount: number
  meishiEditCustomUnlockConditionSetID: string
  photoIdolViewConditionSetID: string
  gvgRaidScoreEffectMiddleThreshold: number
  gvgRaidScoreEffectLargeThreshold: number
  gvgRaidAuditionScoreUpMiddle: number
  gvgRaidAuditionScoreUpLarge: number
  photoFacialViewConditionSetID: string
  memoryReshootingValidateIdolCardTrueEndConditionSetID: string
  gashaAnimationLogicSwitchConditionSetID: string
  meishiEditCustomUpdateUnlockConditionSetID: string
  dmmGamesFaqURL: string
  dmmGamesInquiryURL: string
  produceDailyMemoryRentalLimit: number
  produceDailyFreeContinueCount: number
  produceContinueItemID: string
  produceStartShopWarningProducePointQuantity: number
  produceParameterOutGameDisplayLimit: number
  produceParameterInGameDisplayLimit: number
  producePointLimit: number
  produceMaxStaminaLimit: number
  produceCardLimitCount: number
  produceRankingDisplayCount: number
  produceAuditionScoreUpMiddle: number
  produceAuditionScoreUpLarge: number
  produceExamBattleScorePenaltyMinPermil: number
  produceExamBattleScorePenaltyMaxPermil: number
  produceSupportCardRecommendLevelCoefficientPermils: number[]
  produceSupportCardRecommendTypeNegativeCoefficientPermil: number
  producePictureBookLiveProduceGroupID: string
  produceRevealSpLessonStepCount: number
  produce3DTapSkipConditionSetID: string
  produceLessonParameterUpMiddle: number
  produceLessonParameterUpLarge: number
  produceExamProduceCardSuggestMinutes: number
  produceScheduleSelectPlaceStaminaThreshold: number
  produceMemoryRerollCount: number
  produceDeckNameLengthLimit: number
  produceDescriptionProduceStepCategoryEnable: boolean
  produceCardEffectCancelEnable: boolean
  gashaPickupStoryCampaignCharacterDearnessLevel: number
  gashaAnimationReversalSsrPermil: number
  gashaAnimationReversalPickUpProduceIdolSsrPermil: number
  tutorialSetNameAdvIndex: number
  tutorialIdolCardSkinSelectRewardID: string
  shopPurchasableLimitAmountThreshold1: number
  shopPurchasableLimitAmountThreshold2: number
  shopPurchaseAlertThreshold: number
  jewelMaxQuantityForPaid: number
  jewelMaxQuantityForFree: number
  shopPurchasableLimitAgeThreshold1: number
  shopPurchasableLimitAgeThreshold2: number
  guildMemberLimitCount: number
  guildJoinRequestLimitCount: number
  guildJoinRequestReceiveLimitCount: number
  guildRestrictJoinHour: number
  guildRestrictEstablishHour: number
  guildRestrictDonationRequestHour: number
  guildDonationRequestReceiveMaxQuantity: number
  guildDonationLimitCount: number
  guildNameLengthLimit: number
  guildDescriptionLengthLimit: number
  guildLeaderMessageLengthLimit: number
  profileNameLengthLimit: number
  profileCommentLengthLimit: number
  pvpRateSameCharacterDeckConditionSetID: string
  pvpRateMemoryRecommendParameterCoefficientPermil: number
  pvpRateMemoryRecommendStaminaCoefficientPermil: number
  pvpRateMemoryRecommendProduceCardCoefficientPermil: number
  pvpRateMemoryRecommendProduceItemCoefficientPermil: number
  pvpRateExamBattleAllSkipUnlockConditionSetID: string
  pvpRateRehearsalViewConditionSetID: string
  pvpRateRankingDisplayCount: number
  examBattleSubMemoryParameterPermil: number
  examBattleSubMemoryStaminaPermil: number
  examBattleConditionThresholdMultipleScore: number
  pushDailyMissionNotifyHour: number
  pushDailyMissionNotifyMinutes: number
  pushDailyMissionDoNotNotifyNoLoginDay: number
  pushNoLoginNotifyLatestIntervalHour: number
  pushPvpRateRemainingPlayCountNotifyHour: number
  pushPvpRateRemainingPlayCountNotifyMinutes: number
  pushPvpRateRemainingPlayCountDoNotNotifyNoLoginDay: number
}
export type SettingList = {
  list: Setting[]
}
export type Shop = {
  id: string
  type: penum.ShopType
  name: string
  resetTimingType: penum.ResetTimingType
  resetHour: number
  resetMinute: number
  resetWeekday: penum.Weekday
  resetDay: number
  startTime: string
  endTime: string
  order: number
}
export type ShopItem = {
  id: string
  shopId: string
  name: string
  labelTypes: penum.ShopItemLabelType[]
  assetId: string
  shopProductId: string
  totalJewelQuantity: number
  paidOnlyJewelQuantity: number
  rewards: pcommon.Reward[]
  viewConditionSetId: string
  unlockConditionSetId: string
  resetTimingType: penum.ResetTimingType
  resetHour: number
  resetMinute: number
  resetWeekday: penum.Weekday
  resetDay: number
  purchaseLimit: number
  consumptionResourceType: penum.ResourceType
  consumptionResourceId: string
  consumptionResourceQuantity: number
  startTime: string
  endTime: string
  order: number
}
export type ShopItemList = {
  list: ShopItem[]
}
export type ShopList = {
  list: Shop[]
}
export type ShopProduct = {
  id: string
  appStoreProductId: string
  googlePlayStoreProductId: string
  dmmGamesProductId: string
  jewel: number
  priceJpy: number
}
export type ShopProductList = {
  list: ShopProduct[]
}
export type Story = {
  id: string
  type: penum.StoryType
  characterId: string
  title: string
  thumbnailAssetId: string
  advAssetId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  reward: pcommon.Reward
  previousStoryId: string
  order: number
}
export type StoryEvent = {
  id: string
  title: string
  storyEventType: penum.StoryEventType
  titleAssetId: string
  bannerAssetId: string
  storyGroupId: string
  idolCardSkinBeforeAssetId: string
  idolCardSkinAfterAssetId: string
  order: number
}
export type StoryEventList = {
  list: StoryEvent[]
}
export type StoryGroup = {
  id: string
  storyType: penum.StoryType
  storyEventType: penum.StoryEventType
  isCampaign: boolean
  title: string
  headerAssetId: string
  storyThumbnailAssetId: string
  viewConditionSetId: string
  characterId: string
  dearnessLevelMin: number
  dearnessLevelMax: number
  storyIds: string[]
  storyEventId: string
  order: number
}
export type StoryGroupList = {
  list: StoryGroup[]
}
export type StoryList = {
  list: Story[]
}
export type SupportCard = {
  id: string
  characterIds: string[]
  name: string
  type: penum.SupportCardType
  planType: penum.ProducePlanType
  rarity: penum.SupportCardRarity
  assetId: string
  supportCardLevelId: string
  supportCardLevelLimitId: string
  produceStoryIds: string[]
  displayPositionX: number
  displayPositionY: number
  displayScale: number
  exchangeReward: pcommon.Reward
  isLimited: boolean
  produceCardUpgradePermil: number
  upgradeProduceCardSearchId: string
  produceCardUpgradeLessonParameterType: penum.ProduceParameterType
  gashaSupportAnimationNumber: number
  upgradeProduceCardProduceDescriptions: pcommon.ProduceDescriptionSegment[]
  viewStartTime: string
  order: string
}
export type SupportCardBonus = {
  rarity: penum.SupportCardRarity
  level: number
  bonusPermyriad: number
}
export type SupportCardBonusList = {
  list: SupportCardBonus[]
}
export type SupportCardFlavor = {
  supportCardId: string
  number: number
  characterIds: string[]
  text: string
  voiceAssetId: string
}
export type SupportCardFlavorList = {
  list: SupportCardFlavor[]
}
export type SupportCardLevel = {
  id: string
  level: number
  totalExp: number
}
export type SupportCardLevelLimit = {
  id: string
  rank: penum.SupportCardLevelLimitRank
  levelLimit: number
}
export type SupportCardLevelLimitList = {
  list: SupportCardLevelLimit[]
}
export type SupportCardLevelList = {
  list: SupportCardLevel[]
}
export type SupportCardList = {
  list: pcommon.SupportCard[]
}
export type SupportCardProduceSkillLevelAssist = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type SupportCardProduceSkillLevelAssistList = {
  list: SupportCardProduceSkillLevelAssist[]
}
export type SupportCardProduceSkillLevelDance = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type SupportCardProduceSkillLevelDanceList = {
  list: SupportCardProduceSkillLevelDance[]
}
export type SupportCardProduceSkillLevelVisual = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type SupportCardProduceSkillLevelVisualList = {
  list: SupportCardProduceSkillLevelVisual[]
}
export type SupportCardProduceSkillLevelVocal = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type SupportCardProduceSkillLevelVocalList = {
  list: SupportCardProduceSkillLevelVocal[]
}
export type SupportCardSimulation = {
  supportCardSimulationGroupId: string
  supportCardId: string
}
export type SupportCardSimulationGroup = {
  id: string
  name: string
}
export type SupportCardSimulationGroupList = {
  list: SupportCardSimulationGroup[]
}
export type SupportCardSimulationList = {
  list: SupportCardSimulation[]
}
export type Terms = {
  type: penum.TermsType
  name: string
  url: string
}
export type TermsList = {
  list: Terms[]
}
export type Tips = {
  id: string
  type: penum.TipsType
  title: string
  description: string
  characterId: string
  mediaId: string
  viewAreaType: penum.ViewAreaType
  viewConditionSetId: string
  startTime: string
  endTime: string
}
export type TipsList = {
  list: Tips[]
}
export type TitleAsset = {
  id: string
  order: number
  number: number
  noLoop: boolean
  movieAssetId: string
  bgmAssetId: string
  conditionSetId: string
  startTime: string
  endTime: string
  priority: number
}
export type TitleAssetList = {
  list: TitleAsset[]
}
export type TitleVoice = {
  voiceAssetId: string
  startTime: string
  endTime: string
}
export type TitleVoiceList = {
  list: TitleVoice[]
}
export type Tower = {
  id: string
  characterId: string
  title: string
  viewConditionSetId: string
  unlockConditionSetId: string
  achievementId: string
  order: number
}
export type TowerLayer = {
  towerId: string
  number: number
  maxSubMemoryCount: number
  viewConditionSetId: string
  unlockConditionSetId: string
  bgmAssetId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  examTimelineAssetId: string
}
export type TowerLayerExam = {
  towerId: string
  number: number
  examEffectType: penum.ProduceExamEffectType
  parameterBaseLine: number
  baseScore: number
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  produceExamBattleConfigId: string
  produceExamBattleNpcGroupId: string
}
export type TowerLayerExamList = {
  list: TowerLayerExam[]
}
export type TowerLayerList = {
  list: TowerLayer[]
}
export type TowerLayerRank = {
  towerId: string
  number: number
  rank: number
  examBattleRank: number
  produceExamTriggerIds: string[]
  produceExamTriggerCounts: number[]
}
export type TowerLayerRankList = {
  list: TowerLayerRank[]
}
export type TowerList = {
  list: Tower[]
}
export type TowerTotalClearRankReward = {
  rank: number
  reward: pcommon.Reward
  isFeature: boolean
}
export type TowerTotalClearRankRewardList = {
  list: TowerTotalClearRankReward[]
}
export type Tutorial = {
  tutorialType: penum.TutorialType
  idolCardId: string
  step: number
  subStep: number
  navigationType: penum.TutorialNavigationType
  navigationPositionType: penum.TutorialNavigationPositionType
  title: string
  texts: string[]
  assetIds: string[]
  advAssetId: string
  tutorialProduceCommandType: penum.TutorialProduceCommandType
}
export type TutorialCharacterVoice = {
  characterId: string
  type: penum.TutorialCharacterVoiceType
  number: number
  assetId: string
}
export type TutorialCharacterVoiceList = {
  list: TutorialCharacterVoice[]
}
export type TutorialList = {
  list: Tutorial[]
}
export type TutorialProduce = {
  tutorialType: penum.TutorialType
  idolCardId: string
  produceCardIds: string[]
  examSettingId: string
  produceSettingId: string
  idolCardParameterGrowthLimit: number
  produceNavigationNormalId: string
  produceNavigationAuditionId: string
  musicId: string
  environmentAssetId: string
  timelineAssetId: string
  memoryGiftId: string
}
export type TutorialProduceList = {
  list: TutorialProduce[]
}
export type TutorialProduceStep = {
  tutorialType: penum.TutorialType
  idolCardId: string
  stepNumber: number
  tutorialStep: number
  stepType: penum.ProduceStepType
  name: string
  produceStepRefresh: boolean
  produceStepLessonId: string
  progressLevel: number
  produceNavigationNumber: number
  rankThreshold: number
  parameterBaseLine: number
  baseScore: number
  forceEndScore: number
  produceExamBattleNpcGroupId: string
  produceExamBattleConfigId: string
  produceExamGimmickEffectGroupId: string
}
export type TutorialProduceStepList = {
  list: TutorialProduceStep[]
}
export type Voice = {
  characterId: string
  page: string
  voiceAssetIds: string[]
}
export type VoiceGroup = {
  id: string
  voiceAssetId: string
  title: string
  facialAssetId: string
  bodyAssetId: string
  order: number
}
export type VoiceGroupList = {
  list: VoiceGroup[]
}
export type VoiceList = {
  list: Voice[]
}
export type VoiceRoster = {
  characterId: string
  assetId: string
  title: string
  type: penum.VoicePlayScreenType
  conditionSetId: string
  produceGroupId: string
  order: number
}
export type VoiceRosterList = {
  list: VoiceRoster[]
}
export type Work = {
  type: penum.WorkType
  name: string
  unlockConditionSetId: string
  rewardResourceType: penum.ResourceType
  rewardResourceId: string
}
export type WorkLevel = {
  type: penum.WorkType
  level: number
  unlockConditionSetId: string
}
export type WorkLevelList = {
  list: WorkLevel[]
}
export type WorkLevelReward = {
  type: penum.WorkType
  durationMinutes: number
  level: number
  dearnessLevel: number
  rewardQuantity: number
  moneyRewardQuantity: number
  fanRewardQuantity: number
}
export type WorkLevelRewardList = {
  list: WorkLevelReward[]
}
export type WorkList = {
  list: Work[]
}
export type WorkMotion = {
  characterId: string
  motionType: penum.WorkMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type WorkMotionList = {
  list: WorkMotion[]
}
export type WorkSkip = {
  skipCount: number
  consumeJewelQuantity: number
}
export type WorkSkipList = {
  list: WorkSkip[]
}
export type WorkTime = {
  type: penum.WorkType
  durationMinutes: number
  viewConditionSetId: string
  unlockConditionSetId: string
}
export type WorkTimeList = {
  list: WorkTime[]
}
