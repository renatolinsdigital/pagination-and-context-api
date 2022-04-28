import { GithubUser } from './../../models';

interface UsersTableProps {
  hasError?: boolean;
  isLoading?: boolean;
  users: GithubUser[];
  errorMessage?: string;
}

export default UsersTableProps;