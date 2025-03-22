import runSPA from "../spaApp";

export function navigateTo(newPath: string) {
  console.log(newPath);
  console.log(location.pathname);

  if (newPath !== location.pathname) {
    history.pushState({}, "", newPath); // Change URL without reload
    runSPA(newPath); // Draw new Page
  }
}
