import {
  ClientLoaderFunctionArgs,
  useLoaderData,
  useOutletContext
} from "@remix-run/react";
import NotFoundPage from "~/components/general/404";
import { XSupportCard } from "~/types";


export async function clientLoader({
  params
}: ClientLoaderFunctionArgs) {
  return params.id
}


export default function CsprtViewPage() {
  const id = useLoaderData<typeof clientLoader>()
  const xSupportCards = useOutletContext<XSupportCard[]>()
  if (!id) return <NotFoundPage />

  const supportCard = xSupportCards.find(it => it.id === id)
  if (!supportCard) return <NotFoundPage />

  return (
    <p>
      {supportCard.id}
    </p>
  )
}