// const express=require('express');
// const adminRouter=express.Router();

// const Customerdata=require('../model/Customerdata');
// const cors = require('cors');
// var bodyparser=require('body-parser');
// const jwt = require('jsonwebtoken')
// var app = new express();
// app.use(cors());
// app.use(bodyparser.json());




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

//   app.get('/customerview',function(req,res){
    
//     Customerdata.find()
//                 .then(function(customerview){
//                   console.log(customerview);
//                     res.send(customerview);
//                 });
// });

// // function router(nav){
// //     adminRouter.get('/',function(req,res){
// //         res.render('addBook',{
// //             nav,
// //             title:'Library'
// //         })
// //     })

// // adminRouter.post('/add',function(req,res){
  
// //     var item={
      
// //          title:req.body.title,
// //          author:req.body.author,
// //          genre:req.body.genre,
// //          image:req.body.image
      
      
// //     }
// //     // console(req.form.title);


        
 

// //         var book=Bookdata(item)
// //        book.save();  // saving to database
// //         res.redirect('/books');//  redirecting to new page

// //     // res.send("hey I am added");
// //     });


 

//     app.listen(3000, function(){
//         console.log('listening to port 3000');
//     });





// // return adminRouter;
// // }
// // module.exports=router;
