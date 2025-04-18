import runSPA from "../spaApp";

export function navigateTo(newPath: string) {
  if (newPath !== location.pathname) {
    console.log(newPath);
    
    history.pushState({}, "", newPath); // Change URL without reload
    runSPA(); // Draw new Page
  }
}
