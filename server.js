const express = require('express')
const routersMhs = require('./routers/mahasiswa')
const app = express();
const port = 5000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routersMhs)

app.get('/', (req, res) => {
    res.send('Server Page')
})

app.listen(port, () => {
    console.log(`server berjalan pada localhost:${port}`)
});