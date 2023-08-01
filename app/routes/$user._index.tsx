import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { PostsList } from "~/components/user/posts";
import { action } from "./create._index";

export const loader = async ({params}:LoaderArgs) => {
    const request = await fetch(`http://localhost:8080/user/${params.user}`)
    const data = await request.json();
    console.log(data);
    return data;
}

export default function UserIndex(){
    const user = useLoaderData<typeof loader>()
    return (
            user?(
                <>
                <h1>{user.name}</h1>
                <div>
                    <p>total posts {user.posts.length}</p>
                    <PostsList posts={user!.posts} />
                </div>
                </>
            ):(
                <>
                <p>User not found</p>
                </>
            )
    )
}