# xlsx-to-json-parser

Exact Password-Protected Excel (XLS/XLSX) Files to JSON

## Installation

```bash
npm install xlsx-to-json-parser
```

## Usage

```javascript
const xlsxToJson = require('xlsx-to-json-parser');

const json = await xlsxToJson({
  path: 'path/to/excel/file.xlsx',
  password: 'SuperSecretPassword',
});
```

## Options

- `path` (string, required): Path to the Excel file.
- `password` (string, optional): Password to open the Excel file.

## Contact Information

If you ever need a hand or have any questions, feel free to reach out.  

**Fred Lackey**  
[https://fredlackey.com](https://fredlackey.com)  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  