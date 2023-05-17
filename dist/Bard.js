"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BardAPI {
    constructor(config) {
        this.previousQuery = {
            c: '',
            r: '',
            rc: ''
        };
        this.config = config;
    }
    generateQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { c, r, rc } = this.previousQuery;
            const body = new URLSearchParams({
                'f.req': `[null,"[[\\"${query}\\"],null,[\\"${c}\\",\\"${r}\\",\\"${rc}\\"]]"]`,
                'at': 'AFuTz6uOVA9RzggpheOA4N-m210N:1684191319228'
            });
            return yield fetch(this.config.baseUrl, Object.assign(Object.assign({}, this.config.baseOptions), { body }))
                .then(res => res.text())
                .then(text => JSON.parse(text.slice(4)))
                .then(body => JSON.parse(body[0][2]))
                .then(res => {
                [this.previousQuery.c, this.previousQuery.r] = res[1];
                this.previousQuery.rc = res[4][0][0];
                return res[0][0];
            });
        });
    }
}
exports.default = BardAPI;
