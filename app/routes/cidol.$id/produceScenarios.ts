import { getAssetImgUrl, hajimeImg, niaImg } from "~/assets/media";
import { ProduceType } from "~/types/proto/penum";

export const produceScenarioStrings: {
  [k: number]: {
    title: string,
    imgUrl: string,
  }
} = {
  [ProduceType.FirstStar]: {
    title: "Scenario: HAJIME",
    imgUrl: getAssetImgUrl(hajimeImg),
  },
  [ProduceType.NextIdolAudition]: {
    title: "Scenario: N.I.A",
    imgUrl: getAssetImgUrl(niaImg),
  },
}
