const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('página principal do painel ADM.')
})

router.get("/posts", (req, res) => {
    res.send('página de posts.')
})

router.get("/categorias", (req, res) => {
    res.send('página de categorias.')
})

router.get('teste', (req, res) => {
    res.send('isso é um teste.')
})

module.exports = router;