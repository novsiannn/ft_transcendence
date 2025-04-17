import { navigateTo } from "../../routing";
import { store } from "../../store/store";

export const getUserData = (id?: number) => {
  const userNameElement = document.querySelector("#userNameProfile");
  const res = store.getAllUsers().some((el) => {
    if(el.id == id){
       el.id == id ? userNameElement!.textContent = el.username : userNameElement!.textContent = 'Username';
       return true;
    }
    return false;
  }
  );
  if(!res){
    navigateTo('/error')
  }
};
