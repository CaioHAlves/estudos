import React, { Component } from 'react';
import Quagga from 'quagga';

export class Scanner extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      dataUri: ''
    };
    this._onDetected = this._onDetected.bind(this);
  }

  render() {
    return <div id="interactive" className="viewport" />;
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: { min: 800, max: 1280 },
            height: { min: 600, max: 720 },
            // aspectRatio: { min: 4 / 3, max: 16 / 9 },
            // facingMode: 'environment'
          },
          area: {
            top: '0%', // top offset
            right: '0%', // right offset
            left: '0%', // left offset
            bottom: '0%' // bottom offset
          }
        },
        frequency: "full",
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 4,
        decoder: {
          readers: [
            {
              format: "ean_reader",
              config: {
                supplements: [
                  'ean_5_reader', 'ean_2_reader'
                ]
              }
            },
            'code_39_reader',
            'ean_reader',
            'ean_8_reader',
            'code_128_reader',
            'code_39_vin_reader',
            'codabar_reader',
            'upc_reader',
            'upc_e_reader',
            'i2of5_reader'
          ],
          debug: {
            drawBoundingBox: true,
            showFrequency: false,
            drawScanline: true,
            showPattern: false
          }
        },
        locate: true
      },
      function(err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this._onDetected);
    Quagga.onProcessed(this._onProcessed);
  }

  componentWillUnmount() {
    Quagga.stop();
  }

  _onDetected(result) {
    let code = result;

    Quagga.stop();
    return this.props.handleScan(code);
  }

  _getMedian(arr) {
    arr.sort((a, b) => a - b);
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1)
      // Odd length
      return arr[half];
    return (arr[half - 1] + arr[half]) / 2.0;
  }

  _onProcessed(result) {
    let drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute('width'), 10),
          parseInt(drawingCanvas.getAttribute('height'), 10)
        );
        result.boxes
          .filter(function(box) {
            return box !== result.box;
          })
          .forEach(function(box) {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 2
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: '#00F',
          lineWidth: 2
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(
          result.line,
          { x: 'x', y: 'y' },
          drawingCtx,
          { color: 'red', lineWidth: 3 }
        );
      }
    }
  }
}

export default Scanner;


//getUserMedia