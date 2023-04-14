import 'reflect-metadata';
import { ApiManager } from './todo.module';
import { TodoClient } from './todo-client';
import { Container } from 'inversify';

describe('ApiManager', () => {
  it('should fetch todo using the TodoClient', async () => {
    const container = new Container();
    container.bind<TodoClient>(TodoClient).toSelf().inSingletonScope();
    container.bind<ApiManager>(ApiManager).toSelf();

    const apiManager = container.get<ApiManager>(ApiManager);

    const todo = await apiManager.fetchData();

    expect(Array.isArray(todo)).toBe(true);
    expect(todo.length).toBeGreaterThan(0);
  });
});
