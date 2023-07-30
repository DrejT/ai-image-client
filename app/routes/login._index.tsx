import LoginCard from "~/components/login/logincard";
import { useActionData, useLoaderData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { loginValidate } from "~/components/login/loginvalidate";
import { createUserSession } from "~/utils/session.server";
import type { loader } from "~/root";

export const action =async ({request}:ActionArgs) => {
    const form = await request.formData();
    const username = String(form.get("username"));
    const password = String(form.get("password"));
    
    const user = await loginValidate(username, password);
    return createUserSession(user.username, "/");
}


export default function LoginIndex(){
    const actionData = useActionData<typeof action>();
    const loaderData = useLoaderData<typeof loader>();
    return (
        <>
        {
        loaderData?
        (<div>
            Hello {loaderData}
        </div>):(
            <div>
            <LoginCard />
            </div>
        )
        }
        </>
    )
}