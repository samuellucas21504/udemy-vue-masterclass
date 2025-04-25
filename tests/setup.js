import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/vue';
import { afterEach, expect } from 'vitest';

afterEach(() => {
  cleanup();
});
