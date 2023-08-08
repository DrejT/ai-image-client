import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Feed from "~/components/feed/feed";
import { getUsername } from "~/utils/session.server";

export const loader =async ({request}:LoaderArgs) => {
  const user = await getUsername(request);
  if (user){
  const data = await fetch("http://localhost:8080/feed");
  const posts = await data.json();
  return posts;
  } else {
    return null;
  }
}

export default function Index() {
  const feed = useLoaderData<typeof loader>();
  return (
    <>
    {feed?(
      <Feed posts={feed} />
    ):<></>}
    </>
  )
}