import parseGIF from './parseGIF.js';
import Stream from './stream.js';

const readLocalGIF = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        let data = e.target.result;
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data);
        }
        const stream = new Stream(data);
        const framesTime = [0]; // first frame delay is 0
        let width = 0;
        let height = 0;
        const handler = {
            hdr: function (hdr) {
                width = hdr.width;
                height = hdr.height;
            },
            gce: function (gce) {
                framesTime.push(gce.delayTime);
            },
            eof: function (block) {
                const length = framesTime.length;
                const duration = framesTime.reduce((sum, delay) => {
                    return sum + delay*10;
                }, 0);
                resolve({
                    length,
                    duration,
                    width,
                    height,
                    ratio: width / height
                });
            }
        };;
        parseGIF(stream, handler);
    };
    reader.readAsArrayBuffer(file);
});

export default readLocalGIF;
export { readLocalGIF, parseGIF, Stream };