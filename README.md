# Hatsuboshi Library

A utility application for all junior Producers studying at the Faculty of Produce, Hatsuboshi Academy.

> [!NOTE]  
> Neither this project nor the developers are affiliated with the official team (i.e. BNEI & QualiArts, Inc.)

## Building

Hatsuboshi Library builds on top of the recently introduced Remix [SPA mode](https://remix.run/docs/en/main/guides/spa-mode) which makes it a completely client application by disabling SSR, you can simply run `pnpm remix vite:build` in your terminal to build static bundles and the building itself will succeed. However if you serve those bundles and navigate to the target URL in your browser errors will occur. That is because some required envs are not bundled at building time which makes client data fetching failed. To make it work, you will have to provide correct envs to vite. Required envs can be found in `~/utils/env.ts`. 


## Contributing

Any contributions, including suggestions, bug reports, localizations, pull requests, are always warmly welcomed.

### Localization Instructions

To localize Hatsuboshi Library, you will need to

1. Duplicate `~/locales/en.ts` under the same directory and rename the file to your target language tag complying with [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646#section-2.1). (e.g. For Japanese, use `ja-JP.ts` or simply `ja.ts` since Japan is the one and only region uses Japanese)

2. Delete the `non-translatables` section at the bottom in your new file. Optionally, set a type for your const to receive hints from IntelliSense:

```ts
import { Translation } from "~/i18n"

const translation: Partial<Omit<Translation, "non-translatables">> = {
  ...
}
```

3. Edit your translations.

4. Send your pull request.

Once review is done, we will handle other follow-up works such as adding language switching button for you.


## References

Hatsuboshi Library draws heavily on [info-pride](https://github.com/outloudvi/info-pride) and [HoshimiStage](https://github.com/MalitsPlus/HoshimiStage) for both design and functionality.


## License

AGPL-3.0 license


## We Love Coffee

If you like this application, you can [buy us a cup of Ko-fi](https://ko-fi.com/vertesan).
