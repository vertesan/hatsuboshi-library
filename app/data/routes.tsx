import { IconPalette } from "@tabler/icons-react";
import { TFunction } from "i18next";
import {
  routeAboutIcon,
  routeCharactersIcon,
  routeCidolIcon,
  routeCsprtIcon,
  routeEvaluationIcon,
  routePCardIcon,
  routeToolsIcon
} from "~/assets/media";
import {
  NavIcon
} from "~/components/general/navbar"

export function getRoutes(t: TFunction<"translation", undefined>) {
  return [
    {
      route: "/character",
      label: t("route-character"),
      icon: <NavIcon src={routeCharactersIcon} />,
    },
    {
      route: "/colors",
      label: t("route-colors"),
      icon: <IconPalette className="h-auto w-5 opacity-80" />,
    },
    {
      route: "/briefcase",
      label: t("route-tools"),
      icon: <NavIcon src={routeToolsIcon} />,
    },
    {
      route: "/cidol",
      label: t("route-cidol"),
      icon: <NavIcon src={routeCidolIcon} />,
    },
    {
      route: "/csprt",
      label: t("route-csprt"),
      icon: <NavIcon src={routeCsprtIcon} />,
    },
    {
      route: "/pcard",
      label: t("route-pcard"),
      icon: <NavIcon src={routePCardIcon} />,
    },
    {
      route: "/evaluation",
      label: t("route-evaluation"),
      icon: <NavIcon src={routeEvaluationIcon} />,
      disable: false,
    },
    {
      route: "/about",
      label: t("route-about"),
      icon: <NavIcon src={routeAboutIcon} />,
    },
  ]
}
