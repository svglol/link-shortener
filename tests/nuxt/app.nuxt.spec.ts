import { describe, it, expect } from 'vitest';

describe('nuxt plugin injections', () => {
  it('router', async () => {
    const app = await useNuxtApp();
    expect(app.$router).toBeDefined();
  });
});
