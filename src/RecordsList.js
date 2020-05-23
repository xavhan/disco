import React from 'react'
import { RecordsService } from './services/records';
import { RecordCard } from './display/RecordCard';
const client = new RecordsService();

export class RecordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      records: []
    }
  }

  componentDidMount() {
    return this.fetchRecords();
  }

  fetchRecords() { 
    this.setState({ isFetching: true })
    return client.getMyLatestRecords().then(records =>
      this.setState({ records: records, isFetching: false })
    )
  }

  render() {
    return (this.state.isFetching
      ? <div>Loading data</div>
      : <div className="grid grid-cols-3 gap-4">
        {this.state.records.map(record =>
          <RecordCard key={record.id}
            id={record.id}
            title={record.basic_information.title}
            cover={record.basic_information.cover_image}
            artist={record.basic_information.artists[0].name}
            label={record.basic_information.labels[0].name}
            year={record.basic_information.year}
          />)}
      </div>
    )
  }
}

/*
<div key={record.id}>
          <div>
            <strong>{record.basic_information.title}</strong>
          </div>
          <div>
            {[
              record.basic_information.artists.map(a => a.name).join(' / '),
              record.basic_information.year,
              record.basic_information.labels.map(a => a.name).join(' / ')
            ].join(' - ')}
          </div>
          <div>{dateService.format(record.date_added)}</div>
          <img src={record.basic_information.cover_image} alt={record.basic_information.title} />
        </div>
        */