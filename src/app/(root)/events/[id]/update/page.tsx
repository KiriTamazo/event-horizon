import EventForm from "@/components/Components/EventForm";
import useUserId from "@/hooks/useUserId";
import { getEventById } from "@/lib/actions/event.action";

type UpdateEventProps = {
  params: {
    id: string;
  };
};
const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const userId = useUserId();
  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
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
