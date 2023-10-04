import { getRecords } from "@/api/discogs";
import { RecordCard } from "@/components/RecordCard";
import Link from "next/link";

export default async function Home() {
  const records = await getRecords();
  return (
    <main className="min-h-screen px-8 py-16 flex flex-col gap-8 md:gap-16 items-center">
      <h1 className="text-4xl font-bold">My Latest Records</h1>
      <ul className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {records.slice(0, records.length - 2).map((rec) => {
          return (
            <li key={rec.id} className="">
              <Link
                href={"https://www.discogs.com/release/" + rec.id}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RecordCard
                  record={{
                    title: rec.basic_information.title,
                    artist: rec.basic_information.artists[0].name,
                    year: rec.basic_information.year.toString(),
                    label: rec.basic_information.labels[0].name,
                    cover_image: rec.basic_information.cover_image,
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
