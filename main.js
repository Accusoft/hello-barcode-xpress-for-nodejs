const barcodeXpress = require('barcode-js');

async function main() {
  // Search for all types of barcodes in an image file. 
  // For the full list of options for this function, 
  // see the API reference at https://help.accusoft.com/BarcodeXpress/latest/BxNodeJs/webframe.html#module-barcode-js.html
  const results = await barcodeXpress.analyze('test-barcodes.bmp', {
    type: barcodeXpress.BarcodeType.ALL
  });

  console.log('Results:');
  console.log(results);
}

main();
