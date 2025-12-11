import { describe, test, expect } from "vitest";
import { createScenario } from "./CreateScenario";
import { startScenario } from "./TimeManagment/startScenario";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const testOptions = {
  testTickValue: true,
};

describe("start scenario", () => {
  test("basic startScenario function", async () => {
    const scenarioState = await createScenario(
      {
        name: "Test Scenario",
        scenarioFileVersion: 1,
        meta: { description: "A test scenario" },
        situations: [],
      },
      testOptions
    );

    expect(scenarioState.name).toBe("Test Scenario");
  });

  test("That scenario is static by default", async () => {
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
    await sleep(1000);
    expect(scenarioState.count).toBe(1);
  });

  test("That clock ticks when running is true", async () => {
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
  });
});
