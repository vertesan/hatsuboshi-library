import {
  ClientLoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useRouteError
} from "@remix-run/react";
import { getApiData } from "~/api";
import { ErrorBoundaryMessage } from "~/components/general/ErrorBoundaryMessage";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("pcard")
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

export default function PCardLayout() {
  const xCustProduceCards = useLoaderData<typeof clientLoader>()
  return (
    <Outlet context={[xCustProduceCards]} />
  )
}
