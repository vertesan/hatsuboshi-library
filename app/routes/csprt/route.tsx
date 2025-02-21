import { Title } from "@mantine/core";
import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useRouteError
} from "@remix-run/react";
import { useContext } from "react";
import { getApiData } from "~/api";
import { ErrorMessage } from "~/components/general/errorMessage";
import { MasterContext } from "~/contexts/masterContext";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("csprt")
  return data
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="p-4">
      <ErrorMessage />
    </div>
  );
}

export default function CsprtLayout() {
  const xSupportCards = useLoaderData<typeof clientLoader>()
  const xMaster = useContext(MasterContext)
  return (
    <Outlet context={[xSupportCards, xMaster]} />
  )
}
