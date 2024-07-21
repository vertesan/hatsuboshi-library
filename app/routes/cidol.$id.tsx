import {
  ClientLoaderFunctionArgs,
  MetaFunction,
  useLoaderData,
  useOutletContext
} from "@remix-run/react";
import NotFoundPage from "~/components/general/404";
import { XIdolCard, XMaster } from "~/types";
import { CidolView } from "./cidol/cidolView";
import { getLocalString } from "~/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-cidol")
  return [
    { title: title },
  ]
}

export async function clientLoader({
  params
}: ClientLoaderFunctionArgs) {
  return params.id
}

export default function CidolViewPage() {
  const id = useLoaderData<typeof clientLoader>()
  const [xIdolCards] = useOutletContext<[XIdolCard[], XMaster]>()
  const { t } = useTranslation()
  let idolCard: XIdolCard | undefined
  if (id) {
    idolCard = xIdolCards.find(it => it.id === id)
  }
  useEffect(() => {
    if (idolCard) {
      document.title = idolCard.name + t("meta-name-suffix")
    }
  }, [])

  if (!idolCard) return <NotFoundPage />

  return (
    <CidolView idolCard={idolCard} />
  )
}
