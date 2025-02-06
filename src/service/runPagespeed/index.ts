import { SERVICES } from '@/src/environments';
import { getApi } from '..';

export const runPagespeed = async (url: string, strategy: string, category: string[]) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_KEY;

  const categoryParams = category.map(cat => `category=${encodeURIComponent(cat)}`).join('&');

  const response = await getApi({
    path: SERVICES.RUN_PAGESPEED,
    method: 'GET',
    query: `?url=${url}&key=${apiUrl}&${categoryParams}&strategy=${strategy}`,
  });

  return response;
};

const runPageSpeedServices = {
  runPagespeed,
};

export default runPageSpeedServices;
