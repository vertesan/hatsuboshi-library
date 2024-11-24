import {
  useOutletContext
} from "@remix-run/react";
import { CharacterView } from "~/routes/character.$id._index/characterView";

export default function CharacterDetails() {
  const [id] = useOutletContext<[string]>()

  return (
    <div className="">
      <CharacterView charaId={id} />
    </div>
  )
}
