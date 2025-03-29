import { handleModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigationHandle } from "../../nagivation";

interface IphotoIMG {
  name: null | string;
  size: null | number;
  type: null | string;
  url: null | string;
}

interface User {
  id: number | null;
  email: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  photo: IphotoIMG;
}

interface ITestUserData {
  token: string | null;
  user: User;
}

export let testUserData: ITestUserData = {
  token: "test-token",
  user: {
    id: 1,
    email: "userExampleEmail@gmail.com",
    username: "Leonardo da Vinci",
    firstName: null,
    lastName: "Davidovich",
    phoneNumber: null,
    photo: {
      name: null,
      size: null,
      type: null,
      url: null,
    },
  },
};

export function handleSettings() {
  navigationHandle();
  const inputs = document.querySelectorAll<HTMLInputElement>("#inputUserInfo");
  const btnSave = document.querySelector<HTMLButtonElement>(
    "#saveChangesSettings"
  );
  const profileImgContainer =
    document.querySelector<HTMLImageElement>("#profileImg");
  const uploadImgInput =
    document.querySelector<HTMLInputElement>("#uploadImgInput");
  
  const enableTwoFactorBtn = document.querySelector<HTMLButtonElement>("#enableTwoFactorBtn");
  const disableTwoFactorBtn = document.querySelector<HTMLButtonElement>("#disableTwoFactorBtn");

  enableTwoFactorBtn?.addEventListener('click', () => {
    //here make a request to backend to get info about 2 factor. Before next line
    handleModalTwoFactor();
  });

  disableTwoFactorBtn?.addEventListener('click', () => {
    console.log(2);
  });

  uploadImgInput!.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          profileImgContainer!.src = e.target.result as string;
          profileImgContainer!.style.display = "block";
		
          testUserData.user.photo.name = file.name;
          testUserData.user.photo.size = file.size;
          testUserData.user.photo.type = file.type;
          testUserData.user.photo.url = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
      console.log(testUserData);
    }
  });
}
