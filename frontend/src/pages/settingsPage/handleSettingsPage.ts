import { handleModalInput } from "../../elements/ModalInput";
import { handleModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigationHandle } from "../../elements/nagivation";
import { store } from "../../store/store";

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
  const { username, email, firstName, lastName, isTwoFactorEnabled } =
    store.getState().auth.user;
  const userData = [firstName, lastName, username, email];
  const inputs = document.querySelectorAll<HTMLInputElement>("#inputUserInfo");
  const btnSave = document.querySelector<HTMLButtonElement>(
    "#saveChangesSettings"
  );
  inputs.forEach((input, i) => {
    if (userData[i] && userData[i].length > 0) input.value = userData[i];
    else input.value = "Empty";
  });

  const profileImgContainer =
    document.querySelector<HTMLImageElement>("#profileImg");
  const uploadImgInput =
    document.querySelector<HTMLInputElement>("#uploadImgInput");

  const enableTwoFactorBtn = document.querySelector<HTMLButtonElement>(
    "#enableTwoFactorBtn"
  );
  const disableTwoFactorBtn = document.querySelector<HTMLButtonElement>(
    "#disableTwoFactorBtn"
  );

  const switchButtonActivity = (isEnable: boolean) => {
    if (isEnable) {
      enableTwoFactorBtn!.disabled = true;
      enableTwoFactorBtn?.classList.add("opacity-25");

      disableTwoFactorBtn!.disabled = false;
      disableTwoFactorBtn?.classList.remove("opacity-25");
    } else {
      disableTwoFactorBtn!.disabled = true;
      disableTwoFactorBtn?.classList.add("opacity-25");

      enableTwoFactorBtn!.disabled = false;
      enableTwoFactorBtn?.classList.remove("opacity-25");
    }
  };

  if (isTwoFactorEnabled) {
    switchButtonActivity(isTwoFactorEnabled);
  } else {
    switchButtonActivity(isTwoFactorEnabled);
  }
  enableTwoFactorBtn?.addEventListener("click", async () => {
    await handleModalTwoFactor(switchButtonActivity);
  });

  disableTwoFactorBtn?.addEventListener("click", async () => {
    await handleModalInput(
      "2fa/disable",
      "Disable 2FA",
      "0",
      switchButtonActivity
    );
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