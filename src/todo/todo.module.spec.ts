import axios from 'axios';
import { TodoClient } from './todo-client';
import { Todo } from './todo/todo';

describe('TodoClient', () => {
  it('should get todo from the API', async () => {
    const mockedResponse: Todo[] = [
      { userId: 3, id: 1, title: 'todo 1', completed: false },
      { userId: 5, id: 2, title: 'todo 2', completed: true },
    ];

    const mockObject = jest
      .spyOn(axios, 'get')
      .mockResolvedValue({ data: mockedResponse });

    const todoClient = new TodoClient();

    const todo = await todoClient.getTodo();

    expect(mockObject).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
    expect(todo).toEqual(mockedResponse);
  });
});
