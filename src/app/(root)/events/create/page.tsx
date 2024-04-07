import EventForm from "@/components/Components/EventForm";
import useUserId from "@/hooks/useUserId";
import { redirect } from "next/navigation";

const CreateEvent = () => {
  const userId = useUserId();
  if (!userId) redirect("/sign-in");
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};
export default CreateEvent;
