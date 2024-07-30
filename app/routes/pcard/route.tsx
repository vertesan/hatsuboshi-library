import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData
} from "@remix-run/react";
import { getApiData } from "~/api";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("pcard")
  return data
}

export default function PCardLayout() {
  const xProduceCards = useLoaderData<typeof clientLoader>()
  return (
    <Outlet context={[xProduceCards]} />
  )
}
