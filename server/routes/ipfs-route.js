import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const projectId =process.env.PROJECT_ID ;
const projectSecret = process.env.PROJECT_KEY_SECRET;

const options = {
  host: "ipfs.infura.io",
  port: 5001,
  path: "/api/v0/pin/add?arg=QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn",
  method: "POST",
  auth: projectId + ":" + projectSecret,
};

let req = https.request(options, (res) => {
  let body = "";
  res.on("data", function (chunk) {
    body += chunk;
  });
  res.on("end", function () {
    console.log(body);
  });
});
req.end();