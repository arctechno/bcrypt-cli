const bcrypt = require('bcrypt');
const saltRounds = 12;
const args = process.argv.slice(2);
const myPlaintextPassword = args[0];
const hashArg = args[1];
console.log('plain password:', myPlaintextPassword);
console.log('hash :', hashArg);


bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  console.log('raw hash:', hash);
  let buff = Buffer.from(hash);

  let base64data = buff.toString('base64');

  console.log('base64 hash:', base64data);
});


if (hashArg) {
    bcrypt.compare(myPlaintextPassword, hashArg, function (err, result) {
        console.log('password and hash compare:', result);
    });
}
