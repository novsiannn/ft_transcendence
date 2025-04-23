const ValidationError = {
    validateUsername(username) {
        const usernameRegex = /^[a-zA-Zа-яА-Я0-9]([a-zA-Zа-яА-Я0-9_-]{1,14})[a-zA-Zа-яА-Я0-9]$/;

        if (!usernameRegex.test(username)) {
            return {
                valid: false,
                message: `Your username must be 3-16 chars long, use letters, numbers, "_" or "-".`
            };
        }
        return { valid: true };
    },

    validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            return {
                valid: false,
                message: `Your password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, no spaces and 1 special char.`
            };
        }
        return { valid: true };
    }
};

// function validateUsername(username) {
//     const usernameRegex = /^[a-zA-Zа-яА-Я0-9]([a-zA-Zа-яА-Я0-9_-]{1,14})[a-zA-Zа-яА-Я0-9]$/;

//     if (!usernameRegex.test(username)) {
//         return {
//             valid: false,
//             message: `Your username must be 3-16 chars long, use letters, numbers, "_" or "-".`
//         };
//     }
//     return { valid: true };
// }

// function validatePassword(password) {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!passwordRegex.test(password)) {
//         return {
//             valid: false,
//             message: `Your password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, no spaces and 1 special char.`
//         };
//     }
//     return { valid: true };
// }

module.exports = ValidationError;