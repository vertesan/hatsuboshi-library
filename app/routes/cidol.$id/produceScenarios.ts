import { getAssetImgUrl, hajimeImg, niaImg } from "~/assets/media";
import { ProduceType } from "~/types/proto/penum";

export const getProduceScenarioStrings = (
  produceId: string,
) => {
  switch (produceId) {
    case "produce-001": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Regular",
    }
    case "produce-002": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Pro",
    }
    case "produce-003": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Master",
    }
    case "produce-004": return {
      title: "Scenario: N.I.A",
      imgUrl: getAssetImgUrl(niaImg),
      produceType: ProduceType.NextIdolAudition,
      difficulty: "Pro",
    }
    case "produce-005": return {
      title: "Scenario: N.I.A",
      imgUrl: getAssetImgUrl(niaImg),
      produceType: ProduceType.NextIdolAudition,
      difficulty: "Master",
    }
    default: return {
      title: "Unknown",
      imgUrl: "",
      produceType: ProduceType.Unknown,
      difficulty: "Unknown",
    }
  }
}
