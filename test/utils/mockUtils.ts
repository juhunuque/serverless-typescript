const EVENT_MOCK_PATHS = '../mocks/events';

export const loadEvent = async (eventName): Promise<object> => {
    return  await import(`${EVENT_MOCK_PATHS}/${eventName}.json`);
};
