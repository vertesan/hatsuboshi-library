import { Alert, Divider, ScrollArea } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Announcements } from "~/components/media/announcements";
import { EventView } from "~/components/media/eventView";
import { PvpRate } from "~/components/media/pvpRate";
import { MasterContext } from "~/contexts/masterContext";

export default function Index() {
  const { t } = useTranslation()
  const { noticeList, events, pvp } = useContext(MasterContext)
  const ongoingEvents = events.filter(event => {
    const now = dayjs()
    return now.isAfter(+event.startTime) &&
      now.isBefore(+event.endTime)
  })

  return (
    <div className="p-4">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[minmax(440px,2fr)_minmax(0,3fr)] gap-4 max-w-[1280px]">
        <div className="">
          <div>
            <h2 className="text-2xl font-medium">{t("Ongoing Events")}</h2>
            <Divider my="sm" />
            {ongoingEvents.length
              ? <ul>
                <ScrollArea.Autosize mah={530}>
                  {ongoingEvents.map(event =>
                    <li key={event.eventId} >
                      <EventView event={event} className="" />
                    </li>
                  )}
                </ScrollArea.Autosize>
              </ul>
              : <Alert className="" color="red" variant="light" icon={<IconInfoCircle />}>
                {t("Currently no events are going on")}
              </Alert>
            }
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-medium">{t("In-game Announcements")}</h2>
            <Announcements className="pt-4" noticeList={noticeList} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">{t("Ongoing Contest")}</h2>
          <Divider my="sm" />
          <PvpRate pvp={pvp} className="" />
        </div>
      </div>
    </div>
  )
}
