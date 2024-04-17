import { addComment } from './weather.jsx';

describe('addComment', () => {
  test('returns correct comment for "few clouds"', () => {
    expect(addComment('few clouds')).toBe('くもりです');
  });

  test('returns correct comment for "light rain"', () => {
    expect(addComment('light rain')).toBe('小雨です');
  });

  test('returns correct comment for "clear sky"', () => {
    expect(addComment('clear sky')).toBe('晴れです');
  });

  test('returns correct comment for "scattered clouds"', () => {
    expect(addComment('scattered clouds')).toBe('一部曇りです');
  });

  test('returns correct comment for "broken clouds"', () => {
    expect(addComment('broken clouds')).toBe('曇りです');
  });

  test('returns correct comment for "shower rain"', () => {
    expect(addComment('shower rain')).toBe('にわか雨です');
  });

  test('returns correct comment for "rain"', () => {
    expect(addComment('rain')).toBe('雨です');
  });

  test('returns empty string for unknown conditions', () => {
    expect(addComment(0)).toBe('');
  });

  test('returns empty string for unknown conditions', () => {
    expect(addComment('')).toBe('');
  });
});

// import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
// import { fetchWeatherData } from './weather.jsx';

// // axiosのインスタンスをモックする
// const mock = new AxiosMockAdapter(axios);

// describe('fetchWeatherData', () => {
//   afterEach(() => {
//     mock.reset(); // 各テスト後にモックをリセット
//   });

//   it('should fetch and return weather data correctly', async () => {
//     const mockData = {
//       weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
//       main: { temp: 22, pressure: 1012, humidity: 85 },
//       name: 'Tokyo',
//     };

//     // 成功したAPIレスポンスを模擬
//     mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(200, mockData);

//     const result = await fetchWeatherData('Tokyo', '3dea2a74059879b6eca84b7ecbcd9320');
//     expect(result).toEqual(mockData);
//   });

//   // it('should handle an error when the API call fails', async () => {
//   //   // 失敗したAPIレスポンスを模擬
//   //   mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(500);

//   //   const result = await fetchWeatherData('Tokyo', '3dea2a74059879b6eca84b7ecbcd9320');
//   //   expect(result).toBeUndefined();
//   // });
// });
