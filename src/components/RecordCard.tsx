import Image from "next/image";
import { FC } from "react";

export const RecordCard: FC<{
  record: {
    title: string;
    year: string;
    cover_image: string;
    label: string;
    artist: string;
  };
}> = ({ record }) => (
  <div className="rounded overflow-hidden shadow group-hover:shadow-lg max-w-[400px]">
    <div className="w-full flex items-center h-[400xp]">
      <Image
        className="w-full"
        width={400}
        height={400}
        src={record.cover_image}
        alt={record.title}
      />
    </div>
    <div className="px-6 py-4 bg-white flex flex-col gap-2">
      <div className="font-bold text-xl">
        {record.artist} - {record.title}
      </div>
      <p className="text-gray-700 text-base">
        {record.label} - {record.year}
      </p>
    </div>
  </div>
);
