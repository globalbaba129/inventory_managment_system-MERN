import Auth from "../SchemaModels/Auth.js";
import TokenBlacklist from "../SchemaModels/TokenBlacklist.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = 'your_jwt_secret_key';


// Register with bcrypt
export const userRegisterAuth = async (req, res) => {
    try {
        const { password, ...otherData } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = await Auth.create({ ...otherData, password: hashedPassword });
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
};


//Login with jsonwebtoken
export const userLoginAuth = async (req, res) => {
    const { Name, Password } = req.body;

    try {
        const userInDatabase = await Auth.findOne({ name: Name });
        if (!userInDatabase) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(Password, userInDatabase.password);

        if (isPasswordCorrect) {
            const token = jwt.sign({ id: userInDatabase._id }, JWT_SECRET, { expiresIn: '1h' });
            return res.json({ message: 'Login successful', token });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

//Logout with TokenBlacklist
export const logoutAuth = async (req, res) => {
    try {
        await TokenBlacklist.create({ token: req.body.token });
        res.json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token || await TokenBlacklist.findOne({ token })) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};
