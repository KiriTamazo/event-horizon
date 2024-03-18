"use client";

import { auth } from "@clerk/nextjs";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProps) => {
  return <div>EventForm</div>;
};
export default EventForm;
