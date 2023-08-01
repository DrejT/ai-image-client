import type { LinksFunction,LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Navbar from "./components/root/navbar";
import LoginNavbar from "./components/root/loginNavbar";
import { getUsername } from "~/utils/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


// runs when the page is loaded 
// returns a username if a cookie exists or returns null
export const loader =async ({request}:LoaderArgs) => {
  const username = await getUsername(request);
  return username;
}


export default function App() {
  const data = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {data? (
          <LoginNavbar />
        ): <Navbar />}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
