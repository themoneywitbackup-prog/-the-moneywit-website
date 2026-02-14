const sheetName = "Sheet1";
const scriptProp = PropertiesService.getScriptProperties();
const emailNotification = "test@gmail.com"

function initialSetup ()
{
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty( "key", activeSpreadsheet.getId() );
}

function doPost ( e )
{
  const lock = LockService.getScriptLock();

  let lockSuccess = false;
  while ( !lockSuccess )
  {
    try
    {
      lock.tryLock( 5000 );
      lockSuccess = true;
    } catch ( err )
    {
      Utilities.sleep( 2000 );
    }
  }

  try
  {
    const doc = SpreadsheetApp.openById( scriptProp.getProperty( "key" ) );
    const sheet = doc.getSheetByName( sheetName );
    const headers = sheet
      .getRange( 1, 1, 1, sheet.getLastColumn() )
      .getValues()[ 0 ];
    const nextRow = sheet.getLastRow() + 1;

    // Parse data from JSON or form data
    const formData = parseRequestData( e );

    // Sanitize and validate form data
    validateFormData( formData, headers );

    const newRow = headers.map( ( header ) =>
    {
      if ( header === "Date" )
      {
        return new Date();
      }
      return sanitizeInput( formData[ header ] || "N/A" );

    } );

    // Insert the new row into the spreadsheet
    sheet.getRange( nextRow, 1, 1, newRow.length ).setValues( [ newRow ] );

    // Logging the data being inserted for debugging purposes
    Logger.log( `Inserted row ${ nextRow }: ${ JSON.stringify( newRow ) }` );

    // Return a JSON response with the inserted data
    return ContentService.createTextOutput(
      JSON.stringify( {
        result: "success",
        message:
          `Row ${ nextRow } inserted successfully in sheet ${ sheetName }`,
        timestamp: new Date(),
        row: nextRow,
        data: newRow,
      } ),
    ).setMimeType( ContentService.MimeType.JSON );
  } catch ( err )
  {
    // In case of an error, send error notification and log it
    sendEmailNotification(
      "Form Submission Error",
      `Error: ${ err.message }\nForm Data: ${ JSON.stringify( e.parameter || e.postData ) }`,
    );
    Logger.log( `Error: ${ err.message }` );

    return ContentService.createTextOutput(
      JSON.stringify( {
        result: "error",
        error: err.message,
      } ),
    ).setMimeType( ContentService.MimeType.JSON );
  } finally
  {
    // Ensure that the lock is released after the operation
    lock.releaseLock();
  }
}

// Function to parse request data (handles both JSON and form data)
function parseRequestData ( e )
{
  let formData = {};

  // Check if request is JSON
  if ( e.postData && e.postData.type === "application/json" )
  {
    try
    {
      formData = JSON.parse( e.postData.contents );
    } catch ( err )
    {
      throw new Error( `Invalid JSON format: ${ err.message }` );
    }
  } else
  {
    // Otherwise, use form data
    formData = e.parameter || {};
  }
  return formData;
}

// Function to validate form data
function validateFormData ( formData, headers )
{
  const requiredFields = [ "date", "email" ];
  // biome-ignore lint/complexity/noForEach: <explanation>
  requiredFields.forEach( ( field ) =>
  {
    if ( !formData[ field ] || String( formData[ field ] ).trim() === "" )
    {
      throw new Error( `Missing required field: ${ field }` );
    }
  } );
}

// Function to sanitize form input (removes harmful HTML tags and trims extra spaces)
function sanitizeInput ( input )
{
  return String( input ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" ).trim();
}

// Function to send email notifications
function sendEmailNotification ( subject, message )
{
  MailApp.sendEmail( emailNotification, subject, message );
}

// Optional function to validate an email format (basic)
function validateEmail ( email )
{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test( email );
}
