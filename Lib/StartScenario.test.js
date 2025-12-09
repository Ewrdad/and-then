import { describe, test, expect } from "vitest";
import { startScenario } from "./StartScenario";

describe("start scenario", () => {
  test("basic startScenario function", async () => {
    const scenario = startScenario({
      name: "Test Scenario",
      scenarioFileVersion: 1,
      meta: { description: "A test scenario" },
      situations: [],
    });
    expect(scenario.loading).toBe(true);
  });
});
