import Postcard from "../user/postcard";
import type { PostsListProps } from "../user/posts";

export default function Feed({posts}:PostsListProps) {
    return (
        <>
        {
            posts.map((postObj:any) => (
                <div key={postObj.id}>
                    <Postcard 
                    id={postObj.id}
                    imageUrl={postObj.imageUrl}
                    prompt={postObj.prompt}
                    createdAt={postObj.createdAt}
                    userName={postObj.userName} />

                </div>
            ))
        }
        </>
    )
}