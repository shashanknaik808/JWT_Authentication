const User = require('../model/User.js');

module.exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    }
    catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exists! LOgin Instead" })
    }
    const user = new User({
        name,
        email,
        password
    });

    try {
        await user.save();
    }
    catch (err) {
        console.log(err);
    }
    return res.status(201).json({ message: user })
}

