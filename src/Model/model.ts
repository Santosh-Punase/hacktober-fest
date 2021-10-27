export interface IssueDetail {
  title: string;
  link: string;
  labels: string[];
  state: 'open' | 'close';
  comments: number;
  createdAt: string;
};

export interface SearchOption {
  token: string;
  labels: string;
  limit: number;
  language: string;
  ignoreClosed?: boolean;
  complete?: boolean;
}
