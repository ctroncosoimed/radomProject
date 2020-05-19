const { task, desc } = require('jake');
const XLSX = require('xlsx');
const fetch = require('node-fetch');

desc('Carga del excel a la base de datos');
task('load', async () => {
  console.log('laoding')

  const workbook = XLSX.readFile('./prof.xlsx');
  const sheetNameList = workbook.SheetNames;
  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  await xlData.map(async (element, i) => {
    const rutSearch = element.rut.split('-')
    await console.log(`${i} -- ${element.rut} -- ${rutSearch[0].substring(2)}`)
    // await fetch(`http://api-super-salud-profesionales.i-med.cl/professionals/${rutSearch[0].substring(2)}`)
    // .then((resp) => resp.json())
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // console.log('==================================')
  })

});