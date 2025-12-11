import { returnStateEnum } from "../../Standard/scenario";

export const Tick = async (scenarioState) => {
  while (!scenarioState.stopped) {
    if (scenarioState.running) {
      scenarioState.count && (scenarioState.count += 1);
    }
    await new Promise((resolve) =>
      setTimeout(resolve, scenarioState.tickInterval)
    );
  }

  return returnStateEnum.SUCCESS;
};
