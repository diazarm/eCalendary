//? Dependencies
const express = require('express')
const cors = require('cors')
const jobs_router = require('./routers/ServiceRouter');

//? Files
const initModels=require('./models/initmodels')
const config = require('../config')
const sequelize = require('./utils/connect')
const userRoutes=require('./routes/userRoutes')
const authRoutes=require('./authUser/authRoute');
const calendary_router = require('./routers/CalendaryRouter');
//? Initial Configs
const sessionRouter = require('./routers/sessionRouter')
const registroRouter = require('./routers/registroRouter')


const app = express()
//? Enable incoming JSON data
app.use(express.json())
//? Enable CORS 
app.use(cors())

//? Authenticate DB
sequelize.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

//? Sync DataBase Models
sequelize.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()
//? Routes v1
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'API Calendary Ok!',
    })
})


app.use(sessionRouter)
app.use(registroRouter)

// Routes project
app.use('/api/servicios', jobs_router );
app.use('/api/calendarios', calendary_router );
app.use('/users',userRoutes)
app.use('/auth',authRoutes)

app.listen(config.api.port, () => {
    console.log(`Server started on ${config.api.host}`)
})

