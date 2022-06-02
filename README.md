# Short links

This project contains the source code for the Spread Fullstack Developer bootcamp challenge.

### How to configure and install this API?

Create the .env file and set APP_URL and MANGO_URL.

```
yarn

yarn build:watch
yarn dev
```

### How it works??

```bash
curl -X POST http://localhost:3000/shorten -H 'Content-Type: application/json' -d '{"originUrl": "https://github.com/"}'
{"hash":"HH0U2vEm4","url":"http://localhost:3000/HH0U2vEm4","originUrl":"https://github.com/"}
```
