import { Configuration } from "./Configuration";
export default class BardAPI {
    config: Configuration;
    previousQuery: {
        c: string;
        r: string;
        rc: string;
    };
    constructor(config: Configuration);
    generateQuery(query: string): Promise<string>;
}
