export default function SearchResult(user:any){
    return (
        <>
        
<a href={`${user.user.name}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.user.name}</h5>
</a>

        </>
    )
}