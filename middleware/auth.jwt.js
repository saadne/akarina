const jwt = require("jsonwebtoken");
const { User } = require("../models");

async function verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: 'No token provided'
        });
    };
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log("decodedddddddddd", decoded)
        req.userId = decoded.id
        console.log(req.userId)
        next()

    } catch (error) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }
};
async function isAdmin(req, res, next) {
    try {
        const user = await User.findByPk(req.userId);
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'admin') {
                return next();
            };
            continue;
        }
        res.status(403).send({
            message: 'Require admin role'
        })

    }
    catch (error) {
        res.send({
            message: error.message
        })
    }
};

async function isModerator(req, res, next) {
    try {
        const { userId } = req
        const user = await User.findByPk(userId);
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'moderator') {
                return next();
            };
            continue;
        }
        res.status(403).send({
            message: 'Require Modarator role'
        })

    }
    catch (error) {
        res.send({
            message: error.message
        })
    }
};

async function isModaratorOrAdmin(req, res, next) {
    try {
        const user = await User.findByPk(req.userId);
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'moderator') {
                return next();
            };
            if (roles[i].name === 'admin') {
                return next();
            };

        }
        res.status(403).send({
            message: 'Require moderator or admin role'
        });

    }
    catch (error) {
        res.send({
            message: error.message
        })
    }
};
const authJwt = {
    verifyToken,
    isAdmin,
    isModerator,
    isModaratorOrAdmin
};
module.exports = authJwt;