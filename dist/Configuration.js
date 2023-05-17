"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    constructor(param = {}) {
        this.apiKey = param.apiKey;
        this.baseOptions = param.baseOptions;
        if (!this.baseOptions)
            this.baseOptions = {
                method: 'POST'
            };
        this.baseOptions.headers = Object.assign({ 'Cookie': `__Secure-1PSID=${this.apiKey};` }, this.baseOptions.headers);
        this.baseUrl = param.baseUrl || 'https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate';
    }
}
exports.Configuration = Configuration;
