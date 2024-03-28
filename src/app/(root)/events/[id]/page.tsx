import { getEventById } from "@/lib/actions/event.action"
import { SearchParamProps } from "@/types"
import Image from "next/image"

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
    const event = await getEventById(id)

    return (
        <section className="flex justify-center bg-primary-50
        bg-contain bg-dotted-pattern
        ">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
                <Image
                    width={1000}
                    height={1000}
                    alt='hero'
                    src={event.imageUrl}
                    className='h-full min-h-[300px] object-cover object-center'
                />
            </div>
        </section>
    )
}
export default EventDetails