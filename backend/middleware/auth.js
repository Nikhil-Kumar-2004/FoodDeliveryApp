import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "not Authorised Login Again" })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
         if (!req.body) req.body = {};
        req.body.userId = token_decode.id;
        if (!req.body.userId) {
            return res.status(400).json({ success: false, message: "Missing userId in request body" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export default authMiddleware;