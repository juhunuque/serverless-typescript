import { successResponse } from '../utils/response';

export async function indexFunction(): Promise<any> {
    return successResponse('Service is running...');
}