import { AppShell, Burger, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import {
  ClientLoaderFunctionArgs,
  Link,
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getApiData } from '~/api';
import { getSDFaceImgUrl } from '~/assets/media';
import { Footer } from '~/components/general/footer';
import { GlobalHydrateFallback } from '~/components/general/hydrateFallback';
import Navbar from '~/components/general/navbar';
import NavigationBar from '~/components/general/navigationBar';
import { MasterContext } from '~/contexts/masterContext';
import {
  PreferenceContext,
  defaultPreference,
  preferenceKey
} from "~/contexts/preferenceContext";
import { getLocalString } from '~/i18n';
import "~/tailwind.css";
import themeObject, { cssVariableResolver } from '~/theme/mantine';
import { PreferenceConfig } from "~/types";
import { VITE_UMAMI_ID, VITE_UMAMI_SRC } from './utils/env';

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-name")
  const description = getLocalString("meta-description")
  return [
    { title: getLocalString("meta-name") },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      name: "description",
      content: description,
    },
  ]
}

export function HydrateFallback() {
  return <GlobalHydrateFallback />
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const [prefConfig, setPrefConfig] = useLocalStorage<PreferenceConfig>({
    key: preferenceKey,
    defaultValue: defaultPreference,
    getInitialValueInEffect: true,
  })
  return (
    <html lang={i18n.language} className={prefConfig.colorScheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript
          nonce="Gssv/TOwbkAUpOWyoftzJg=="
          forceColorScheme={prefConfig.colorScheme}
          defaultColorScheme='dark'
        />
        <script
          defer
          nonce="Gssv/TOwbkAUpOWyoftzJg=="
          src={VITE_UMAMI_SRC}
          data-website-id={VITE_UMAMI_ID}
        />
      </head>
      <body>
        <MantineProvider
          forceColorScheme={prefConfig.colorScheme}
          defaultColorScheme='dark'
          cssVariablesResolver={cssVariableResolver}
          theme={themeObject}
        >
          <PreferenceContext.Provider value={{
            preferenceConfig: prefConfig,
            setPreferenceConfig: setPrefConfig,
          }}>
            {children}
          </PreferenceContext.Provider>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts nonce="Gssv/TOwbkAUpOWyoftzJg==" />
      </body>
    </html>
  )
}

export async function clientLoader({
  request,
}: ClientLoaderFunctionArgs) {
  const data = await getApiData("master")
  return data
}

export default function App() {
  const [opened, { toggle, close }] = useDisclosure(false)
  // const pinned = useHeadroom({ fixedAt: 120 })
  const { t } = useTranslation()
  const xMaster = useLoaderData<typeof clientLoader>()
  const [randomFace, setRandomFace] = useState(getSDFaceImgUrl("kllj"))
  const [randomColor, setRandomColor] = useState({ from: `from-kllj-main`, to: `to-kllj-acc2` })

  useEffect(() => {
    const playableIds = []
    for (const [_, v] of Object.entries(xMaster.characters)) {
      if (v.isPlayable) playableIds.push(v.id)
    }
    const randomId = playableIds[Math.floor(Math.random() * playableIds.length)]
    setRandomFace(getSDFaceImgUrl(randomId))
    setRandomColor({
      from: `from-${randomId}-main`,
      to: `to-${randomId}-acc2`,
    })
  }, [])

  return (
    <>
      <NavigationBar />
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 200,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header
          className='flex flex-row justify-start items-center gap-2 pl-4'
        >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="md"
          />
          <Link to="/" onClick={close} className='inline-flex items-center'>
            <img alt='icon' src={randomFace} className='h-12 w-12' />
            <span className={`pl-2 text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r ${randomColor.from} ${randomColor.to}`}>
              {t("meta-name")}
            </span>
          </Link>
        </AppShell.Header>
        <AppShell.Navbar zIndex={110}>
          <Navbar
            close={close}
          />
        </AppShell.Navbar>
        <AppShell.Main>
          <MasterContext.Provider value={xMaster}>
            <Outlet />
            <Footer />
          </MasterContext.Provider>
        </AppShell.Main>
      </AppShell>
    </>
  )
}
