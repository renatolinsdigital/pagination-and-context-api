export interface GithubUser {
  id: number;
  url: string;
  type: string;
  login: string;
  avatar_url: string;
}

export interface UsersResponse {
  items: GithubUser[];
  total_count: number;
}

export interface UsersQuery {
  page?: number;
  queryText?: string;
}

