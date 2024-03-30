"use client";

import { AlertTriangleIcon, Trash } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { deleteEvent } from "@/lib/actions/event.action";

const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash className="w-5 h-5 text-destructive" />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <div className="bg-destructive/20 rounded-full p-3 mb-2 flex items-center justify-center mx-auto">
            <AlertTriangleIcon
              strokeWidth={2}
              className="text-destructive mx-auto w-12 h-12"
            />
          </div>
          <AlertDialogTitle className="text-center">
            Are you sure you want to delete?
          </AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-center text-grey-600">
            This will permanently delete this event
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-3">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>

          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90 flex-1"
            onClick={() =>
              startTransition(async () => {
                await deleteEvent({ eventId, path: pathname });
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteConfirmation;
