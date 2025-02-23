import { playPage, gamePage, registrationPage, loginPage, homePage, profilePage } from "../Layout/index"
import { handlePlayPage } from "../pages/playPage"
import { handleGame } from "../pages/game"
import { handleRegistration } from "../pages/registration"
import { handleLogin } from "../pages/login"
import { handleHomePage } from "../pages/home"
import { handleProfilePage } from "../pages/profile"

interface handleFunctionI {
    layoutCreate: (mainWrapper?: HTMLDivElement) => string;
    handleFunc: (mainWrapper?: HTMLDivElement) => void;
}

export const routes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/play": { layoutCreate: playPage, handleFunc: handlePlayPage },
    "/game": { layoutCreate: gamePage, handleFunc: handleGame },
    "/profile": { layoutCreate: profilePage, handleFunc: handleProfilePage },
    "/registration": { layoutCreate: registrationPage, handleFunc: handleRegistration },
    "/login": { layoutCreate: loginPage, handleFunc: handleLogin },
};