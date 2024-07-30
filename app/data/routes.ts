import { TFunction } from "i18next";
import {
  routeAboutIcon,
  routeCharactersIcon,
  routeCidolIcon,
  routeCsprtIcon,
  routePCardIcon,
  routeToolsIcon
} from "~/assets/media";

export function getRoutes(t: TFunction<"translation", undefined>) {
  return [
    {
      route: "/character",
      label: t("route-character"),
      icon: routeCharactersIcon,
    },
    {
      route: "/briefcase",
      label: t("route-tools"),
      icon: routeToolsIcon,
    },
    {
      route: "/cidol",
      label: t("route-cidol"),
      icon: routeCidolIcon,
    },
    {
      route: "/csprt",
      label: t("route-csprt"),
      icon: routeCsprtIcon,
    },
    {
      route: "/pcard",
      label: t("route-pcard"),
      icon: routePCardIcon,
    },
    {
      route: "/about",
      label: t("route-about"),
      icon: routeAboutIcon,
    },
  ]
}
