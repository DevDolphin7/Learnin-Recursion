function definePriorLevelSteps(stepInfo) {
  const priorLevelStep = {};
  const currentStepMaxLevel = stepInfo.steps[stepInfo.currentStep].level;

  for (let maxLevel = currentStepMaxLevel; maxLevel >= 2; maxLevel--) {
    for (let i = stepInfo.currentStep - 1; i >= 0; i--) {
      if (
        stepInfo.steps[i + 1].level === maxLevel &&
        stepInfo.steps[i].level === maxLevel - 1
      ) {
        priorLevelStep[maxLevel] = i;
        break;
      }
    }
  }

  return priorLevelStep;
}

export { definePriorLevelSteps };
