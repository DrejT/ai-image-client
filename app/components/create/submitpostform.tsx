import { Form } from "@remix-run/react"


export function SubmitPostForm(image:string,prompt:string){
    return (
        <>
        <div>
            <img src={`data:image/jpg;base64,${image}`} alt={prompt} />
            <Form method="post" action={`/action?index`}>
                <input type="hidden" name="image" id="image" value={`data:image/jpg;base64,${image}`} />
                <input type="hidden" name="prompt" id="prompt" value={prompt} />
                <input type="hidden" name="type" value={"submitform"} />
            <button type="submit">Post</button>
            </Form>
            </div>
        </>
    )
}