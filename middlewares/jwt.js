const jwt = require('jsonwebtoken');

const generateJWT = (id, session_id )=>{
return new Promise((resolve, reject) =>{
    const payload ={id, session_id} ;
    jwt.sign(payload,process.env.SECRET_JWT_SEED,{
        expiresIn:'2h'
    },(err, token)=>{
        if(err){
            console.log(err);
            reject('Token was not generated')
        }
        resolve(token);
    })
})
}

module.exports ={
    generateJWT
}