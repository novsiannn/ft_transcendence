import { homePage, gamePage, registrationPage, loginPage } from "../Layout/index"
import { handleMainPage } from "../pages/mainPage"
import { handleGame } from "../pages/game"
import { handleRegistration } from "../pages/registration"
import { handleLogin } from "../pages/login"

interface handleFunctionI {
    layoutCreate: (mainWrapper?: HTMLDivElement) => string;
    handleFunc: (mainWrapper?: HTMLDivElement) => void;
}

export const routes: Record< string, handleFunctionI > = {
    "/": { layoutCreate: homePage, handleFunc: handleMainPage},
    "/game":  { layoutCreate: gamePage, handleFunc: handleGame},
    "/registration": { layoutCreate: registrationPage, handleFunc: handleRegistration},
    "/login":  { layoutCreate: loginPage, handleFunc: handleLogin},
};