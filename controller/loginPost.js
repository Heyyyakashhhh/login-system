const Register = require('../models/registerSchema');
const bcrypt = require('bcryptjs')

module.exports.loginUser = async (req, res) => {
    try {
        const validMail = req.body.userEmail;
        const userPassword = req.body.userPassword;

        const user = await Register.findOne({ email: validMail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatchHashPass = await bcrypt.compare(userPassword, user.password);

        if (isMatchHashPass) {
            // Passwords match
            res.status(200).send(user);
        } else {
            // Passwords do not match
            res.status(401).send("INVALID LOGIN DETAILS");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};
