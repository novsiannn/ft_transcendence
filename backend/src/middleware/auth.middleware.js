const tokenService = require("../services/token.service");

async function authMiddleware(request, reply) {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return reply.code(401).send({ error: "User is Unauthorized" });
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return reply.code(401).send({ error: "User is Unauthorized" });
    }

    const userData = await tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return reply.code(401).send({ error: "User is Unauthorized" });
    }

    request.user = userData;
    // Middleware passed successfully, move to the next handler
  } catch (error) {
    return reply.code(401).send({ error: "User is Unauthorized" });
  }
}

module.exports = authMiddleware;