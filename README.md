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

## Output


The output is a JSON object with the following structure:

```json
{
  "path": "path/to/excel/file.xlsx",
  "sheets": [
    {
      "id": 0,
      "name": "Sheet 1",
      "rows": [
        {
          "id": 1,
          "cells": [
            {
              "id": 2,
              "value": "Name"
            },
            {
              "id": 3,
              "value": "Email Address"
            }
          ]
        },
        {
          "id": 2,
          "cells": [
            {
              "id": 1,
              "value": 1
            },
            {
              "id": 2,
              "value": "Joe Blow"
            },
            {
              "id": 3,
              "value": "joe.blow@nowhere.com"
            }
          ]
        },
      ]
  }
}
```

## Contact Information

If you ever need a hand or have any questions, feel free to reach out.  

**Fred Lackey**  
[https://fredlackey.com](https://fredlackey.com)  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  