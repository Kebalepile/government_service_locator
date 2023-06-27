export default function generateUniqueId() {
    const buf = new Uint16Array(8);
    crypto.getRandomValues(buf);
    return (
      buf[0].toString(16).padStart(4, '0') +
      buf[1].toString(16).padStart(4, '0') +
      '-' +
      buf[2].toString(16).padStart(4, '0') +
      '-' +
      '4' + // Set the version number to 4
      buf[3].toString(16).substr(1, 3) +
      '-' +
      (0x8 | (0x3 & buf[4] >> 14)).toString(16) +
      buf[4].toString(16).substr(1, 3) +
      '-' +
      buf[5].toString(16).padStart(4, '0') +
      buf[6].toString(16).padStart(4, '0') +
      buf[7].toString(16).padStart(4, '0')
    );
  }
  
  