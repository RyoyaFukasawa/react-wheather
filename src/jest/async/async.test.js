import { fetchData } from './async';

test('fetchData returns data', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
    }
);
