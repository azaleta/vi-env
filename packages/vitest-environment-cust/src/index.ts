import type { Environment } from 'vitest'

export default <Environment>{
  name: 'cust',
  setup() {
    // custom setup
    const connectionString = 'from env'
    global.process.env.DATABASE_URL = connectionString
    return {
      teardown() {
        // called after all tests with this env have been run
      },
    }
  },
}
