import { IncomingHttpHeaders } from "http";

export interface ConfigurationParameters {
    apiKey?: string;
    baseOptions?: {
        headers: IncomingHttpHeaders
    };
    baseUrl?: string;
}

export class Configuration {
    apiKey?: string;
    baseOptions?: any;
    baseUrl: string;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
        this.baseOptions = param.baseOptions;

        if (!this.baseOptions) this.baseOptions = {
            method: 'POST'
        };
        this.baseOptions.headers = {
            'Cookie': `__Secure-1PSID=${this.apiKey};`,
            ...this.baseOptions.headers
        }

        this.baseUrl = param.baseUrl || 'https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate';
    }
}