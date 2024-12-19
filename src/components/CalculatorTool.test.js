// import { expect, test } from 'vitest';
// import { createApp } from 'vue';
// import CalculatorTool from './CalculatorTool.vue';
// import { render, fireEvent } from '@testing-library/vue';

// test('calculate function should work', async () => {
//   const { getByTestId } = render(CalculatorTool);

//   // Teste de adição
//   await fireEvent.click(getByTestId('button-2'));
//   await fireEvent.click(getByTestId('button-plus'));
//   await fireEvent.click(getByTestId('button-3'));
//   await fireEvent.click(getByTestId('button-equal'));
//   expect(getByTestId('display').textContent).toBe('5');

//   // Teste de subtração
//   await fireEvent.click(getByTestId('button-8'));
//   await fireEvent.click(getByTestId('button-minus'));
//   await fireEvent.click(getByTestId('button-3'));
//   await fireEvent.click(getByTestId('button-equal'));
//   expect(getByTestId('display').textContent).toBe('5');

//   // Teste de multiplicação
//   await fireEvent.click(getByTestId('button-4'));
//   await fireEvent.click(getByTestId('button-multiply'));
//   await fireEvent.click(getByTestId('button-2'));
//   await fireEvent.click(getByTestId('button-equal'));
//   expect(getByTestId('display').textContent).toBe('8');

//   // Teste de divisão
//   await fireEvent.click(getByTestId('button-9'));
//   await fireEvent.click(getByTestId('button-divide'));
//   await fireEvent.click(getByTestId('button-3'));
//   await fireEvent.click(getByTestId('button-equal'));
//   expect(getByTestId('display').textContent).toBe('3');
// });

import { test } from 'vitest';
import { createApp } from 'vue';
import CalculatorTool from './CalculatorTool.vue';
import { appendToInput, calculate } from './CalculatorTool.vue?component';

test('calculate function should evaluate expressions correctly', () => {
  // Teste de adição
  appendToInput('2+3');
  calculate();
  expect(component.$data.input).toBe('5');
});

