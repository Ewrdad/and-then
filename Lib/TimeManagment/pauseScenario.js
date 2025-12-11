export const pauseScenario = async (scenarioState, options) => {
  scenarioState.running = false;

  return scenarioState;
};
