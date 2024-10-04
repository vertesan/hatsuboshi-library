import { ClientLoaderFunctionArgs, redirect } from "@remix-run/react";

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  return redirect("/charts", 302)
}

export default function Briefcase({ ...props }) {
  return (<></>)
}
