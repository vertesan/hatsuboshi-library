import { XIdolCard } from "./data/cidol"
import {
  XProduceIdol,
  XSupportCard
} from "./data/csprt"
import { XMaster } from "./data/master"

type ApiTypes = {
  master: XMaster,
  csprt: XSupportCard[],
  cidol: XIdolCard[],
  pcard: XProduceCard[],
}

export type ApiType = keyof ApiTypes
export type ApiData<T extends ApiType> = ApiTypes[T]
