const fs = require('fs');
var textract = require('textract');

// const data = fs.readFileSync("sample1.html")
// console.log(data.toString());

// // = textract.fromFileWithPath( "sample1.html", function( error, text ) {
// //     console.log(html_data);
// // })

const html_data = textract.fromFileWithPath("./sample.docx" , function( error , text){
    
   if (text){
    const textractedData =  fs.writeFileSync("./results/sampleDocx.txt", JSON.stringify(text) )
    return textractedData
   }else{
       console.log(error);
   }

  
})

