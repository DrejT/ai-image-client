import RegisterCard from "~/components/register/registercard";
import type { ActionArgs } from "@remix-run/node";
import { registerValidate } from "~/components/register/registervalidate";
import { redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

export const action = async ({request}:ActionArgs) => {
    const form = await request.formData();
    const username = String(form.get("username"));
    const password = String(form.get("password"));
    const email = String(form.get("email"));
    const user = await registerValidate(username, password, email);
    console.log(user);
    if(user){
        return redirect("/login");
    } else {
        return;
    }
}

export default function RegisterIndex(){
    const actionData = useActionData<typeof action>()
    return (
        <>
        <RegisterCard />
        </>
    ) 
}