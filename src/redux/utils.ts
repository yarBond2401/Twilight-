import {ErrorResponse, SearchParams} from "@/redux/domain/types";

export const handleApiError = (errorResponse: ErrorResponse) => {
    if (errorResponse.error_message) {
        return `${errorResponse.error_message}: ${errorResponse.details}`;
    }

    if (errorResponse.detail && Array.isArray(errorResponse.detail)) {
        return errorResponse.detail.map((error) => `${error.msg} at ${error.loc.join(', ')}`).join('; ');
    }

    return 'An unknown error occurred. Please try again.';
};


export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export const mapSearchParamsToRequestBody = ({
                                          domain,
                                          filter,
                                          infectionDateFrom,
                                          infectionDateTo,
                                          next,
                                          size = 100,
                                      }: SearchParams) => {
    const filterMap: { [key: string]: keyof typeof body } = {
        domains: "domains",
        root_domains: "root_domains",
        app_domains: "app_domains",
        email_domains: "email_domains",
        ips: "ips",
    };

    const body: Record<string, any> = {
        domains: [],
        root_domains: [],
        app_domains: [],
        email_domains: [],
        ips: [],
        infection_date_from: infectionDateFrom || null,
        infection_date_to: infectionDateTo || null,
        next: next || null,
        size: size || 100,
    };

    if (domain && filterMap[filter]) {
        body[filterMap[filter]] = [domain];
    }

    Object.keys(body).forEach(key => {
        if (!body[key] || body[key].length === 0) {
            delete body[key];
        }
    });

    return body;
};
