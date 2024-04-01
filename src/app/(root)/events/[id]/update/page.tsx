import EventForm from "@/components/Components/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";
type UpdateEventProps = {
  params: {
    id: string;
  };
};
const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-500 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h-3-bold text-center sm:text-left">
          UpdateEvent
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          event={event}
          eventId={event?.id}
          userId={userId}
          type="Update"
        />
      </div>
    </>
  );
};
export default UpdateEvent;
