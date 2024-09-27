import {ErrorResponse} from "@/redux/domain/types";

export const handleApiError = (errorResponse: ErrorResponse) => {
    if (errorResponse.error_message) {
        return `${errorResponse.error_message}: ${errorResponse.details}`;
    }

    if (errorResponse.detail && Array.isArray(errorResponse.detail)) {
        return errorResponse.detail.map((error) => `${error.msg} at ${error.loc.join(', ')}`).join('; ');
    }

    return 'An unknown error occurred. Please try again.';
};