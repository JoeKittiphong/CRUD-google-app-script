//get sheet ID fom this funtion
function getCurrentSheetKey(){
  const scriptProp = PropertiesService.getScriptProperties();
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
  return scriptProp.getProperty('key')
}

//this function return all sheet in active worksheet
function getAllSheet(){
  const key = SpreadsheetApp.openById(getCurrentSheetKey())
  const sheetCount = key.getNumSheets()
  let allSheets = []
  for(let i=0; i< sheetCount; i++){
    allSheets.push(key.getSheets()[i].getName())
  }  
  return allSheets
}

function test() {
  console.log(getAllSheet())
}
