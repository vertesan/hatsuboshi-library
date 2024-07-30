import * as env from "~/utils/env"
import {
  ApiType,
  ApiData,
} from "~/types"

const apiPaths: { [k in ApiType]: string } = {
  master: "/api/master",
  csprt: "/api/csprt",
  cidol: "/api/cidol",
  pcard: "/api/pcard",
}

export async function getApiData<T extends ApiType>(type: T): Promise<ApiData<T>> {
  const url = new URL(apiPaths[type], env.API_URL)
  const headers = {
    "Authorization": "Basic " + env.API_KEY,
  }
  const resp = await fetch(url, {
    headers: headers,
  })
  if (!resp.ok) {
    throw new Error("Failed to retrieve data from API");
  }
  const data = await resp.json()
  return data
}
