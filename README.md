# bard-node - an API wrapper for Bard written with Node.js
bard-node is an *unofficial* wrapper written to provide access to Google's Bard chatbot.

**Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key.**

## Usage
The library needs to be configured with a Bard cookie specific to your Google account.

1. Log into your account.
2. Open up your browser's devtools.
3. Go to where you find your cookies (e.g. Google Chrome: Application -> Cookies)
4. Copy the `__Secure-1PSID` cookie value.
5. Store it in a `.env` file with `BARD_API_KEY=insert_cookie_here`

```typescript
const configuration = new Configuration({
    apiKey: process.env.BARD_API_KEY
})

const bard = new BardAPI(configuration);

const res = await bard.generateQuery(answer);
console.log(res);
```