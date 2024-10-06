import { XIdolCard } from "./data/cidol"
import {
  XProduceIdol,
  XSupportCard
} from "./data/csprt"
import { XMaster } from "./data/master"
import { XMemoryInspector } from "./data/memory"

type ApiTypes = {
  master: XMaster,
  csprt: XSupportCard[],
  cidol: XIdolCard[],
  pcard: XProduceCard[],
  memory: XMemoryInspector,
}

export type ApiType = keyof ApiTypes
export type ApiData<T extends ApiType> = ApiTypes[T]
