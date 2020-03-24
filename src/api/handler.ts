import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from "aws-lambda";
import 'reflect-metadata';

import "source-map-support/register";
import {Logger} from "../utils/logger";
import { indexFunction } from './controller';

const log = new Logger();


export const index: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context: Context) => {
    log.info('-------------------index triggered------------------------');
    log.info('Event:', JSON.stringify(event));
    _context.callbackWaitsForEmptyEventLoop = false;

    return indexFunction();
};

