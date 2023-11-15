import { SearchRepositoryResponse } from "../../../domain/SearchRepositoryResponse";

export class MongoHelper {
  static searchRepositoryMapper<T>(response: any, limit: number, page: number): SearchRepositoryResponse<T> {
    if (!response.length) {
      return {
        data: [],
        count: 0,
        totalPages: 0,
        page,
        limit,
      };
    }
    return {
      data: response[0].data,
      count: response[0].count,
      totalPages: response[0].totalPages,
      page,
      limit,
    };
  }

  static removeInvalidsProperties(data: Record<string, any>) {
    const isArray = data instanceof Array;
    for (const propName in data) {
      if (data[propName] === null || data[propName] === undefined)
        isArray ? data.splice(Number(propName), 1) : delete data[propName];
      else if (typeof data[propName] == 'object') this.removeInvalidsProperties(data[propName]);
    }
    return data;
  }
}
