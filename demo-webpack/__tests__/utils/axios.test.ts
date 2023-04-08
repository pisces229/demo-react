import util from '@/utils/axios';

test('get', async () => {
  const result = await util
    .get<string>(`/get`, { params: { value: 'mock' } })
    .then((response) => {
      console.log(response);
      return response;
    });
  expect(result.status).toBe(200);
  expect(result.data).toBe('');
});
test('post', async () => {
  const result = await util
    .post<string>(`/post`, { params: { value: 'mock' } })
    .then((response) => {
      console.log(response);
      return response;
    });
  expect(result.status).toBe(200);
  expect(result.data).toBe('');
});
