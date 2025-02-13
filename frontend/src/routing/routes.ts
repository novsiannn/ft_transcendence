import { homePage, gamePage, registrationPage, loginPage } from "../Layout/pages"

export const routes: Record< string, () => string > = {
    "/": homePage,
    "/game": gamePage,
    "/registration": registrationPage,
    "/login": loginPage,
};