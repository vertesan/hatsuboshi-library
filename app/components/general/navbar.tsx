import { NavLink } from "@mantine/core";
import { NavLink as RemixNavLink } from "@remix-run/react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { PreferenceContext } from "~/contexts/preferenceContext";
import ThemeToggle from "./themeToggle";
import LangSwitch from "./langSwitch";
import { getRoutes } from "~/data/routes";

type RouteEntry = {
  route: string,
  label: string,
  icon: ReturnType<typeof NavIcon>,
  disabled?: boolean,
}

export function NavIcon({ src }: { src: string }) {
  const { preferenceConfig } = useContext(PreferenceContext)
  return (
    <img
      src={src}
      alt={src}
      className={`h-auto w-5 opacity-80 ${preferenceConfig.colorScheme === "light" ? "invert" : ""} `}
    />
  )
}

export default function Navbar({ close }: { close: () => void }) {
  const { t } = useTranslation()
  const routes: RouteEntry[] = getRoutes(t)
  return (
    <div className="h-full flex flex-col justify-between p-2">
      <div className="">
        {routes.map(route => (
          <NavLink
            key={route.route}
            component={RemixNavLink}
            to={route.route}
            label={route.label}
            disabled={route.disabled}
            onClick={() => {
              new Promise(resolve => setTimeout(resolve, 100)).then(close)
            }}
            leftSection={route.icon}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <ThemeToggle />
        <LangSwitch />
      </div>
    </div>
  )
}