import { homePage, gamePage } from "../Layout/pages"

export const routes: Record< string, () => string > = {
    "/": homePage,
    "/game": gamePage,
};