// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';
import * as pmaster from './pmaster.d.ts';
import * as papicommon from './papicommon.d.ts';

export type LoginBonusConfirmResponse = {
  commonResponse: papicommon.Response
}
export type SystemCheckRequest = {
  idToken: string
}
export type TutorialProduceStepAuditionExamEndResponse = {
  commonResponse: papicommon.Response
}
export type ShopPurchaseJewelResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ShopPurchaseRequest = {
  shopItemId: string
}
export type GashaSelectPickupRequest = {
  gashaId: string
  pickupRewards: pcommon.Reward[]
}
export type MeishiReportXPostMissionResponse = {
  commonResponse: papicommon.Response
}
export type CostumeCheckRequest = {
  costumeHeadId: string
  costumeId: string
}
export type ProduceStepEventResponse = {
  success: boolean
  memoryRewardResults: pcommon.ProduceMemoryRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type StartupConfirmRequest = {
  notifications: StartupConfirmRequest_Notification[]
}
type StartupConfirmRequest_Notification = {
  startupNotificationId: string
  isSkip: boolean
}
export type TutorialProduceStepLessonEndResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupAllResponse = {
  groupResults: pcommon.RewardResult[]
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type GashaDrawRequest = {
  gashaId: string
  gashaButtonId: string
  drawCount: number
}
export type GashaRarityProbability = {
  rarity: number
  tenPermyriadProbability: number
}
export type ProduceStepLessonEndRequest = {
  produceUuid: string
  examEndResult: pcommon.ProduceExamEndResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type ProduceContinueResponse = {
  commonResponse: papicommon.Response
}
export type GuildUpdateLeaderMessageReactionRequest = {
  guildReactionIds: string[]
}
export type ProduceCheckProgressResponse = {
  isCurrentProduce: boolean
  needForceReset: boolean
  forceResetDescription: string
  produceUuid: string
  commonResponse: papicommon.Response
}
export type GiftListHistoryResponse = {
  userGiftHistories: GiftListHistoryResponse_UserGiftHistory[]
  commonResponse: papicommon.Response
}
type GiftListHistoryResponse_UserGiftHistory = {
  userGiftId: string
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
  message: string
  sentTime: string
  receivedTime: string
}
export type ProduceReadDearnessStoryResponse = {
  isFirst: boolean
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type PhotoUpdateNameRequest = {
  userPhotoId: string
  name: string
}
export type ShopTopResponse = {
  shopList: ShopTopResponse_Shop[]
  shopItemList: pmaster.ShopItem[]
  itemExchangeNoti: boolean
  dailyExchangeNoti: boolean
  coinGashaNoti: boolean
  startupNotifications: pcommon.StartupNotification[]
  commonResponse: papicommon.Response
}
type ShopTopResponse_Shop = {
  id: string
  endTime: string
  nextResetTime: string
  shopItems: pmaster.ShopItem[]
}
export type StoryReadRequest = {
  storyId: string
  isAuto: boolean
  isSkip: boolean
}
export type AuthAgreeTermsResponse = {
  commonResponse: papicommon.Response
}
export type HomeLoginResponse = {
  friendResult: HomeLoginResponse_FriendResult
  producerLevelUnlocks: pcommon.ProducerLevelUnlock[]
  commonResponse: papicommon.Response
}
type HomeLoginResponse_FriendResult = {
  receivedFriendCoinQuantity: number
  supportCardRentalCount: number
  memoryRentalCount: number
}
export type StoryEventTopResponse = {
  title: string
  titleAssetId: string
  gradationColor1: string
  gradationColor2: string
  backgroundAssetId: string
  sceneLayoutId: string
  sceneLayoutCollectionId: string
  bgmAssetId: string
  pointRewardBannerAssetId: string
  motions: StoryEventTopResponse_Motion[]
  storyEventType: penum.StoryEventType
  storyEventBonus: pcommon.StoryEventBonus
  storyGroupId: string
  missionGroupId: string
  dailyMissionGroupId: string
  missionDailyReleaseGroupId: string
  storySynopsis: string
  exchangeId: string
  boxGasha: pcommon.CoinGasha
  idolCardSkinBeforeAssetId: string
  idolCardSkinAfterAssetId: string
  maxIdolCardPotentialRank: penum.IdolCardPotentialRank
  consumptionItemId: string
  storyEventPointRewards: pcommon.StoryEventPointReward[]
  currentPoint: string
  startupNotifications: pcommon.StartupNotification[]
  startTime: string
  endTime: string
  closeTime: string
  commonResponse: papicommon.Response
}
type StoryEventTopResponse_Motion = {
  characterId: string
  conditionSetId: string
  motionType: penum.StoryEventMotionType
  costumeId: string
  costumeHeadId: string
  facialAssetId: string
  bodyAssetId: string
  voiceAssetId: string
  text: string
}
export type GuildMemberInfo = {
  profile: pcommon.SimpleProfile
  roleType: penum.GuildRoleType
  isFollowing: boolean
  isFollower: boolean
}
export type PvpRateUnitStageFormation = {
  stage: penum.PvpRateStageType
  slots: PvpRateUnitStageFormation_Slot[]
}
type PvpRateUnitStageFormation_Slot = {
  mainMemory: pcommon.Memory
  subMemory: pcommon.Memory
  supportBonusPermyriad: number
  isDefault: boolean
}
export type TowerCheckResponse = {
  isCurrentTower: boolean
  commonResponse: papicommon.Response
}
export type ExchangeGetRequest = {
  exchangeId: string
}
export type GashaGetSelectPickupProbabilityRequest = {
  gashaId: string
}
export type ProduceUseDrinkResponse = {
  effectResults: pcommon.ProduceEffectResult[]
}
export type PvpRateEndRequest = {
  stages: pcommon.ExamBattleAutoStageResult[]
}
export type TowerTopResponse = {
  towers: TowerTopResponse_Tower[]
  previousTotalClearRank: number
  nextTotalClearRank: number
  nextReward: pcommon.Reward
  commonResponse: papicommon.Response
}
type TowerTopResponse_Tower = {
  id: string
  layerCount: number
  hasLayerCountReward: boolean
}
export type ProduceUpdateMemoryDeck = {
  produceType: penum.ProduceType
  number: number
  userMemoryIds: string[]
  recommendType: penum.DeckRecommendType
}
export type PvpRateRankingUser = {
  profile: pcommon.SimpleProfile
  rank: number
  rate: number
  formations: PvpRateUnitStageFormation[]
}
export type LoginBonusCheckResponse = {
  list: LoginBonusCheckResponse_Info[]
  totalInfo: LoginBonusCheckResponse_TotalInfo
  startupNotifications: pcommon.StartupNotification[]
  commonResponse: papicommon.Response
}
type LoginBonusCheckResponse_Info = {
  type: penum.LoginBonusType
  name: string
  description: string
  titleAssetId: string
  backgroundAssetId: string
  startLoginBonusMotionId: string
  endLoginBonusMotionId: string
  openConditionSetId: string
  rewards: pcommon.Reward[]
  days: number
}
type LoginBonusCheckResponse_TotalInfo = {
  days: number
  nextDays: number
  startLoginBonusMotionId: string
  endLoginBonusMotionId: string
  reward: pcommon.Reward
  nextReward: pcommon.Reward
}
export type ProduceRankingTopResponse = {
  rankings: ProduceRankingTopResponse_Ranking[]
  commonResponse: papicommon.Response
}
type ProduceRankingTopResponse_Ranking = {
  idolCardId: string
  topRanks: ProduceRank[]
  selfHighestScore: number
  selfHighestRank: number
  selfHighestGrade: penum.ResultGrade
  selfHighestUserMemoryId: string
}
export type ShopItem = {
  shopId: string
  id: string
  purchasedCount: number
  unlocked: boolean
  noti: boolean
  labelTypes: penum.ShopItemLabelType[]
  endTime: string
  nextResetTime: string
  order: number
}
export type GuildSearchRequest = {
  searchByAutoApprove: boolean
  searchByManualApprove: boolean
  activityPolicyTypes: penum.GuildActivityPolicyType[]
  memberCountRangeTypes: penum.GuildSearchMemberCountRangeType[]
}
export type InvitationReceiveInvitationPointResponse = {
  list: InviteUser[]
  rewardResults: pcommon.RewardResult[]
  beforeThreshold: number
  commonResponse: papicommon.Response
}
export type MeishiDeleteResponse = {
  commonResponse: papicommon.Response
}
export type ExchangeResetRequest = {
  exchangeId: string
}
export type GashaDrawResult = {
  result: pcommon.RewardResult
  providedResult: pcommon.RewardResult
  cardBonusRewardResults: pcommon.RewardResult[]
  isPickup: boolean
}
export type StepUpGashaProbability = {
  step: number
  defaultGashaProbability: DefaultGashaProbability
}
export type InvitationEnterInvitationCodeRequest = {
  publicUserId: string
}
export type MissionReceivePassResponse = {
  commonResponse: papicommon.Response
}
export type ShopCheckPurchaseJewelResponse = {
  birthdayNotRegistered: boolean
  exceedMaxJewelQuantity: boolean
  exceedPurchaseThreshold: boolean
  exceedAlertThreshold: boolean
  isUnderage: boolean
  commonResponse: papicommon.Response
}
export type TowerUpdateMemoryDeckResponse = {
  commonResponse: papicommon.Response
}
export type MovieDeleteResponse = {
  commonResponse: papicommon.Response
}
export type GuildApproveJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type MissionExchangePassPointRequest = {
  missionPassId: string
  threshold: number
}
export type PvpRateGetHistoryRequest = {
  playTime: string
}
export type StoryUnlockRequest = {
  storyId: string
}
export type MemoryExchangeRequest = {
  userMemoryIds: string[]
}
export type SupportCardExchangeResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardUpgradeLevelLimitRankResponse = {
  commonResponse: papicommon.Response
}
export type MeishiReportXPostMissionRequest = {
  number: number
}
export type PvpRateStartRequest = {
  rivalType: penum.PvpRateRivalType
}
export type HomeSetCharactersRequest = {
  characters: HomeSetCharactersRequest_HomeCharacter[]
}
type HomeSetCharactersRequest_HomeCharacter = {
  homeType: penum.HomeType
  characterId: string
}
export type TutorialProduceStepPresentReceiveRequest = {
  positionNumber: number
  rewardIndexes: number[]
}
export type GashaDrawSelectPickupRequest = {
  gashaId: string
  gashaButtonId: string
}
export type GuildGetResponse = {
  info: GuildInfo
  commonResponse: papicommon.Response
}
export type GuildApproveJoinRequestRequest = {
  publicUserId: string
}
export type ProduceStepAuditionEndExamBattleRequest = {
  produceUuid: string
  result: pcommon.ExamBattleResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type TutorialProduceStepAuditionExamEndRequest = {
  rank: number
  score: number
  stamina: number
  produceCardIds: string[]
}
export type GashaExchangePointRequest = {
  gashaPointId: string
  number: number
}
export type AuthGetConsentResponse = {
  consents: Consent[]
  commonResponse: papicommon.Response
}
export type GashaDrawStepUpResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  nextGashaStepUp: pcommon.GashaStepUp
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type ProduceHighScoreReward = {
  score: number
  reward: pcommon.Reward
}
export type WorkTopResponse = {
  finishResults: WorkFinishResult[]
  commonResponse: papicommon.Response
}
export type TowerGetLayerResponse = {
  maxSubMemoryCount: number
  exams: TowerGetLayerResponse_Exam[]
  bgmAssetId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  examTimelineAssetId: string
  commonResponse: papicommon.Response
}
type TowerGetLayerResponse_Exam = {
  examEffectType: penum.ProduceExamEffectType
  parameterBaseLine: number
  baseScore: number
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  produceExamBattleConfigId: string
  produceExamBattleNpcGroupId: string
}
export type MeishiListResponse = {
  meishiList: MeishiListResponse_MeishiInfo[]
  commonResponse: papicommon.Response
}
type MeishiListResponse_MeishiInfo = {
  number: number
  order: number
  meishi: pcommon.Meishi
}
export type ProduceStepShopStartRequest = {
  produceUuid: string
}
export type ShopRegisterBirthdayRequest = {
  year: number
  month: number
  day: number
}
export type SupportCardEnhanceResponse = {
  commonResponse: papicommon.Response
}
export type WorkFinishResult = {
  type: penum.WorkType
  rewardResults: pcommon.RewardResult[]
  isExcellent: boolean
  isFined: boolean
}
export type GuildDismissRequest = {
  publicUserId: string
}
export type WorkStopResponse = {
  commonResponse: papicommon.Response
}
export type NoticeGetResponse = {
  info: NoticeInfo
  commonResponse: papicommon.Response
}
export type CoinGashaDrawResult = {
  result: pcommon.RewardResult
  providedResult: pcommon.RewardResult
  cardBonusRewardResults: pcommon.RewardResult[]
  isFeature: boolean
  isFeaturePickup: boolean
}
export type MeishiSetRequest = {
  number: number
}
export type TowerEndRequest = {
  seed: string
  result: pcommon.ExamBattleResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type IdolCardProbability = {
  idolCardSkinId: string
  tenPermyriadProbability: number
  rewards: pcommon.Reward[]
  isPickup: boolean
}
export type MeishiDeleteRequest = {
  number: number
}
export type AuthMigrateRequest = {
  onetimeToken: string
  publicUserId: string
}
export type ExchangeListResponse = {
  exchanges: ExchangeInfo[]
  commonResponse: papicommon.Response
}
export type GashaExpirePointResponse = {
  gashaPoints: GashaExpirePointResponse_GashaPoint[]
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
type GashaExpirePointResponse_GashaPoint = {
  gashaPointId: string
  name: string
  expirePoint: number
  reward: pcommon.Reward
  gashaBanners: GashaExpirePointResponse_GashaBanner[]
}
type GashaExpirePointResponse_GashaBanner = {
  gashaId: string
  bannerAssetId: string
  order: number
}
export type InvitationEnterInvitationCodeResponse = {
  commonResponse: papicommon.Response
}
export type AuthLinkBandaiNamcoIdRequest = {
  code: string
  force: boolean
}
export type IdolCardRarityProbability = {
  rarity: penum.IdolCardRarity
  tenPermyriadProbability: number
  probabilities: IdolCardProbability[]
}
export type InviteUser = {
  profile: pcommon.SimpleProfile
  friendStatusType: penum.FriendStatusType
  thresholdProducerLevel: number
  isReceivedAll: boolean
}
export type SeminarGetExamResponse = {
  groupId: string
  examId: string
  name: string
  idolCardId: string
  stepType: penum.ProduceStepType
  examBattleParameterTypes: penum.ProduceParameterType[]
  limitTurn: number
  successThreshold: number
  examBattleParameterBaseLine: number
  examBattleBaseScore: number
  produceExamGimmickEffectGroupId: string
  produceExamBattleNpcGroupId: string
  produceExamBattleConfigId: string
  startStamina: number
  startMaxStamina: number
  startBlock: number
  startResultTargetValue: number
  startProduceItemIds: string[]
  startProduceDrinkIds: string[]
  produceCards: pcommon.ProduceCard[]
  turnNavigations: SeminarGetExamResponse_TurnNavigation[]
  failureNavigations: SeminarGetExamResponse_FailureNavigation[]
  commonResponse: papicommon.Response
}
type SeminarGetExamResponse_TurnNavigation = {
  turn: number
  fieldStatusCheckType: penum.ProduceExamTriggerCheckType
  fieldStatusType: penum.ProduceExamFieldStatusType
  fieldStatusValue: number
  steps: SeminarGetExamResponse_TurnNavigationStep[]
}
type SeminarGetExamResponse_FailureNavigation = {
  produceExamTriggerId: string
  text1: string
  produceCards1: pcommon.ProduceCard[]
  text2: string
  produceCards2: pcommon.ProduceCard[]
  priority: number
}
type SeminarGetExamResponse_TurnNavigationStep = {
  navigationType: penum.TutorialNavigationType
  texts: string[]
  assetIds: string[]
}
export type ProduceUpdateSupportCardDeckRequest = {
  decks: ProduceUpdateSupportCardDeck[]
}
export type ShopRegisterPurchaseTransactionResponse = {
  transactionId: string
  commonResponse: papicommon.Response
}
export type TutorialProduceStartResponse = {
  commonResponse: papicommon.Response
}
export type ProduceUpdateMemoryDeckRequest = {
  decks: ProduceUpdateMemoryDeck[]
}
export type ItemUseActionPointRecoveryResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStepShopBuyResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  beforeProducePoint: number
  afterProducePoint: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceDiscardDrinkRequest = {
  produceUuid: string
  drinkIndexes: number[]
}
export type GuildSearchResponse = {
  list: GuildInfo[]
  commonResponse: papicommon.Response
}
export type MemoryUpdateProtectionResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateUpdateUserPvpRateUnitResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateRankReward = {
  upperRank: number
  lowerRank: number
  rewards: pcommon.Reward[]
}
export type ProduceViewPictureBookLiveRequest = {
  musicId: string
}
export type TutorialReadDearnessStoryRequest = {
  characterId: string
  dearnessLevel: number
  isAuto: boolean
  isSkip: boolean
}
export type ExchangeExecuteRequest = {
  exchangeItemId: string
  count: number
}
export type InvitationListInviteUserResponse = {
  list: InviteUser[]
  commonResponse: papicommon.Response
}
export type ProduceHighScoreCharacter = {
  characterId: string
  rank: number
  highScore: number
  rankRewards: ProduceHighScoreRankReward[]
}
export type ProfileUpdateCommentRequest = {
  comment: string
}
export type ProduceStepShopStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type GuildLeaveResponse = {
  commonResponse: papicommon.Response
}
export type ProfileUpdateBirthdayResponse = {
  commonResponse: papicommon.Response
}
export type ProduceResultRequest = {
  produceUuid: string
  isSkipLive: boolean
  manualPhotoCount: number
  isMemoryProtected: boolean
  memoryTagId: string
}
export type DefaultGashaProbability = {
  probability: GashaProbability
  fixProbability: GashaProbability
}
export type ShopPurchaseResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ShopCheckPurchaseJewelRequest = {
  shopItemId: string
}
export type PvpRateRival = {
  profile: pcommon.SimpleProfile
  rivalType: penum.PvpRateRivalType
  earnedRate: number
  isNpc: boolean
  formations: PvpRateUnitStageFormation[]
}
export type ProduceStepPresentReceiveResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type MeishiUnfollowResponse = {
  commonResponse: papicommon.Response
}
export type MemoryExchangeResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type StoryUnlockResponse = {
  commonResponse: papicommon.Response
}
export type StoryReadProduceStoryRequest = {
  produceStoryId: string
  isAuto: boolean
  isSkip: boolean
}
export type IdolCardUpgradePotentialRankResponse = {
  commonResponse: papicommon.Response
}
export type TowerUpdateMemoryDeckRequest = {
  towerId: string
  memoryIds: string[]
  recommendType: penum.DeckRecommendType
}
export type ShopRecoverPurchaseJewelRequest = {
  productId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
  storeTransactionId: string
}
export type NoticeUpdateDetailTimeRequest = {
  noticeId: string
}
export type ProfileUpdateSupportCardResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateUpdateUserPvpRateUnitRequest = {
  stageFormations: pcommon.PvpRateSetupUnitStageFormation[]
  recommendType: penum.DeckRecommendType
}
export type GuildEditDetailRequest = {
  name: string
  description: string
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  achievementId: string
}
export type ProfileUpdateNameRequest = {
  name: string
}
export type MemoryUpdateTagSettingRequest = {
  userMemoryId: string
  memoryTagId: string
}
export type ProduceUpdateMemoryDeckResponse = {
  commonResponse: papicommon.Response
}
export type ProduceViewPictureBookLiveResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateStartResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  selfFormations: PvpRateUnitStageFormation[]
  rival: PvpRateRival
  commonResponse: papicommon.Response
}
export type ExchangeItem = {
  id: string
  name: string
  description: string
  assetId: string
  isShowRecommendLabel: boolean
  exchangeLimit: number
  exchangedCount: number
  nextResetTime: string
  unlockConditionSetId: string
  unlocked: boolean
  noti: boolean
  reward: pcommon.Reward
  consumptionResources: ExchangeItem_ConsumptionResource[]
  order: number
}
type ExchangeItem_ConsumptionResource = {
  resourceQuantity: number
  count: number
}
export type GashaGetStepUpProbabilityRequest = {
  gashaId: string
}
export type ProduceRankingRequest = {
  produceGroupId: string
  idolCardId: string
}
export type AuthCreateResponse = {
  token: string
}
export type GuildRequestDonationResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStepPresentEndRequest = {
  produceUuid: string
}
export type WorkFinishResponse = {
  finishResults: WorkFinishResult[]
  commonResponse: papicommon.Response
}
export type GuildListDonationRequestResponse = {
  requestList: DonationRequest[]
  memberList: GuildMemberInfo[]
  commonResponse: papicommon.Response
}
export type AuthPrepareMigrationBandaiNamcoIdRequest = {
  code: string
}
export type MovieDeleteRequest = {
  userMovieIds: string[]
}
export type ProduceStepPresentStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceChangeCostumeResponse = {
  commonResponse: papicommon.Response
}
export type SupportCardExchangeRequest = {
  parameters: SupportCardExchangeRequest_Parameter[]
}
type SupportCardExchangeRequest_Parameter = {
  supportCardId: string
  quantity: number
}
export type TutorialProduceNextResponse = {
  beforeStamina: number
  afterStamina: number
  commonResponse: papicommon.Response
}
export type MediaPlayRequest = {
  mediaId: string
  isFirst: boolean
}
export type GuildTopResponse = {
  homeInfo: GuildTopResponse_HomeInfo
  list: GuildInfo[]
  joinRequestList: GuildInfo[]
  notificationType: penum.GuildNotificationType
  commonResponse: papicommon.Response
}
type GuildTopResponse_HomeInfo = {
  publicGuildId: string
  name: string
  achievement: pcommon.Achievement
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  description: string
  leaderMessage: string
  leaderMessageEditedTime: string
  leaderMessageBySystem: boolean
  isLeaderMessageUpdated: boolean
  leaderMessageReactionList: GuildReactionInfo[]
  memberList: GuildMemberInfo[]
  joinRequestList: GuildMemberInfo[]
  donationRequestList: DonationRequest[]
  receivedDonationInfo: GuildTopResponse_HomeInfo_ReceivedDonationInfo
}
type GuildTopResponse_HomeInfo_ReceivedDonationInfo = {
  guildDonationItemId: string
  donationList: GuildDonationInfo[]
  totalDonationCount: number
}
export type FriendListSuggestionResponse = {
  list: FriendInfo[]
  commonResponse: papicommon.Response
}
export type ProduceStepPresentReceiveRequest = {
  produceUuid: string
  positionNumber: number
  rewardIndexes: number[]
}
export type GashaListResponse = {
  gashas: pcommon.Gasha[]
  hasExpireGashaPoint: boolean
  commonResponse: papicommon.Response
}
export type ItemSellResponse = {
  commonResponse: papicommon.Response
}
export type ProduceNextResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepPresentStartRequest = {
  produceUuid: string
}
export type ProduceRerollSelectProduceCardRequest = {
  produceUuid: string
}
export type HomeListEventResponse = {
  events: pcommon.Event[]
  commonResponse: papicommon.Response
}
export type ProduceStartResponse = {
  produceUuid: string
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type PvpRateSeasonResult = {
  seasonStartTime: string
  seasonEndTime: string
  beforeGrade: penum.PvpRateGrade
  afterGrade: penum.PvpRateGrade
  rank: number
  rate: number
  rewards: pcommon.Reward[]
}
export type GuildChangeLeaderResponse = {
  commonResponse: papicommon.Response
}
export type AuthPrepareMigrationBandaiNamcoIdResponse = {
  publicUserId: string
  userName: string
  producerLevel: number
  onetimeToken: string
}
export type ProduceEndRequest = {
  produceUuid: string
  userMemoryId: string
  isDefaultImageMemory: boolean
}
export type StoryReadProduceStoryResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveResponse = {
  results: pcommon.RewardResult[]
  missionPointResults: pcommon.RewardResult[]
  masterAchievementProgressResults: MissionReceiveResponse_MasterAchievementProgressResult[]
  mainTaskResults: pmaster.Mission[]
  commonResponse: papicommon.Response
}
type MissionReceiveResponse_MasterAchievementProgressResult = {
  masterAchievementId: string
  beforeProgress: number
  afterProgress: number
  masterAchievementProgresses: MissionReceiveResponse_MasterAchievementProgress[]
}
type MissionReceiveResponse_MasterAchievementProgress = {
  achievementId: string
  beforeThreshold: number
  afterThreshold: number
  progress: number
}
export type CoinGashaResetBoxResponse = {
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type PhotoUpdateProtectionResponse = {
  commonResponse: papicommon.Response
}
export type ExchangeExecuteResponse = {
  exchangeItem: ExchangeItem
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type GuildCancelJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type TowerListLayerPlayerHistoriesResponse = {
  histories: pcommon.TowerLayerHistory[]
  commonResponse: papicommon.Response
}
export type TutorialReceiveIdolCardResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type AuthLoginResponse = {
  gameAuthToken: string
  retrySignInToken: string
  terms: AuthLoginResponse_Term[]
  consents: Consent[]
}
type AuthLoginResponse_Term = {
  type: penum.TermsType
  name: string
  url: string
}
export type MasterGetResponse = {
  masterTag: MasterGetResponse_MasterTag
  protoHash: string
}
type MasterGetResponse_MasterTag = {
  version: string
  masterTagPacks: MasterGetResponse_MasterTagPack[]
}
type MasterGetResponse_MasterTagPack = {
  type: string
  fileName: string
  fileSize: number
  cryptoKey: string
  downloadUrl: string
}
export type HomeConfirmBanWarningResponse = {
  commonResponse: papicommon.Response
}
export type TicketExchangeListItemsRequest = {
  ticketItemId: string
}
export type PvpRateInitializeResponse = {
  previousSeasonResult: PvpRateSeasonResult
  isChangedFormation: boolean
  commonResponse: papicommon.Response
}
export type ExchangeInfo = {
  id: string
  name: string
  exchangeType: penum.ExchangeType
  headerAssetId: string
  thumbnailAssetId: string
  thumbnailIconAssetId: string
  consumptionResourceType: penum.ResourceType
  consumptionResourceId: string
  jewelConsumptionCountId: string
  resetJewelQuantity: number
  manualResettable: boolean
  resetCount: number
  unlockConditionSetId: string
  unlocked: boolean
  noti: boolean
  startTime: string
  endTime: string
  nextResetTime: string
  items: ExchangeItem[]
  order: number
}
export type ProduceStepAuditionStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceRankingResponse = {
  ranks: ProduceRank[]
  selfRank: number
  selfScore: number
  selfGrade: penum.ResultGrade
  selfUserMemoryId: string
  commonResponse: papicommon.Response
}
export type TowerReceiveLayerCountRewardResponse = {
  result: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type GashaGetProbabilityRequest = {
  gashaId: string
}
export type ProduceEndBeforeLiveEvaluationResponse = {
  commonResponse: papicommon.Response
}
export type TowerReceiveLayerCountRewardRequest = {
  targetTowerId: string
  targetNumber: number
}
export type GuildEditLeaderMessageResponse = {
  commonResponse: papicommon.Response
}
export type FriendDeleteFollowerRequest = {
  publicUserIds: string[]
}
export type HomeEnterResponse = {
  homeBanners: pcommon.HomeBanner[]
  homeNavigations: pcommon.HomeNavigation[]
  featureMaintenances: HomeEnterResponse_FeatureMaintenance[]
  gashas: pcommon.Gasha[]
  pvpRateSeasonTop: papicommon.PvpRateSeasonTop
  events: pcommon.Event[]
  giftCount: number
  shopItemLabelType: penum.ShopItemLabelType
  homeShopNoti: boolean
  shopNoti: boolean
  guildNoti: boolean
  noticeNoti: boolean
  invitationNoti: boolean
  hasProduceCampaign: boolean
  hasExpireGashaPoint: boolean
  towerNoti: boolean
  commonResponse: papicommon.Response
}
type HomeEnterResponse_FeatureMaintenance = {
  type: penum.FeatureMaintenanceType
  targetIds: string[]
  startTime: string
  endTime: string
}
export type ProduceStepLessonStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type CoinGashaListResponse = {
  coinGashas: pcommon.CoinGasha[]
  commonResponse: papicommon.Response
}
export type GuildDissolveResponse = {
  commonResponse: papicommon.Response
}
export type MeishiSetResponse = {
  commonResponse: papicommon.Response
}
export type ProduceActivateEffectResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceReportGuildMissionRequest = {
  produceUuid: string
}
export type ProduceListRentalSupportCardResponse = {
  supportCards: ProduceListRentalSupportCardResponse_RentalSupportCard[]
  suggestionSupportCards: ProduceListRentalSupportCardResponse_RentalSupportCard[]
  npcSupportCards: ProduceListRentalSupportCardResponse_RentalSupportCard[]
  commonResponse: papicommon.Response
}
type ProduceListRentalSupportCardResponse_RentalSupportCard = {
  profile: pcommon.SimpleProfile
  supportCardId: string
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
  following: boolean
  followedBy: boolean
  isGuildMember: boolean
}
export type GashaGetProbabilityResponse = {
  probability: DefaultGashaProbability
  commonResponse: papicommon.Response
}
export type ItemExchangeIdolCardPieceRequest = {
}
export type GashaExchangePointResponse = {
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type FriendFollowResponse = {
  commonResponse: papicommon.Response
}
export type TutorialSetNameResponse = {
  commonResponse: papicommon.Response
}
export type WorkStartResponse = {
  commonResponse: papicommon.Response
}
export type FriendListResponse = {
  friendList: FriendInfo[]
  followerList: FriendInfo[]
  suggestionList: FriendInfo[]
  commonResponse: papicommon.Response
}
export type AuthLinkBandaiNamcoIdResponse = {
  success: boolean
  isSameAccountLinked: boolean
  publicUserId: string
  userName: string
  producerLevel: number
  commonResponse: papicommon.Response
}
export type TowerListLayersRequest = {
  towerId: string
}
export type GiftListRequest = {
  offset: number
}
export type GiftListResponse = {
  userGifts: GiftListResponse_UserGift[]
  count: number
  offset: number
  hasNext: boolean
  commonResponse: papicommon.Response
}
type GiftListResponse_UserGift = {
  userGiftId: string
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
  message: string
  limitTime: string
  createdAt: string
  isUnreceivable: boolean
}
export type GuildListJoinRequestResponse = {
  list: GuildInfo[]
  commonResponse: papicommon.Response
}
export type ProduceStartRequest = {
  produceGroupId: string
  produceId: string
  idolCardId: string
  supportCards: ProduceStartRequest_SupportCard[]
  memories: ProduceStartRequest_Memory[]
  produceBoostItemIds: string[]
  isChangeCostumeProduce: boolean
  isChangeCostumeLive: boolean
  isChangeCostumeTraining: boolean
  clientProduceUuid: string
}
type ProduceStartRequest_SupportCard = {
  supportCardId: string
  rentalPublicUserId: string
}
type ProduceStartRequest_Memory = {
  userMemoryId: string
  rentalPublicUserId: string
}
export type SupportCardUpgradeLevelLimitRankRequest = {
  supportCardId: string
  afterRank: penum.SupportCardLevelLimitRank
}
export type GashaGetPointExchangeRequest = {
  gashaPointId: string
}
export type GuildRequestDonationRequest = {
  guildDonationItemId: string
}
export type ShopRegisterBirthdayResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardUpgradePotentialRankRequest = {
  idolCardId: string
  afterRank: penum.IdolCardPotentialRank
}
export type FriendUnFollowRequest = {
  publicUserIds: string[]
}
export type IdolCardChangeSkinResponse = {
  commonResponse: papicommon.Response
}
export type PhotoUpdateNameResponse = {
  commonResponse: papicommon.Response
}
export type ProduceReadDearnessStoryRequest = {
  produceUuid: string
  isAuto: boolean
  isSkip: boolean
}
export type ProduceGrowthResult = {
  vocal: number
  dance: number
  visual: number
  growthRateBonusVocal: number
  growthRateBonusDance: number
  growthRateBonusVisual: number
}
export type MemoryUpdateProtectionRequest = {
  userMemoryId: string
  isProtected: boolean
}
export type ProduceStepAuditionRefreshResponse = {
  beforeStamina: number
  afterStamina: number
  commonResponse: papicommon.Response
}
export type ProfileUpdateBirthdayRequest = {
  month: number
  day: number
}
export type TowerReceiveTotalClearRankRewardRequest = {
  targetRank: number
}
export type TutorialSetNameRequest = {
  name: string
}
export type GiftOpenRequest = {
  userGiftIds: string[]
}
export type GuildApplyJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type HealthCheckResponse = {
  status: penum.ServingStatus
}
export type WorkStartRequest = {
  type: penum.WorkType
  durationMinutes: number
  characterId: string
}
export type GashaDrawStepUpRequest = {
  gashaId: string
  gashaButtonId: string
}
export type ProduceHighScoreRankingResponse = {
  selfRank: ProduceHighScoreRankingResponse_Rank
  ranks: ProduceHighScoreRankingResponse_Rank[]
  commonResponse: papicommon.Response
}
type ProduceHighScoreRankingResponse_Rank = {
  rank: number
  score: number
  grade: penum.ResultGrade
  idolCardId: string
  idolCardSkinId: string
  userMemoryId: string
  profile: pcommon.SimpleProfile
}
export type ProduceStepAuditionStartRequest = {
  produceUuid: string
}
export type ProfileUpdateCommentResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceResultResponse = {
  memory: pcommon.Memory
  commonResponse: papicommon.Response
}
export type TutorialReadDearnessStoryResponse = {
  commonResponse: papicommon.Response
}
export type GuildDonateRequest = {
  publicUserId: string
}
export type TutorialProgressRequest = {
  type: penum.TutorialType
  step: number
}
export type GashaGetSelectPickupProbabilityResponse = {
  probability: DefaultGashaProbability
  commonResponse: papicommon.Response
}
export type GuildEditLeaderMessageRequest = {
  leaderMessage: string
}
export type GuildRejectJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateEndResponse = {
  addRate: number
  beforeRank: number
  afterRate: number
  afterRank: number
  fanCount: number
  playReward: pcommon.RewardResult
  rateRewards: PvpRateRateReward[]
  commonResponse: papicommon.Response
}
export type ProduceReadAdvRequest = {
  produceUuid: string
  assetId: string
}
export type GuildCancelJoinRequestRequest = {
  publicGuildId: string
}
export type MovieCreateResponse = {
  commonResponse: papicommon.Response
}
export type NoticeUpdateCategoryTimeResponse = {
  commonResponse: papicommon.Response
}
export type CharacterCheckRosterResponse = {
  commonResponse: papicommon.Response
}
export type CoinGashaDrawResponse = {
  drawResults: CoinGashaDrawResult[]
  drawCountRewardResults: pcommon.RewardResult[]
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type PvpRatePlayExamBattleResponse = {
  commonResponse: papicommon.Response
}
export type StoryEventTopRequest = {
  storyEventId: string
}
export type CoinGashaGetResponse = {
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type ItemSellRequest = {
  itemId: string
  quantity: number
}
export type CoinGashaGetRequest = {
  coinGashaId: string
}
export type CostumeSetResponse = {
  commonResponse: papicommon.Response
}
export type MeishiFollowRequest = {
  publicUserId: string
}
export type MusicSendActionLogRequest = {
  playedMusicIds: string[]
  isPlaylistPlayed: boolean
  playlistMusicIds: string[]
}
export type StoryReadResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TicketExchangeListItemsResponse = {
  items: TicketExchangeItem[]
  commonResponse: papicommon.Response
}
export type CoinGashaResetBoxRequest = {
  coinGashaId: string
}
export type GiftOpenResponse = {
  rewardResults: pcommon.RewardResult[]
  openedUserGiftIds: string[]
  unopenedUserGiftIds: string[]
  commonResponse: papicommon.Response
}
export type IdolCardUpgradeLevelLimitRankRequest = {
  idolCardId: string
  afterRank: penum.IdolCardLevelLimitRank
}
export type ProduceStepRefreshResponse = {
  beforeStamina: number
  afterStamina: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ShopCancelPurchaseTransactionRequest = {
  transactionId: string
}
export type TowerEndResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TutorialSkipRequest = {
  name: string
  idolCardId: string
}
export type NoticeListAllResponse = {
  infoList: NoticeInfo[]
  bugList: NoticeInfo[]
  prList: NoticeInfo[]
  infoHasNext: boolean
  bugHasNext: boolean
  prHasNext: boolean
  commonResponse: papicommon.Response
}
export type NoticeGetRequest = {
  id: string
}
export type TicketExchangeItem = {
  id: string
  rewards: pcommon.Reward[]
  exchangedCount: number
  order: number
}
export type AuthLoginRequest = {
  idToken: string
  integrityToken: string
  forceReCreateSignInToken: boolean
}
export type Consent = {
  consentType: penum.ConsentType
  agreementType: penum.ConsentAgreementType
  url: string
}
export type FriendInfo = {
  profile: pcommon.SimpleProfile
  isFriend: boolean
  isFollower: boolean
  supportCard: FriendInfo_SupportCard
  memory: pcommon.Memory
}
type FriendInfo_SupportCard = {
  supportCardId: string
  level: number
  levelLimitRank: penum.SupportCardLevelLimitRank
}
export type SupportCardRarityProbability = {
  rarity: penum.SupportCardRarity
  tenPermyriadProbability: number
  probabilities: SupportCardProbability[]
}
export type GuildInfo = {
  publicGuildId: string
  name: string
  achievement: pcommon.Achievement
  memberCount: number
  joinRequestCount: number
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  description: string
  memberCountRangeType: penum.GuildSearchMemberCountRangeType
}
export type MediaPlayResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateListHistoryResponse = {
  histories: PvpRateListHistoryResponse_PvpRateHistory[]
  commonResponse: papicommon.Response
}
type PvpRateListHistoryResponse_PvpRateHistory = {
  playTimeUnixMilli: string
  rivalPublicUserId: string
  rivalName: string
  selfFormations: PvpRateUnitStageFormation[]
  rivalFormations: PvpRateUnitStageFormation[]
  isWin: boolean
  isWinStages: boolean[]
}
export type TutorialUnlockFeatureRequest = {
  type: penum.TutorialType
}
export type ProduceTopResponse = {
  newSeminarExam: boolean
  isClearAllSeminarExam: boolean
  campaigns: pcommon.ProduceCampaign[]
  storyEventType: penum.StoryEventType
  storyEventConsumptionItemId: string
  storyEventBonus: pcommon.StoryEventBonus
  produceHighScoreCharacterIds: string[]
  commonResponse: papicommon.Response
}
export type PhotoUpdateProtectionRequest = {
  userPhotoId: string
  isProtected: boolean
}
export type MusicSendBuyActionLogRequest = {
  musicId: string
}
export type ProduceActivateEffectRequest = {
  produceUuid: string
  pickIndexes: number[]
}
export type TicketExchangeExecuteRequest = {
  ticketExchangeItemId: string
}
export type TowerCheckRequest = {
  seed: string
}
export type ProduceDiscardDrinkResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type GashaSelectPickupResponse = {
  commonResponse: papicommon.Response
}
export type ItemUseActionPointRecoveryRequest = {
  itemId: string
  quantity: number
}
export type NoticeUpdateDetailTimeResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateListRankingResponse = {
  users: PvpRateRankingUser[]
  self: PvpRateRankingUser
  commonResponse: papicommon.Response
}
export type TutorialProduceResultRequest = {
  userMemoryId: string
  isDefaultImageMemory: boolean
}
export type CoinGashaDrawRequest = {
  coinGashaId: string
  drawCount: number
}
export type ShopPurchaseJewelRequest = {
  productId: string
  transactionId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
  storeTransactionId: string
}
export type ExchangeListRequest = {
  firstViewExchangeId: string
  isDaily: boolean
}
export type MissionUrlTransitionResponse = {
  commonResponse: papicommon.Response
}
export type ProduceReportGuildMissionResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveRequest = {
  missions: MissionReceiveRequest_Mission[]
  missionPoints: MissionReceiveRequest_MissionPoint[]
}
type MissionReceiveRequest_MissionPoint = {
  missionPointId: string
  points: number[]
}
type MissionReceiveRequest_Mission = {
  missionId: string
  threshold: number
}
export type ProduceStepEventRequest = {
  produceUuid: string
  suggestionIndex: number
  isSkip: boolean
  isFastForward: boolean
}
export type ProduceHistoryRequest = {
  publicUserId: string
  userMemoryId: string
  isSelf: boolean
}
export type PvpRateGetHistoryResponse = {
  examBattleResult: pcommon.PvpRateExamBattleResult
  commonResponse: papicommon.Response
}
export type IdolCardChangeSkinRequest = {
  idolCardSkinId: string
}
export type TowerReceiveTotalClearRankRewardResponse = {
  result: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type SeminarGetExamRequest = {
  groupId: string
  examId: string
}
export type SupportCardProbability = {
  supportCardId: string
  tenPermyriadProbability: number
  rewards: pcommon.Reward[]
  isPickup: boolean
}
export type AuthSendConsentRequest = {
  consents: AuthSendConsentRequest_Consent[]
  isOptout: boolean
}
type AuthSendConsentRequest_Consent = {
  consentType: penum.ConsentType
  agreementType: penum.ConsentAgreementType
}
export type GiftCountResponse = {
  count: number
  commonResponse: papicommon.Response
}
export type GuildListMemberResponse = {
  list: GuildMemberInfo[]
  joinRequestList: GuildMemberInfo[]
  commonResponse: papicommon.Response
}
export type PhotoDeleteRequest = {
  userPhotoIds: string[]
}
export type ProduceRank = {
  profile: pcommon.SimpleProfile
  rank: number
  score: number
  grade: penum.ResultGrade
  userMemoryId: string
}
export type SupportCardEnhanceRequest = {
  supportCardId: string
  level: number
}
export type MoneyReceiveResponse = {
  quantity: number
  elapsedTimeSeconds: number
  isOverflow: boolean
  commonResponse: papicommon.Response
}
export type ShopRecoverPurchaseJewelResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TicketExchangeExecuteResponse = {
  item: TicketExchangeItem
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepLessonEndResponse = {
  shouldTransitionSeminar: boolean
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type GuildDonateResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type MeishiGetRequest = {
  publicUserId: string
}
export type ProduceListRentalMemoryResponse = {
  memories: ProduceListRentalMemoryResponse_RentalMemory[]
  commonResponse: papicommon.Response
}
type ProduceListRentalMemoryResponse_RentalMemory = {
  profile: pcommon.SimpleProfile
  userMemoryId: string
  following: boolean
  followedBy: boolean
  isGuildMember: boolean
  money: number
  memory: pcommon.Memory
}
export type MeishiGetResponse = {
  meishi: pcommon.Meishi
  followable: boolean
  commonResponse: papicommon.Response
}
export type GashaDrawSelectPickupResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type ProduceStepLessonStartRequest = {
  produceUuid: string
}
export type PvpRatePlayTestResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  selfFormations: PvpRateUnitStageFormation[]
  commonResponse: papicommon.Response
}
export type TutorialProduceStepPresentReceiveResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  commonResponse: papicommon.Response
}
export type CharacterCheckRosterRequest = {
  characterId: string
}
export type AuthMigrateResponse = {
  token: string
  publicUserId: string
  userName: string
  producerLevel: number
}
export type FriendUnFollowResponse = {
  commonResponse: papicommon.Response
}
export type MeishiFollowResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionEndExamBattleResponse = {
  shouldTransitionSeminar: boolean
  commonResponse: papicommon.Response
}
export type SeminarEndExamRequest = {
  groupId: string
  examId: string
  clear: boolean
  turns: SeminarEndExamRequest_Turn[]
}
type SeminarEndExamRequest_Turn = {
  turn: number
  produceCardIds: string[]
  produceDrinkIds: string[]
}
export type MeishiUpdateResponse = {
  commonResponse: papicommon.Response
}
export type MissionListEventResponse = {
  events: pcommon.Event[]
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupRequest = {
  missionGroupId: string
}
export type NoticeUpdateCategoryTimeRequest = {
  categories: penum.NoticeCategory[]
}
export type PhotoCreateRequest = {
  idolCardId: string
  userPhotoIds: string[]
}
export type ShopCancelPurchaseTransactionResponse = {
  commonResponse: papicommon.Response
}
export type TowerStartRequest = {
  towerId: string
  number: number
}
export type ProduceStepShopEndResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceRerollSelectProduceCardResponse = {
  commonResponse: papicommon.Response
}
export type WorkStopRequest = {
  type: penum.WorkType
}
export type ProduceResultResponse = {
  rewardResults: pcommon.RewardResult[]
  storyEventProduceResult: pcommon.StoryEventProduceResult
  highScoreUpdateResult: ProduceResultResponse_HighScoreUpdateResult
  commonResponse: papicommon.Response
}
type ProduceResultResponse_HighScoreUpdateResult = {
  titleAssetId: string
  characterId: string
  rank: number
  highScore: number
  characterRank: number
  characterHighScore: number
  highScoreRewards: ProduceResultResponse_HighScoreReward[]
}
type ProduceResultResponse_HighScoreReward = {
  score: number
  reward: pcommon.Reward
}
export type GuildRejectJoinRequestRequest = {
  publicUserIds: string[]
}
export type ProduceHighScoreRankingRequest = {
  characterId: string
}
export type ProduceNextRequest = {
  produceUuid: string
  stepType: penum.ProduceStepType
  selectNumber: number
}
export type NoticeFetchListResponse = {
  list: NoticeInfo[]
  hasNext: boolean
  commonResponse: papicommon.Response
}
export type GuildDismissResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupAllRequest = {
  missionGroupId: string
}
export type PhotoCreateResponse = {
  commonResponse: papicommon.Response
}
export type TutorialSkipResponse = {
  commonResponse: papicommon.Response
}
export type TutorialReceiveIdolCardRequest = {
  idolCardSkinId: string
}
export type MissionReceivePassRequest = {
  missionPassId: string
  normalThresholds: number[]
  premiumThresholds: number[]
}
export type ProduceStepShopBuyRequest = {
  produceUuid: string
  positionNumber: number
  deckProduceCardIndex: number
}
export type TutorialUnlockFeatureResponse = {
  commonResponse: papicommon.Response
}
export type MemoryUpdateTagSettingResponse = {
  commonResponse: papicommon.Response
}
export type ProduceHighScoreRankReward = {
  upperRank: number
  lowerRank: number
  rewards: pcommon.Reward[]
}
export type SeminarEndExamResponse = {
  commonResponse: papicommon.Response
}
export type FriendFollowRequest = {
  publicUserId: string
}
export type ProduceContinueRequest = {
  produceUuid: string
}
export type ProduceHighScoreResult = {
  rank: number
  highScore: number
  rankRewards: ProduceHighScoreRankReward[]
  characters: ProduceHighScoreCharacter[]
}
export type ProduceHighScoreGetResponse = {
  titleAssetId: string
  rank: number
  highScore: number
  highScoreRewards: ProduceHighScoreReward[]
  rankRewards: ProduceHighScoreRankReward[]
  characters: ProduceHighScoreCharacter[]
  result: ProduceHighScoreResult
  startupNotifications: pcommon.StartupNotification[]
  startTime: string
  endTime: string
  fixRankTime: string
  closeTime: string
  commonResponse: papicommon.Response
}
export type ProfileUpdateMemoryRequest = {
  userMemoryId: string
}
export type WorkSkipResponse = {
  finishResult: WorkFinishResult
  commonResponse: papicommon.Response
}
export type PvpRateGetResponse = {
  startTime: string
  endTime: string
  pvpRateConfigId: string
  playReward: pcommon.Reward
  rateRewards: PvpRateRateReward[]
  rankRewards: PvpRateRankReward[]
  grade: penum.PvpRateGrade
  rank: number
  rate: number
  gradeUpRate: number
  gradeKeepRate: number
  maxDailyPlayCount: number
  remainingDailyPlayCount: number
  meishi: pcommon.Meishi
  rivals: PvpRateRival[]
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  selfFormations: PvpRateUnitStageFormation[]
  currentRival: PvpRateRival
  commonResponse: papicommon.Response
}
export type GuildChangeLeaderRequest = {
  publicUserId: string
}
export type ProduceCheckProgressRequest = {
  produceUuid: string
  clientProduceUuid: string
}
export type ProduceStepPresentEndResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionEndRequest = {
  produceUuid: string
}
export type TutorialCheckBeforeLiveProduceEvaluationResponse = {
  commonResponse: papicommon.Response
}
export type UserGetResponse = {
  userData: papicommon.UserData
}
export type TutorialProduceStartRequest = {
  idolCardId: string
}
export type DonationRequest = {
  publicUserId: string
  guildDonationItemId: string
  endTime: string
  donationList: GuildDonationInfo[]
  receivableCount: number
}
export type PhotoDeleteResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStepShopEndRequest = {
  produceUuid: string
}
export type ProduceChangeCostumeRequest = {
  produce: boolean
  live: boolean
  training: boolean
}
export type GuildEstablishRequest = {
  name: string
  description: string
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  achievementId: string
}
export type CostumeCheckResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardReleaseResponse = {
  commonResponse: papicommon.Response
}
export type MusicSendActionLogResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepLessonEndRequest = {
  resultTargetValue: number
  stamina: number
  produceCardIds: string[]
}
export type ShopListItemsRequest = {
  shopId: string
}
export type GuildEstablishResponse = {
  commonResponse: papicommon.Response
}
export type GiftListHistoryRequest = {
  filters: penum.GiftFilterType[]
  isDesc: boolean
}
export type SystemCheckResponse = {
  maintenanceInfo: SystemCheckResponse_MaintenanceInfo
  reviewInfo: SystemCheckResponse_ReviewInfo
  octoHost: string
  octoVersion: number
  officialXUrl: string
  faqUrl: string
  inquiryUrl: string
  userDeleteInquiryUrl: string
  playIntegrityEnabled: boolean
}
type SystemCheckResponse_MaintenanceInfo = {
  inMaintenance: boolean
  topMessage: string
  timeMessage: string
  bottomMessage: string
  startTime: string
  endTime: string
  isPrerelease: boolean
  prereleaseHtml: string
}
type SystemCheckResponse_ReviewInfo = {
  inReview: boolean
  apiHost: string
  octoHost: string
  octoVersion: number
}
export type TowerStartResponse = {
  seed: string
  idolCardId: string
  maxStamina: number
  vocalPermil: number
  dancePermil: number
  visualPermil: number
  produceCards: pcommon.ProduceCard[]
  produceItemIds: string[]
  commonResponse: papicommon.Response
}
export type GashaProbability = {
  gashaRarityProbabilities: GashaRarityProbability[]
  idolCardRarityProbabilities: IdolCardRarityProbability[]
  supportCardRarityProbabilities: SupportCardRarityProbability[]
}
export type MissionExchangePassPointResponse = {
  commonResponse: papicommon.Response
}
export type ProduceEndResponse = {
  memory: pcommon.Memory
  commonResponse: papicommon.Response
}
export type ProduceRetireResponse = {
  commonResponse: papicommon.Response
}
export type ProfileBirthday = {
  month: number
  day: number
}
export type ProfileUpdateNameResponse = {
  commonResponse: papicommon.Response
}
export type GuildReactionInfo = {
  reactionId: string
  publicUserIds: string[]
  isReacted: boolean
}
export type ShopRegisterPurchaseTransactionRequest = {
  shopItemId: string
}
export type MusicSendBuyActionLogResponse = {
  commonResponse: papicommon.Response
}
export type TowerGetLayerRequest = {
  towerId: string
  number: number
}
export type ProfileGetRequest = {
  publicUserId: string
}
export type ItemExchangeIdolCardPieceResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type GuildGetRequest = {
  publicGuildId: string
}
export type GuildUpdateLeaderMessageReactionResponse = {
  reactionList: GuildReactionInfo[]
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionRefreshRequest = {
  produceUuid: string
}
export type ProduceStepAuditionEndResponse = {
  memoryRewardResults: pcommon.ProduceMemoryRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type GashaGetStepUpProbabilityResponse = {
  probabilities: StepUpGashaProbability[]
  commonResponse: papicommon.Response
}
export type NoticeInfo = {
  id: string
  title: string
  category: penum.NoticeCategory
  type: penum.NoticeType
  startTime: string
  endTime: string
  lastUpdateTime: string
  bannerAssetId: string
  detailUrl: string
  noti: boolean
  isNew: boolean
}
export type ProduceStartBeforeLiveEvaluationRequest = {
  produceUuid: string
}
export type ProduceUpdateSupportCardDeckResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateRateReward = {
  rate: number
  reward: pcommon.Reward
}
export type HomeSetCharactersResponse = {
  commonResponse: papicommon.Response
}
export type GuildReceiveDonationResponse = {
  guildDonationItemId: string
  list: GuildDonationInfo[]
  totalDonationCount: number
  commonResponse: papicommon.Response
}
export type GuildEditDetailResponse = {
  commonResponse: papicommon.Response
}
export type ProduceEndBeforeLiveEvaluationRequest = {
  produceUuid: string
}
export type MeishiUpdateRequest = {
  number: number
  meishiBase: MeishiUpdateRequest_MeishiBase
  objects: MeishiUpdateRequest_Object[]
  order: number
}
type MeishiUpdateRequest_MeishiBase = {
  layoutNumber: number
  vertical: boolean
  beforeIdolCardId: string
  afterIdolCardId: string
  supportCardId: string
  meishiBaseAssetId: string
  userMemoryId: string
  userPhotoId: string
  userMovieId: string
  meishiBaseColorId: string
}
type MeishiUpdateRequest_Object = {
  objectType: penum.MeishiObjectType
  vertical: boolean
  displayPublicUserId: boolean
  displayPvpRateGrade: boolean
  displayProducerLevels: boolean
  displayFanCounts: boolean
  displayComment: boolean
  achievementId: string
  meishiIllustrationAssetId: string
  meishiTextColorId: string
  positionX: number
  positionY: number
  size: number
  lock: boolean
  background: boolean
  layer: number
}
export type ProduceStepRefreshRequest = {
  produceUuid: string
}
export type ProduceReadAdvResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepAuditionEndResponse = {
  commonResponse: papicommon.Response
}
export type InvitationReceiveInvitationPointRequest = {
  publicUserIds: string[]
}
export type GuildApplyJoinRequestRequest = {
  publicGuildId: string
  routeType: penum.GuildJoinRequestRouteType
}
export type SeminarListExamResponse = {
  groups: SeminarListExamResponse_ExamGroup[]
  commonResponse: papicommon.Response
}
type SeminarListExamResponse_ExamGroup = {
  id: string
  name: string
  exams: SeminarListExamResponse_Exam[]
  unlock: boolean
  unlockDescription: string
  order: number
}
type SeminarListExamResponse_Exam = {
  id: string
  name: string
  idolCardId: string
  new: boolean
  play: boolean
  clear: boolean
  unlock: boolean
  unlockDescription: string
  rewards: pcommon.Reward[]
}
export type SupportCardUpgradeLevelLimitRankResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProgressResponse = {
  commonResponse: papicommon.Response
}
export type MeishiListFollowResponse = {
  follows: MeishiListFollowResponse_Follow[]
  commonResponse: papicommon.Response
}
type MeishiListFollowResponse_Follow = {
  meishi: pcommon.Meishi
  followTime: string
  lastLoginTime: string
}
export type ProfileUpdateSupportCardRequest = {
  supportCardId: string
}
export type FriendDeleteFollowerResponse = {
  commonResponse: papicommon.Response
}
export type GashaDrawResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type MovieCreateRequest = {
  userMovieId: string
}
export type IdolCardReleaseRequest = {
  idolCardId: string
}
export type TowerListLayersResponse = {
  layers: TowerListLayersResponse_TowerLayer[]
  commonResponse: papicommon.Response
}
type TowerListLayersResponse_TowerLayer = {
  number: number
  unlockConditionSetId: string
  clearRank: number
  ranks: TowerListLayersResponse_TowerLayerRank[]
  rewards: pcommon.Reward[]
}
type TowerListLayersResponse_TowerLayerRank = {
  rank: number
  examBattleRank: number
  examTriggerCounts: pcommon.ExamTriggerCount[]
  reward: pcommon.Reward
}
export type AuthSendConsentResponse = {
  commonResponse: papicommon.Response
}
export type ExchangeGetResponse = {
  exchange: ExchangeInfo
  commonResponse: papicommon.Response
}
export type ProduceRankingTopRequest = {
  produceGroupId: string
  characterId: string
}
export type MeishiUnfollowRequest = {
  publicUserIds: string[]
}
export type AuthAgreeTermsRequest = {
  types: penum.TermsType[]
}
export type GashaGetPrecautionRequest = {
  gashaId: string
}
export type GashaGetPrecautionResponse = {
  precaution: string
  commonResponse: papicommon.Response
}
export type ShopListItemsResponse = {
  list: pmaster.ShopItem[]
  commonResponse: papicommon.Response
}
export type ExchangeResetResponse = {
  exchange: ExchangeInfo
  commonResponse: papicommon.Response
}
export type StoryReadDearnessStoryRequest = {
  characterId: string
  dearnessLevel: number
  isAuto: boolean
  isSkip: boolean
}
export type TowerListLayerPlayerHistoriesRequest = {
  towerId: string
  number: number
}
export type MissionUrlTransitionRequest = {
  url: string
}
export type ProduceHistoryResponse = {
  produceHistory: pcommon.ProduceHistory
  commonResponse: papicommon.Response
}
export type CostumeSetRequest = {
  characterId: string
  setType: penum.CostumeSetType
  costumeHeadId: string
  costumeId: string
}
export type WorkSkipRequest = {
  type: penum.WorkType
}
export type ProduceUpdateSupportCardDeck = {
  produceType: penum.ProduceType
  number: number
  supportCardIds: string[]
  recommendType: penum.DeckRecommendType
}
export type HealthCheckRequest = {
  service: string
}
export type NoticeFetchListRequest = {
  category: penum.NoticeCategory
  offset: number
}
export type ProduceStartBeforeLiveEvaluationResponse = {
  commonResponse: papicommon.Response
}
export type GashaGetPointExchangeResponse = {
  gashaPointId: string
  name: string
  conditionSetId: string
  expireReward: pcommon.Reward
  exchangeResources: GashaGetPointExchangeResponse_ExchangeResource[]
  point: number
  startTime: string
  endTime: string
  commonResponse: papicommon.Response
}
type GashaGetPointExchangeResponse_ExchangeResource = {
  number: number
  requiredQuantity: number
  rewards: pcommon.Reward[]
}
export type GuildDonationInfo = {
  publicUserId: string
  donatedTime: string
  userName: string
}
export type ProfileUpdateMemoryResponse = {
  commonResponse: papicommon.Response
}
export type StoryReadDearnessStoryResponse = {
  characterId: string
  beforeDearnessLevel: number
  afterDearnessLevel: number
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ProfileGetResponse = {
  publicUserId: string
  producerLevel: number
  name: string
  comment: string
  birthday: ProfileBirthday
  friendStatus: penum.FriendStatusType
  followable: boolean
  joinedGuildName: string
  totalFanCount: string
  achievementCount: number
  mainTaskMainStoryClearCount: number
  mainTaskProducerClearCount: number
  produceRecords: ProfileGetResponse_ProduceRecord[]
  maxPvpRateUnitPower: number
  pvpRateGrade: penum.PvpRateGrade
  supportCard: pcommon.SupportCard
  memory: pcommon.Memory
  meishi: pcommon.Meishi
  commonResponse: papicommon.Response
}
type ProfileGetResponse_ProduceRecord = {
  produceType: penum.ProduceType
  trueEndCount: number
  highScore: number
}
export type StartupConfirmResponse = {
  commonResponse: papicommon.Response
}
export type AuthUnlinkResponse = {
  commonResponse: papicommon.Response
}
