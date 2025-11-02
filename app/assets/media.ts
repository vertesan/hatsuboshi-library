import { ProduceCardGrowEffectType, ProduceDescriptionType, ProduceExamEffectType, ProduceStepAuditionType, ResultGrade } from "~/types/proto/penum"
import {
  VITE_IMG_PREFIX,
} from "~/utils/env"

// icon
export const appIcon = "/img/app-icon-2.webp"
export const routeProduceIcon = "/img/icon_produce.webp"
export const routeToolsIcon = "/img/icon_item.webp"
export const routeCidolIcon = "/img/icon_anotheridol.webp"
export const routeCsprtIcon = "/img/icon_supportcard.webp"
export const routeCharactersIcon = "/img/icon_idol.webp"
export const routePCardIcon = "/img/icon_pdictionary.webp"
export const routeEvaluationIcon = "/img/icon_memory.webp"
export const routeMemoryIcon = "/img/icon_serch.webp"
export const routeAboutIcon = "/img/icon_info.webp"
export const supportAttrDanceIcon = "/img/img_general_icon_support-type_dance.webp"
export const supportAttrVocalIcon = "/img/img_general_icon_support-type_vocal.webp"
export const supportAttrVisualIcon = "/img/img_general_icon_support-type_visual.webp"
export const supportAttrAssistIcon = "/img/img_general_icon_support-type_assist.webp"
export const supportRaritySsrIcon = "/img/icon_rarity_txt_ssr.webp"
export const supportRaritySrIcon = "/img/icon_rarity_txt_sr.webp"
export const supportRarityRIcon = "/img/icon_rarity_txt_r.webp"
export const planCommonIcon = "/img/icon_plan_common.webp"
export const plan1Icon = "/img/icon_plan_plan1.webp"
export const plan2Icon = "/img/icon_plan_plan2.webp"
export const plan3Icon = "/img/icon_plan_plan3.webp"
export const upgradedIcon = "/img/icon_enhanced.webp"
export const idolStaminaIcon = "/img/icon_stamina_idol_card.webp"
export const staminaIcon = "/img/icon_stamina.webp"
export const staminaRedIcon = "/img/icon_stamina_red.webp"
export const limitIcon = "/img/icon_level_limit_rank.webp"
export const potentialIcon = "/img/icon_potential_rank.webp"
export const number0 = "/img/ef_txt_special_0_before.webp"
export const number1 = "/img/ef_txt_special_1_before.webp"
export const number2 = "/img/ef_txt_special_2_before.webp"
export const number3 = "/img/ef_txt_special_3_before.webp"
export const number4 = "/img/ef_txt_special_4_before.webp"
export const number5 = "/img/ef_txt_special_5_before.webp"
export const number6 = "/img/ef_txt_special_6_before.webp"
export const number7 = "/img/ef_txt_special_7_before.webp"
export const number8 = "/img/ef_txt_special_8_before.webp"
export const number9 = "/img/ef_txt_special_9_before.webp"
export const numberMinus = "/img/ef_txt_minus.webp"
export const contestIcon = "/img/icon_contest.webp"
export const blockIcon = "/img/icon_block.webp"
export const multiplier = "/img/text_multiplier.webp"
export const onStartIcon = "/img/memory_skill_phase_start.webp"
export const routeCharts = "/img/icon_audition_trend.webp"
export const tableIcon = "/img/icon_effect_detail.webp"

export const numberMap = {
  0: number0,
  1: number1,
  2: number2,
  3: number3,
  4: number4,
  5: number5,
  6: number6,
  7: number7,
  8: number8,
  9: number9,
}

// icon background / frame
export const pItemBgSsr = "/img/item_bg_ssr.webp"
export const pItemBgSr = "/img/item_bg_sr.webp"
export const pItemBgR = "/img/item_bg_r.webp"
export const pItemBgN = "/img/item_bg_n.webp"
export const cardMentalFrameSsr = "/img/card_frame_m_ssr.webp"
export const cardMentalFrameSr = "/img/card_frame_m_sr.webp"
export const cardMentalFrameR = "/img/card_frame_m_r.webp"
export const cardMentalFrameN = "/img/card_frame_m_n.webp"
export const cardActiveFrameSsr = "/img/card_frame_a_ssr.webp"
export const cardActiveFrameSr = "/img/card_frame_a_sr.webp"
export const cardActiveFrameR = "/img/card_frame_a_r.webp"
export const cardActiveFrameN = "/img/card_frame_a_n.webp"
export const cardTroubleFrame = "/img/card_frame_t.webp"
export const buffBgBlue = "/img/buff_bg_blue.webp"
export const buffBgYellow = "/img/buff_bg_yellow.webp"
export const buffBgRed = "/img/buff_bg_red.webp"
export const buffBgGreen = "/img/buff_bg_green.webp"
export const buffPreservation = "/img/buff_base_preservation.webp"
export const buffOverPreservation = "/img/buff_base_overpreservation.webp"
export const buffFullpower = "/img/buff_base_fullpower.webp"
export const buffConcentration = "/img/buff_base_concentration.webp"
export const arrowVoUp = "/img/score_up_arrow_vo_up.webp"
export const arrowDaUp = "/img/score_up_arrow_da_up.webp"
export const arrowViUp = "/img/score_up_arrow_vi_up.webp"
export const pPoint = "/img/img_general_event_circle-mission_panel_icon_open_producepoint.webp"

const extension = ".webp"
const fullCsprtImgTemplate = `img_general_{id}_full${extension}`
const fullCidolImgTemplate0 = `img_general_{id}_0-full${extension}`
const fullCidolImgTemplate1 = `img_general_{id}_1-full${extension}`

export const hajimeImg = "img_general_ui_produce-group-1_logo"
export const niaImg = "img_general_ui_produce-group-2_logo"

export function getCsprtFullImgUrl(assetId: string) {
  return VITE_IMG_PREFIX + fullCsprtImgTemplate.replace("{id}", assetId)
}
export function getCidolFullImgUrl0(assetId: string) {
  return VITE_IMG_PREFIX + fullCidolImgTemplate0.replace("{id}", assetId)
}
export function getCidolFullImgUrl1(assetId: string) {
  return VITE_IMG_PREFIX + fullCidolImgTemplate1.replace("{id}", assetId)
}
export function getSDFaceImgUrl(charaId: string) {
  return `${VITE_IMG_PREFIX}img_sd_${charaId}_face-00${extension}`
}
export function getCharaFullImgUrl(charaId: string) {
  return `${VITE_IMG_PREFIX}img_chr_${charaId}_00-full${extension}`
}
export function getCharaSignImgUrl(charaId: string) {
  return `${VITE_IMG_PREFIX}img_general_sign_${charaId}_00${extension}`
}
export function getResultGradeImgUrl(rank: ResultGrade) {
  return `${VITE_IMG_PREFIX}img_general_icon_produce-rank-small_${ResultGrade[rank].toLowerCase()}`
}
export function getNIAAuditionImgUrl(auditionType: ProduceStepAuditionType) {
  return `${VITE_IMG_PREFIX}img_general_ui_produce-group-2_audition_select-list-cell-bg_${ProduceStepAuditionType[auditionType].toLowerCase()}`
}

export function getAssetImgUrl(assetId: string) {
  return `${VITE_IMG_PREFIX}${assetId}${extension}`
}

const examEffectTemplate = `img_general_icon_exam-effect_{id}${extension}`

export function getExamEffectImgUrl(
  effectType: ProduceExamEffectType,
  descriptionType: ProduceDescriptionType.ProduceExamEffectType,
): string
export function getExamEffectImgUrl(
  effectType: ProduceCardGrowEffectType,
  descriptionType: ProduceDescriptionType.ProduceCardGrowEffectType,
): string
export function getExamEffectImgUrl(
  effectType: ProduceExamEffectType | ProduceCardGrowEffectType,
  descriptionType: ProduceDescriptionType.ProduceExamEffectType | ProduceDescriptionType.ProduceCardGrowEffectType = ProduceDescriptionType.ProduceExamEffectType,
) {
  let iconEffectType: ProduceExamEffectType = effectType as number
  if (descriptionType === ProduceDescriptionType.ProduceExamEffectType) {
    if (extraEffectNameMap[effectType] !== undefined) {
      iconEffectType = extraEffectNameMap[effectType]
    }
  } else if (descriptionType === ProduceDescriptionType.ProduceCardGrowEffectType) {
    if (extraGrowEffectNameMap[effectType] !== undefined) {
      iconEffectType = extraGrowEffectNameMap[effectType]
    } else {
      iconEffectType = ProduceExamEffectType.Unknown
    }
  }
  const effectName = ProduceExamEffectType[iconEffectType]?.toLowerCase()
  return VITE_IMG_PREFIX + examEffectTemplate.replace(("{id}"), effectName)
}

const extraEffectNameMap: { [x: number]: ProduceExamEffectType } = {
  [ProduceExamEffectType.ExamCardDraw]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceExamEffectType.ExamStaminaReduceFix]: ProduceExamEffectType.ExamStaminaRecoverFix,
  [ProduceExamEffectType.ExamCardUpgrade]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceExamEffectType.ExamLessonDependBlock]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamCardCreateSearch]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceExamEffectType.ExamMultipleLessonBuffLesson]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamStaminaConsumptionAdd]: ProduceExamEffectType.ExamStaminaConsumptionDown,
  [ProduceExamEffectType.ExamHandGraveCountCardDraw]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceExamEffectType.ExamBlockFix]: ProduceExamEffectType.ExamBlock,
  [ProduceExamEffectType.ExamLessonDependExamReview]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamLessonDependExamCardPlayAggressive]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamLessonDependParameterBuff]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamReviewReduce]: ProduceExamEffectType.ExamReview,
  [ProduceExamEffectType.ExamAggressiveReduce]: ProduceExamEffectType.ExamCardPlayAggressive,
  [ProduceExamEffectType.ExamLessonBuffReduce]: ProduceExamEffectType.ExamLessonBuff,
  [ProduceExamEffectType.ExamParameterBuffReduce]: ProduceExamEffectType.ExamParameterBuff,
  [ProduceExamEffectType.ExamCardMove]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceExamEffectType.ExamStaminaRecoverMultiple]: ProduceExamEffectType.ExamStaminaRecoverFix,
  [ProduceExamEffectType.ExamLessonFullPowerPoint]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamBlockValueMultiple]: ProduceExamEffectType.ExamBlock,
  [ProduceExamEffectType.ExamReviewValueMultiple]: ProduceExamEffectType.ExamReview,
  [ProduceExamEffectType.ExamLessonValueMultiple]: ProduceExamEffectType.ExamLesson,
  [ProduceExamEffectType.ExamAggressiveValueMultiple]: ProduceExamEffectType.ExamCardPlayAggressive,
  [ProduceExamEffectType.ExamLessonAddMultipleLessonBuff]: ProduceExamEffectType.ExamLessonBuff,
  [ProduceExamEffectType.ExamReviewPerSearchCount]: ProduceExamEffectType.ExamReview,
  [ProduceExamEffectType.ExamLessonBuffDependParameterBuff]: ProduceExamEffectType.ExamLessonBuff,
}

const extraGrowEffectNameMap: { [x: number]: ProduceExamEffectType } = {
  [ProduceCardGrowEffectType.Unknown]: ProduceExamEffectType.Unknown,
  [ProduceCardGrowEffectType.LessonAdd]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.LessonReduce]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.LessonCountAdd]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.LessonCountReduce]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.BlockAdd]: ProduceExamEffectType.ExamBlock,
  [ProduceCardGrowEffectType.BlockReduce]: ProduceExamEffectType.ExamBlock,
  [ProduceCardGrowEffectType.FullPowerPointAdd]: ProduceExamEffectType.ExamFullPowerPoint,
  [ProduceCardGrowEffectType.FullPowerPointReduce]: ProduceExamEffectType.ExamFullPowerPoint,
  // [ProduceCardGrowEffectType.CostBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostReduce]: 0,
  // [ProduceCardGrowEffectType.CostAdd]: 0,
  // [ProduceCardGrowEffectType.CostPenetrateReduce]: 0,
  // [ProduceCardGrowEffectType.CostPenetrateAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffTurnAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffTurnReduce]: 0,
  [ProduceCardGrowEffectType.LessonBuffAdd]: ProduceExamEffectType.ExamLessonBuff,
  [ProduceCardGrowEffectType.LessonBuffReduce]: ProduceExamEffectType.ExamLessonBuff,
  [ProduceCardGrowEffectType.ReviewAdd]: ProduceExamEffectType.ExamReview,
  [ProduceCardGrowEffectType.ReviewReduce]: ProduceExamEffectType.ExamReview,
  [ProduceCardGrowEffectType.AggressiveAdd]: ProduceExamEffectType.ExamCardPlayAggressive,
  [ProduceCardGrowEffectType.AggressiveReduce]: ProduceExamEffectType.ExamCardPlayAggressive,
  [ProduceCardGrowEffectType.CardDrawAdd]: ProduceExamEffectType.ExamCardCreateId,
  [ProduceCardGrowEffectType.CardDrawReduce]: ProduceExamEffectType.ExamCardCreateId,
  // [ProduceCardGrowEffectType.ParameterBuffMultiplePerTurnAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffMultiplePerTurnReduce]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionDownTurnAdd]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionDownTurnReduce]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionAddTurnAdd]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionAddTurnReduce]: 0,
  // [ProduceCardGrowEffectType.EffectAdd]: 0,
  // [ProduceCardGrowEffectType.EffectDelete]: 0,
  // [ProduceCardGrowEffectType.EffectChange]: 0,
  // [ProduceCardGrowEffectType.CardStatusEnchantChange]: 0,
  // [ProduceCardGrowEffectType.PlayTriggerChange]: 0,
  // [ProduceCardGrowEffectType.PlayEffectTriggerChange]: 0,
  // [ProduceCardGrowEffectType.PlayMovePositionTypeChange]: 0,
  // [ProduceCardGrowEffectType.InitialAdd]: 0,
  // [ProduceCardGrowEffectType.CostLessonBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostLessonBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostReviewReduce]: 0,
  // [ProduceCardGrowEffectType.CostReviewAdd]: 0,
  // [ProduceCardGrowEffectType.CostAggressiveReduce]: 0,
  // [ProduceCardGrowEffectType.CostAggressiveAdd]: 0,
  // [ProduceCardGrowEffectType.CostParameterBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostParameterBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostFullPowerPointReduce]: 0,
  // [ProduceCardGrowEffectType.CostFullPowerPointAdd]: 0,
  [ProduceCardGrowEffectType.LessonDependBlockAdd]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.LessonDependExamCardPlayAggressiveAdd]: ProduceExamEffectType.ExamLesson,
  [ProduceCardGrowEffectType.LessonDependExamReviewAdd]: ProduceExamEffectType.ExamLesson,
}

export const buffTypeBackground = {
  [ProduceExamEffectType.Unknown]: buffBgYellow,
  [ProduceExamEffectType.ExamLesson]: buffBgBlue,
  [ProduceExamEffectType.ExamParameterBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamBlock]: buffBgBlue,
  [ProduceExamEffectType.ExamCardDraw]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaConsumptionDown]: buffBgBlue,
  [ProduceExamEffectType.ExamCardCreateId]: buffBgYellow,
  [ProduceExamEffectType.ExamStaminaReduceFix]: buffBgRed,
  [ProduceExamEffectType.ExamCardMove]: buffBgYellow,
  [ProduceExamEffectType.ExamLessonBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamCardUpgrade]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockValueMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamPlayableValueAdd]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonBuffMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamCardStaminaConsumptionChange]: buffBgYellow,
  [ProduceExamEffectType.ExamBlockRestriction]: buffBgRed,
  [ProduceExamEffectType.ExamLessonDependBlock]: buffBgBlue,
  [ProduceExamEffectType.ExamCardCreateSearch]: buffBgYellow,
  [ProduceExamEffectType.ExamStatusEnchant]: buffBgYellow,
  [ProduceExamEffectType.ExamMultipleLessonBuffLesson]: buffBgBlue,
  [ProduceExamEffectType.ExamForcePlayCardSearch]: buffBgBlue,
  [ProduceExamEffectType.ExamCardStaminaConsumptionDownSpecify]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaDamage]: buffBgRed,
  [ProduceExamEffectType.ExamStaminaRecoverFix]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonFix]: buffBgBlue,
  [ProduceExamEffectType.ExamCardDuplicate]: buffBgBlue,
  [ProduceExamEffectType.ExamReview]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonValueChangePerPlay]: buffBgRed,
  [ProduceExamEffectType.ExamCardStaminaConsumptionReduce]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewValueMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamCardSearchEffectPlayCountBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonValueMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamCardPlayAggressive]: buffBgBlue,
  [ProduceExamEffectType.ExamConcentration]: buffConcentration,
  [ProduceExamEffectType.ExamPreservation]: buffPreservation,
  [ProduceExamEffectType.ExamFullPower]: buffFullpower,
  [ProduceExamEffectType.ExamStanceReset]: buffBgYellow,
  [ProduceExamEffectType.ExamFullPowerPoint]: buffBgBlue,
  [ProduceExamEffectType.ExamForecast]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonAddBlock]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonFullPowerPoint]: buffBgBlue,
  [ProduceExamEffectType.ExamSearchPlayCardStaminaConsumptionChange]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaReduce]: buffBgBlue,
  [ProduceExamEffectType.ExamUplifting]: buffBgBlue,
  [ProduceExamEffectType.ExamExtraTurn]: buffBgBlue,
  [ProduceExamEffectType.ExamAntiDebuff]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaConsumptionAdd]: buffBgRed,
  [ProduceExamEffectType.ExamThresholdDown]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockAddDown]: buffBgRed,
  [ProduceExamEffectType.ExamBlockAddDownRestriction]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaRecoverAdd]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaReduceChange]: buffBgYellow,
  [ProduceExamEffectType.ExamPanic]: buffBgRed,
  [ProduceExamEffectType.ExamLessonChangeSpecifyLessThan]: buffBgRed,
  [ProduceExamEffectType.ExamHandHold]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaConsumptionAddFix]: buffBgRed,
  [ProduceExamEffectType.ExamStaminaConsumptionAddDown]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaRecoverRestriction]: buffBgRed,
  [ProduceExamEffectType.ExamStaminaConsumptionDownAdd]: buffBgRed,
  [ProduceExamEffectType.ExamGetCardUpgrade]: buffBgBlue,
  [ProduceExamEffectType.ExamStaminaConsumptionDownFix]: buffBgBlue,
  [ProduceExamEffectType.ExamHandGraveCountCardDraw]: buffBgYellow,
  [ProduceExamEffectType.ExamHandGraveCountCardAdd]: buffBgYellow,
  [ProduceExamEffectType.ExamEffectTimer]: buffBgBlue,
  [ProduceExamEffectType.ExamGimmickLessonDebuff]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickParameterDebuff]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickSleepy]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickEnthusiastic]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickPlayCardLimit]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickSlump]: buffBgRed,
  [ProduceExamEffectType.ExamGimmickStartTurnCardDrawDown]: buffBgRed,
  [ProduceExamEffectType.ExamStaminaRecoverMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockFix]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonAddMultipleLessonBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamCardStatusEnchant]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockDown]: buffBgRed,
  [ProduceExamEffectType.ExamLessonChangeSpecifyMoreThan]: buffBgYellow,
  [ProduceExamEffectType.ExamLessonDependExamReview]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependExamCardPlayAggressive]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewDependExamBlock]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockDependExamReview]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewDependExamCardPlayAggressive]: buffBgBlue,
  [ProduceExamEffectType.ExamParameterBuffMultiplePerTurn]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonBuffDependParameterBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependParameterBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonAddMultipleParameterBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockPerUseCardCount]: buffBgBlue,
  [ProduceExamEffectType.ExamChainEffect]: buffBgBlue,
  [ProduceExamEffectType.StanceLock]: buffBgRed,
  [ProduceExamEffectType.ExamLessonDependStamina]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockAddMultipleAggressive]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependStaminaConsumptionSum]: buffBgBlue,
  [ProduceExamEffectType.ExamChainEffectPerPassedTurn]: buffBgBlue,
  [ProduceExamEffectType.ExamChainEffectPerRemainTurn]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependPlayCardCountSum]: buffBgBlue,
  [ProduceExamEffectType.ExamDebuffRecover]: buffBgBlue,
  [ProduceExamEffectType.ExamAggressiveValueMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamItemFireLimitAdd]: buffBgRed,
  [ProduceExamEffectType.ExamReviewReduce]: buffBgRed,
  [ProduceExamEffectType.ExamAggressiveReduce]: buffBgRed,
  [ProduceExamEffectType.ExamLessonBuffReduce]: buffBgRed,
  [ProduceExamEffectType.ExamParameterBuffReduce]: buffBgRed,
  [ProduceExamEffectType.ExamLessonValueMultipleDown]: buffBgRed,
  [ProduceExamEffectType.ExamAddGrowEffect]: buffBgGreen,
  [ProduceExamEffectType.ExamParameterBuffPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonBuffPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamAggressivePerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamBlockPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamFullPowerPointPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependBlockAndSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependAggressiveAndSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonDependReviewAndSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamEffectPerSearchCount]: buffBgBlue,
  [ProduceExamEffectType.ExamOverPreservation]: buffOverPreservation,
  [ProduceExamEffectType.ExamParameterBuffDependLessonBuff]: buffBgBlue,
  [ProduceExamEffectType.ExamAggressiveDependReview]: buffBgBlue,
  [ProduceExamEffectType.ExamEnthusiasticAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamEnthusiasticMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamFullPowerLessonMultipleAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamConcentrationLessonMultipleAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamLessonBuffAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamParameterBuffAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamAggressiveAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamFullPowerPointAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamGrowEffectLessonAddAdditive]: buffBgBlue,
  [ProduceExamEffectType.ExamParameterBuffMultiplePerTurnReduce]: buffBgRed,
  [ProduceExamEffectType.ExamLessonValueMultipleDependReviewOrAggressive]: buffBgBlue,
  [ProduceExamEffectType.ExamReviewMultiple]: buffBgBlue,
  [ProduceExamEffectType.ExamMultipleEnthusiasticLesson]: buffBgBlue,
  [ProduceExamEffectType.ExamMultipleConcentrationLesson]: buffBgBlue,
  [ProduceExamEffectType.ExamMultipleFullPowerLesson]: buffBgBlue,
}

export const growBuffTypeBackground = {
  // [ProduceCardGrowEffectType.Unknown]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonReduce]: buffBgRed,
  [ProduceCardGrowEffectType.LessonCountAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonCountReduce]: buffBgRed,
  [ProduceCardGrowEffectType.BlockAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.BlockReduce]: buffBgRed,
  [ProduceCardGrowEffectType.FullPowerPointAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.FullPowerPointReduce]: buffBgRed,
  // [ProduceCardGrowEffectType.CostBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostReduce]: 0,
  // [ProduceCardGrowEffectType.CostAdd]: 0,
  // [ProduceCardGrowEffectType.CostPenetrateReduce]: 0,
  // [ProduceCardGrowEffectType.CostPenetrateAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffTurnAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffTurnReduce]: 0,
  [ProduceCardGrowEffectType.LessonBuffAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonBuffReduce]: buffBgRed,
  [ProduceCardGrowEffectType.ReviewAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.ReviewReduce]: buffBgRed,
  [ProduceCardGrowEffectType.AggressiveAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.AggressiveReduce]: buffBgRed,
  [ProduceCardGrowEffectType.CardDrawAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.CardDrawReduce]: buffBgRed,
  // [ProduceCardGrowEffectType.ParameterBuffMultiplePerTurnAdd]: 0,
  // [ProduceCardGrowEffectType.ParameterBuffMultiplePerTurnReduce]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionDownTurnAdd]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionDownTurnReduce]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionAddTurnAdd]: 0,
  // [ProduceCardGrowEffectType.StaminaConsumptionAddTurnReduce]: 0,
  // [ProduceCardGrowEffectType.EffectAdd]: 0,
  // [ProduceCardGrowEffectType.EffectDelete]: 0,
  // [ProduceCardGrowEffectType.EffectChange]: 0,
  // [ProduceCardGrowEffectType.CardStatusEnchantChange]: 0,
  // [ProduceCardGrowEffectType.PlayTriggerChange]: 0,
  // [ProduceCardGrowEffectType.PlayEffectTriggerChange]: 0,
  // [ProduceCardGrowEffectType.PlayMovePositionTypeChange]: 0,
  // [ProduceCardGrowEffectType.InitialAdd]: 0,
  // [ProduceCardGrowEffectType.CostLessonBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostLessonBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostReviewReduce]: 0,
  // [ProduceCardGrowEffectType.CostReviewAdd]: 0,
  // [ProduceCardGrowEffectType.CostAggressiveReduce]: 0,
  // [ProduceCardGrowEffectType.CostAggressiveAdd]: 0,
  // [ProduceCardGrowEffectType.CostParameterBuffReduce]: 0,
  // [ProduceCardGrowEffectType.CostParameterBuffAdd]: 0,
  // [ProduceCardGrowEffectType.CostFullPowerPointReduce]: 0,
  // [ProduceCardGrowEffectType.CostFullPowerPointAdd]: 0,
  [ProduceCardGrowEffectType.LessonDependBlockAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonDependExamCardPlayAggressiveAdd]: buffBgBlue,
  [ProduceCardGrowEffectType.LessonDependExamReviewAdd]: buffBgBlue,
}
