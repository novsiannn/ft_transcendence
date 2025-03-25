import { mainWrapper } from "../elements";
import {
  allRoutes,
  navigateTo,
  privateRoutes,
  publicRoutes,
} from "../routing/index";
import { checkLoggedUser } from "../routing/redirect";

export default function runSPA() {
  document.body.append(mainWrapper);

  if (location.pathname in allRoutes) {
    mainWrapper.removeAttribute("id");
    mainWrapper.className = "container mx-auto px-4 h-full w-full";
    document.body.className = "font-mono";
    if (
      checkLoggedUser() &&
      Object.keys(privateRoutes).includes(location.pathname)
    ) {
      mainWrapper.innerHTML =
        privateRoutes[location.pathname].layoutCreate(mainWrapper);
        privateRoutes[location.pathname].handleFunc(mainWrapper);
    } else {
      if (!checkLoggedUser() && Object.keys(publicRoutes).includes(location.pathname)) {
          mainWrapper.innerHTML =
          publicRoutes[location.pathname].layoutCreate(mainWrapper);
        publicRoutes[location.pathname].handleFunc(mainWrapper);
      } else {
        navigateTo("/");
      }
    }
  } else {
    navigateTo("/error");
    // mainWrapper.innerHTML = privateRoutes["/error"].layoutCreate();
    // privateRoutes["/error"].handleFunc();
  }
}

// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
  runSPA();
});
