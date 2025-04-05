const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('página principal do painel adm')
})

router.get("/posts", (req, res) => {
    res.send('página de posts.')
})

router.get("/categorias", (req, res) => {
    res.send('Página de categorias.')
})

module.exports = router;