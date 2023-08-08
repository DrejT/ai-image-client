import LoginCard from "~/components/login/logincard";
//import { useActionData, useLoaderData } from "@remix-run/react";
import { redirect, type ActionArgs,type LoaderArgs } from "@remix-run/node";
import { loginValidate } from "~/components/login/loginvalidate";
import { createUserSession,getUsername } from "~/utils/session.server";



// this function runs every time user takes any action on this route
// this will validate the login details of the user
// if login details are valid then a new session gets created
// and a redirect is returned, if the details are invalid 
// meaning if the username does not exist on the db then the a redirect 
// is made to the login page
export const action =async ({request}:ActionArgs) => {
    const form = await request.formData();
    const username = String(form.get("username"));
    const password = String(form.get("password"));
    
    const user = await loginValidate(username, password);
    console.log("user obj",user);
    if (user){
        return createUserSession(user.username, "/");
    } else {
        return redirect("/login")
    }
}


// runs when the pages is loaded and checks if a user is already logged in
// if user is logged in then a redirect object is returned else
// a null object is returned which results in the login page getting printed
export const loader =async ({request}:LoaderArgs) => {
    const username = await getUsername(request);
    if (username){
        return redirect(`/${username}`)
    } else {
        return null;
    }
  }

export default function LoginIndex(){
    // const actionData = useActionData<typeof action>();
    // const loaderData = useLoaderData<typeof loader>();
    return (
        <>
        <div>
            <LoginCard />
        </div>
        </>
    )
}