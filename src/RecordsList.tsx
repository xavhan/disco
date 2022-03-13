import React from 'react'
import { MyRecord, RecordsService } from './services/records';
import { RecordCard } from './display/RecordCard';
const client = new RecordsService();

type State = {
  isFetching: boolean,
  records: MyRecord[],
  page: number
}
export class RecordsList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isFetching: false,
      records: JSON.parse(localStorage.getItem('records')|| '[]'),
      page: 1
    }
  }

  componentDidMount() {
    return this.fetchRecords();
  }

  fetchRecords() { 
    this.setState({ isFetching: true })
    return client.getMyLatestRecords({ page: this.state.page }).then(records => {
      this.setState({ records: records, isFetching: false })
      if(this.state.page === 1) {
        localStorage.setItem('records', JSON.stringify(records));
      }
    })
  }

  goToPreviousPage() {
    this.setState({ page: this.state.page - 1, records: [] }, () => this.fetchRecords())
  }

  goToNextPage() {
    this.setState({ page: this.state.page + 1, records: [] }, () => this.fetchRecords())
  }

  render() {
    return <div>
      <div className="block w-full text-center">
        <button className="font-bold py-2 px-4" disabled={this.state.isFetching || this.state.page === 1} 
          onClick={() => this.goToPreviousPage()}>prev</button>
        <button className="font-bold py-2 px-4" disabled={this.state.isFetching} 
          onClick={() => this.goToNextPage()}>next</button>
      </div>
     
      {this.state.isFetching && !this.state.records.length
        ? <div className="text-center">Loading records...</div>
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
      }
    </div>
    
    
  }
}
