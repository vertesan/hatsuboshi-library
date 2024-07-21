import { Blockquote, ColorSwatch, Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { charaColors } from "~/data/characterColors";
import { CharacterDetailType } from "~/types/proto/penum";
import { Character, CharacterColor, CharacterDetail } from "~/types/proto/pmaster";

export function CharacterInfo({
  chara,
  charaDetails,
}: {
  chara: Character,
  charaDetails: CharacterDetail[],
}) {
  const { t } = useTranslation()
  const idolInfo = {
    // caption: t(""),
    // head: [t("item"), t("Value")],
    body: charaDetails
      .filter(x => x.type !== CharacterDetailType.Introduction)
      .map(detail => {
        return [t(CharacterDetailType[detail.type]), detail.content]
      })
  }
  const colors = charaColors[chara.id as keyof typeof charaColors]

  return (
    <div className="">
      {/* <div className="flex flex-row gap-4">
        <ColorSwatch color={`#${colors.mainColor}`} />
        <p>#{colors.mainColor}</p>
      </div> */}
      <Table data={idolInfo} striped className="my-4" />
      <Blockquote>
        {charaDetails.find(x => x.type === CharacterDetailType.Introduction)?.content}
      </Blockquote>
    </div>
  )
}
