export interface CustomerRepository {
  save(data: Record<string, any>): Promise<void>
}
