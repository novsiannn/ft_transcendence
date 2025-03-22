const tokenService = require("../services/token.service");

async function authMiddleware(request, reply, done) {
    try {
        const authorizationHeader = request.headers.authorization;

        if (!authorizationHeader) {
            reply.code(401).send({ error: "User is Unauthorized" });
            return;
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if(!accessToken) {
            reply.code(401).send({ error: "User is Unauthorized" });
            return;
        }

        const userData = await tokenService.validateAccessToken(accessToken);
        if (!userData) {
            reply.code(401).send({ error: "User is Unauthorized" });
            return;
        }

        request.user = userData;
        done();
    } catch (error) {
        reply.code(401).send({ error: "User is Unauthorized" });
        return;
    }
}

module.exports = authMiddleware;
