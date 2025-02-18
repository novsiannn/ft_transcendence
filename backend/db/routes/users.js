const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async function (fastify, opts) {
    fastify.post(
        "/users",
        {
            schema: {
                description: "Register a new user",
                body: {
                    type: "object",
                    required: ["email", "username", "password"],
                    properties: {
                        email: { type: "string", format: "email" },
                        username: { type: "string" },
                        password: { type: "string" },
                        avatar: { type: "string" },
                    },
                },
                response: {
                    201: {
                        description: "Successful registration",
                        type: "object",
                        properties: {
                            id: { type: "integer" },
                            email: { type: "string" },
                            username: { type: "string" },
                            avatar: { type: "string" },
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            try {
                const { email, username, password, avatar } = request.body;
                const newUser = await User.create({ email, username, password, avatar });
                reply.status(201).send(newUser);
            } catch (error) {
                reply.status(500).send({ error: "Error creating a User" });
            }
    });
    // fastify.post("/login", {
    //     schema: {
    //         description: "login",
    //         body: {
    //             type: "object",
    //             required: ["email", "password"],
    //             properties:{
    //                 email: { type: "string", format: "email" },
    //                 password: { type: "string" },
    //             },
    //         },
    //         response: {
    //             200: {
    //                 description: "Successful login",
    //                 type: "object",
    //                 properties: {
    //                     token: { type: "string" },
    //                 },
    //             },
    //         },
    //     },
    // },
    // async (request, reply) => {
    //     try {
    //         const { email, password } = request.body;
    //     }
    // });


    //get id user
    fastify.get(
        "/users/:id",
        async (request, reply) => {
            try {
                const user = await User.findByPk(request.params.id, {
                    attributes: ["id", "email", "username", "avatar"],
                });
                if (!user){
                    return reply.status(404).send({ error: "User not found" });
                }
                reply.send(user);
            } catch (error) {
                reply.status(500).send({ error: "Error getting a User" });
            }
    });

    //delete user
    fastify.delete(
        "/users/:id",
        async (request, reply) => {
            try{
                const user = await User.findByPk(request.params.id);
                if (!user){
                    return reply.status(404).send({ error: "User not found" });
                }
                await user.destroy();
                reply.send({ message: "User deleted"});
            } catch (error) {
                reply.status(500).send({ error: "Error deleting a User"});
            }
    });
};