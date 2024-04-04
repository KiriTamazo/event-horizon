'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getAllCategories } from "@/lib/actions/category.action"
import { ICategory } from "@/lib/database/models/category.model"
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils"
import { useRouter } from "next-nprogress-bar"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

const CategoryFilter = () => {

    const [categories, setCategories] = useState<ICategory[]>([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        (async () => {
            try {
                const categoryList = await getAllCategories();
                categoryList && setCategories(categoryList as ICategory[]);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    // const computedCategories = useMemo(() => categories, [categories])
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         let newUrl = '';
    //         if (computedCategories) {
    //             newUrl = formUrlQuery({
    //                 params: searchParams.toString(),
    //                 key: 'query',
    //                 value: computedCategories
    //             })
    //         } else {
    //             newUrl = removeKeysFromQuery({
    //                 params: searchParams.toString(),
    //                 keysToRemove: ['query']
    //             })
    //         }
    //         router.push(newUrl, { scroll: false })
    //     }, 300)

    //     return () => clearTimeout(delayDebounceFn)

    // }, [computedCategories, searchParams, router])
    const onSelectCategory = (category: string) => {
        console.log(category)
    }
    return (
        <Select onValueChange={(value: string) => onSelectCategory(value)}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem className="select-item p-regular-14" value="all">All</SelectItem>

                <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
        </Select>

    )
}
export default CategoryFilter