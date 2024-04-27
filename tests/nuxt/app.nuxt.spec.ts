import { describe, expect, it } from 'vitest'

describe('nuxt plugin injections', () => {
  it('router', async () => {
    const app = useNuxtApp()
    expect(app.$router).toBeDefined()
  })
})
