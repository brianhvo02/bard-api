import BardAPI from "./Bard";
import { config } from "dotenv";
import { Configuration } from "./Configuration";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

config();

const configuration = new Configuration({
    apiKey: process.env.BARD_API_KEY
})

const bard = new BardAPI(configuration);
const rl = readline.createInterface({ input, output });

const BardTerminal = async () => {
    const answer = await rl.question('Bard> ');
    console.log();
    if (answer === 'exit') return rl.close();
    else {
        const res = await bard.generateQuery(answer);
        console.log(res + '\n');
        await BardTerminal();
    }
};

BardTerminal();

export default BardTerminal;