import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DangerButton from '../../components/DangerButton';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';

describe('dangerButton', () => {
  test('renders DangerButton correctly', () => {
    // 必要なプロパティを設定して DangerButton をレンダリングする
    const onClickMock = jest.fn(() => console.log('button clicked'));
    render(<DangerButton style={{ color: 'white', backgroundColor: 'red' }} onClick={onClickMock} label="Click me" />);

    // 正しいスタイルが適用されていることを確認する
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ color: 'white' });

    // ボタンが正しく描画されていることを確認する
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');

    // ボタンがクリック可能であり、クリックされたときに正しいイベントが発生することを確認する
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});