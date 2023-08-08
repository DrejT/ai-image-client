import type { ActionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import SearchBar from "~/components/search/searchbar";
import SearchResult from "~/components/search/searchresult";


export const action =async ({request}:ActionArgs) => {
    const form = await request.formData();
    const username = form.get("username");
    const result = await fetch(`http://localhost:8080/search/${username}`);
    const user = await result.json();
    if (user){
        console.log(user);
        return user;
    } else {
        return null;
    }
}

export default function SearchIndex(){
    const result = useActionData<typeof action>();
    return (
        <>
        <SearchBar />
        {
            result===undefined?(
                <></>
            ):( result?(
                <SearchResult user={result} />
            ):(<>result not found</>)
            )
        }
        </>
    )
}