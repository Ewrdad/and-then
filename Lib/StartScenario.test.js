import { describe, test, expect } from 'vitest';
import { startScenario } from './StartScenario';

/**
 * Simple sleep helper for tests
 * @param {number} ms
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('start scenario', () => {
  test('basic startScenario function', async () => {
    const scenario = startScenario({
      name: 'Test Scenario',
      scenarioFileVersion: 1,
      meta: { description: 'A test scenario' },
      situations: [],
    });

    console.log(scenario);

    await sleep(100);

    console.log(scenario);
    await sleep(100);
    console.log(scenario);

    expect(scenario.testValue).toBe(10);
  });
});
