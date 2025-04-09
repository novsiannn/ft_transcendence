import { mainWrapper } from "../elements";
import {
  allRoutes,
  navigateTo,
  privateRoutes,
  publicRoutes,
} from "../routing/index";
import { store } from "../store/store";

export default function runSPA() {
  document.body.append(mainWrapper);

  if (location.pathname in allRoutes) {
    console.log(store.getState());
    
    mainWrapper.removeAttribute("id");
    mainWrapper.className = "h-full w-full";
    document.body.className = "font-mono";
    if (
      store.getAuth() &&
      Object.keys(privateRoutes).includes(location.pathname)
    ) {
      mainWrapper.innerHTML =
        privateRoutes[location.pathname].layoutCreate(mainWrapper);
      privateRoutes[location.pathname].handleFunc(mainWrapper);
    } else {
      if (
        !store.getAuth() &&
        Object.keys(publicRoutes).includes(location.pathname)
      ) {
        mainWrapper.innerHTML =
          publicRoutes[location.pathname].layoutCreate(mainWrapper);
        publicRoutes[location.pathname].handleFunc(mainWrapper);
      } else {
        navigateTo("/");
      }
    }
  } else {
    navigateTo("/error");
  }
}

// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
  runSPA();
});
