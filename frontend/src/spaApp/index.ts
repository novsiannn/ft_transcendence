import { mainWrapper } from "../elements";
import { getLanguageSelector, updateContent } from "../elements/LanguageSelector";
import {
  allRoutes,
  navigateTo,
  privateRoutes,
  publicRoutes,
} from "../routing/index";
import { store } from "../store/store";

const matchRoute = (pathname: string) => {
  if (pathname === '/'){
    return {route: `/`, params: {}}
  }
  const segments = pathname.split('/').filter(Boolean);

  if(`/${segments[0]}` in allRoutes){
    if(segments.length === 1)
      return {route: `/${segments[0]}`, params: {}}
    else if(segments.length === 2 && /^\d+$/.test(segments[1])){
       return { route: '/profile', params: { id: segments[1] } }
    }
  }
  return null;
}


export default function runSPA() {
  document.body.append(mainWrapper);

  const matched = matchRoute(location.pathname);
  
  if (matched) {
    const {route, params} = matched;
    
    mainWrapper.removeAttribute("id");
    mainWrapper.className = "h-full w-full relative";
    document.body.className = "font-mono";
    if (
      store.getAuth() &&
      Object.keys(privateRoutes).includes(route)
    ) {
      mainWrapper.innerHTML =
        privateRoutes[route].layoutCreate(mainWrapper, params);
      privateRoutes[route].handleFunc(mainWrapper, params);
    } else {
      if (
        !store.getAuth() &&
        Object.keys(publicRoutes).includes(route)
      ) {
        mainWrapper.innerHTML =
          publicRoutes[route].layoutCreate(mainWrapper, params);
        publicRoutes[route].handleFunc(mainWrapper, params);
      } else {
        navigateTo("/");
      }
    }
  } else {
    navigateTo("/error");
  }
  if(store.getAuth())
    mainWrapper.append(getLanguageSelector());
  updateContent();
}

// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
  runSPA();
});
