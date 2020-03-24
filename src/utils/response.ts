const response = (statusCode: number, message: string) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(
            {
                message:
                    message
            },
            undefined,
            2
        )
    };
};

export const successResponse = (message: string) => response(200, message);

export const errorResponse = (message: string) => response(400, message);

export const serverErrorResponse = (message: string) => response(500, message);
