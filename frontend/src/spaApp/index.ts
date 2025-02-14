import { mainWrapper } from '../elements';
import { routes } from "../routing/index"
import { errorPage } from "../Layout/index"

export default function runSPA(path ?: string){
	document.body.append(mainWrapper);

    if (location.pathname in routes) {
        mainWrapper.removeAttribute("id");
        mainWrapper.className = "";
        document.body.className = "";
        mainWrapper.innerHTML = routes[location.pathname].layoutCreate();
        routes[location.pathname].handleFunc(mainWrapper);
    } else {
        mainWrapper.innerHTML = errorPage();
    }
}

window.addEventListener("popstate", () => {
    runSPA(location.pathname);
});