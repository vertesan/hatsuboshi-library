import {
  MetaFunction,
  Outlet
} from "@remix-run/react";
import { getLocalString } from "~/i18n";
import Charts from "~/routes/charts/charts";

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-briefcase")
  return [
    { title: title },
  ]
}

export default function ChartsLayout() {
  return (
    <Charts />
  )
}
