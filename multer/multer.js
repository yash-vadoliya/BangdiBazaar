const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uplodDir = path.join(__dirname, "../public/images");

if(!fs.existsSync(uplodDir)){
    fs.mkdir(uplodDir, {recursive:true});
}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uplodDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });


module.exports = upload;