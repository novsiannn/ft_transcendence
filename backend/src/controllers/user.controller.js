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
                secure: true,
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

    async uploadAvatar(req, res) {
        try {
            const userId = req.user.id;
            if (!userId){
                return res.code(401).send({ error: "User not found"});
            }

            const data = await req.file();
            if (!data) {
                return res.code(400).send({ error: "No file uploaded" });
            }

            const mimetype = data.mimetype;
            if (!mimetype.startsWith('image/')) {
                return res.code(400).send({ error: "Only image files are allowed" });
            }

            const buffer = await data.toBuffer();
            const result = await userService.saveAvatar(userId, buffer, mimetype);

            if (result.error === "User not found" ) {
                return res.code(401).send(result.error);
            } else if (result.error) {
                return res.code(400).send(result.error);
            }  
            return res.code(200).send({
                message: "Avatar uploded successfully",
                avatar: result.avatar,
                user: result.user,
            });
        } catch (error) {
            console.error("Error uploading avatar:", error);
            res.code(500).send({error: "Error uploading avatar"});
        }
    },

    async getUserProfile(req, res) {
        try {
            const userId = req.user.id;
            if (!userId){
                return res.code(401).send({ error: "User not found"});
            }

            const result = await userService.getUserProfile(userId);
            if(result.error){
                return res.code(401).send(result.error);
            }

            return res.code(200).send({ user: result.user});
        } catch {
            console.error("Error getting user profile:", error);
            return res.code(500).send({ error: "Error getting user profile" });
        }
    },

    async updateUser(req, res) {
        try {
            // const firstName = req.user.firstName;
            // const lastName = req.user.lastName;
            // const phoneNumber = req.user.phoneNumber;

            const userId = req.user.id;
            if (!userId) {
                return res.code(401).send({ error: "User not found" });
            }

            const { username, lastName, firstName, phoneNumber } = req.body;
            
            if (username === undefined && firstName === undefined && 
                lastName === undefined && phoneNumber === undefined) {
                return res.code(400).send({ error: "No data provided for update" });
            }

            const updateData = {};
            if ('username' in req.body) updateData.username = username;
            if ('firstName' in req.body) updateData.firstName = firstName;
            if ('lastName' in req.body) updateData.lastName = lastName;
            if ('phoneNumber' in req.body) updateData.phoneNumber = phoneNumber;

            const updatedUser = await userService.updateUser(userId, updateData);
            if (updatedUser.error === "User not found" ){
                return res.code(401).send(updatedUser.error);
            } else if (updatedUser.error === "Username is already taken") {
                return res.code(409).send(updatedUser.error);
            }

            res.code(200).send({
                message: "User updated successfully",
                user: updatedUser.user,
            });
        } catch (error) {
            console.error("Error updating user:", error);
            res.code(500).send({ error: "Error updating user" });
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

    async deleteUserAccount(req, res) {
        try {
            const userId = req.user.id;
            if (!userId){
                return res.code(401).send({ error: "User not found" });
            }

            const { password } = req.body;
            if (!password) {
                return res.code(400).send({ error: "Password is required to delete account" });
            }

            const result = await userService.deleteUserAccount(userId, password);
            if (result.error) {
                return res.code(401).send(result.error);
            }

            return res.code(204).send({
                message: "Account successfully deleted"
            })
        } catch (error) {
            console.error("Error deleting user account:", error);
            return res.code(500).send({ error: "Error deleting user account" });
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
