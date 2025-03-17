import { mainWrapper } from "../elements";
import { navigateTo, privateRoutes, publicRoutes} from "../routing/index";
import { checkLoggedUser } from "../routing/redirect";
// import { errorPage } from "../Layout/index"
// import { handleErrorPage } from '../pages/errorPage';

export default function runSPA(path?: string) {
  document.body.append(mainWrapper);

  if (location.pathname in privateRoutes) {
    mainWrapper.removeAttribute("id");
    // mainWrapper.className = "flex flex-col h-full w-full";
    mainWrapper.className = "container mx-auto px-4 h-full w-full";
    document.body.className = "font-mono";
    if (checkLoggedUser() && Object.keys(privateRoutes).includes(location.pathname)) {
      mainWrapper.innerHTML = privateRoutes[location.pathname].layoutCreate(mainWrapper);
      privateRoutes[location.pathname].handleFunc(mainWrapper);
    } else {
        if(Object.keys(publicRoutes).includes(location.pathname)){
            mainWrapper.innerHTML = publicRoutes[location.pathname].layoutCreate(mainWrapper);
            publicRoutes[location.pathname].handleFunc(mainWrapper);
        }  else if(location.pathname !== '/')
            navigateTo('/');
    }
  } else {
    mainWrapper.innerHTML = privateRoutes["/error"].layoutCreate();
    privateRoutes["/error"].handleFunc();
  }
}

// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
  runSPA(location.pathname);
});
