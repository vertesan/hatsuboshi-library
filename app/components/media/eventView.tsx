import { Alert, Badge, Space } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"
import dayjs from "dayjs"
import { t } from "i18next"
import { useContext } from "react"
import { getAssetImgUrl } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"
import { XMaster } from "~/types"
import { EventType } from "~/types/proto/penum"
import { UnArray } from "~/types/utils"
import { PulseImage } from "../general/pulseImage"

export function EventView({
  event,
  className,
}: {
  event: UnArray<XMaster['events']>,
  className?: string,
}) {
  const { eventLabels } = useContext(MasterContext)
  let eventName = eventLabels.find(x => x.eventType === event.eventType)?.name ?? EventType[event.eventType]
  let banner
  if (event.storyEvent) {
    eventName = event.storyEvent.title
  }
  if (event.bannerAssetId) {
    banner = getAssetImgUrl(event.bannerAssetId)
  }
  return (
    <>
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <Badge className="lg:mr-1">{t(EventType[event.eventType])}</Badge>
          <p className="">
            {eventName}
          </p>
        </div>
        {banner
          ? <PulseImage src={banner} alt="event banner" className="object-fill aspect-[2.91] w-full" />
          : null
        }
        <Alert className="" variant="light" color="blue" icon={<IconInfoCircle />}>
          <p>{`${t("Ends at")} 🕑${dayjs(+event.endTime).format("YYYY-MM-DD HH:mm:ss (UTCZ)")}`}</p>
        </Alert>
      </div>
      <Space h={16} />
    </>
  )
}
