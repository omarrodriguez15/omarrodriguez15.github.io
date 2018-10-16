let filePageCountQueue = [];
let filesReadyToUpload = [];

document.getElementById('modal-checkout').onclick = modalCheckout;
document.getElementById('modal-back').onclick = modalBackClicked;

function modalCheckout() {
   console.log('checkout clicked');
   updatePriceEstimate(calculatePriceEtimate(getTotalNumberOfPages()));
   $('#details-modal').modal('toggle');
}

function modalBackClicked() {
   console.log('Modal back clicked');
   updatePriceEstimate(calculatePriceEtimate(getTotalNumberOfPages()));
   $('#details-modal').modal('toggle');
}

function dragOverHandler(e) {
   console.log('File(s) in drop zone');
   e = e || event;
   // Prevent default behavior (Prevent file from being opened)
   e.preventDefault();
}

function dropHandler(e) {
   console.log('File(s) dropped');
   e = e || event;

   // Prevent default behavior (Prevent file from being opened)
   e.preventDefault();

   if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
         // If dropped items aren't files, reject them
         if (e.dataTransfer.items[i].kind === 'file') {
            var file = e.dataTransfer.items[i].getAsFile();

            filePageCountQueue.push({
               "file": file,
               "index": i
            });

            var fileReader = new FileReader();
            fileReader.onload = function (e) {
               readPDFFile(new Uint8Array(e.target.result));
            };
            fileReader.readAsArrayBuffer(file);
            console.log('... file[' + i + '].name = ' + file.name);
         }
      }
   }
}

function readPDFFile(pdf) {
   PDFJS.getDocument({ data: pdf }).then(function (pdf) {
      let originalPdf = filePageCountQueue.pop();
      filesReadyToUpload.push({
         'file' : originalPdf.file,
         'numOfPages' : pdf.pdfInfo.numPages
      })
      
      updateFileList(originalPdf, pdf.pdfInfo.numPages);
      if (filePageCountQueue.length === 0) {
         updatePriceEstimate(calculatePriceEtimate(getTotalNumberOfPages()));
      }
   });
}

function getTotalNumberOfPages() {
   return filesReadyToUpload.reduce((a, b) => {
               return { 
                  numOfPages: a.numOfPages + b.numOfPages 
               };
            }, { numOfPages : 0 }).numOfPages;
}

function dragStartHandler(e) {
   console.log("dragstarthandler");
}

function calculatePriceEtimate(pageCount) {
   if (pageCount <= 0) return;
   let bindingPrice = getBindingPrice();
   let inkPrice = getInkPrice(pageCount);
   let pagePrice = getPagePrice();

   return bindingPrice + (pageCount * inkPrice) + (pageCount * pagePrice);
}

function getPagePrice() {
   return parseInt(document.getElementById('paper').value, 10);
}

function getBindingPrice() {
   return parseInt(document.getElementById('binding').value, 10);
}

function getInkPrice(pageCount) {
   let inkType = document.getElementById('ink').value;

   if (inkType === 'c') {
      return getColorInkPrice(pageCount);
   }
   else if (inkType === 'b') {
      return getBlackAndWhiteInkPrice(pageCount);
   }

   alert('Invalid ink price');
}

// 1-100    - $0.45
// 101-250  - $0.39
// 250-500  - $0.35
// 500-1000 - $0.30
function getColorInkPrice(pageCount) {
   if (pageCount > 500) return .3;
   if (pageCount > 250) return .35;
   if (pageCount > 101) return .39;
   return .45
}

// 1-100    - $0.12
// 101-250  - $0.08
// 250-500  - $0.07
// 500-1000 - $0.06
function getBlackAndWhiteInkPrice(pageCount) {
   if (pageCount > 500) return .06;
   if (pageCount > 250) return .07;
   if (pageCount > 101) return .08;
   return .12
}

function updatePriceEstimate(price) {
   if (!price) return;
   price = prettyFromatPrice(price);
   document.getElementById('price-text').innerText = `$${price}`;
}

function updateFileList(file, pageCount) {
   document.getElementById('file-names-container').append(buildFileListItem(1, file.file.name, pageCount));
}

function buildFileListItem(id, fileName, pageCount) {
   let listItem = document.createElement('li');
   id = sanatizeString(id);
   fileName = sanatizeString(fileName);

   listItem.id = `${id}-f`;
   listItem.className = "col-md-10 up-files list-group-item d-flex justify-content-between align-items-center";
   listItem.innerText = fileName;

   let badge = document.createElement('span');
   badge.className = "badge badge-info badge-pill";
   badge.innerText = `${pageCount} pages`;

   listItem.append(badge);

   return listItem;
   //listItem.innerHTML = <i col-md-2 class="far fa-trash-alt circle-icon remove-file"></i>
}

function prettyFromatPrice(price) {
   return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function sanatizeString(dirtyString) {
   return dirtyString.toString().replace('<', '&lt;').replace('>', '&gt;');
}