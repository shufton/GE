# GE

## Introduction
This is a learning project for me, to cover a load of sligtly different stuff
* [vite](https://vitejs.dev/)
* [svelte](https://svelte.dev/) and [sveltekit](https://kit.svelte.dev/)
* [MSAL](https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview)
* [d3.js](https://d3js.org/)

The finished app is (supposed) to be a live tracker for UK GE results with the UK constituencies rendered in SVG. As results come in, the constituency chnges colour from the previous party to the new (because lets face it, at the time of project start, the tories are totally Firetrucked...).

Additional features are planned to be
* Sankey chart showing the change in seats
* Live feed (websocket) of results as they come in
* Maybe a special feature for some lighthearted trolling/shitposting for the loser of a seat 😏

## Instructions
Currently the app should be ready, though you need to add a `lib/secrets.json` file with the `clientId` and `authority` values that are used to auth with MSAL. An empty copy of the file is in the second commit on main for reference. `.gitignore` is configured to prevent any more copies of this being added.

## Updates
20230917 Initial implementation of MSAL authentication in a Sveltekit app, for a single tenant login.