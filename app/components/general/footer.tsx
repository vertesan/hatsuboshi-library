import { Anchor, Divider } from "@mantine/core";
import { Link } from "@remix-run/react";
import { useContext } from "react";
import { MasterContext } from "~/contexts/masterContext";

export function Footer() {
  const { version } = useContext(MasterContext)
  return (
    <footer className="pt-8 pb-4 text-center text-sm absolute left-0 right-0 flex flex-col items-center text-[--mantine-color-dimmed]">
      <Divider size="xs" h={16} w={180} />
      <p>Not affiliated with BNEI or QualiArts, Inc.</p>
      <p>
        {"Open source "}
        <Anchor className="text-sm" component={Link} to="https://github.com/vertesan/hatsuboshi-library">
          homepage
        </Anchor>
      </p>
      <p>Game data © BNEI & QualiArts, Inc. & associates</p>
      <p className="text-[0.5rem] text-zinc-300 dark:text-zinc-700">{version}</p>
    </footer>
  )
}
