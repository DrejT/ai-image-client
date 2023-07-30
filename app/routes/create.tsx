import { Outlet } from "@remix-run/react";

export default function CreateRoot(){
    return (
        <>
        <div>
        <h1>Create new post</h1>
        </div>
        <Outlet />
        </>
    )
}