const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInpuError, UserInputError} = require('apollo-server');

const {validateRegisterInput,validateLoginInput,validatePasswordChange} = require('../../util/validators');
const User = require("../../models/User");
const {SECRET_KEY} = require('../../config');

const {changePW} = require('../../util/forgot');

function generateToken(user){
    return jwt.sign({
      id:user.id,
      email:user.email,
  },SECRET_KEY,{expiresIn:'1h'});
  }
  module.exports={
      Query: {
          async getUser(_,{uId}){
            try{
                const user = await User.findById(uId);
                if(user){
                    return user;
                }else{
                    throw new Error('User not found');
                }
            }catch(err){
                throw new Error(err);
            }
          },
          async checkEmail(_,{email}){
               try{
                   const user = await User.findOne({email});
               }catch(err){
                   throw new Error("User not found")
               }
                changePW(email);
            
               return email;
          }
      },
      Mutation:{
         async login(_,{email,password}){
            const {errors,valid} = validateLoginInput(email,password);

            if(!valid){
                throw new UserInputError('Погрешен внес',{errors});
            }

            const user = await User.findOne({email});
            if(!user){
                errors.general= "Корисникот не е пронајден";
                throw new UserInputError('User not found',{errors});
            }
            const match = await bcrypt.compare(password,user.password);
            if(!match){
                errors.general= "Погрешнa лозинка";
                throw new UserInputError('Погрешна лозинка',{errors});
            }
            const token = generateToken(user);

            return{
                ...user._doc,
                id:user._id, // Go koristime id-to na mongo
                token
            };
         },
        async changePassword(_,{password,confirmPassword,email}){
            const {errors,valid} = validatePasswordChange(password,confirmPassword);
            if(!valid){
                throw UserInputError(errors);
            } 
            password = await bcrypt.hash(password,12);
            await User.updateOne({email:email},{password:password}); 

            return 'Successfully changed';
         },
         //TODO FORGOT PASSWORD - needed email verification 
         async register(_,{registerInput:{name,surname,email,telephone,location,password,confirmPassword}},
            context,
            info
            )
            {
                const {valid,errors} = validateRegisterInput(name,surname,email,telephone,location,password,confirmPassword);
                if(!valid){
                    throw new UserInputError('Погрешен внес',{errors})
                }
                const user = await User.findOne({email});
                if(user){
                    throw new UserInputError(`Корисникот со е-адреса:${email} постои`,{
                        errors:{
                          email: `Корисникот со е-адреса:${email} постои`
                        }
                      }) 
                }
                password = await bcrypt.hash(password,12);
                const avatar = "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg";
                const newUser = new User({
                    name,
                    surname,
                    telephone,
                    location,
                    avatar,
                    email,
                    password,
                    subscribed:false
                })
                
                const res = await newUser.save();

                const token = generateToken(newUser);

                return{
                    ...res._doc,
                    id:res._id,
                    token
                };
            }      
      }
  };