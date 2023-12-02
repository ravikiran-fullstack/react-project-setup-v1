import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {describe , test, expect} from '@jest/globals';
import App from './App';
import React from 'react'; // Add this import statement

describe('App', () => {
  test('should update the search term after debounce delay', async () => {
    render(<App />);
    const inputElement = screen.getByTestId('input');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    // expect(screen.getByTestId('input').value).toBe('test');

    // Wait for debounce delay (175ms)
    await waitFor(() => {
      expect(screen.getByTestId('input').value).toBe('test');
    });

  });
});