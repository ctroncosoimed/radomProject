const XLSX = require('xlsx');
const fetch = require('node-fetch');


console.log('laoding')
const workbook = XLSX.readFile('./prof.xlsx');
const sheetNameList = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

console.log(xlData)
xlData.map((element, i) => {
  const rutSearch = element.rut.split('-')
  console.log(`${i} -- ${element.rut} -- ${rutSearch[0].substring(2)}`)
  // await fetch(`http://api-super-salud-profesionales.i-med.cl/professionals/${rutSearch[0].substring(2)}`)
  // .then((resp) => resp.json())
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // console.log('==================================')
});