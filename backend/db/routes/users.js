const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        const newUser = await User.create({
          email,
          username,
          password,
          avatar,
        });
        reply.status(201).send(newUser);
      } catch (error) {
        reply.status(500).send({ error: "Error creating a User" });
      }
    }
  );
  fastify.post(
    "/login",
    {
      schema: {
        description: "login",
        body: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
        response: {
          200: {
            description: "Successful login",
            type: "object",
            properties: {
              token: { type: "string" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const { email, password } = request.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
          return reply.status(401).send({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return reply.status(401).send({ error: "Invalid email or password" });
        }

        //JWT token
        const accessToken = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET,
          {
            expiresIn: "15m",
          }
        );

        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.REFRESH_SECRET,
            {
              expiresIn: "7d",
            }
        );
  
        user.refreshToken = refreshToken;
        await user.save();
        
        return reply.status(200).send({ accessToken, refreshToken });
      } catch (error) {
        reply.status(500).send({ error: "Error login a User" });
      }
    }
  );

  //get id user
  fastify.get(
    "/users/:id",
    {
      preHandler: async (request, reply) => {
        try {
          const authHeader = request.headers.authorization;
          if (!authHeader) {
            return reply.status(401).send({ error: "Unauthorized" });
          }

          const token = authHeader.split(" ")[1];
          request.user = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
          return reply.status(401).send({ error: "Unauthorized" });
        }
      },
    },
    async (request, reply) => {
      try {
        const user = await User.findByPk(request.params.id, {
          attributes: ["id", "email", "username", "avatar"],
        });
        if (!user) {
          return reply.status(404).send({ error: "User not found" });
        }
        reply.send(user);
      } catch (error) {
        reply.status(500).send({ error: "Error getting a User" });
      }
    }
  );
fastify.post(
    "/logout",
    async (request, reply) => {
        try {
            const user = await User.findByPk(request.params.id);

            if (!user) {
                return reply.status(404).send({ error: "User not found" });
            }

            user.refreshToken = null;
            await user.save();

            return reply.status(200).send({ message: "User logged out" });
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: "Logout failed" });
        }
    });
  //delete user
  fastify.delete("/users/:id", async (request, reply) => {
    try {
      const user = await User.findByPk(request.params.id);
      if (!user) {
        return reply.status(404).send({ error: "User not found" });
      }
      await user.destroy();
      reply.send({ message: "User deleted" });
    } catch (error) {
      reply.status(500).send({ error: "Error deleting a User" });
    }
  });
};
