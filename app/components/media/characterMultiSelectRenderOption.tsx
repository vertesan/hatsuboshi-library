import { MultiSelectProps } from "@mantine/core";
import { getSDFaceImgUrl } from "~/assets/media";

const sdFaceAvailableList = [
  "amao",
  "atbm",
  "fktn",
  "hmsz",
  "hrnm",
  "hski",
  "hume",
  "jsna",
  "kcna",
  "kllj",
  "nasr",
  "shro",
  "ssmk",
  "ttmr",
  "hkne",
  "nars",
]

export const characterMultiSelectRenderOption: MultiSelectProps['renderOption'] = ({ option }) => {
  const sdFaceUrl = getSDFaceImgUrl(option.value)
  return (
    <div className="flex gap-2 justify-start items-center">
      <div className='h-8 w-8 aspect-square'>
        {sdFaceAvailableList.indexOf(option.value) === -1
          ? null
          : <img src={sdFaceUrl} alt="character face" className='object-contain' />
        }
      </div>
      <div>
        {option.label}
      </div>
    </div>
  )
}
