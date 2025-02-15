import { playPage, gamePage, registrationPage, loginPage, homePage } from "../Layout/index"
import { handlePlayPage } from "../pages/playPage"
import { handleGame } from "../pages/game"
import { handleRegistration } from "../pages/registration"
import { handleLogin } from "../pages/login"
import { handleHomePage } from "../pages/home"

interface handleFunctionI {
    layoutCreate: (mainWrapper?: HTMLDivElement) => string;
    handleFunc: (mainWrapper?: HTMLDivElement) => void;
}

export const routes: Record< string, handleFunctionI > = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage},
    "/play": { layoutCreate: playPage, handleFunc: handlePlayPage},
    "/game":  { layoutCreate: gamePage, handleFunc: handleGame},
    "/registration": { layoutCreate: registrationPage, handleFunc: handleRegistration},
    "/login":  { layoutCreate: loginPage, handleFunc: handleLogin},
};