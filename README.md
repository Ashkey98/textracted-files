# textracted-files
files extractedeith textract module
Currently Extracts...
HTML, HTM
ATOM, RSS
EPUB
XML, XSL
PDF
DOC, DOCX
ODT, OTT (experimental, feedback needed!)
RTF
XLS, XLSX, XLSB, XLSM, XLTX
CSV
ODS, OTS
PPTX, POTX
ODP
PNG, JPG, GIF
DXF
application/javascript
All text/* mime-types

except DFX

Install
//  npm install textract

Extraction Requirements

PDF extraction requires pdftotext be installed, link
DOC extraction requires antiword be installed, link, unless on OSX in which case textutil (installed by default) is used.
RTF extraction requires unrtf be installed, link, unless on OSX in which case textutil (installed by default) is used.
PNG, JPG and GIF require tesseract to be available, link. Images need to be pretty clear, high DPI and made almost entirely of just text for tesseract to be able to accurately extract the text.
DXF extraction requires drawingtotext be available, link


Usage

//// $ textract pathToFile

