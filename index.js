const cluster = require('cluster')
//Is the file being executed in master mode

if(cluster.isMaster) {
//Cause index.js to be executed again but in child mode
    cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()

}else{



const express =  require('express')

const app = express();

function doWorks(duration){
    const start = Date.now()
    while(Date.now() - start  <duration) {}
}
app.get('/', (req, res) => {

  doWorks(5000)
    res.send('HI there')
})

    app.get('/fast', (req, res) => {

        res.send('This was fast!')
    })

app.listen(3000)

}
