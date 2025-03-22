import runSPA from "../spaApp";

export function navigateTo(newPath: string) {
  if (newPath !== location.pathname) {
    history.pushState({}, "", newPath); // Change URL without reload
    runSPA(newPath); // Draw new Page
  }
}
