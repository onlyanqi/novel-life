// @author : Vidya Boghara

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const generator = require("generate-password");
const User = require("../Model/userModel");
const Session = require("../Model/sessionModel");

module.exports = {
  authenticate,
  logout,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
  forgotPassword,
};

async function authenticate({ email, password }) {
  console.log(email, password);
  const user = await User.findOne({ email });
  if (!user) {
    console.log("email not found");
  }
  if (user) {
    console.log("email found");
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    var newSession = new Session();
    newSession.email = email;
    await newSession.save();

    return await user;
  }
}

async function logout(id) {
  console.log(id.email);
  await Session.findOneAndDelete({ email: id.email });
}

async function getAll() {
  return await User.find().select("-hash");
}

async function getById(id) {
  console.log(id);
  const sessionCheck = await Session.find({ email: id });
  if (!sessionCheck) {
    throw "User not logged in";
  } else {
    const user = await User.find({ email: id }).select("-hash");
    
    return user ;
  }
}

async function create(userParam) {
  // validate
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userParam.email)) {
    throw "Invalid Email Address";
  }

  if (userParam.password.length < 6) {
    throw "Password needs to be atleast 6 characters";
  }

  if (await User.findOne({ email: userParam.email })) {
    throw 'Email "' + userParam.email + '" is already taken';
  } else {
    console.log("reached");
    var newUser = new User();
    newUser.name = userParam.name;
    newUser.email = userParam.email;
    newUser.password = newUser.generateHash(userParam.password);
    newUser.contactNo = userParam.contactNo;

    var newSession = new Session();
    newSession.email = userParam.email;

    //save session
    await newSession.save();

    // save user
    return await newUser.save();

  }
}

async function update(id, userParam) {
  console.log(id, userParam.password);
  const user = await User.findOne({ email: id });
  var test = bcrypt.compareSync(userParam.password, user.password);
  console.log(test);
  console.log(user);

  // validate
  if (user.length == 0) throw "User not found";
  //validate if old password is same as new password
  else if (bcrypt.compareSync(userParam.password, user.password)) {
    throw "Old and New Password entered cannot be the same";
  }

  //validate the new password for length
  else if (userParam.password.length < 6) {
    throw "New password needs to be atleast 6 characters";
  }

  // hash password if it was entered
  else if (userParam.password) {
    userParam.password = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function _delete(id) {
  await User.findOneAndDelete({ email: id });
}

async function forgotPassword(id) {
  var password = generator.generate({
    length: 10,
    number: true,
  });
  const user = await User.findOne({ email: id });

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "webgroup25@gmail.com",
        pass: "novellife123",
      },
    })
  );

  var mailOptions = {
    from: "webgroup25@gmail.com",
    to: id,
    subject: "Noval Life - Reset Password. ",
    html:
      "Dear Customer,<br>Your new password is: " +
      password +
      " .<br><br> If you haven't requested to reset your password, someone may be trying to access your account.<br><br>Please contact noval life Support<br>1315 Dresden Row<br>Halifax NS B3J 2K9<br>webgroup25@gmail.com<br>www.novallife.com/support",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    transporter.close();
  });
  password = bcrypt.hashSync(password, 10);
  user.password = password;
  await user.save();
}
