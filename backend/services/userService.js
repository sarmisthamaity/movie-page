// const path = require("path");
// const directoryPath = path.join(__dirname, '..');
// const filePath = path.join(directoryPath, 'userdetails.json');

const findUserByEmail = (email, data) => {
    return data.user.find(user => user.email === email);
}



// const loginServices = async(dataValidationWithJoi) => {
    
//     console.log('dataValidationWithJoi', dataValidationWithJoi)

//     try{
//         const existUser = await userModel.findOne({email: dataValidationWithJoi.email});

//         const checkPassword = await bcrypt.compare(dataValidationWithJoi.password, existUser.password); // compare password

//         dataValidationWithJoi.userId = existUser._id
//         const token = await Auth.createToken(dataValidationWithJoi); // create token

//         const resData = {
//             message: 'login succesfull',
//             token,
//             existUser
//         }
//         if(checkPassword){
//             return resData;

//         } else {
//             return 'email or password not exists'
            
//         };
//     } catch(err){
//         console.log(err);
//         return err;

//     };
// }

module.exports = {
    // userAllData,
    findUserByEmail,
    // loginServices

}