const db = require('../database.js');
const express = require('express');
const router = express.Router();
const upload = require('../multer/multer');

router.get('/product', (req, res) => {
    db.query('SELECT * FROM product', (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Data not found', error: err.message });
        }
        res.status(200).send(result);
    })
});

router.post("/product", upload.single('image'), async (req, res) => {
    const { name } = req.body;
    const image_url = req.file ? `${req.file.filename}` : null;

    console.log("Name : ", name);
    console.log("Image : ", image_url);
    
    if (!name || !image_url) {
        return res.status(400).json({ message: 'Name and image are required' });
    }

    try{
        await db.query(
        'INSERT INTO `product` (`name`, `image_url`) VALUES (?, ?)',
        [name, image_url],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err.message });
            }
            res.status(200).json({ message: 'Product Added successfully', data: result });
        });
    } catch (err) {
        console.log("Feiled to insert. Error : ", err);
    }
});


router.put('/product/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const image_url = req.file ? `  ${req.file.filename}` : null;
    db.query(
        'UPDATE `product` SET `name` = ?, `image_url` = ? WHERE `id` = ?',
        [name, image_url, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err.message });
            }
            res.status(200).json({ message: 'Product Update successfully', data: result });
        }
    );
});

router.delete('/product/:id', async (req, res) => {
    const id = req.params.id;
    db.query(
        'DELETE FROM `product` WHERE `id` = ?',
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err.message });
            }
            res.status(200).json({ message: 'Product Delete successfully', data: result });
        }
    );
});

module.exports = router;
