import { playPage, gamePage, registrationPage, loginPage, homePage, profilePage, settingsPage, errorPage, leaderBoardPage } from "../Layout/index"
import { handlePlayPage } from "../pages/playPage"
import { handleGame } from "../pages/game"
import { handleRegistration } from "../pages/registration"
import { handleLogin } from "../pages/login"
import { handleHomePage } from "../pages/home"
import { handleProfilePage } from "../pages/profile"
import { handleSettings } from "../pages/settingsPage"
import { handleErrorPage } from "../pages/errorPage"
import { handleLeaderboardPage } from "../pages/leaderboard"
import { activateAccountPage } from "../Layout/activateAccountPage"
import { handleActivateAccount } from "../pages/activateAccPage"

interface handleFunctionI {
    layoutCreate: (mainWrapper?: HTMLDivElement) => string;
    handleFunc: (mainWrapper?: HTMLDivElement) => void;
}

export const privateRoutes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/play": { layoutCreate: playPage, handleFunc: handlePlayPage },
    "/game": { layoutCreate: gamePage, handleFunc: handleGame },
    "/profile": { layoutCreate: profilePage, handleFunc: handleProfilePage },
    "/signUp": { layoutCreate: registrationPage, handleFunc: handleRegistration },
    "/signIn": { layoutCreate: loginPage, handleFunc: handleLogin },
    "/settings": {layoutCreate: settingsPage, handleFunc: handleSettings},
    "/error": {layoutCreate: errorPage, handleFunc: handleErrorPage},
    "/leaderboard": {layoutCreate: leaderBoardPage, handleFunc: handleLeaderboardPage},
};

export const publicRoutes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/signUp": { layoutCreate: registrationPage, handleFunc: handleRegistration },
    "/signIn": { layoutCreate: loginPage, handleFunc: handleLogin },
    "/error": {layoutCreate: errorPage, handleFunc: handleErrorPage},
    "/activate": {layoutCreate: activateAccountPage, handleFunc: handleActivateAccount},
};

export const allRoutes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/play": { layoutCreate: playPage, handleFunc: handlePlayPage },
    "/game": { layoutCreate: gamePage, handleFunc: handleGame },
    "/profile": { layoutCreate: profilePage, handleFunc: handleProfilePage },
    "/signUp": { layoutCreate: registrationPage, handleFunc: handleRegistration },
    "/signIn": { layoutCreate: loginPage, handleFunc: handleLogin },
    "/settings": {layoutCreate: settingsPage, handleFunc: handleSettings},
    "/error": {layoutCreate: errorPage, handleFunc: handleErrorPage},
    "/leaderboard": {layoutCreate: leaderBoardPage, handleFunc: handleLeaderboardPage},
    "/activate": {layoutCreate: activateAccountPage, handleFunc: handleActivateAccount},
};