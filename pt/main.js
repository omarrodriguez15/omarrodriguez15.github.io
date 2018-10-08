$('#details-modal').on('show.bs.modal', openOrderDetailsModalEvent);

function openOrderDetailsModalEvent () {
    console.log('hhhh');
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

    updatePriceEstimate(calculatePriceEtimate());

    if (e.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < e.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (e.dataTransfer.items[i].kind === 'file') {
                var file = e.dataTransfer.items[i].getAsFile();
                updateFileList(file.name);
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < e.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
        }
    } 

    // Pass event to removeDragData for cleanup
    // removeDragData(e);
}

function dragStartHandler(e) {
    console.log("dragstarthandler");
}

function calculatePriceEtimate() {
    return '10.99'
}

function updatePriceEstimate(price) {
    price = prettyFromatPrice(price);
    document.getElementById('price-text').innerText = `$${price}`;
}

function updateFileList(filename) {
    document.getElementById('file-names-container').append(buildFileListItem(1, filename));
}

function buildFileListItem(id, fileName){
    let listItem = document.createElement('li');
    id = sanatizeString(id);
    fileName = sanatizeString(fileName);

    listItem.id = `${id}-f`;
    listItem.className = "col-md-10 up-files list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = fileName;

    let badge = document.createElement('span');
    badge.className = "badge badge-info badge-pill";
    badge.innerText = "50 pages";

    listItem.append(badge);

    return listItem;
    //listItem.innerHTML = <i col-md-2 class="far fa-trash-alt circle-icon remove-file"></i>
}

function prettyFromatPrice(price) {
    return price;
}

function sanatizeString(dirtyString) {
    return dirtyString.toString().replace('<', '&lt;').replace('>', '&gt;');
}