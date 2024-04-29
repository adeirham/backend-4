const express = require ('express')
const routersMhs = express.Router()
const connection = require('../db/db')
const ctrMhs = require("../controllers/mahasiswa")

routersMhs.get('/', ctrMhs.getMhs );

routersMhs.get('/:nim', ctrMhs.getMhsByNim );

routersMhs.post('/', ctrMhs.post );

routersMhs.put('/:nim', ctrMhs.update )

routersMhs.delete('/:nim', ctrMhs.delete )

module.exports = routersMhs