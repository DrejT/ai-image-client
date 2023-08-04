import { type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostsList } from "~/components/user/posts";


export const action =async ({request}:ActionArgs) => {
}



export const loader = async ({params}:LoaderArgs) => {
    console.log(params.user);
    const request = await fetch(`http://localhost:8080/user/${params.user}`);
    if (request !== null){
        const data = await request.json();
        return data;

    } else {
        return null
    }
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