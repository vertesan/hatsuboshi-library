import {
  ClientLoaderFunctionArgs,
  MetaFunction,
  Outlet,
  useLoaderData
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "~/components/general/404";
import { MasterContext } from "~/contexts/masterContext";
import { getLocalString } from "~/i18n";
import { CharacterList } from "~/routes/character.$id/characterList";
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
    <div className="p-4 xl:grid xl:grid-cols-[340px_1fr] xl:gap-2">
      <div>
        <CharacterList selectedId={id} className="mb-8 xl:w-[340px] xl:fixed" />
      </div>
      <Outlet context={[id]} />
    </div>
  )
}
