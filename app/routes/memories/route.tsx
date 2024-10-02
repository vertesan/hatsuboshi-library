import { ActionIcon, Anchor, Button, FileButton, Text, Title } from "@mantine/core"
import { Dropzone, FileWithPath } from "@mantine/dropzone"
import { useDisclosure, useLocalStorage } from "@mantine/hooks"
import { ClientLoaderFunctionArgs, Link, MetaFunction, useLoaderData } from "@remix-run/react"
import { IconCodeDots, IconUpload, IconX, IconZoom } from "@tabler/icons-react"
import dayjs from "dayjs"
import { useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { getApiData } from "~/api"
import { MasterContext } from "~/contexts/masterContext"
import { constructCards, defaultUserMemoryFilter, defaultUserMemorySort, filterMemories, initXUserMemories, sortMemories } from "~/data/userMemory"
import { getLocalString } from "~/i18n"
import { MemoryRow } from "~/routes/memories/memoryRow"
import { OptionPannel } from "~/routes/memories/optionPannel"
import { UserMemoryFilter, UserMemorySort, XUserMemory } from "~/types"

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("memory")
  return data
}

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-memories")
  return [
    { title: title },
  ]
}

async function onSaveClick(allMemories: XUserMemory[] | null) {
  if (!allMemories) return
  const ids = allMemories
    .filter(x => x.checked)
    .map(x => x.userMemoryId)
  const blob = new Blob([JSON.stringify(ids)], { type: "application/json" })
  const name = dayjs().format("YYYY-MM-DD") + ".json"

  if ('showSaveFilePicker' in window) {
    try {
      const handle = await (window.showSaveFilePicker as any)({ suggestedName: name });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return
      }
      console.error(err)
    }
  }

  const a = document.createElement('a')
  const url = URL.createObjectURL(blob)
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0)
  // window.open(URL.createObjectURL(blob))
}

export default function MemoriesLayout() {
  const xMaster = useContext(MasterContext)
  const xMemory = useLoaderData<typeof clientLoader>()
  const { t } = useTranslation()
  const [allMemories, setAllMemories] = useState<XUserMemory[] | null>(null)
  const [opened, handlers] = useDisclosure(false)
  // const [memories, setMemories] = useState<XUserMemory[] | null>(null)

  const [memoryFilter, setMemoryFilter] = useLocalStorage<UserMemoryFilter>({
    key: "userMemoryFilter",
    defaultValue: defaultUserMemoryFilter,
    getInitialValueInEffect: false,
  })
  const [memorySort, setMemorySort] = useLocalStorage<UserMemorySort>({
    key: "userMemorySort",
    defaultValue: defaultUserMemorySort,
    getInitialValueInEffect: false,
  })

  const onFileDrop = async (files: FileWithPath[]) => {
    try {
      const jsonText = await files[0].text()
      const obj = JSON.parse(jsonText)
      let mList
      if ("userData" in obj) {
        mList = obj.userData.userMemoryList
      } else if (
        Array.isArray(obj) &&
        obj.length > 0 &&
        "produceCard" in obj[0]
      ) {
        mList = obj
      } else {
        throw Error("Cannot parse userMemory list")
      }
      const xm = initXUserMemories(mList)
      setAllMemories(xm)
      // setMemories(sortMemories(filterMemories(xm, memoryFilter), memorySort))
    } catch (err) {
      console.log(err)
    }
  }

  const onCheckedUpload = async (payload: File | null) => {
    if (!payload) return
    try {
      const rawText = await payload.text()
      const checkedIds: string[] = JSON.parse(rawText)
      setAllMemories(prev => {
        if (!prev) return prev
        const curr = [...prev]
        curr.forEach(x => {
          if (checkedIds.includes(x.userMemoryId)) {
            x.checked = true
          } else {
            x.checked = false
          }
        })
        return curr
      })
    } catch (err) {
      console.error(err)
    }
  }

  const cardSelectList = useMemo(() => constructCards(xMemory), [])
  const filteredMemories = useMemo(() => {
    return allMemories
      ? sortMemories(filterMemories(allMemories, memoryFilter), memorySort)
      : null
  }, [allMemories, memoryFilter, memorySort])

  // useEffect(() => {
  //   if (allMemories) {
  //     setMemories(sortMemories(filterMemories(allMemories, memoryFilter), memorySort))
  //   }
  // }, [allMemories, memoryFilter, memorySort])

  return (
    <>
      <div className="p-4">
        <div className="flex flex-row gap-4 relative">
          <div className="flex-[1_0_100%] sm:flex-[1_0_27rem] 3xl:pr-[404px]">
            <div className="pb-4">
              <Title order={3} className="inline-block">{t("Memory Inspector")}</Title>
              <span className="ps-2 text-sm">
                (<Anchor className="text-sm" component={Link} to="/help/memories">{t("What is this?")}</Anchor>)
              </span>
            </div>
            <p className="pb-2">{t("Your data is processed locally on your device.")}</p>
            <Dropzone
              onDrop={onFileDrop}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={5 * 1024 ** 2}
              accept={['application/json']}
            >
              <div className="my-2 flex flex-row justify-center items-center gap-4 h-4 pointer-events-none">
                <Dropzone.Accept>
                  <IconUpload
                    className="w-10 h-10 text-[var(--mantine-color-blue-6)]"
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    className="w-10 h-10 text-[var(--mantine-color-red-6)]"
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCodeDots
                    className="w-10 h-10 text-[var(--mantine-color-dimmed)]"
                    stroke={1.5}
                  />
                </Dropzone.Idle>
                <div>
                  <Text inline>
                    {t("Drop a file or click to select")}
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    {t("Selected file must be a valid JSON file no more than 5 MiB")}
                  </Text>
                </div>
              </div>
            </Dropzone>
            {
              allMemories && allMemories.length > 0
                ? <>
                  <div className="mt-2">
                    {`${filteredMemories?.length ?? 0} Memories`}
                  </div>
                  <div className="mt-2 flex gap-4">
                    <Button size="xs"
                      onClick={() => { onSaveClick(allMemories) }}
                    >
                      {t("Save checked")}
                    </Button>

                    <FileButton onChange={onCheckedUpload} accept="application/json">
                      {(props) => <Button size="xs" {...props}>{t("Load checked")}</Button>}
                    </FileButton>
                  </div>
                </>
                : <div className="w-full h-[50vh] flex flex-row justify-center items-center">
                </div>
            }
            <div>
              {filteredMemories && filteredMemories.length > 0
                ? filteredMemories?.map(memory => (
                  <MemoryRow
                    key={memory.userMemoryId}
                    xUserMemory={memory}
                    xMemory={xMemory}
                    outterChecked={memory.checked}
                    className="mt-2"
                  />
                ))
                : allMemories && allMemories.length > 0
                  ? <div className="w-full h-[50vh] flex flex-row justify-center items-center">
                    <p className="text-4xl">{t("No results")}</p>
                  </div>
                  : null
              }
            </div>
          </div>

          <div className={`fixed z-[102] px-2 pb-24 top-2 left-0 right-0 h-screen w-screen overflow-x-hidden overflow-y-auto
            bg-[--mantine-color-body] ${opened ? "" : "translate-x-full"} sm:z-[111]
            3xl:top-auto 3xl:left-auto 3xl:z-[100] 3xl:flex-none 3xl:w-[380px] 3xl:block 3xl:translate-x-0
            transition-transform duration-150 ease-in-out`
          }>
            <OptionPannel
              filter={memoryFilter}
              setFilter={setMemoryFilter}
              sort={memorySort}
              setSort={setMemorySort}
              options={{
                characters: xMaster.characters,
                cardSelectList: cardSelectList,
                xCardsMap: xMemory.produceCards,
              }}
            />
          </div>
        </div>
      </div>
      <ActionIcon
        variant="light"
        className="fixed z-[103] sm:z-[112] right-4 bottom-12 rounded-full h-12 w-12 3xl:hidden"
        onClick={() => { handlers.toggle() }}
      >
        <IconZoom className="w-[65%] h-[65%]" stroke={1.5} />
      </ActionIcon>
    </>
  )
}
