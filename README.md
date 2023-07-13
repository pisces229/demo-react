## Visual Studio Code Marketplace

[ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

## Chrome

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)

## Self Certification

[Install Chocolatey with PowerShell](https://docs.chocolatey.org/en-us/choco/setup)

`choco --version`

`choco install mkcert`

`mkcert -install`

`mkcert -help`

`mkcert localhost 127.0.0.1 ::1`

## [Preview](https://previewjs.com/)

## XSRF

接下來再請求往後端打的時候將存在 Cookie 的 XSRF-TOKEN 一起往後端送，如果你使用的是 axios 套件的話

```
axios.defaults.xsrfCookieName: 'XSRF-TOKEN', // 名稱請與儲存在 cookies 相同，axios 預設是 'XSRF-TOKEN'
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; // 這一個主要是請求時，會帶在 header 的名稱，建議與後端溝通，有些後端接收是接收 XSRF-TOKEN，axios 預設是 'X-XSRF-TOKEN'
```