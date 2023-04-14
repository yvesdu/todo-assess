import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { Todo } from './todo/todo';

@injectable()
export class TodoClient {
  async getTodo(): Promise<Todo[]> {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    return response.data;
  }
}
