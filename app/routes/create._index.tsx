import {redirect, type ActionArgs } from "@remix-run/node";
import CreateForm from "~/components/create/createform";
import { useActionData } from "react-router";
import { getUsername } from "~/utils/session.server";
import { SubmitPostForm } from "~/components/create/submitpostform";

export const action = async ({request}:ActionArgs) => {
    const form = await request.formData();
    const formType = form.get("type");
    console.log(formType)

    switch (formType){
        case "createform": {
            const image  = await fetch(`http://localhost:8080/generate/${form.get("prompt")}`);
    const data = await image.json();
    return data;
        }
        case "submitform": {
            const imageData = form.get("image");
        const prompt = form.get("prompt");
        const user = await getUsername(request)
        const status = await fetch("http://localhost:8080/post/upload/", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "username":user,
                "prompt":prompt,
                "imageData":imageData
              }),
        });
        if (status){
            return redirect(`/${user}`);
        }
        }
    }
}

export default function CreateIndex(){
    const data = useActionData<typeof action>()
    return (
        <>
        <CreateForm />
        {data?(
            <SubmitPostForm prompt={data.prompt} image={data.image} />
        ):(
            <>
            </>
        )
        }
        </>
    )
}