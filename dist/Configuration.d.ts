/// <reference types="node" />
import { IncomingHttpHeaders } from "http";
export interface ConfigurationParameters {
    apiKey?: string;
    baseOptions?: {
        headers: IncomingHttpHeaders;
    };
    baseUrl?: string;
}
export declare class Configuration {
    apiKey?: string;
    baseOptions?: any;
    baseUrl: string;
    constructor(param?: ConfigurationParameters);
}
