import runSPA from "../spaApp";

export function navigateTo(path: string) {
    history.pushState({}, "", path); // Change URL without reload
    runSPA(path); // Draw new Page
}