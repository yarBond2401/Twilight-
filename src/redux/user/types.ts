interface Credential {
    username: string;
    password: string;
}

interface CredentialGroup {
    url: string;
    creds: Credential[];
}

interface ComputerInformation {
    build_id: string | null;
    infection_date: string;
    ip: string;
    malware_path: string;
    username: string;
    country: string | null;
    os: string;
    hwid: string;
}

interface DataItem {
    id: string;
    log_checksum: string;
    log_file_name: string;
    stealer_type: string;
    computer_information: ComputerInformation;
    credentials: CredentialGroup[];
}

export interface ValidationErrorDetail {
    loc: (string | number)[];
    msg: string;
    type: string;
}

export interface ErrorResponse {
    request_id?: string;
    error_message?: string;
    details?: string;
    detail?: ValidationErrorDetail[];
}

export interface DomainResponse {
    search_id: string;
    search_consumed_credits: number;
    credits_left: number;
    next: string;
    total_items_count: number;
    items_count: number;
    data: DataItem[];
}
