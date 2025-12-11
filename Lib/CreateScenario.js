import { Tick } from "./Tick/Tick";

/**
 * MARK: createScenario
 *
 * @param {import('../Standard/scenario').Scenario} scenario - A scenario object conforming to the standard format
 * @returns {Promise<Object>}
 */
export const createScenario = async (scenario, options) => {
  console.log(`Starting scenario: ${scenario.name}`);
  const scenarioState = {
    running: false,
    tickInterval: 100,
    count: 0,
    ...scenario,
  };

  if (options?.testTickValue) {
    scenarioState.count = 1;
  }

  Tick(scenarioState);

  return scenarioState;
};

export default createScenario;
