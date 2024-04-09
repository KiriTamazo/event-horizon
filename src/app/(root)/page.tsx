import CategoryFilter from "@/components/Components/CategoryFilter";
import Collection from "@/components/Components/Collection";
import Search from "@/components/Components/Search";
import {
  AvatarSkeleton,
  ImageSkeleton,
  Skeleton,
} from "@/components/Components/Skeleton";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import HeroSection from "../../../assets/images/booking.svg";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    page: page,
    limit: 6,
  });
  return (
    <main>
      <section
        className="bg-primary-50 bg-dotted-pattern
      bg-conain py-5 md:py-10
      "
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          {/* <HeroSection /> */}
          <Image
            src="/assets/images/booking.svg"
            alt="hero"
            width={800}
            height={800}
            className="max-h-[70vh]  rounded object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br />
          Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events found"
          emptyStateSubText="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events?.totalPages}
        />
      </section>
    </main>
  );
}
