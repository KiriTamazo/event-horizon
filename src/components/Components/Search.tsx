'use client'
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { SearchIcon } from "lucide-react"
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"

const Search = ({ placeholder = 'Search Title' }) => {
    const [query, setQuery] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';
            if (query) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: query
                })
            } else {
                newUrl = removeKeysFromQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']
                })
            }
            router.push(newUrl, { scroll: false })
        }, 300)

        return () => clearTimeout(delayDebounceFn)

    }, [query, searchParams, router])
    return (
        <div className="flex-center min-h-[54px] overflow-auto rounded bg-gray-50 px-4 py-2">
            <SearchIcon className="text-gray-600" />
            <Input
                type="text"
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                className="p-regular-16 border-0 text-gray-700 bg-gray-50 outline-offset-0  focus-visible:ring-0 focus-visible:ring-offset-0"
            />


        </div>
    )
}
export default Search