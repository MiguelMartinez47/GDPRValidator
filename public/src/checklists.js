// import saveAs from 'file-saver';
// import { Document, Packer, Paragraph, TextRun } from 'docx';

//Clicking submit will include the unchecked paragraphs in the doc
let submit = document.getElementById('submit');
// submit.onclick = getTexts;
//Create arrays to contain each relevant element
var allChecks = new Array();    //This will allow to know which checks are false
var allBtns = new Array();      //To know the text of the question left unchecked
var allBodys = new Array();     //To know the text associated to the question that should be included

allChecks = document.getElementsByClassName('form-check-input');    //Fill in the arrays
allBtns = document.getElementsByClassName('accordion-button');
allBodys = document.getElementsByClassName('accordion-body');
// console.log(allBodys[26]);

// Listen for clicks on Generate Word Document button
// submit.onclick = generateWordDocument;
submit.onclick = getTexts;

// submit.addEventListener(
//     'click',
//     function (event) {
//         generateWordDocument(event)
//     },
//     false
// )


function getTexts() {
    var isTrue = allChecks[26].checked ? "true" : "false";
    alert("The option " + allBtns[26].textContent + " was cheched as " + isTrue +
        " therefore you should/shouldn't carry out the following task: " + allBodys[26].innerText);

}

function saveDocumentToFile(doc, fileName) {
    // Create a mime type that will associate the new file with Microsoft Word
    const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    // Create a Blob object from Packer containing the Document instance and the mimeType
    Packer.toBlob(doc).then((blob) => {
        const docblob = blob.slice(0, blob.size, mimeType)
        // Save the file using saveAs from the file-saver package
        saveAs(docblob, fileName)
    })
}

function generateWordDocument(event) {
    event.preventDefault()
    // Create new instance of Document for the docx module
    var sections = [];  //Contents of file

    for ( let i = 0; i < allChecks.length; i ++ ){  //Loop through all checks
        if( !allChecks[i].checked ){    //If unchecked append corresponding
            sections.push([
                new Paragraph({ text: "Because you didn't check: '" + allBtns[i].textContent + "'", heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: allBodys[i].textContent })
              ])
        }
    }
    let doc = new Document({ sections: sections });
    // Call saveDocumentToFile withe the document instance and a filename
    saveDocumentToFile(doc, "ChecklistResults.docx")
  }
  

  