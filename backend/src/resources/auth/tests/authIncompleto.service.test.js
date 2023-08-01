import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Auth Service Signup', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  it('should sign up user', async () => {
    const randomEmailNumber = Math.random().toFixed(10);
    const usuario = {
      nome: 'João da Silva',
      email: `joao.silva${randomEmailNumber}@example.com`,
      senha: '123456',
    };

    const res = await request(server.server).post('/v1/signup').send(usuario);

    expect(res.statusCode).toEqual(201);

    expect(res.body.nome).toEqual(usuario.nome);
    expect(res.body.email).toEqual(usuario.email);
  });

  it('should not access fake user', async () => {
    const usuario = {
      email: `juliana@gmail.com`,
      senha: '123456',
    };

    const res = await request(server.server).post('/v1/login').send(usuario);

    expect(res.statusCode).toEqual(401);

    expect(res.body.msg).toEqual('Email e/ou senha incorretos');
  });

  afterAll(async () => {
    await connection.close();
  });
});
