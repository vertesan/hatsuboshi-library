import { Title } from "@mantine/core";

export function ErrorMessage() {
  return (
    <div>
      <Title order={1}>Oops!</Title>
      <p>Our server is currently too busy to handle your request this time, please try again after a few minutes.</p>
      <p>If you are really in hurry, try to disable cache on your developer tools pannel to facilitate recovery because this error is cached for 150 seconds.</p>
      <p>We apologize for any inconvenience potentially caused.</p>
    </div>
  )
}
