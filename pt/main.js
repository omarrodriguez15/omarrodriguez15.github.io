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

    // if (e.dataTransfer.items) {
    //     // Use DataTransferItemList interface to access the file(s)
    //     for (var i = 0; i < e.dataTransfer.items.length; i++) {
    //     // If dropped items aren't files, reject them
    //     if (e.dataTransfer.items[i].kind === 'file') {
    //         var file = e.dataTransfer.items[i].getAsFile();
    //         console.log('... file[' + i + '].name = ' + file.name);
    //     }
    //     }
    // } else {
    //     // Use DataTransfer interface to access the file(s)
    //     for (var i = 0; i < e.dataTransfer.files.length; i++) {
    //     console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
    //     }
    // } 

    // // Pass event to removeDragData for cleanup
    // removeDragData(e);
}

function dragStartHandler(e) {
    console.log("dragstarthandler");
}