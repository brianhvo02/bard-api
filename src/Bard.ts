import { Configuration } from "./Configuration";

export default class BardAPI {
    config: Configuration;
    previousQuery = {
        c: '',
        r: '',
        rc: ''
    };

    constructor(config: Configuration) {
        this.config = config;
    }

    async generateQuery(query: string) {
        const { c, r, rc } = this.previousQuery;
        const body = new URLSearchParams({
            'f.req': `[null,"[[\\"${query}\\"],null,[\\"${c}\\",\\"${r}\\",\\"${rc}\\"]]"]`,
            'at': 'AFuTz6uOVA9RzggpheOA4N-m210N:1684191319228'
        });

        return await fetch(this.config.baseUrl, {
            ...this.config.baseOptions,
            body
        })
        .then(res => res.text())
        .then(text => JSON.parse(text.slice(4)))
        .then(body => JSON.parse(body[0][2]))
        .then(res => {
            [this.previousQuery.c, this.previousQuery.r] = res[1];
            this.previousQuery.rc = res[4][0][0];
            return res[0];
        }) as string[];
    }
}