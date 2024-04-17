import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Weather, fetchWeatherData } from './weather.jsx';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

describe('Weather', () => {
  // test('load weather', async () => {
  //   render(<Weather />);
  //   const input = screen.getByPlaceholderText('Enter city name');
  //   fireEvent.change(input, { target: { value: 'Tokyo' } });

  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);

  //   const loading = screen.getByText('Loading...');
  //   expect(loading).toBeInTheDocument();

  //   // コメントが表示されるまで待つ
  //   await waitFor(() => {
  //     const comment = screen.getByText('曇りです');
  //     expect(comment).toBeInTheDocument();
  //   });
  // });

  // test('load weather with error', async () => {
  //   render(<Weather />);
  //   const input = screen.getByPlaceholderText('Enter city name');
  //   fireEvent.change(input, { target: { value: 'Tokyoadsofjaoisdjfoaijsfo' } });

  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);

  //   const loading = screen.getByText('Loading...');
  //   expect(loading).toBeInTheDocument();

  //   // エラーメッセージが表示されるまで待つ
  //   await waitFor(() => {
  //     const error = screen.getByText('Error fetching weather data. Please try again later.');
  //     expect(error).toBeInTheDocument();
  //   });
  // });

  const server = setupServer(fetchWeatherData('Tokyo', '3dea2a74059879b6eca84b7ecbcd9320'));

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  // 外部apiでエラーが発生した場合のテスト
  test('load weather with external api error', async () => {
    server.use(new Response('Internal server error', { status: 500 }));
    render(<Weather />);
    const input = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(input, { target: { value: 'Tokyo' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();

    // エラーメッセージが表示されるまで待つ
    await waitFor(() => {
      const error = screen.getByText('Error fetching weather data. Please try again later.');
      expect(error).toBeInTheDocument();
    });
  });
});
