const xlxs = require("xlsx-populate");

const getCellNodes = (row) => {

  if (!row?._cells) {
    return [];
  }

  const nodes = [];

  const cells = [].concat(...row._cells);
  for (let c = 0; c < cells.length; c++) {
    const cell = cells[c];
    if (!cell?._value) {
      continue;
    }
    nodes.push({
      id: c,
      value: cell._value
    });
  }

  return nodes.filter(x => (x && x.value));

}
const getRowNodes = (sheet) => {

  const nodes = [];

  const rows = [].concat(...sheet._rows);
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    nodes.push({
      id: r,
      cells: getCellNodes(row)
    });
  }

  return nodes.filter(x => (x && x.cells.length > 0));
}
const getSheetNodes = (workbook) => {

  const nodes = [];
  
  const sheets = [].concat(...workbook.sheets());
  for (let s = 0; s < sheets.length; s++) {
    const sheet = sheets[s];
    const rows = getRowNodes(sheet);
    nodes.push({
      id: s,
      name: sheet.name(),
      rows: rows
    });
  }

  return nodes.filter(x => (x && x.rows.length > 0));

}

const parse = async (opts) => {

  const workbook = await xlxs.fromFileAsync(opts.path, opts.options);

  const sheetNodes = getSheetNodes(workbook);

  const result = {
    path: opts.path,
    sheets: sheetNodes
  };

  return result;

};

module.exports = {
  parse
};
