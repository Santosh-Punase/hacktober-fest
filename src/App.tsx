import React, { useEffect, useState } from 'react';

import Filter from './components/Filter';
import Table from './components/Table';
import { IssueDetail, SearchOption } from './Model/model';
import './App.css';

const hacktoberfest = require('hacktoberfest-issue-hunt');

const defaultOptions: SearchOption = {
  token: '', // generate a token to fetch issues
  limit: 10,
  language: '',
  labels: '',
};

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [issues, setIssues] = useState<IssueDetail[]>([]);
  const [options, setOptions] = useState<SearchOption>(defaultOptions);

  const fetchData: () => void = () => {
    setIsLoading(true);
    hacktoberfest(options)
    .then((issues: IssueDetail[]) => {
      setIsLoading(false);
      setIssues(issues);
    })
    .catch((e: any) => {
      console.log(e);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <main>
        <Filter setOption={(label, value) => setOptions({ ...options, [label]: value })} onSearchClick={fetchData} />
        { isLoading
          ? <div className="loader">Loading...</div> 
          : <Table issues={issues} />
        }
      </main>
    </div>
  );
}

export default App;
