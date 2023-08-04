import { Form } from "@remix-run/react"

// type data = {
//     image:string;
//     prompt:string;
// }


export function SubmitPostForm(data:any){
    return (
        <>
        <div>
            <img src={`data:image/jpg;base64,${data.data.image}`} alt={data.data.prompt} />
            <Form method="post" action={`/create?index`}>
                <input type="hidden" name="image" id="image" value={`data:image/jpg;base64,${data.data.image}`} />
                <input type="hidden" name="prompt" id="prompt" value={data.data.prompt} />
                <input type="hidden" name="type" id="type" value={"submitform"} />
            <button type="submit">Post</button>
            </Form>
            </div>
        </>
    )
}