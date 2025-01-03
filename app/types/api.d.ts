import { XIdolCard } from "./data/cidol"
import {
  XSupportCard
} from "./data/csprt"
import { XMaster } from "./data/master"
import { XMemoryInspector } from "./data/memory"
import {
  XCustProduceCard,
  XProduceCard
} from "./data/pcard"

type ApiTypes = {
  master: XMaster,
  csprt: XSupportCard[],
  cidol: XIdolCard[],
  pcard: XCustProduceCard[],
  memory: XMemoryInspector,
}

export type ApiType = keyof ApiTypes
export type ApiData<T extends ApiType> = ApiTypes[T]
