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
  <div className="rounded overflow-hidden shadow group-hover:shadow-lg flex flex-row">
    <div className="flex items-center w-[150px]">
      <img
        className="w-full"
        width={150}
        height={150}
        src={record.cover_image}
        alt={record.title}
      />
    </div>
    <div className="px-6 py-4 bg-white flex  flex-1 flex-col gap-2 justify-center">
      <div className="font-bold text-xl">
        {record.artist} - {record.title}
      </div>
      <p className="text-gray-700 text-base">
        {record.label} - {record.year}
      </p>
    </div>
  </div>
);
