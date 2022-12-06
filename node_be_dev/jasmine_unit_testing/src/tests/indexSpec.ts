import supertest from "supertest";

import app from "../index";

const request = supertest(app);

describe('Test my Endpoint', () => {
  it('GET /api: expects "Hello, world"', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
