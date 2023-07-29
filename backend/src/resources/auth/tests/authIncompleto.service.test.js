import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Auth Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  it('should sign up user', async () => {
    const usuario = {
      nome: 'João da Silva',
      email: 'joao.silva@example.com',
      senha: '123456',
    };

    const response = await request.post('/signup', usuario);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    });
  });

  afterAll(async () => {
    await connection.close();
  });
});
