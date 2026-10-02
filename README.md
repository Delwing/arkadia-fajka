# arkadia-fajka

A plugin for the [Arkadia Web Client](https://github.com/Delwing/arkadia-web-client-extension)
that adds the pipe (*fajka*) emotes (the `pa*` commands) to the command line's
Tab completion.

## How completion works

The plugin registers every emote with `api.command.addSuggestions`. The client
completes the **last word** being typed from those suggestions, and a suggestion
may contain spaces, so:

- emotes with a fixed argument are offered whole (`papusc kolka`,
  `pazaciagnij sie`), plus the obvious object where the argument is the pipe
  itself (`paprzetrzyj fajke`, `pawymachuj fajka`, `pawskaz fajka`);
- emotes whose argument is a free target or text (`papopatrz [jak] na <kogo>`,
  `papowiedz [do kogo] <cos>`) are offered bare.

Suggestions are removed again in `destroy()` (the host also drops them on unload).

## Files

- `plugin.ts` — the whole plugin; the emote list (`SUGGESTIONS`) is at the top.
- `plugin.json` — registry manifest. Keep its `version` in sync with
  `package.json` and `PLUGIN_VERSION` in `plugin.ts`.
- `DESCRIPTION.md` — the Polish, player-facing registry page.

## Build / develop

```
yarn install
yarn build       # dist/plugin.js
yarn dev         # serves http://localhost:5180/plugin.js
yarn typecheck
```

## Publishing

`deploy.yml` publishes `dist/` to GitHub Pages on `master`, `publish.yml`
uploads `plugin.json` + `plugin.ts` to the plugin registry on a `v*` tag (slug
`fajka`, trusted publisher `Delwing/arkadia-fajka` / `publish.yml`).
