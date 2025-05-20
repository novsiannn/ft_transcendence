

const userMessageTimer = new Map();
const MESSAGE_TIMEOUT = 1000;

function isUserAllowedToSendMessage(userId) {
    const now = Date.now();
    const lastMessageTime = userMessageTimer.get(userId) || 0;
    if (now - lastMessageTime < MESSAGE_TIMEOUT) {
        return false;
    }
    userMessageTimer.set(userId, now);
    return true;
}


function validateMessage(message)
{
    if(!message || typeof message !== 'string') {
        return {
            isValid: false,
            error: 'Message must be a string'
        };
    }
    if(message.length < 1 || message.length > 1000) {
        return {
            isValid: false,
            error: 'Message length must be between 1 and 1000 characters'
        };
    }
    if(message.trim().length == 0) {
        return {
            isValid: false,
            error: 'Message cannot be empty'
        };
    }
    //base secure from XSS attack
    const sanitizedContent = message
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    return {
        isValid: true,
        sanitizedContent: sanitizedContent
    };
}

module.exports = { validateMessage, isUserAllowedToSendMessage };