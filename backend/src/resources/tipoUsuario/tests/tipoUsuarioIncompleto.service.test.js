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
    const response = await request(server).get('/tipo-usuario');

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await connection.close();
  });
});
