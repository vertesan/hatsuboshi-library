// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';
import * as pmaster from './pmaster.d.ts';
import * as papicommon from './papicommon.d.ts';

export type AuthAgreeTermsRequest = {
  types: penum.TermsType[]
}
export type AuthAgreeTermsResponse = {
  commonResponse: papicommon.Response
}
export type AuthCreateResponse = {
  token: string
}
export type AuthGetConsentResponse = {
  consents: Consent[]
  commonResponse: papicommon.Response
}
export type AuthLinkBandaiNamcoIdRequest = {
  code: string
  force: boolean
}
export type AuthLinkBandaiNamcoIdResponse = {
  success: boolean
  isSameAccountLinked: boolean
  publicUserId: string
  userName: string
  producerLevel: number
  commonResponse: papicommon.Response
}
export type AuthLoginRequest = {
  idToken: string
  integrityToken: string
  forceReCreateSignInToken: boolean
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
export type AuthMigrateDmmGamesIdResponse = {
  token: string
}
export type AuthMigrateRequest = {
  onetimeToken: string
  publicUserId: string
}
export type AuthMigrateResponse = {
  token: string
  publicUserId: string
  userName: string
  producerLevel: number
}
export type AuthPrepareMigrationBandaiNamcoIdRequest = {
  code: string
}
export type AuthPrepareMigrationBandaiNamcoIdResponse = {
  publicUserId: string
  userName: string
  producerLevel: number
  onetimeToken: string
}
export type AuthSendConsentRequest = {
  consents: AuthSendConsentRequest_Consent[]
  isOptout: boolean
}
type AuthSendConsentRequest_Consent = {
  consentType: penum.ConsentType
  agreementType: penum.ConsentAgreementType
}
export type AuthSendConsentResponse = {
  commonResponse: papicommon.Response
}
export type AuthUnlinkResponse = {
  commonResponse: papicommon.Response
}
export type CharacterCheckRosterRequest = {
  characterId: string
}
export type CharacterCheckRosterResponse = {
  commonResponse: papicommon.Response
}
export type CoinGashaDrawRequest = {
  coinGashaId: string
  drawCount: number
}
export type CoinGashaDrawResponse = {
  drawResults: CoinGashaDrawResult[]
  drawCountRewardResults: pcommon.RewardResult[]
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type CoinGashaDrawResult = {
  result: pcommon.RewardResult
  providedResult: pcommon.RewardResult
  cardBonusRewardResults: pcommon.RewardResult[]
  isFeature: boolean
  isFeaturePickup: boolean
}
export type CoinGashaGetRequest = {
  coinGashaId: string
}
export type CoinGashaGetResponse = {
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type CoinGashaListResponse = {
  coinGashas: pcommon.CoinGasha[]
  commonResponse: papicommon.Response
}
export type CoinGashaResetBoxRequest = {
  coinGashaId: string
}
export type CoinGashaResetBoxResponse = {
  coinGasha: pcommon.CoinGasha
  commonResponse: papicommon.Response
}
export type Consent = {
  consentType: penum.ConsentType
  agreementType: penum.ConsentAgreementType
  url: string
}
export type CostumeCheckRequest = {
  costumeHeadId: string
  costumeId: string
}
export type CostumeCheckResponse = {
  commonResponse: papicommon.Response
}
export type CostumeSetRequest = {
  characterId: string
  setType: penum.CostumeSetType
  costumeHeadId: string
  costumeId: string
}
export type CostumeSetResponse = {
  commonResponse: papicommon.Response
}
export type DefaultGashaProbability = {
  probability: GashaProbability
  fixProbability: GashaProbability
}
export type DonationRequest = {
  publicUserId: string
  guildDonationItemId: string
  endTime: string
  donationList: GuildDonationInfo[]
  receivableCount: number
}
export type ExchangeExecuteRequest = {
  exchangeItemId: string
  count: number
}
export type ExchangeExecuteResponse = {
  exchangeItem: ExchangeItem
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ExchangeGetRequest = {
  exchangeId: string
}
export type ExchangeGetResponse = {
  exchange: ExchangeInfo
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
  resetTimingType: penum.ResetTimingType
  items: ExchangeItem[]
  order: number
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
  resetTimingType: penum.ResetTimingType
  viewConditionSetId: string
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
export type ExchangeListRequest = {
  firstViewExchangeId: string
  isDaily: boolean
}
export type ExchangeListResponse = {
  exchanges: ExchangeInfo[]
  commonResponse: papicommon.Response
}
export type ExchangeResetRequest = {
  exchangeId: string
}
export type ExchangeResetResponse = {
  exchange: ExchangeInfo
  commonResponse: papicommon.Response
}
export type FriendDeleteFollowerRequest = {
  publicUserIds: string[]
}
export type FriendDeleteFollowerResponse = {
  commonResponse: papicommon.Response
}
export type FriendFollowRequest = {
  publicUserId: string
}
export type FriendFollowResponse = {
  commonResponse: papicommon.Response
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
export type FriendListResponse = {
  friendList: FriendInfo[]
  followerList: FriendInfo[]
  suggestionList: FriendInfo[]
  commonResponse: papicommon.Response
}
export type FriendListSuggestionResponse = {
  list: FriendInfo[]
  commonResponse: papicommon.Response
}
export type FriendUnFollowRequest = {
  publicUserIds: string[]
}
export type FriendUnFollowResponse = {
  commonResponse: papicommon.Response
}
export type GashaDrawRequest = {
  gashaId: string
  gashaButtonId: string
  drawCount: number
}
export type GashaDrawResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type GashaDrawResult = {
  result: pcommon.RewardResult
  providedResult: pcommon.RewardResult
  cardBonusRewardResults: pcommon.RewardResult[]
  isPickup: boolean
}
export type GashaDrawSelectPickupRequest = {
  gashaId: string
  gashaButtonId: string
}
export type GashaDrawSelectPickupResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type GashaDrawStepUpRequest = {
  gashaId: string
  gashaButtonId: string
}
export type GashaDrawStepUpResponse = {
  drawResults: GashaDrawResult[]
  gashaButton: pcommon.GashaButton
  nextGashaStepUp: pcommon.GashaStepUp
  bonusRewards: pcommon.Reward[]
  gashaPoint: pcommon.GashaPoint
  commonResponse: papicommon.Response
}
export type GashaExchangePointRequest = {
  gashaPointId: string
  number: number
}
export type GashaExchangePointResponse = {
  gashaPoint: pcommon.GashaPoint
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
export type GashaGetPointExchangeRequest = {
  gashaPointId: string
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
export type GashaGetPrecautionRequest = {
  gashaId: string
}
export type GashaGetPrecautionResponse = {
  precaution: string
  commonResponse: papicommon.Response
}
export type GashaGetProbabilityRequest = {
  gashaId: string
}
export type GashaGetProbabilityResponse = {
  probability: DefaultGashaProbability
  commonResponse: papicommon.Response
}
export type GashaGetSelectPickupProbabilityRequest = {
  gashaId: string
}
export type GashaGetSelectPickupProbabilityResponse = {
  probability: DefaultGashaProbability
  commonResponse: papicommon.Response
}
export type GashaGetStepUpProbabilityRequest = {
  gashaId: string
}
export type GashaGetStepUpProbabilityResponse = {
  probabilities: StepUpGashaProbability[]
  commonResponse: papicommon.Response
}
export type GashaListResponse = {
  gashas: pcommon.Gasha[]
  hasExpireGashaPoint: boolean
  commonResponse: papicommon.Response
}
export type GashaProbability = {
  gashaRarityProbabilities: GashaRarityProbability[]
  idolCardRarityProbabilities: IdolCardRarityProbability[]
  supportCardRarityProbabilities: SupportCardRarityProbability[]
}
export type GashaRarityProbability = {
  rarity: number
  tenPermyriadProbability: number
}
export type GashaSelectPickupRequest = {
  gashaId: string
  pickupRewards: pcommon.Reward[]
}
export type GashaSelectPickupResponse = {
  commonResponse: papicommon.Response
}
export type GiftCountResponse = {
  count: number
  commonResponse: papicommon.Response
}
export type GiftListHistoryRequest = {
  filters: penum.GiftFilterType[]
  isDesc: boolean
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
export type GiftOpenRequest = {
  userGiftIds: string[]
}
export type GiftOpenResponse = {
  rewardResults: pcommon.RewardResult[]
  openedUserGiftIds: string[]
  unopenedUserGiftIds: string[]
  commonResponse: papicommon.Response
}
export type GuildApplyJoinRequestRequest = {
  publicGuildId: string
  routeType: penum.GuildJoinRequestRouteType
}
export type GuildApplyJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type GuildApproveJoinRequestRequest = {
  publicUserId: string
}
export type GuildApproveJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type GuildCancelJoinRequestRequest = {
  publicGuildId: string
}
export type GuildCancelJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type GuildChangeLeaderRequest = {
  publicUserId: string
}
export type GuildChangeLeaderResponse = {
  commonResponse: papicommon.Response
}
export type GuildDismissRequest = {
  publicUserId: string
}
export type GuildDismissResponse = {
  commonResponse: papicommon.Response
}
export type GuildDissolveResponse = {
  commonResponse: papicommon.Response
}
export type GuildDonateRequest = {
  publicUserId: string
}
export type GuildDonateResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type GuildDonationInfo = {
  publicUserId: string
  donatedTime: string
  userName: string
}
export type GuildEditDetailRequest = {
  name: string
  description: string
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  achievementId: string
}
export type GuildEditDetailResponse = {
  commonResponse: papicommon.Response
}
export type GuildEditLeaderMessageRequest = {
  leaderMessage: string
}
export type GuildEditLeaderMessageResponse = {
  commonResponse: papicommon.Response
}
export type GuildEstablishRequest = {
  name: string
  description: string
  isAutoApproveJoinRequest: boolean
  activityPolicyType: penum.GuildActivityPolicyType
  achievementId: string
}
export type GuildEstablishResponse = {
  commonResponse: papicommon.Response
}
export type GuildGetRequest = {
  publicGuildId: string
}
export type GuildGetResponse = {
  info: GuildInfo
  commonResponse: papicommon.Response
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
export type GuildLeaveResponse = {
  commonResponse: papicommon.Response
}
export type GuildListDonationRequestResponse = {
  requestList: DonationRequest[]
  memberList: GuildMemberInfo[]
  commonResponse: papicommon.Response
}
export type GuildListJoinRequestResponse = {
  list: GuildInfo[]
  commonResponse: papicommon.Response
}
export type GuildListMemberResponse = {
  list: GuildMemberInfo[]
  joinRequestList: GuildMemberInfo[]
  commonResponse: papicommon.Response
}
export type GuildMemberInfo = {
  profile: pcommon.SimpleProfile
  roleType: penum.GuildRoleType
  isFollowing: boolean
  isFollower: boolean
}
export type GuildReactionInfo = {
  reactionId: string
  publicUserIds: string[]
  isReacted: boolean
}
export type GuildReceiveDonationResponse = {
  guildDonationItemId: string
  list: GuildDonationInfo[]
  totalDonationCount: number
  commonResponse: papicommon.Response
}
export type GuildRejectJoinRequestRequest = {
  publicUserIds: string[]
}
export type GuildRejectJoinRequestResponse = {
  commonResponse: papicommon.Response
}
export type GuildRequestDonationRequest = {
  guildDonationItemId: string
}
export type GuildRequestDonationResponse = {
  commonResponse: papicommon.Response
}
export type GuildSearchRequest = {
  searchByAutoApprove: boolean
  searchByManualApprove: boolean
  activityPolicyTypes: penum.GuildActivityPolicyType[]
  memberCountRangeTypes: penum.GuildSearchMemberCountRangeType[]
}
export type GuildSearchResponse = {
  list: GuildInfo[]
  commonResponse: papicommon.Response
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
  isInEvent: boolean
}
type GuildTopResponse_HomeInfo_ReceivedDonationInfo = {
  guildDonationItemId: string
  donationList: GuildDonationInfo[]
  totalDonationCount: number
}
export type GuildUpdateLeaderMessageReactionRequest = {
  guildReactionIds: string[]
}
export type GuildUpdateLeaderMessageReactionResponse = {
  reactionList: GuildReactionInfo[]
  commonResponse: papicommon.Response
}
export type GvgRaidDeck = {
  slots: pcommon.GvgRaidSlot[]
}
export type GvgRaidEndRequest = {
  stage: pcommon.ExamBattleAutoStageResult
}
export type GvgRaidEndResponse = {
  beforeTotalScore: number
  score: number
  point: number
  beforeUserTotalPoint: number
  totalPointRewards: GvgRaidPointReward[]
  challengeResults: pcommon.Reward[]
  clearResults: pcommon.Reward[]
  totalPointResults: pcommon.RewardResult[]
  mvpUsers: GvgRaidUser[]
  commonResponse: papicommon.Response
}
export type GvgRaidGetProgressResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  deck: GvgRaidDeck
  stageNumber: number
  name: string
  planType: penum.ProducePlanType
  produceItemIds: string[]
  maxSubMemoryCounts: number[]
  totalScore: number
  clearScore: number
  produceExamBattleScoreConfigId: string
  startTimelineAssetId: string
  examTimelineAssetId: string
  resultTimelineAssetId: string
  examBgmAssetId: string
  timelineBackgroundAssetId: string
  iconAssetId: string
  iconSizeType: penum.GvgRaidStageIconSizeType
  commonResponse: papicommon.Response
}
export type GvgRaidGuildRankReward = {
  upperRank: number
  lowerRank: number
  rewards: pcommon.Reward[]
}
export type GvgRaidGuildRankingResponse = {
  guildRanking: pcommon.GvgRaidGuild[]
  selfGuildRank: pcommon.GvgRaidGuild
  commonResponse: papicommon.Response
}
export type GvgRaidPlayTestRequest = {
  stageNumber: number
  loopCount: number
}
export type GvgRaidPlayTestResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  deck: GvgRaidDeck
  examTimelineAssetId: string
  examBgmAssetId: string
  timelineBackgroundAssetId: string
  commonResponse: papicommon.Response
}
export type GvgRaidPointReward = {
  point: number
  rewards: pcommon.Reward[]
}
export type GvgRaidSlot = {
  mainMemory: pcommon.Memory
  subMemories: pcommon.Memory[]
  supportBonusPermyriad: number
  isDefault: boolean
}
export type GvgRaidStageChallengeReward = {
  lowerScore: number
  rewards: pcommon.Reward[]
}
export type GvgRaidStartRequest = {
  stageNumber: number
  loopCount: number
}
export type GvgRaidStartResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  deck: GvgRaidDeck
  startTimelineAssetId: string
  examTimelineAssetId: string
  resultTimelineAssetId: string
  examBgmAssetId: string
  timelineBackgroundAssetId: string
  commonResponse: papicommon.Response
}
export type GvgRaidTopResponse = {
  name: string
  loopCount: number
  stages: GvgRaidTopResponse_Stage[]
  guild: pcommon.GvgRaidGuild
  userTotalPointRewards: GvgRaidPointReward[]
  stageClearRewards: GvgRaidTopResponse_StageClearReward[]
  rankRewards: GvgRaidGuildRankReward[]
  currentUserTotalPoint: number
  nextUserTotalPoint: number
  nextUserRewards: pcommon.Reward[]
  stageResults: GvgRaidTopResponse_StageClearResult[]
  rankResult: GvgRaidGuildRankReward
  hasProgress: boolean
  isChangedLoopCount: boolean
  titleAssetId: string
  colorCode: string
  bgmAssetId: string
  rewardAssetId: string
  backgroundAssetId: string
  storyGroupId: string
  missionGroupId: string
  exchangeId: string
  consumptionItemId: string
  minClearScore: number
  maxClearScore: number
  startupNotifications: pcommon.StartupNotification[]
  maxDailyPlayCount: number
  remainingDailyPlayCount: number
  startTime: string
  endTime: string
  fixRankTime: string
  closeTime: string
  commonResponse: papicommon.Response
}
type GvgRaidTopResponse_Stage = {
  number: number
  name: string
  vocal: number
  dance: number
  visual: number
  turn: number
  characterCount: number
  characterIds: string[]
  planType: penum.ProducePlanType
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  maxSubMemoryCounts: number[]
  totalScore: number
  clearScore: number
  isLimitLoop: boolean
  mvpProfile: pcommon.SimpleProfile
  mvpDeck: GvgRaidDeck
  deck: pcommon.GvgRaidSetUpDeck
  produceExamBattleScoreConfigId: string
  challengeRewards: GvgRaidStageChallengeReward[]
  clearRewards: pcommon.Reward[]
  iconAssetId: string
  iconX: string
  iconY: string
  mapVignetteIconAssetId: string
  iconSizeType: penum.GvgRaidStageIconSizeType
  bannerAssetId: string
  backgroundAssetId: string
}
type GvgRaidTopResponse_StageClearResult = {
  stageNumber: number
  loopCount: number
  rewards: pcommon.Reward[]
}
type GvgRaidTopResponse_StageClearReward = {
  stageNumber: number
  clearRewards: GvgRaidTopResponse_StageClearReward_ClearReward[]
}
type GvgRaidTopResponse_StageClearReward_ClearReward = {
  leftLoopCount: number
  rightLoopCount: number
  rewards: pcommon.Reward[]
}
export type GvgRaidUpdateDeckRequest = {
  stageNumber: number
  loopCount: number
  deck: pcommon.GvgRaidSetUpDeck
  recommendType: penum.DeckRecommendType
}
export type GvgRaidUpdateDeckResponse = {
  commonResponse: papicommon.Response
}
export type GvgRaidUser = {
  profile: pcommon.SimpleProfile
  point: number
  deck: GvgRaidDeck
}
export type GvgRaidUserRankingResponse = {
  userRankings: GvgRaidUserRankingResponse_StageRanking[]
  stageMvps: GvgRaidUserRankingResponse_StageMvp[]
  commonResponse: papicommon.Response
}
type GvgRaidUserRankingResponse_StageMvp = {
  number: number
  mvpUsers: GvgRaidUserRankingResponse_StageMvp_MvpUser[]
}
type GvgRaidUserRankingResponse_StageMvp_MvpUser = {
  loopCount: number
  user: GvgRaidUser
}
type GvgRaidUserRankingResponse_StageRanking = {
  number: number
  ranks: GvgRaidUserRankingResponse_StageRanking_Rank[]
}
type GvgRaidUserRankingResponse_StageRanking_Rank = {
  rank: number
  user: GvgRaidUser
}
export type HealthCheckRequest = {
  service: string
}
export type HealthCheckResponse = {
  status: penum.ServingStatus
}
export type HomeConfirmBanWarningResponse = {
  commonResponse: papicommon.Response
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
  personalMessageCount: number
  commonResponse: papicommon.Response
}
type HomeEnterResponse_FeatureMaintenance = {
  type: penum.FeatureMaintenanceType
  targetIds: string[]
  startTime: string
  endTime: string
}
export type HomeListEventResponse = {
  events: pcommon.Event[]
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
export type HomeSetCharactersRequest = {
  characters: HomeSetCharactersRequest_HomeCharacter[]
}
type HomeSetCharactersRequest_HomeCharacter = {
  homeType: penum.HomeType
  characterId: string
  isRandom: boolean
}
export type HomeSetCharactersResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardChangeSkinRequest = {
  idolCardSkinId: string
}
export type IdolCardChangeSkinResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardProbability = {
  idolCardSkinId: string
  tenPermyriadProbability: number
  rewards: pcommon.Reward[]
  isPickup: boolean
}
export type IdolCardRarityProbability = {
  rarity: penum.IdolCardRarity
  tenPermyriadProbability: number
  probabilities: IdolCardProbability[]
}
export type IdolCardReleaseRequest = {
  idolCardId: string
}
export type IdolCardReleaseResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardUpgradeLevelLimitRankRequest = {
  idolCardId: string
  afterRank: penum.IdolCardLevelLimitRank
}
export type IdolCardUpgradeLevelLimitRankResponse = {
  commonResponse: papicommon.Response
}
export type IdolCardUpgradePotentialRankRequest = {
  idolCardId: string
  afterRank: penum.IdolCardPotentialRank
}
export type IdolCardUpgradePotentialRankResponse = {
  commonResponse: papicommon.Response
}
export type InvitationEnterInvitationCodeRequest = {
  publicUserId: string
}
export type InvitationEnterInvitationCodeResponse = {
  commonResponse: papicommon.Response
}
export type InvitationListInviteUserResponse = {
  list: InviteUser[]
  commonResponse: papicommon.Response
}
export type InvitationReceiveInvitationPointRequest = {
  publicUserIds: string[]
}
export type InvitationReceiveInvitationPointResponse = {
  list: InviteUser[]
  rewardResults: pcommon.RewardResult[]
  beforeThreshold: number
  commonResponse: papicommon.Response
}
export type InviteUser = {
  profile: pcommon.SimpleProfile
  friendStatusType: penum.FriendStatusType
  thresholdProducerLevel: number
  isReceivedAll: boolean
}
export type ItemExchangeIdolCardPieceRequest = {
}
export type ItemExchangeIdolCardPieceResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ItemSellRequest = {
  itemId: string
  quantity: number
}
export type ItemSellResponse = {
  commonResponse: papicommon.Response
}
export type ItemUseActionPointRecoveryRequest = {
  itemId: string
  quantity: number
}
export type ItemUseActionPointRecoveryResponse = {
  commonResponse: papicommon.Response
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
export type LoginBonusConfirmResponse = {
  commonResponse: papicommon.Response
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
export type MediaPlayRequest = {
  mediaId: string
  isFirst: boolean
}
export type MediaPlayResponse = {
  commonResponse: papicommon.Response
}
export type MeishiDeleteRequest = {
  number: number
}
export type MeishiDeleteResponse = {
  commonResponse: papicommon.Response
}
export type MeishiFollowRequest = {
  publicUserId: string
}
export type MeishiFollowResponse = {
  commonResponse: papicommon.Response
}
export type MeishiGetDetailRequest = {
  publicUserId: string
  number: number
}
export type MeishiGetDetailResponse = {
  meishi: pcommon.Meishi
  commonResponse: papicommon.Response
}
export type MeishiGetRequest = {
  publicUserId: string
}
export type MeishiGetResponse = {
  meishi: pcommon.Meishi
  followable: boolean
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
  userName: string
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
export type MeishiReportXPostMissionRequest = {
  number: number
}
export type MeishiReportXPostMissionResponse = {
  commonResponse: papicommon.Response
}
export type MeishiSetRequest = {
  number: number
}
export type MeishiSetResponse = {
  commonResponse: papicommon.Response
}
export type MeishiUnfollowRequest = {
  publicUserIds: string[]
}
export type MeishiUnfollowResponse = {
  commonResponse: papicommon.Response
}
export type MeishiUpdateRequest = {
  number: number
  meishiBase: MeishiUpdateRequest_MeishiBase
  objects: MeishiUpdateRequest_Object[]
  order: number
  meishiImageId: string
  timeline: string
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
  idolCardSkinId: string
  supportCardId: string
  produceCardId: string
  produceItemId: string
  produceDrinkId: string
  userPhotoId: string
  userMemoryId: string
  userMovieId: string
  meishiBaseAssetId: string
  meishiTextColorId: string
  positionX: number
  positionY: number
  size: number
  lock: boolean
  background: boolean
  layer: number
  metadata: string
}
export type MeishiUpdateResponse = {
  commonResponse: papicommon.Response
}
export type MemoryExchangeRequest = {
  userMemoryIds: string[]
}
export type MemoryExchangeResponse = {
  commonResponse: papicommon.Response
}
export type MemoryFixInheritRequest = {
  selectAfter: boolean
}
export type MemoryFixInheritResponse = {
  commonResponse: papicommon.Response
}
export type MemoryInheritRequest = {
  baseUserMemoryId: string
  materialUserMemoryId: string
  changeProduceCardId: string
}
export type MemoryInheritResponse = {
  beforeMemory: pcommon.Memory
  afterMemory: pcommon.Memory
  commonResponse: papicommon.Response
}
export type MemoryReshootingRequest = {
  userMemoryId: string
}
export type MemoryReshootingResponse = {
  commonResponse: papicommon.Response
}
export type MemoryUpdateProtectionRequest = {
  userMemoryId: string
  isProtected: boolean
}
export type MemoryUpdateProtectionResponse = {
  commonResponse: papicommon.Response
}
export type MemoryUpdateTagSettingRequest = {
  userMemoryId: string
  memoryTagId: string
}
export type MemoryUpdateTagSettingResponse = {
  commonResponse: papicommon.Response
}
export type MissionExchangePassPointRequest = {
  missionPassId: string
  threshold: number
}
export type MissionExchangePassPointResponse = {
  commonResponse: papicommon.Response
}
export type MissionListEventResponse = {
  events: pcommon.Event[]
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupAllRequest = {
  missionGroupId: string
}
export type MissionReceiveGroupAllResponse = {
  groupResults: pcommon.RewardResult[]
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type MissionReceiveGroupRequest = {
  missionGroupId: string
}
export type MissionReceiveGroupResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type MissionReceivePassRequest = {
  missionPassId: string
  normalThresholds: number[]
  premiumThresholds: number[]
}
export type MissionReceivePassResponse = {
  commonResponse: papicommon.Response
}
export type MissionReceiveRequest = {
  missions: MissionReceiveRequest_Mission[]
  missionPoints: MissionReceiveRequest_MissionPoint[]
}
type MissionReceiveRequest_Mission = {
  missionId: string
  threshold: number
}
type MissionReceiveRequest_MissionPoint = {
  missionPointId: string
  points: number[]
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
export type MissionUrlTransitionRequest = {
  url: string
}
export type MissionUrlTransitionResponse = {
  commonResponse: papicommon.Response
}
export type MoneyReceiveResponse = {
  quantity: number
  elapsedTimeSeconds: number
  isOverflow: boolean
  commonResponse: papicommon.Response
}
export type MovieCreateRequest = {
  userMovieId: string
  meishiNumber: number
}
export type MovieCreateResponse = {
  commonResponse: papicommon.Response
}
export type MovieDeleteRequest = {
  userMovieIds: string[]
}
export type MovieDeleteResponse = {
  commonResponse: papicommon.Response
}
export type MovieRetakeRequest = {
  userMovieId: string
  meishiImageId: string
}
export type MovieRetakeResponse = {
  commonResponse: papicommon.Response
}
export type MusicSendActionLogRequest = {
  playedMusicIds: string[]
  isPlaylistPlayed: boolean
  playlistMusicIds: string[]
}
export type MusicSendActionLogResponse = {
  commonResponse: papicommon.Response
}
export type MusicSendBuyActionLogRequest = {
  musicId: string
}
export type MusicSendBuyActionLogResponse = {
  commonResponse: papicommon.Response
}
export type NoticeFetchListRequest = {
  category: penum.NoticeCategory
  offset: number
}
export type NoticeFetchListResponse = {
  list: NoticeInfo[]
  hasNext: boolean
  commonResponse: papicommon.Response
}
export type NoticeGetRequest = {
  id: string
}
export type NoticeGetResponse = {
  info: NoticeInfo
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
export type NoticeListAllResponse = {
  infoList: NoticeInfo[]
  bugList: NoticeInfo[]
  prList: NoticeInfo[]
  infoHasNext: boolean
  bugHasNext: boolean
  prHasNext: boolean
  commonResponse: papicommon.Response
}
export type NoticeUpdateCategoryTimeRequest = {
  categories: penum.NoticeCategory[]
}
export type NoticeUpdateCategoryTimeResponse = {
  commonResponse: papicommon.Response
}
export type NoticeUpdateDetailTimeRequest = {
  noticeId: string
}
export type NoticeUpdateDetailTimeResponse = {
  commonResponse: papicommon.Response
}
export type PhotoCreateByMemoryRequest = {
  userMemoryId: string
}
export type PhotoCreateByMemoryResponse = {
  userPhotoId: string
  commonResponse: papicommon.Response
}
export type PhotoCreateIdolRequest = {
  characterSettings: PhotoCreateIdolRequest_CharacterSetting[]
  userPhotoIds: string[]
  photoBackgroundId: string
  photos: PhotoCreateIdolRequest_Photo[]
}
type PhotoCreateIdolRequest_CharacterSetting = {
  characterId: string
  costumeId: string
  costumeHeadId: string
}
type PhotoCreateIdolRequest_Photo = {
  characterSettings: PhotoCreateIdolRequest_Photo_CharacterSetting[]
  userPhotoIds: string[]
}
type PhotoCreateIdolRequest_Photo_CharacterSetting = {
  characterId: string
  costumeId: string
  costumeHeadId: string
}
export type PhotoCreateIdolResponse = {
  commonResponse: papicommon.Response
}
export type PhotoCreateRequest = {
  idolCardId: string
  userPhotoIds: string[]
  costumeId: string
  costumeHeadId: string
  characterId: string
}
export type PhotoCreateResponse = {
  commonResponse: papicommon.Response
}
export type PhotoDeleteRequest = {
  userPhotoIds: string[]
}
export type PhotoDeleteResponse = {
  commonResponse: papicommon.Response
}
export type PhotoUpdateNameRequest = {
  userPhotoId: string
  name: string
}
export type PhotoUpdateNameResponse = {
  commonResponse: papicommon.Response
}
export type PhotoUpdateProtectionRequest = {
  userPhotoId: string
  isProtected: boolean
}
export type PhotoUpdateProtectionResponse = {
  commonResponse: papicommon.Response
}
export type PreferenceUpdateRequest = {
  photoButtonExecuteType: penum.PhotoButtonExecuteType
  preferenceTypes: penum.PreferenceType[]
}
export type PreferenceUpdateResponse = {
  commonResponse: papicommon.Response
}
export type ProduceActivateEffectRequest = {
  produceUuid: string
  pickIndexes: number[]
}
export type ProduceActivateEffectResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceChangeCostumeRequest = {
  produce: boolean
  live: boolean
  training: boolean
}
export type ProduceChangeCostumeResponse = {
  commonResponse: papicommon.Response
}
export type ProduceChangeForceLiveCommonRequest = {
  produceGroupId: string
  characterId: string
  disableForceLiveCommon: boolean
}
export type ProduceChangeForceLiveCommonResponse = {
  commonResponse: papicommon.Response
}
export type ProduceCheckProgressRequest = {
  produceUuid: string
  clientProduceUuid: string
}
export type ProduceCheckProgressResponse = {
  isCurrentProduce: boolean
  needForceReset: boolean
  forceResetDescription: string
  produceUuid: string
  commonResponse: papicommon.Response
}
export type ProduceContinueRequest = {
  produceUuid: string
  auditionStepSelectNumber: number
}
export type ProduceContinueResponse = {
  commonResponse: papicommon.Response
}
export type ProduceDiscardDrinkRequest = {
  produceUuid: string
  drinkIndexes: number[]
}
export type ProduceDiscardDrinkResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceEndBeforeLiveEvaluationRequest = {
  produceUuid: string
}
export type ProduceEndBeforeLiveEvaluationResponse = {
  commonResponse: papicommon.Response
}
export type ProduceEndRequest = {
  produceUuid: string
  userMemoryId: string
  isDefaultImageMemory: boolean
}
export type ProduceEndResponse = {
  memory: pcommon.Memory
  commonResponse: papicommon.Response
}
export type ProduceExcludeProduceCardRequest = {
  produceUuid: string
  pickIndex: number
}
export type ProduceExcludeProduceCardResponse = {
  commonResponse: papicommon.Response
}
export type ProduceGrowthResult = {
  vocal: number
  dance: number
  visual: number
  growthRateBonusVocal: number
  growthRateBonusDance: number
  growthRateBonusVisual: number
}
export type ProduceHighScoreCharacter = {
  characterId: string
  rank: number
  highScore: number
  rankRewards: ProduceHighScoreRankReward[]
  highScoreRewards: ProduceHighScoreReward[]
}
export type ProduceHighScoreGetResponse = {
  produceHighScoreEventType: penum.ProduceHighScoreEventType
  titleAssetId: string
  rank: number
  highScore: number
  highScoreRewards: ProduceHighScoreReward[]
  rankRewards: ProduceHighScoreRankReward[]
  characters: ProduceHighScoreCharacter[]
  missionGroupId: string
  dailyMissionGroupId: string
  missionDailyReleaseGroupId: string
  coinGasha: pcommon.CoinGasha
  consumptionItemId: string
  result: ProduceHighScoreResult
  startupNotifications: pcommon.StartupNotification[]
  startTime: string
  endTime: string
  fixRankTime: string
  closeTime: string
  commonResponse: papicommon.Response
}
export type ProduceHighScoreListRankRewardResponse = {
  rankRewards: ProduceHighScoreRankReward[]
  characters: ProduceHighScoreCharacter[]
  commonResponse: papicommon.Response
}
export type ProduceHighScoreRankReward = {
  upperRank: number
  lowerRank: number
  borderScore: number
  rewards: pcommon.Reward[]
}
export type ProduceHighScoreRankingRequest = {
  characterId: string
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
export type ProduceHighScoreResult = {
  rank: number
  highScore: number
  rankRewards: ProduceHighScoreRankReward[]
  characters: ProduceHighScoreCharacter[]
  rewardResults: pcommon.RewardResult[]
}
export type ProduceHighScoreReward = {
  score: number
  reward: pcommon.Reward
}
export type ProduceHistoryRequest = {
  publicUserId: string
  userMemoryId: string
  isSelf: boolean
}
export type ProduceHistoryResponse = {
  produceHistory: pcommon.ProduceHistory
  commonResponse: papicommon.Response
}
export type ProduceListRentalMemoryRequest = {
  isHighScoreRush: boolean
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
export type ProduceNextRequest = {
  produceUuid: string
  stepType: penum.ProduceStepType
  selectNumber: number
}
export type ProduceNextResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceRank = {
  profile: pcommon.SimpleProfile
  rank: number
  score: number
  grade: penum.ResultGrade
  userMemoryId: string
}
export type ProduceRankingRequest = {
  produceGroupId: string
  idolCardId: string
}
export type ProduceRankingResponse = {
  ranks: ProduceRank[]
  selfRank: number
  selfScore: number
  selfGrade: penum.ResultGrade
  selfUserMemoryId: string
  commonResponse: papicommon.Response
}
export type ProduceRankingTopRequest = {
  produceGroupId: string
  characterId: string
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
export type ProduceReadAdvRequest = {
  produceUuid: string
  assetId: string
}
export type ProduceReadAdvResponse = {
  commonResponse: papicommon.Response
}
export type ProduceReadDearnessStoryRequest = {
  produceUuid: string
  isAuto: boolean
  isSkip: boolean
}
export type ProduceReadDearnessStoryResponse = {
  isFirst: boolean
  rewardResults: pcommon.RewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceReportGuildMissionRequest = {
  produceUuid: string
}
export type ProduceReportGuildMissionResponse = {
  guildMissions: pcommon.GuildMission[]
  guildMissionHistories: pcommon.GuildMissionHistory[]
  storyEventProduceResult: pcommon.StoryEventProduceResult
  commonResponse: papicommon.Response
}
export type ProduceRerollMemoryRequest = {
  produceUuid: string
}
export type ProduceRerollMemoryResponse = {
  commonResponse: papicommon.Response
}
export type ProduceRerollSelectProduceCardRequest = {
  produceUuid: string
}
export type ProduceRerollSelectProduceCardResponse = {
  commonResponse: papicommon.Response
}
export type ProduceResultRequest = {
  produceUuid: string
  isSkipLive: boolean
  manualPhotoCount: number
  isMemoryProtected: boolean
  memoryTagId: string
  memoryNumber: number
  isMemoryExchanged: boolean
}
export type ProduceResultResponse = {
  rewardResults: pcommon.RewardResult[]
  storyEventProduceResult: pcommon.StoryEventProduceResult
  highScoreUpdateResult: ProduceResultResponse_HighScoreUpdateResult
  unlockChallengeSlotNumbers: number[]
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
  characterHighScoreRewards: ProduceResultResponse_HighScoreReward[]
  highScoreRewardResults: pcommon.RewardResult[]
  characterHighScoreRewardResults: pcommon.RewardResult[]
  highScoreRushGoldRewardResults: pcommon.RewardResult[]
}
type ProduceResultResponse_HighScoreReward = {
  score: number
  reward: pcommon.Reward
}
export type ProduceRetireResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStartBeforeLiveEvaluationRequest = {
  produceUuid: string
}
export type ProduceStartBeforeLiveEvaluationResponse = {
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
  challengeProduceItemIds: string[]
  isHighScoreRush: boolean
  clientProduceUuid: string
}
type ProduceStartRequest_Memory = {
  userMemoryId: string
  rentalPublicUserId: string
}
type ProduceStartRequest_SupportCard = {
  supportCardId: string
  rentalPublicUserId: string
}
export type ProduceStartResponse = {
  produceUuid: string
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionEndExamBattleRequest = {
  produceUuid: string
  result: pcommon.ExamBattleResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type ProduceStepAuditionEndExamBattleResponse = {
  shouldTransitionSeminar: boolean
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionEndRequest = {
  produceUuid: string
}
export type ProduceStepAuditionEndResponse = {
  rewardResults: pcommon.ProduceRewardResult[]
  memoryRewardResults: pcommon.ProduceMemoryRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionRefreshRequest = {
  produceUuid: string
}
export type ProduceStepAuditionRefreshResponse = {
  beforeStamina: number
  afterStamina: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepAuditionStartRequest = {
  produceUuid: string
}
export type ProduceStepAuditionStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepBusinessSelectRequest = {
  produceUuid: string
  businessType: penum.ProduceStepBusinessType
}
export type ProduceStepBusinessSelectResponse = {
  consumptionResults: pcommon.ProduceConsumptionResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepBusinessStartRequest = {
  produceUuid: string
}
export type ProduceStepBusinessStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepCustomizeEndRequest = {
  produceUuid: string
}
export type ProduceStepCustomizeEndResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepCustomizeSelectRequest = {
  produceUuid: string
  deckProduceCardIndex: number
  produceCardCustomizeId: string
}
export type ProduceStepCustomizeSelectResponse = {
  beforeProducePoint: number
  afterProducePoint: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepCustomizeStartRequest = {
  produceUuid: string
}
export type ProduceStepCustomizeStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepEventRequest = {
  produceUuid: string
  suggestionIndex: number
  isSkip: boolean
  isFastForward: boolean
}
export type ProduceStepEventResponse = {
  success: boolean
  memoryRewardResults: pcommon.ProduceMemoryRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepLessonEndRequest = {
  produceUuid: string
  examEndResult: pcommon.ProduceExamEndResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type ProduceStepLessonEndResponse = {
  shouldTransitionSeminar: boolean
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepLessonStartRequest = {
  produceUuid: string
}
export type ProduceStepLessonStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepPresentEndRequest = {
  produceUuid: string
}
export type ProduceStepPresentEndResponse = {
  rewardResults: pcommon.ProduceRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepPresentReceiveRequest = {
  produceUuid: string
  positionNumber: number
  rewardIndexes: number[]
}
export type ProduceStepPresentReceiveResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepPresentStartRequest = {
  produceUuid: string
}
export type ProduceStepPresentStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepRefreshRequest = {
  produceUuid: string
}
export type ProduceStepRefreshResponse = {
  beforeStamina: number
  afterStamina: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepSelfLessonEndRequest = {
  produceUuid: string
}
export type ProduceStepSelfLessonEndResponse = {
  rewardResults: pcommon.ProduceRewardResult[]
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepSelfLessonStartRequest = {
  produceUuid: string
}
export type ProduceStepSelfLessonStartResponse = {
  beforeStamina: number
  afterStamina: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepShopBuyRequest = {
  produceUuid: string
  positionNumber: number
  deckProduceCardIndex: number
}
export type ProduceStepShopBuyResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  beforeProducePoint: number
  afterProducePoint: number
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepShopEndRequest = {
  produceUuid: string
}
export type ProduceStepShopEndResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepShopRerollRequest = {
  produceUuid: string
}
export type ProduceStepShopRerollResponse = {
  commonResponse: papicommon.Response
}
export type ProduceStepShopStartRequest = {
  produceUuid: string
}
export type ProduceStepShopStartResponse = {
  effectResults: pcommon.ProduceEffectResult[]
  commonResponse: papicommon.Response
}
export type ProduceStepSkipRequest = {
  produceUuid: string
}
export type ProduceStepSkipResponse = {
  beforeStamina: number
  afterStamina: number
  commonResponse: papicommon.Response
}
export type ProduceTopResponse = {
  newSeminarExam: boolean
  isClearAllSeminarExam: boolean
  campaigns: pcommon.ProduceCampaign[]
  storyEventType: penum.StoryEventType
  storyEventConsumptionItemId: string
  storyEventBonus: pcommon.StoryEventBonus
  produceHighScore: ProduceTopResponse_ProduceHighScore
  produceHighScoreCharacterIds: string[]
  commonResponse: papicommon.Response
}
type ProduceTopResponse_ProduceHighScore = {
  eventType: penum.ProduceHighScoreEventType
  characterIds: string[]
  produceGroupIds: string[]
  produceItemIds: string[]
  startTime: string
  endTime: string
}
export type ProduceUnlockPictureBookLiveRequest = {
  musicId: string
}
export type ProduceUnlockPictureBookLiveResponse = {
  commonResponse: papicommon.Response
}
export type ProduceUpdateMemoryDeck = {
  produceType: penum.ProduceType
  number: number
  userMemoryIds: string[]
  recommendType: penum.DeckRecommendType
  name: string
}
export type ProduceUpdateMemoryDeckRequest = {
  decks: ProduceUpdateMemoryDeck[]
}
export type ProduceUpdateMemoryDeckResponse = {
  commonResponse: papicommon.Response
}
export type ProduceUpdateSupportCardDeck = {
  produceType: penum.ProduceType
  number: number
  supportCardIds: string[]
  recommendType: penum.DeckRecommendType
  name: string
}
export type ProduceUpdateSupportCardDeckRequest = {
  decks: ProduceUpdateSupportCardDeck[]
}
export type ProduceUpdateSupportCardDeckResponse = {
  commonResponse: papicommon.Response
}
export type ProduceUseDrinkResponse = {
  effectResults: pcommon.ProduceEffectResult[]
}
export type ProduceViewPictureBookLiveRequest = {
  musicId: string
}
export type ProduceViewPictureBookLiveResponse = {
  commonResponse: papicommon.Response
}
export type ProfileBirthday = {
  month: number
  day: number
}
export type ProfileGetRequest = {
  publicUserId: string
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
  mainTaskProducer2ClearCount: number
  mainTaskProducer3ClearCount: number
  mainTaskProducer4ClearCount: number
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
export type ProfileUpdateBirthdayRequest = {
  month: number
  day: number
}
export type ProfileUpdateBirthdayResponse = {
  commonResponse: papicommon.Response
}
export type ProfileUpdateCommentRequest = {
  comment: string
}
export type ProfileUpdateCommentResponse = {
  commonResponse: papicommon.Response
}
export type ProfileUpdateMemoryRequest = {
  userMemoryId: string
}
export type ProfileUpdateMemoryResponse = {
  commonResponse: papicommon.Response
}
export type ProfileUpdateNameRequest = {
  name: string
}
export type ProfileUpdateNameResponse = {
  commonResponse: papicommon.Response
}
export type ProfileUpdateSupportCardRequest = {
  supportCardId: string
}
export type ProfileUpdateSupportCardResponse = {
  commonResponse: papicommon.Response
}
export type PvpRateEndRequest = {
  stages: pcommon.ExamBattleAutoStageResult[]
}
export type PvpRateEndResponse = {
  addRate: number
  beforeRank: number
  afterRate: number
  afterRank: number
  fanCount: number
  playReward: pcommon.RewardResult
  rateRewards: PvpRateRateReward[]
  isRateProvideDisable: boolean
  commonResponse: papicommon.Response
}
export type PvpRateGetHistoryRequest = {
  playTime: string
}
export type PvpRateGetHistoryResponse = {
  examBattleResult: pcommon.PvpRateExamBattleResult
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
export type PvpRateInitializeResponse = {
  previousSeasonResult: PvpRateSeasonResult
  isChangedFormation: boolean
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
export type PvpRateListRankingResponse = {
  users: PvpRateRankingUser[]
  self: PvpRateRankingUser
  commonResponse: papicommon.Response
}
export type PvpRatePlayExamBattleResponse = {
  commonResponse: papicommon.Response
}
export type PvpRatePlayTestResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  selfFormations: PvpRateUnitStageFormation[]
  commonResponse: papicommon.Response
}
export type PvpRateRankReward = {
  upperRank: number
  lowerRank: number
  rewards: pcommon.Reward[]
}
export type PvpRateRankingUser = {
  profile: pcommon.SimpleProfile
  rank: number
  rate: number
  formations: PvpRateUnitStageFormation[]
}
export type PvpRateRateReward = {
  rate: number
  reward: pcommon.Reward
}
export type PvpRateRival = {
  profile: pcommon.SimpleProfile
  rivalType: penum.PvpRateRivalType
  earnedRate: number
  isNpc: boolean
  formations: PvpRateUnitStageFormation[]
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
export type PvpRateStartRequest = {
  rivalType: penum.PvpRateRivalType
}
export type PvpRateStartResponse = {
  examBattleAutoRequest: pcommon.ExamBattleAutoRequest
  selfFormations: PvpRateUnitStageFormation[]
  rival: PvpRateRival
  commonResponse: papicommon.Response
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
export type PvpRateUpdateUserPvpRateUnitRequest = {
  stageFormations: pcommon.PvpRateSetupUnitStageFormation[]
  recommendType: penum.DeckRecommendType
}
export type PvpRateUpdateUserPvpRateUnitResponse = {
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
export type SeminarEndExamResponse = {
  commonResponse: papicommon.Response
}
export type SeminarGetExamRequest = {
  groupId: string
  examId: string
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
type SeminarGetExamResponse_FailureNavigation = {
  produceExamTriggerId: string
  text1: string
  produceCards1: pcommon.ProduceCard[]
  text2: string
  produceCards2: pcommon.ProduceCard[]
  priority: number
}
type SeminarGetExamResponse_TurnNavigation = {
  turn: number
  fieldStatusCheckType: penum.ProduceExamTriggerCheckType
  fieldStatusType: penum.ProduceExamFieldStatusType
  fieldStatusValue: number
  steps: SeminarGetExamResponse_TurnNavigationStep[]
}
type SeminarGetExamResponse_TurnNavigationStep = {
  navigationType: penum.TutorialNavigationType
  texts: string[]
  assetIds: string[]
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
export type ShopCancelPurchaseTransactionRequest = {
  transactionId: string
}
export type ShopCancelPurchaseTransactionResponse = {
  commonResponse: papicommon.Response
}
export type ShopCheckPurchaseJewelRequest = {
  shopItemId: string
}
export type ShopCheckPurchaseJewelResponse = {
  birthdayNotRegistered: boolean
  exceedMaxJewelQuantity: boolean
  exceedPurchaseThreshold: boolean
  exceedAlertThreshold: boolean
  isUnderage: boolean
  commonResponse: papicommon.Response
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
export type ShopListItemsRequest = {
  shopId: string
}
export type ShopListItemsResponse = {
  list: pmaster.ShopItem[]
  commonResponse: papicommon.Response
}
export type ShopPurchaseJewelRequest = {
  productId: string
  transactionId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
  storeTransactionId: string
  accountId: string
  accountSignature: string
}
export type ShopPurchaseJewelResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ShopPurchaseRequest = {
  shopItemId: string
}
export type ShopPurchaseResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ShopRecoverPurchaseJewelRequest = {
  productId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
  storeTransactionId: string
  accountId: string
  accountSignature: string
}
export type ShopRecoverPurchaseJewelResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type ShopRegisterBirthdayRequest = {
  year: number
  month: number
  day: number
}
export type ShopRegisterBirthdayResponse = {
  commonResponse: papicommon.Response
}
export type ShopRegisterDelayPurchaseTransactionRequest = {
  transactionId: string
  storeTransactionId: string
}
export type ShopRegisterDelayPurchaseTransactionResponse = {
  commonResponse: papicommon.Response
}
export type ShopRegisterPurchaseTransactionRequest = {
  shopItemId: string
}
export type ShopRegisterPurchaseTransactionResponse = {
  transactionId: string
  commonResponse: papicommon.Response
}
export type ShopTopResponse = {
  shopList: ShopTopResponse_Shop[]
  shopItemList: pmaster.ShopItem[]
  itemExchangeNoti: boolean
  dailyExchangeNoti: boolean
  coinGashaNoti: boolean
  ticketExchangeNoti: boolean
  startupNotifications: pcommon.StartupNotification[]
  commonResponse: papicommon.Response
}
type ShopTopResponse_Shop = {
  id: string
  endTime: string
  nextResetTime: string
  shopItems: pmaster.ShopItem[]
}
export type StartupConfirmRequest = {
  notifications: StartupConfirmRequest_Notification[]
}
type StartupConfirmRequest_Notification = {
  startupNotificationId: string
  isSkip: boolean
}
export type StartupConfirmResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type StartupListNotificationsRequest = {
  displayType: penum.StartupNotificationDisplayType
  targetId: string
}
export type StartupListNotificationsResponse = {
  notifications: pcommon.StartupNotification[]
  commonResponse: papicommon.Response
}
export type StepUpGashaProbability = {
  step: number
  defaultGashaProbability: DefaultGashaProbability
}
export type StoryEventListGuildMissionRequest = {
  storyEventId: string
}
export type StoryEventListGuildMissionResponse = {
  guildMissions: pcommon.GuildMission[]
  guildMissionHistories: pcommon.GuildMissionHistory[]
  canReceive: boolean
  commonResponse: papicommon.Response
}
export type StoryEventReceiveGuildMissionRequest = {
  storyEventId: string
  storyEventGuildMissionIds: string[]
}
export type StoryEventReceiveGuildMissionResponse = {
  receiveResults: StoryEventReceiveGuildMissionResponse_ReceiveResult[]
  commonResponse: papicommon.Response
}
type StoryEventReceiveGuildMissionResponse_ReceiveResult = {
  guildMissionHistory: pcommon.GuildMissionHistory
  rewardResult: pcommon.RewardResult
}
export type StoryEventTopRequest = {
  storyEventId: string
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
  isJoinedGuild: boolean
  guildMissionNoti: boolean
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
  modelAssetIds: string[]
}
export type StoryReadDearnessStoryRequest = {
  characterId: string
  dearnessLevel: number
  isAuto: boolean
  isSkip: boolean
}
export type StoryReadDearnessStoryResponse = {
  characterId: string
  beforeDearnessLevel: number
  afterDearnessLevel: number
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type StoryReadProduceStoryRequest = {
  produceStoryId: string
  isAuto: boolean
  isSkip: boolean
}
export type StoryReadProduceStoryResponse = {
  commonResponse: papicommon.Response
}
export type StoryReadRequest = {
  storyId: string
  isAuto: boolean
  isSkip: boolean
}
export type StoryReadResponse = {
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type StoryUnlockProduceStoryRequest = {
  produceStoryId: string
}
export type StoryUnlockProduceStoryResponse = {
  commonResponse: papicommon.Response
}
export type StoryUnlockRequest = {
  storyId: string
}
export type StoryUnlockResponse = {
  commonResponse: papicommon.Response
}
export type SupportCardEnhanceRequest = {
  supportCardId: string
  level: number
}
export type SupportCardEnhanceResponse = {
  commonResponse: papicommon.Response
}
export type SupportCardExchangeRequest = {
  parameters: SupportCardExchangeRequest_Parameter[]
}
type SupportCardExchangeRequest_Parameter = {
  supportCardId: string
  quantity: number
}
export type SupportCardExchangeResponse = {
  commonResponse: papicommon.Response
}
export type SupportCardProbability = {
  supportCardId: string
  tenPermyriadProbability: number
  rewards: pcommon.Reward[]
  isPickup: boolean
}
export type SupportCardRarityProbability = {
  rarity: penum.SupportCardRarity
  tenPermyriadProbability: number
  probabilities: SupportCardProbability[]
}
export type SupportCardUpgradeLevelLimitRankRequest = {
  supportCardId: string
  afterRank: penum.SupportCardLevelLimitRank
}
export type SupportCardUpgradeLevelLimitRankResponse = {
  commonResponse: papicommon.Response
}
export type SystemCheckRequest = {
  idToken: string
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
  shopProductIds: string[]
  dmmGamesReceiptApiToken: string
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
export type TicketExchangeExecuteRequest = {
  ticketExchangeItemId: string
}
export type TicketExchangeExecuteResponse = {
  item: TicketExchangeItem
  rewardResults: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TicketExchangeItem = {
  id: string
  rewards: pcommon.Reward[]
  exchangedCount: number
  unlocked: boolean
  unlockConditionSetId: string
  order: number
}
export type TicketExchangeListItemsRequest = {
  ticketItemId: string
}
export type TicketExchangeListItemsResponse = {
  items: TicketExchangeItem[]
  commonResponse: papicommon.Response
}
export type TowerCheckRequest = {
  seed: string
}
export type TowerCheckResponse = {
  isCurrentTower: boolean
  commonResponse: papicommon.Response
}
export type TowerEndRequest = {
  seed: string
  result: pcommon.ExamBattleResult
  turnEndLogs: pcommon.ExamTurnEndLog[]
}
export type TowerEndResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TowerGetLayerIdolCardRankingRequest = {
  towerId: string
  number: number
  idolCardId: string
}
export type TowerGetLayerIdolCardRankingResponse = {
  towerRankingResult: TowerRankingResult
  commonResponse: papicommon.Response
}
export type TowerGetLayerIdolCardRankingTopRequest = {
  towerId: string
  number: number
}
export type TowerGetLayerIdolCardRankingTopResponse = {
  rankingCaches: TowerRankingCache[]
  commonResponse: papicommon.Response
}
export type TowerGetLayerRequest = {
  towerId: string
  number: number
}
export type TowerGetLayerResponse = {
  maxSubMemoryCount: number
  exams: TowerGetLayerResponse_Exam[]
  bgmAssetId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  examTimelineAssetId: string
  rankingHighestScore: string
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
export type TowerGetPastSeasonLayerIdolCardRankingRequest = {
  seasonStartYear: string
  seasonStartMonth: string
  towerId: string
  number: number
  idolCardId: string
}
export type TowerGetPastSeasonLayerIdolCardRankingResponse = {
  towerRankingResult: TowerRankingResult
  commonResponse: papicommon.Response
}
export type TowerGetPastSeasonLayerIdolCardRankingTopRequest = {
  seasonStartYear: string
  seasonStartMonth: string
  towerId: string
  number: number
}
export type TowerGetPastSeasonLayerIdolCardRankingTopResponse = {
  rankingCaches: TowerRankingCache[]
  commonResponse: papicommon.Response
}
export type TowerGetPastSeasonRankingRequest = {
  seasonStartYear: string
  seasonStartMonth: string
  towerId: string
}
export type TowerGetPastSeasonRankingResponse = {
  towerRankingResult: TowerRankingResult
  commonResponse: papicommon.Response
}
export type TowerGetRankingDeckRequest = {
  towerId: string
  number: number
  idolCardId: string
  publicUserId: string
}
export type TowerGetRankingDeckResponse = {
  memories: pcommon.Memory[]
  isDefaultMemory: boolean
  commonResponse: papicommon.Response
}
export type TowerGetRankingRequest = {
  towerId: string
}
export type TowerGetRankingResponse = {
  towerRankingResult: TowerRankingResult
  commonResponse: papicommon.Response
}
export type TowerListLayerPlayerHistoriesRequest = {
  towerId: string
  number: number
}
export type TowerListLayerPlayerHistoriesResponse = {
  histories: pcommon.TowerLayerHistory[]
  commonResponse: papicommon.Response
}
export type TowerListLayersRequest = {
  towerId: string
}
export type TowerListLayersResponse = {
  layers: TowerListLayersResponse_TowerLayer[]
  towerRankingSeasons: TowerRankingSeason[]
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
export type TowerRank = {
  profile: pcommon.SimpleProfile
  rank: number
  score: string
}
export type TowerRankingCache = {
  idolCardId: string
  ranks: TowerRank[]
  selfHighestScore: string
  selfHighestRank: number
}
export type TowerRankingResult = {
  towerRanks: TowerRank[]
  selfRank: number
  selfHighestRank: number
  selfHighestScore: string
}
export type TowerRankingSeason = {
  startTime: string
  endTime: string
  aggregationEndTime: string
  inAggregation: boolean
}
export type TowerReceiveLayerCountRewardRequest = {
  targetTowerId: string
  targetNumber: number
}
export type TowerReceiveLayerCountRewardResponse = {
  result: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TowerReceiveTotalClearRankRewardRequest = {
  targetRank: number
}
export type TowerReceiveTotalClearRankRewardResponse = {
  result: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TowerStartRequest = {
  towerId: string
  number: number
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
export type TowerTopResponse = {
  towers: TowerTopResponse_Tower[]
  previousTotalClearRank: number
  nextTotalClearRank: number
  nextReward: pcommon.Reward
  startupNotifications: pcommon.StartupNotification[]
  towerRankingSeasons: TowerRankingSeason[]
  commonResponse: papicommon.Response
}
type TowerTopResponse_Tower = {
  id: string
  layerCount: number
  hasLayerCountReward: boolean
}
export type TowerUpdateMemoryDeckRequest = {
  towerId: string
  memoryIds: string[]
  recommendType: penum.DeckRecommendType
}
export type TowerUpdateMemoryDeckResponse = {
  commonResponse: papicommon.Response
}
export type TutorialCheckBeforeLiveProduceEvaluationResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceNextResponse = {
  beforeStamina: number
  afterStamina: number
  commonResponse: papicommon.Response
}
export type TutorialProduceResultRequest = {
  userMemoryId: string
  isDefaultImageMemory: boolean
}
export type TutorialProduceResultResponse = {
  memory: pcommon.Memory
  commonResponse: papicommon.Response
}
export type TutorialProduceStartRequest = {
  idolCardId: string
}
export type TutorialProduceStartResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepAuditionEndResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepAuditionExamEndRequest = {
  rank: number
  score: number
  stamina: number
  produceCardIds: string[]
}
export type TutorialProduceStepAuditionExamEndResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepLessonEndRequest = {
  resultTargetValue: number
  stamina: number
  produceCardIds: string[]
}
export type TutorialProduceStepLessonEndResponse = {
  commonResponse: papicommon.Response
}
export type TutorialProduceStepPresentReceiveRequest = {
  positionNumber: number
  rewardIndexes: number[]
}
export type TutorialProduceStepPresentReceiveResponse = {
  providedRewards: pcommon.ProduceRewardResult[]
  commonResponse: papicommon.Response
}
export type TutorialProgressRequest = {
  type: penum.TutorialType
  step: number
}
export type TutorialProgressResponse = {
  commonResponse: papicommon.Response
}
export type TutorialReadDearnessStoryRequest = {
  characterId: string
  dearnessLevel: number
  isAuto: boolean
  isSkip: boolean
}
export type TutorialReadDearnessStoryResponse = {
  commonResponse: papicommon.Response
}
export type TutorialReceiveIdolCardRequest = {
  idolCardSkinId: string
}
export type TutorialReceiveIdolCardResponse = {
  results: pcommon.RewardResult[]
  commonResponse: papicommon.Response
}
export type TutorialSetNameRequest = {
  name: string
}
export type TutorialSetNameResponse = {
  commonResponse: papicommon.Response
}
export type TutorialSkipRequest = {
  name: string
  idolCardId: string
}
export type TutorialSkipResponse = {
  commonResponse: papicommon.Response
}
export type TutorialUnlockFeatureRequest = {
  type: penum.TutorialType
}
export type TutorialUnlockFeatureResponse = {
  commonResponse: papicommon.Response
}
export type UserGetResponse = {
  userData: papicommon.UserData
}
export type UserListMessageRequest = {
  offset: number
}
export type UserListMessageResponse = {
  personalMessages: UserListMessageResponse_PersonalMessage[]
  count: number
  offset: number
  hasNext: boolean
  commonResponse: papicommon.Response
}
type UserListMessageResponse_PersonalMessage = {
  userPersonalMessageId: string
  message: string
}
export type UserReadMessageRequest = {
  userPersonalMessageIds: string[]
}
export type UserReadMessageResponse = {
  commonResponse: papicommon.Response
}
export type WorkFinishResponse = {
  finishResults: WorkFinishResult[]
  commonResponse: papicommon.Response
}
export type WorkFinishResult = {
  type: penum.WorkType
  rewardResults: pcommon.RewardResult[]
  isExcellent: boolean
  isFined: boolean
}
export type WorkSkipRequest = {
  type: penum.WorkType
}
export type WorkSkipResponse = {
  finishResult: WorkFinishResult
  commonResponse: papicommon.Response
}
export type WorkStartRequest = {
  type: penum.WorkType
  durationMinutes: number
  characterId: string
}
export type WorkStartResponse = {
  commonResponse: papicommon.Response
}
export type WorkStopRequest = {
  type: penum.WorkType
}
export type WorkStopResponse = {
  commonResponse: papicommon.Response
}
export type WorkTopResponse = {
  finishResults: WorkFinishResult[]
  commonResponse: papicommon.Response
}
