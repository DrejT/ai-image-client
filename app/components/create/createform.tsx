import { Form } from "@remix-run/react";

export default function CreateForm(){
    return (
        <>
        <Form action="/create?index" method="post">
        
<label htmlFor="prompt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter prompt here</label>
<textarea id="prompt" name="prompt" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="prompt here..."></textarea>
<input type="hidden" name="type" value={"createform"} />
<button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Generate</button>
        </Form>
        </>
    )
}