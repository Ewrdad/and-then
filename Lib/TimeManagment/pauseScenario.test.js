import createScenario from "../CreateScenario";
import { describe, expect, test } from "vitest";
import { startScenario } from "./startScenario";
import { pauseScenario } from "./pauseScenario";

const testOptions = {
  testTickValue: true,
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe("pause scenario", () => {
  test("Can Pause Scenario", async () => {
    const scenarioState = await createScenario(
      {
        name: "Test Scenario",
        scenarioFileVersion: 1,
        meta: { description: "A test scenario" },
        situations: [],
      },
      testOptions
    );

    expect(scenarioState.count).toBe(1);

    startScenario(scenarioState);

    pauseScenario(scenarioState);
    expect(scenarioState.running).toBe(false);
    const pausedValue = scenarioState.count;

    await sleep(1000);
    expect(scenarioState.count).toBe(pausedValue);
    await sleep(1000);
    expect(scenarioState.count).toBe(pausedValue);
  });

  test("That a paused scenario can be restarted", async () => {
    const scenarioState = await createScenario(
      {
        name: "Test Scenario",
        scenarioFileVersion: 1,
        meta: { description: "A test scenario" },
        situations: [],
      },
      testOptions
    );

    expect(scenarioState.count).toBe(1);
    startScenario(scenarioState);
    expect(scenarioState.running).toBe(true);

    await sleep(1000);
    expect(scenarioState.count).toBeGreaterThan(1);

    pauseScenario(scenarioState);
    expect(scenarioState.running).toBe(false);
    const pausedValue = scenarioState.count;

    await sleep(1000);
    startScenario(scenarioState);
    expect(scenarioState.running).toBe(true);

    await sleep(1000);
    expect(scenarioState.count).toBeGreaterThan(pausedValue);
  });
});
