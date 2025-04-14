const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('página inicial do admin.')
})

router.get("/posts", (req, res) => {
    res.send('página de posts.')
})

router.get("/categorias", (req, res) => {
    res.render("admin/categorias")
})

router.get("/categorias/add", (req, res) => {
    res.render("admin/addcategoria")
})

router.get('/teste', (req, res) => {
    res.send('isso é um teste.')
})

module.exports = router;