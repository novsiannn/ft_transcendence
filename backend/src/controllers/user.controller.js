const userService = require("../services/user.service");

const UserController = {
    async registration(req, res) {
        try {
            const { username, email, password } = req.body;
            const userData = await userService.registration(username, email, password);
            if (userData.error) {
                return res.code(409).send(userData.error);
            }
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 60 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            res.code(201).send(userData);
        } catch (error) {
            console.error("Error registering user:", error);
            res.code(500).send({ error: "Error registering user" });
        }
    },

    async activate(req, res) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            res.code(500).send({ error: "Error activating user" });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            if (userData.error) {
                let statusCode = 400;

                if (userData.error === "User is not activated") {
                    statusCode = 403; //Forbidden
                } else if (userData.error === "Incorrect password or email") {
                    statusCode = 401; //Unauthorized
                }
                return res.code(statusCode).send(userData.error);
            }
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 60 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            res.code(200).send(userData);
        } catch (error) {
            res.code(500).send({ error: "Error logging in user" });
        }
    },

    async logout(req, res) {
        const { refreshToken } = req.cookies;
        try {
            const token = await userService.logout(refreshToken);
            res.clearCookie("refreshToken");
            res.code(201).send(token);
        } catch (error) {
            res.code(500).send({ error: "Error logging out user" });
        }
    },

    async refreshUser(req, res) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);
            if (userData.error) {
                let statusCode = 400;

                if (userData.error === "User not authorized") {
                    statusCode = 401; //Unauthorized
                } else if (userData.error === "User not found") {
                    statusCode = 401; //Unauthorized
                }
                return res.code(statusCode).send(userData.error);
            }
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 60 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            res.code(201).send(userData);
        } catch (error) {
            res.code(500).send({ error: "Error refreshing user" });
        }
    },

    async getUsers(req, res) {
        try {
            console.log("Get users request received");
            users = await userService.getAllUsers();
            return res.send(users);
        } catch (error) {
            console.error("Error getting users:", error);
            res.code(500).send({ error: "Error getting users" });
        }
    },
};

module.exports = UserController;

// exports.registerUser = {
//     schema: {
//         description: "Register a new user",
//         body: {
//             type: "object",
//             required: ["email", "username", "password"],
//             properties: {
//                 email: { type: "string", format: "email" },
//                 username: { type: "string" },
//                 password: { type: "string" },
//                 avatar: { type: "string" },
//             },
//         },
//         response: {
//             201: {
//                 description: "Successful registration",
//                 type: "object",
//                 properties: {
//                     id: { type: "integer" },
//                     email: { type: "string" },
//                     username: { type: "string" },
//                     avatar: { type: "string" },
//                 },
//             },
//         },
//     },
//     handler: async (req, res) => {
//         try {
//             const { email, username, password, avatar } = request.body;
//             const newUser = await User.create({
//                 email,
//                 username,
//                 password,
//                 avatar,
//             });
//             res.code(201).send(newUser);
//         } catch (error) {
//             reply.code(500).send({ error: "Error creating a User" });
//         }
//     },
// };
