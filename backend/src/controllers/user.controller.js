const userService = require("../services/user.service");

const UserController = {
    async registration(req, res) {
        const { email, password } = req.body;
        console.log("Registration request received with email:", email);
        try {
            const userData = await userService.registration(email, password);
            console.log("User registered successfully:", userData);
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true });
            res.code(201).send(userData);
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).send({ error: "Error registering user" });
        }
    },

    async login(req, res) {
        try {

        } catch (error) {
            reply.status(500).send({ error: "Error logging in user" });
        }
    },

    async logout(req, res) {
        try {

        } catch (error) {
            reply.status(500).send({ error: "Error logging out user" });
        }
    },

    async activate(req, res) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            reply.status(500).send({ error: "Error activating user" });
        }
    },

    async refreshUser(req, res) {
        try {

        } catch (error) {
            reply.status(500).send({ error: "Error refreshing user" });
        }
    },

    async getUsers(req, res) {
        try {

        } catch (error) {
            reply.status(500).send({ error: "Error getting users" });
        }
    }
}

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
    //             reply.status(201).send(newUser);
    //         } catch (error) {
    //             reply.status(500).send({ error: "Error creating a User" });
    //         }
    //     },
    // };
