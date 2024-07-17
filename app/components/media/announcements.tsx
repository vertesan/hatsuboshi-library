import { Anchor, Modal, Tabs } from "@mantine/core";
import { IconAdCircle, IconBug, IconInfoCircle } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { XMaster } from "~/types";
import { NoticeInfo } from "~/types/proto/papi";

export function Announcements({
  noticeList,
  className,
}: {
  noticeList: XMaster['noticeList'],
  className?: string,
}) {
  const { t } = useTranslation()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [noticeStat, setNoticeState] = useState<
    { notice: NoticeInfo | null, opened: boolean }
  >({ notice: null, opened: false })

  // useEffect(() => {
  //   const iFrameDocumentStyle = iframeRef.current?.contentDocument?.documentElement.style
  //   if (iFrameDocumentStyle) {
  //     iFrameDocumentStyle.scrollbarWidth = "none"
  //   }
  // }, [noticeStat])

  return (
    <>
      <Modal
        opened={noticeStat.opened}
        onClose={() => setNoticeState({ notice: null, opened: false })}
        title={noticeStat.notice?.title}
        size="md"
        className="bg-white"
      >
        <iframe
          ref={iframeRef}
          title={noticeStat.notice?.title ?? "notice"}
          className="text-center h-[75vh] w-full"
          src={noticeStat.notice?.detailUrl}
          referrerPolicy="no-referrer"
        />
      </Modal>
      <div className={`${className}`}>
        <Tabs defaultValue="notice">
          <Tabs.List>
            <Tabs.Tab value="notice" leftSection={<IconInfoCircle width={16} height={16} />}>
              {t("Notice")}
            </Tabs.Tab>
            <Tabs.Tab value="bugs" leftSection={<IconBug width={16} height={16} />}>
              {t("Bugs")}
            </Tabs.Tab>
            <Tabs.Tab value="pr" leftSection={<IconAdCircle width={16} height={16} />}>
              {t("PR")}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel className="pt-2" value="notice">
            <Notices notices={noticeList.infoList} setNoticeState={setNoticeState} />
          </Tabs.Panel>

          <Tabs.Panel className="pt-2" value="bugs">
            <Notices notices={noticeList.bugList} setNoticeState={setNoticeState} />
          </Tabs.Panel>

          <Tabs.Panel className="pt-2" value="pr">
            <Notices notices={noticeList.prList} setNoticeState={setNoticeState} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}

function Notices({
  notices,
  setNoticeState,
  className,
}: {
  notices: NoticeInfo[],
  setNoticeState: Dispatch<SetStateAction<{
    notice: NoticeInfo | null;
    opened: boolean;
  }>>,
  className?: string,
}) {
  return notices.slice(0, 15).map(notice => {
    return (
      <li key={notice.id} className={`leading-8 list-none truncate ${className}`}>
        <span>[{dayjs(+notice.startTime).format("YYYY-MM-DD")}]&nbsp;</span>
        <Anchor
          onClick={() => setNoticeState({ notice: notice, opened: true })}
        >
          {notice.title}
        </Anchor>
      </li>
    )
  })
}
