export interface SearchRepositoryResponse<T> {
  data: T[];
  count?: number;
  totalPages?: number;
  page?: number;
  limit?: number;
}
