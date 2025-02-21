import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export function ErrorBoundaryMessage() {
  const { t } = useTranslation()
  return (
    <div>
      <Title order={1}>{t("Oops!")}</Title>
      <p>{t("Our server is currently too busy to handle your request this time, please try again after a few minutes.")}</p>
      <p>{t("If you are really in hurry, try to disable cache on your developer tools pannel to facilitate recovery because this error is cached for 150 seconds.")}</p>
      <p>{t("We apologize for any inconvenience potentially caused.")}</p>
    </div>
  )
}
