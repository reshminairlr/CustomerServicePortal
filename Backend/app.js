const express = require('express');
const Customerdata = require('./src/model/Customerdata');
// const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
// username='admin';
// password='1234';


// function verifyToken(req, res, next) {
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }

// app.post('/insert',verifyToken,function(req,res){
   
//     console.log(req.body);
   
//     var CustomerDetails = {       
//         pdtid : req.body.CustomerDetails.pdtid,
//         pdttype : req.body.CustomerDetails.pdttype,
//         name : req.body.CustomerDetails.name,
//         mobno : req.body.CustomerDetails.mobno,
//         emailid : req.body.CustomerDetails.emailid,
//         date : req.body.CustomerDetails.date,
//         description : req.body.CustomerDetails.description,
//         invoice : req.body.CustomerDetails.invoice,
//         caseid : req.body.CustomerDetails.caseid,
//         casestatus : req.body.CustomerDetails.casestatus,
//    }       
//    var customerview = new Customerdata(customerview);
//    customerview.save();
// });
app.get('/customerview',function(req,res){
    
    Customerdata.find()
                .then(function(CustomerDetails){
                  console.log("CustomerDetails view",+CustomerDetails);
                    res.json(CustomerDetails);
                });
});
// app.get('/:id',  (req, res) => {
  
//   const id = req.params.id;
//   Customerdata.findOne({"_id":id})
//     .then((customerview)=>{
//         res.send(customerview);
//     });
// })

// app.post('/login', (req, res) => {
//     let userData = req.body
    
      
//         if (!username) {
//           res.status(401).send('Invalid Username')
//         } else 
//         if ( password !== userData.password) {
//           res.status(401).send('Invalid Password')
//         } else {
//           let payload = {subject: username+password}
//           let token = jwt.sign(payload, 'secretKey')
//           res.status(200).send({token})
//         }
      
//     })

//     app.put('/update',(req,res)=>{
//       console.log(req.body)
//       id=req.body._id,
//       pdtid= req.body.pdtid,
//       pdttype = req.body.pdttype,
//       name = req.body.name,
//       mobno = req.body.mobno,
//       emailid = req.body.emailid,
//       date = req.body.date,
//       description = req.body.description,
//       invoice = req.body.invoice
//       caseid = req.body.caseid
//       casestatus = req.body.casestatus



//      ProductData.findByIdAndUpdate({"_id":id},
//                                   {$set:{"productId":productId,
//                                   "productName":productName,
//                                   "productCode":productCode,
//                                   "releaseDate":releaseDate,
//                                   "description":description,
//                                   "price":price,
//                                   "starRating":starRating,
//                                   "imageUrl":imageUrl}})
//      .then(function(){
//          res.send();
//      })
//    })
   
// app.delete('/remove/:id',(req,res)=>{
   
//      id = req.params.id;
//      ProductData.findByIdAndDelete({"_id":id})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

