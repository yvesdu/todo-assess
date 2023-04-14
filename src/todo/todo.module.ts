import { injectable, inject } from 'inversify';
import { TodoClient } from './todo-client';
import { Todo } from './todo/todo';

interface IFetchData {
  fetchData(): Promise<Todo[]>;
}

@injectable()
export class ApiManager implements IFetchData {
  constructor(@inject(TodoClient) private todoClient: TodoClient) {}

  async fetchData(): Promise<Todo[]> {
    return this.todoClient.getTodo();
  }
}
