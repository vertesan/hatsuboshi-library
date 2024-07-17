import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData
} from "@remix-run/react";
import { useContext } from "react";
import { getApiData } from "~/api";
import { MasterContext } from "~/contexts/masterContext";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("cidol")
  return data
}

export default function CidolLayout() {
  const xIdolCards = useLoaderData<typeof clientLoader>()
  const xMaster = useContext(MasterContext)
  return (
    <Outlet context={[xIdolCards, xMaster]} />
  )
}
