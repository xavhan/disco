import React from 'react';
import { MyRecord, RecordsService } from '../services/records'
const recordService = new RecordsService()

const openDiscogs = (id: number) => recordService.getRecord(id)
  .then(record => window.open(record.uri))

export const RecordCard = ({
  title,
  cover,
  artist,
  label,
  year,
  id,
}: MyRecord) => (
  <div className="m-4 rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl" onClick={() => openDiscogs(id)}>
    <img className="w-full" src={cover} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{artist} - {title}</div>
      <p className="text-gray-700 text-base mb-2">
        {label} - {year}
      </p>
    </div>
  </div>
)
