import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('tipoUsuario Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  /**  implementar - 2,5
  it('should get all user types', async () => {
   
  });
  */
  it('should get all user types', async () => {
    const res = await request(server.server).get('/v1/tipo-usuario');

    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await connection.close();
  });
});
