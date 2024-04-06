import Collection from "@/components/Components/Collection"
import { Button } from "@/components/ui/button"
import useUserId from "@/hooks/useUserId"
import { getEventsByUser } from "@/lib/actions/event.action"
import { getOrdersByUser } from "@/lib/actions/order.action"
import { IOrder } from "@/lib/database/models/order.model"
import { SearchParamProps } from "@/types"
import { auth } from "@clerk/nextjs"
import Link from "next/link"

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
    const userId = useUserId()
    const orderPage = Number(searchParams?.orderPage) || 1
    const eventPage = Number(searchParams?.eventPage) || 1
    const orders = await getOrdersByUser({ userId, page: orderPage })
    const orderedEvents = orders?.data?.map((order: IOrder) => order?.event) || []
    const organizedEvents = await getEventsByUser({
        userId,
        page: eventPage
    })
    return (
        <>
            {/* My Tickets */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/#events">
                            Explore More Events
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={orderedEvents}
                    emptyTitle="No event tickets purchased yet"
                    emptyStateSubText="No worries - plenty of exciting events to explore!"
                    collectionType="My_Tickets"
                    limit={3}
                    page={orderPage}
                    urlParamName="ordersPage"
                    totalPages={orders?.totalPages}
                />
            </section>

            {/* Events Organized */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>Events Organized</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/events/create">
                            Create New Event
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={organizedEvents?.data}
                    emptyTitle="No events have been created yet"
                    emptyStateSubText="Go create some now"
                    collectionType="Events_Organized"
                    limit={3}
                    page={eventPage}
                    urlParamName="eventsPage"
                    totalPages={organizedEvents?.totalPages}
                />
            </section>
        </>
    )
}
export default ProfilePage