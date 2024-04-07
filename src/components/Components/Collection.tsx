"use client";
import { IEvent } from "@/lib/database/models/event.model";
import Pagination from "./Pagination";
import Card from "./Card";
import { motion, AnimatePresence, Variant, Variants } from "framer-motion";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubText: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};
const Collection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data?.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <AnimatePresence presenceAffectsLayout mode="wait">
            <motion.ul
              layout
              className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
            >
              {data.map((event) => {
                const hasOrderLink = collectionType === "Events_Organized";
                const hidePrice = collectionType === "My_Tickets";

                return (
                  <motion.li
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    key={event.id}
                    className="flex justify-center"
                  >
                    <Card
                      event={event}
                      hasOrderLink={hasOrderLink}
                      hidePrice={hidePrice}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>

          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <motion.div
          animate={{ opacity: 1, y: -25 }}
          initial={{ opacity: 0, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5 }}
          className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-gray-50 py-28 text-center"
        >
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubText}</p>
        </motion.div>
      )}
    </>
  );
};
export default Collection;
