/**
 * Podpowiedzi emotek fajki - Tab completion for the pipe emotes (the `pa*`
 * commands).
 *
 * Every emote goes into the command line's Tab completion. The client completes
 * the last word being typed, and a suggestion may hold spaces, so emotes with a
 * fixed argument ("papusc kolka", "pawymachuj fajka") are offered whole. Emotes
 * whose argument is a free target or text are offered bare.
 *
 * See README.md for build / host / publish details.
 */

import type { PluginApi, PluginInfo } from '@arkadia/plugin-types';

const PLUGIN_NAME = 'Podpowiedzi emotek fajki';
const PLUGIN_VERSION = '1.0.0';
const PLUGIN_AUTHOR = 'Dargoth';
const PLUGIN_DESCRIPTION = 'Podpowiedzi (Tab) dla emotek fajki.';

const SUGGESTIONS = [
  'pabuchnij', // buchasz dymem z nozdrzy
  'padmuchnij', // [jak] w twarz <komu> - dmuchasz komus w twarz dymem z fajki
  'papopatrz', // [jak] na <kogo> - spogladasz na kogos trzymajac fajke w ustach
  'papowiedz', // [do kogo] <cos> - mowisz cos wyjmujac na chwile fajke z ust
  'pappowiedz', // [jak] [do kogo] <cos>
  'pajpowiedz', // [do kogo] <cos> - mowisz cos w okreslonym jezyku
  'pajppowiedz', // [jak] [do kogo] <cos>
  'paprzetrzyj', // <co> - przecierasz fajke
  'paprzetrzyj fajke',
  'papusc kolka', // puszczasz kolka z dymu
  'papyknij', // pykasz dymem z fajki
  'parelaksuj sie', // odprezasz sie nieco, palac fajke
  'parozgon dym', // rozganiasz dym z fajki i powstale wzory
  'pausmiechnij sie', // [jak] do [kogo] - usmiechasz sie z fajka w ustach
  'pautworz ksztalt', // <czego> - tworzysz jeden z ksztaltow (lista: paksztalty)
  'pawymachuj', // [jak] <czym> - wymachujesz fajka
  'pawymachuj fajka',
  'pawskaz', // <czym> <kogo> - wskazujesz kogos swa fajka
  'pawskaz fajka',
  'pazaciagnij sie', // mocniej zaciagasz sie dymem fajkowym
  'paksztalty', // lista dostepnych dla ciebie ksztaltow oblokow dymu
];

let pluginApi: PluginApi | null = null;

export async function init(api: PluginApi): Promise<PluginInfo> {
  pluginApi = api;
  api.command.addSuggestions(...SUGGESTIONS);

  return {
    name: PLUGIN_NAME,
    version: PLUGIN_VERSION,
    author: PLUGIN_AUTHOR,
    description: PLUGIN_DESCRIPTION,
  };
}

export async function destroy(): Promise<void> {
  // The host calls destroy() with no arguments, so use the api captured at init.
  // It also drops the suggestions on unload; removing them here keeps a reload clean.
  pluginApi?.command.removeSuggestions(...SUGGESTIONS);
  pluginApi = null;
}
