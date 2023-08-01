import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';
import { TiposUsuarios } from '../tipoUsuario.constants';

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

    // Verifica se os objetos retornados possuem os atributos id e rotulo corretos
    res.body.forEach((tipoUsuario) => {
      expect(tipoUsuario).toHaveProperty('id');
      expect(tipoUsuario).toHaveProperty('rotulo');
    });

    // Verifica se os TiposUsuarios esperados estão presentes nos objetos retornados
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: TiposUsuarios.ADMIN,
          rotulo: 'admin',
        }),
        expect.objectContaining({
          id: TiposUsuarios.CLIENT,
          rotulo: 'cliente',
        }),
      ]),
    );
  });

  afterAll(async () => {
    await connection.close();
  });
});
