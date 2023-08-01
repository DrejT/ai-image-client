import Postcard from "./postcard"

export type post = {
    id:string;
    prompt:string;
    createdAt:Date;
    imageUrl:string;
    userName:string;
}

interface PostsListProps {
    posts: post[];
  }

export function PostsList({posts}: PostsListProps){
    return (
        <>
        {
            posts.map((postObj) => (
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