const fs = require('fs');

const message = 'this is my first message using this mehod.';

fs.writeFile('output.txt', message, (error) => {
  if (error) {
    console.error(`There was an error : ${error}` );
  } else {
    console.log('The file was written successfully.');
  }
});
