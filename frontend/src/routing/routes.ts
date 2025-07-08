import { handlePlayPage } from "../pages/playPage"
import { handleGame } from "../pages/game"
import { handleRegistration } from "../pages/registration"
import { handleLogin } from "../pages/login"
import { handleHomePage } from "../pages/home"
import { handleProfilePage } from "../pages/profile"
import { handleSettings, settingsPage } from "../pages/settingsPage"
import { handleErrorPage } from "../pages/errorPage"
import { handleLeaderboardPage } from "../pages/leaderboard"
import { errorPage } from "../pages/errorPage/errorPage"
import { gamePage } from "../pages/game/gamePage"
import { homePage } from "../pages/home/homePage"
import { leaderBoardPage } from "../pages/leaderboard/leaderBoardPage"
import { loginPage } from "../pages/login/loginPage"
import { profilePage } from "../pages/profile/profilePage"
import { playPage } from "../pages/playPage/playPage"
import { registrationPage } from "../pages/registration/registrationPage"
import { handleFriendsPage } from "../pages/friends"
import { friendsPage } from "../pages/friends/friendsPage"
import { IRouteParams } from "../shared"
import { chatsPage } from "../pages/chats/layoutChats"
import { handleChatsPage } from "../pages/chats/handleChats"

interface handleFunctionI {
    layoutCreate: (mainWrapper?: HTMLDivElement, params?: {}) => string;
    handleFunc: (mainWrapper?: HTMLDivElement, params?: {}) => void;
}

export const privateRoutes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/play": { layoutCreate: playPage, handleFunc: handlePlayPage },
    "/game": { layoutCreate: gamePage, handleFunc: handleGame },
    "/profile": { layoutCreate: profilePage, handleFunc: handleProfilePage },
    "/settings": {layoutCreate: settingsPage, handleFunc: handleSettings},
    "/error": {layoutCreate: errorPage, handleFunc: handleErrorPage},
    "/leaderboard": {layoutCreate: leaderBoardPage, handleFunc: handleLeaderboardPage},
    "/friends": {layoutCreate: friendsPage, handleFunc: handleFriendsPage},
    "/chats": {layoutCreate: chatsPage, handleFunc: handleChatsPage}
};

export const publicRoutes: Record<string, handleFunctionI> = {
    "/": { layoutCreate: homePage, handleFunc: handleHomePage },
    "/signUp": { layoutCreate: registrationPage, handleFunc: handleRegistration },
    "/signIn": { layoutCreate: loginPage, handleFunc: handleLogin },
    "/error": {layoutCreate: errorPage, handleFunc: handleErrorPage},
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
    "/friends": {layoutCreate: friendsPage, handleFunc: handleFriendsPage},
    "/chats": {layoutCreate: chatsPage, handleFunc: handleChatsPage}
};