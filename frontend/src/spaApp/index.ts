import { mainWrapper } from "../elements";
import {
  getLanguageSelector,
  updateContent,
} from "../elements/LanguageSelector";
import {
  allRoutes,
  navigateTo,
  privateRoutes,
  publicRoutes,
} from "../routing/index";
import { store } from "../store/store";
import { socket } from "../websockets";

const matchRoute = (pathname: string) => {
  if (pathname === "/") {
    return { route: `/`, params: {} };
  }
  const segments = pathname.split("/").filter(Boolean);

  if (`/${segments[0]}` in allRoutes) {
    if (segments.length === 1) return { route: `/${segments[0]}`, params: {} };
    else if (segments.length === 2 && /^\d+$/.test(segments[1])) {
      return { route: `/${segments[0]}`, params: { id: segments[1] } };
    }
  }
  return null;
};

export default function runSPA() {
  document.body.append(mainWrapper);
  let matched;

  matched = matchRoute(location.pathname);

  // socket?.emit("online:get:users");
  // socket?.emit("online:get:all:status");

  if (matched) {
    const { route, params } = matched;

    mainWrapper.removeAttribute("id");
    mainWrapper.className = "h-full w-full relative flex flex-col";
    document.body.className = "font-sans";
    if (store.getAuth() && Object.keys(privateRoutes).includes(route)) {
      mainWrapper.innerHTML = privateRoutes[route].layoutCreate(
        mainWrapper,
        params
      );
      privateRoutes[route].handleFunc(mainWrapper, params);
    } else {
      if (!store.getAuth() && Object.keys(publicRoutes).includes(route)) {
        mainWrapper.innerHTML = publicRoutes[route].layoutCreate(
          mainWrapper,
          params
        );
        publicRoutes[route].handleFunc(mainWrapper, params);
      } else {
        navigateTo("/");
      }
    }
  } else {
    navigateTo("/error");
  }
  if (store.getAuth() && matched?.route !== "/chats")
    mainWrapper.append(getLanguageSelector());
  updateContent();
}

window.addEventListener("popstate", () => {
  runSPA();
});
