import runPageSpeedServices from '@/src/service/runPagespeed';
import { IRunPagespeedParams } from './types';

export const runPagespeed = async (params: IRunPagespeedParams) => {
  const {
    url,
    strategy,
    category,
    successCallback,
    errorCallback,
    finallyCallback,
  } = params;

  try {
    const response = await runPageSpeedServices.runPagespeed(url, strategy, category);
    successCallback && successCallback(response);
  } catch (error) {
    errorCallback && errorCallback(error);
  } finally {
    finallyCallback && finallyCallback();
  }
};

const runPagespeedAdapters = {
  runPagespeed,
};

export default runPagespeedAdapters;
