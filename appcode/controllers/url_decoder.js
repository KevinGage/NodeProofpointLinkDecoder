"use strict";

const { exec } = require('child_process');

exports.decode = function(encodedUrl, cb) {
  try{
    exec(__dirname + '/../bin/URLDefenceDecode.py '+ encodedUrl, (err, stdout, stderr) => { 
      if (err) {
        // logger.error('Error launching nmap scanner');
        // logger.error(err);
        console.log(err);
        cb(err);
      }
      else if (stderr) {
        // logger.error('nmap error');
        // logger.error(`Nmap error: ${stderr}`);
        console.log(stderr);
        cb(stderr);
      }
      else {
        // logger.info(stdout);
        // logger.debug('Done running nmap scan');
        console.log(stdout);
        cb(null, stdout);
      }
    });
  }
  catch(err){
    // logger.error('Error running nmap_scanner');
    // logger.error(`Error in nmap_scanner.js: ${err}`);
    console.log(err);
    cb(err);
  }
}