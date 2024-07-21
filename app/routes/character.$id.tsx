import {
  ClientLoaderFunctionArgs,
  MetaFunction,
  useLoaderData
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "~/components/general/404";
import { CharacterView } from "~/components/media/characterView";
import { MasterContext } from "~/contexts/masterContext";
import { getLocalString } from "~/i18n";
import { Character } from "~/types/proto/pmaster";

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-character")
  return [
    { title: title },
  ]
}

export async function clientLoader({
  params
}: ClientLoaderFunctionArgs) {
  return params.id
}

export default function CharacterViewPage() {
  const id = useLoaderData<typeof clientLoader>()
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  let chara: Character | undefined
  if (id) {
    chara = xMaster.characters[id]
  }
  useEffect(() => {
    if (chara) {
      document.title = chara.lastName + chara.firstName + t("meta-name-suffix")
    }
  }, [])

  if (!id || !chara) return <NotFoundPage />

  return (
    <CharacterView charaId={id} />
  )
}
