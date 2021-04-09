# Hello Barcode Xpress for Node.js

A minimal [Barcode Xpress for Node.js](https://www.npmjs.com/package/barcode-js)
application which detects barcodes on a given bitmap image.

## Running the Sample

Clone this repo and `cd` into the directory:

    git clone git@github.com:Accusoft/hello-barcode-xpress-for-nodejs.git
    cd hello-barcode-xpress-for-nodejs

Install dependencies and start the app:

    npm install
    npm run start

This will run the sample and you should see output like this:

    > node main.js

    Results:
    [
      {
        type: 'intelligentmail',
        confidence: 100,
        corners: [ [Object], [Object], [Object], [Object] ],
        area: { x: 496, y: 81, width: 646, height: 99 },
        name: 'IntelligentMail',
        skew: 0,
        checksumValid: true,
        checksumLength: 0,
        modeTransitions: [],
        info2d: {
          rowsDetected: 0,
          columnsDetected: 0,
          rows: 0,
          columns: 0,
          errorCorrectionLevel: 0
        },
        valueRaw: <Buffer 34 34 31 32 33 31 32 ... 32 33 34 35 36 2e 63 6f 6d>,
        value: '441231234561234567** UNLICENSED accusoft.com'
      },
      {
        type: 'code39',
        confidence: 100,
        corners: [ [Object], [Object], [Object], [Object] ],
        area: { x: 60, y: 89, width: 349, height: 84 },
        name: 'Code 39',
        skew: 0,
        checksumValid: false,
        checksumLength: 0,
        modeTransitions: [],
        info2d: {
          rowsDetected: 0,
          columnsDetected: 0,
          rows: 0,
          columns: 0,
          errorCorrectionLevel: 0
        },
        valueRaw: <Buffer 43 4f 44 45 20 2a 2a ... 75 73 6f 66 74 2e 63 6f 6d>,
        value: 'CODE ** UNLICENSED accusoft.com'
      },
      ...
    ]

_**NOTE:** Barcode Xpress runs in Watermark evaluation mode if started without
a license and the barcode value will be partially hidden. If you would like to
do a full-featured evaluation of the product, [contact us](mailto:info@accusoft.com)._
