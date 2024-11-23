import { ScrollArea } from "@mantine/core"
import { Link } from "@remix-run/react"
import { useContext } from "react"
import { getSDFaceImgUrl } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"

export function CharacterList({
  selectedId,
  className,
}: {
  selectedId: string,
  className?: string,
}) {
  const xMaster = useContext(MasterContext)
  return (
    <ScrollArea className={`h-56 xl:h-[80vh] ${className}`}>
      <ul>
        {
          Object.entries(xMaster.characters)
            .filter(([_, chara]) => chara.isPlayable)
            .sort((a, b) => a[1].order - b[1].order)
            .map(([id, chara]) => {
              return (
                <li key={id}>
                  <Link to={`/character/${id}`} className={`xl:leading-[48px] flex items-center rounded-xl transition-colors active:bg-[var(--color-default-active)] ${selectedId === id ? "bg-[var(--color-default-active)]" : "hover:bg-[var(--color-default-hover)]"} `}>
                    <div>
                      <img alt='icon' src={getSDFaceImgUrl(id)} className='h-10 w-10' />
                    </div>
                    <div className="text-md w-32">{chara.lastName} {chara.firstName}</div>
                    <div className="text-sm">{chara.alphabetLastName} {chara.alphabetFirstName}</div>
                  </Link>
                </li>
              )
            })
        }
      </ul>
    </ScrollArea>
  )
}
