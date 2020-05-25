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
      : <div className="flex flex-wrap max-w-5xl mx-auto">
        {this.state.records.map(record =>
          <div className="block w-full lg:w-1/2 text-center max-w-md mx-auto" key={record.id}>
            <RecordCard id={record.id}
              title={record.basic_information.title}
              cover={record.basic_information.cover_image}
              artist={record.basic_information.artists[0].name}
              label={record.basic_information.labels[0].name}
              year={record.basic_information.year}
            />
          </div>)}
      </div>
    )
  }
}
