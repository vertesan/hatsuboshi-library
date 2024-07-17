import { IconCircle } from "@tabler/icons-react";

export function GlobalHydrateFallback() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <IconCircle className='animate-ping h-24 w-24' stroke={1.5} />
    </div>
  )
}
