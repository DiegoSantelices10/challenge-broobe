import { ICallbacksApi } from '@/src/service/types';

export interface IRunPagespeedParams extends ICallbacksApi {
    url: string;
    strategy: string;
    category: string[];
}
