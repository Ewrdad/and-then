/**
 * MARK: startScenario
 * @param {import('../Standard/scenario.js').Scenario} scenario - A scenario object conforming to the standard format
 * @returns {Promise<Object>}
 */
export const startScenario = async (scenario) => {
  console.log(`Starting scenario: ${scenario.name}`);
  const scenarioState = {
    loading: true,

    ...scenario,
  };

  return scenarioState;
};

export default startScenario;
