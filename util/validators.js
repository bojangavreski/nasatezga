module.exports.validateRegisterInput = (
  name,surname,email,telephone,location,password,confirmPassword
) => {
  const errors = {};
  if (name.trim() === "") {
    errors.name = "Името не смее да биде празно!";
  }

  if (telephone.trim() === "") {
    errors.telephone = "Телефонскиот број не смее да биде празен!";
  } 

  if (surname.trim() === "") {
    errors.surname = "Презимето не смее да биде празно!";
  } 

  if (location.trim() === "") {
    errors.location = "Локацијата не смее да биде празна!";
  }

  if (email.trim() === "") {
    errors.email = "Е-адресата не смее да биде празна!";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Внесете валидна е-адреса";
    }
  }

  if (password === "") {
    errors.password = "Лозинката не смее да биде празна!";
  }else{
    const pwRegEx = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,12}$/;
    if(!password.match(pwRegEx)){
      errors.password = "Лозинката треба да соджи 8-12 карактери од кои една голема буква, мала буква, специјален карактер(!@#$&) и цифра";
    }
    else if(password != confirmPassword) {
      errors.confirmPassword = "Лозинките не се совпаѓаат";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (email, password) => {
  const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Е-адресата не смее да биде празна!";
  }
  if(!email.match(regEx)){
    errors.email = "Внесете валидна е-адреса";
  }
  if (password === "") {
    errors.password = "Лозинката не смее да биде празна!";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};


module.exports.validatePasswordChange = (password, confirmPassword) => {
  const errors = {};
  if (password === "") {
    errors.password = "Лозинката не смее да биде празна!";
  }else{
    const pwRegEx = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,12}$/;
    if(!password.match(pwRegEx)){
      errors.password = "Лозинката треба да соджи 8-12 карактери од кои една голема буква, мала буква, специјален карактер(!@#$&) и цифра";
    }
    else if(password != confirmPassword) {
      errors.confirmPassword = "Лозинките не се совпаѓаат";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};