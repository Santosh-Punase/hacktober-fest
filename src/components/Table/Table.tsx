import React from 'react';

import { IssueDetail } from '../../Model/model';

import './table.css';

interface Props {
  issues: IssueDetail[];
}

const Table: React.FC<Props> = ({ issues }: Props) => {

  return (
    <div className="table">
      <div className="table-header">
        <div className="header-cell">Title</div>
        <div className="header-cell">Lables</div>
        <div className="header-cell">Comments</div>
        <div className="header-cell">State</div>
      </div>
      <div className="table-body">
        {
          issues.map((item,index) => (
            <div className="table-row" key={item.createdAt}>
              <a className="table-cell" href={item.link}>{item.title}</a>
              <div className="table-cell left">
                { item.labels.map((label, i) => (
                  <div className="issue-label" key={i}>{label}</div>
                ))}
              </div>
              <div className="table-cell">{item.comments}</div>
              <div className="table-cell">{item.state}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Table;
