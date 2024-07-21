import { Link } from "@remix-run/react"
import { getCharaFullImgUrl, getCharaSignImgUrl } from "~/assets/media"
import {
  Character
} from "~/types/proto/pmaster"

export function CharacterItem({ chara }: {
  chara: Character
}) {
  const name = chara.lastName + " " + chara.firstName
  const alphabetName = chara.alphabetFirstName + " " + chara.alphabetLastName
  return (
    <Link to={"/characters/" + chara.id} className="h-full aspect-[9/16]">
      <div className="h-full relative aspect-[9/16]">
        <img
          src={getCharaFullImgUrl(chara.id)}
          alt={chara.id}
          className="object-cover h-full"
        />
        <img
          src={getCharaSignImgUrl(chara.id)}
          alt={chara.id}
          className="absolute bottom-2 right-2 aspect-square h-[20%] invert dark:invert-0"
        />
        <div className="absolute top-0 inset-x-0 text-center">
          <p>{alphabetName}</p>
          <p className="text-xl lg:text-2xl">{name}</p>
        </div>
      </div>
    </Link>
  )
}
