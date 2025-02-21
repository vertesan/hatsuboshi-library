import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useRouteError
} from "@remix-run/react";
import { useContext } from "react";
import { getApiData } from "~/api";
import { ErrorBoundaryMessage } from "~/components/general/ErrorBoundaryMessage";
import { MasterContext } from "~/contexts/masterContext";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("cidol")
  return data
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="p-4">
      <ErrorBoundaryMessage />
    </div>
  );
}

export default function CidolLayout() {
  const xIdolCards = useLoaderData<typeof clientLoader>()
  const xMaster = useContext(MasterContext)
  return (
    <Outlet context={[xIdolCards, xMaster]} />
  )
}
