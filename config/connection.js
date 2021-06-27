const mongoose = require('mongoose')
class Connection{
    constructor() {
        this.dataBaseConnectionMongoDB()
    }

    dataBaseConnectionMongoDB(){
        this.mongoDBconnection = mongoose.connect("mongodb+srv://admin:pk1x32rz@teste.u3vvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        .then(()=>{
            console.log("conexão estabelecida com sucesso")
        })
        .catch((error)=>{
            console.log(`erro ao estabelecer a conexão com mongDB: ${error}`)
        })
    }
}

module.exports = new Connection()