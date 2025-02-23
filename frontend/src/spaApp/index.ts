import { mainWrapper } from '../elements';
import { routes } from "../routing/index"
import { errorPage } from "../Layout/index"

export default function runSPA(path?: string) {
    document.body.append(mainWrapper);

    if (location.pathname in routes) {
        mainWrapper.removeAttribute("id");
        // mainWrapper.className = "flex flex-col h-full w-full";
        mainWrapper.className = "container mx-auto px-4 h-full w-full";
        document.body.className = "";
        mainWrapper.innerHTML = routes[location.pathname].layoutCreate(mainWrapper);
        routes[location.pathname].handleFunc(mainWrapper);
    } else {
        mainWrapper.innerHTML = errorPage();
    }
}


// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
    runSPA(location.pathname);
});