const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const connectDB =require('./database/db')

app.listen(5000,() =>{
    console.log("Server is running")
})
// pronobroy3601
// mGwdvLVLg3gcF8c6
app.use('/api/accountant', require('./routes/accountantRoutes'))
// app.use('/api/bookings', require('./routes/bookingsRoutes'))
// app.use('/api/user', require('./routes/userRoutes'))
// app.use('/', require('./routes/PaymentRoutes'))
// app.use('/api/review', require('./routes/reviewRoutes'))
app.get('/', (req,res) =>{
    res.send("pronob")
})
// app.use('/api/tools', (res,req) =>{
//     res.send("hellow")
// })
// app.use('/api/user', require('./routes/userRoutes'))
// Yk8AA6lpYuxEYaGV
// pronob
connectDB()