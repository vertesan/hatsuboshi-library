import { ActionIcon } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useContext } from "react";
import { PreferenceContext } from "~/contexts/preferenceContext";

export default function ThemeToggle() {
  const { preferenceConfig, setPreferenceConfig } = useContext(PreferenceContext)
  const onToggle = () => {
    setPreferenceConfig(prev => ({
      ...prev,
      colorScheme: prev.colorScheme === "light" ? "dark" : "light"
    }))
  }
  return (
    <ActionIcon
      variant="subtle"
      className="rounded-full h-9 w-9"
      aria-label="theme toggle"
      onClick={onToggle}
    >
      {preferenceConfig.colorScheme === "dark"
        ? <IconSun className="w-[70%] h-[70%] text-yellow-300" stroke={1.5} />
        : <IconMoon className="w-[70%] h-[70%] text-blue-500" stroke={1.5} />
      }
    </ActionIcon>
  )
}
