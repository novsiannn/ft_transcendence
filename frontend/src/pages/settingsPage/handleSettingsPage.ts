import { handleModalInput } from "../../elements/ModalInput";
import { handleModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigationHandle } from "../../elements/nagivation";
import { store } from "../../store/store";
import  instanceAPI from "../../services/api/instanceAxios";

interface User {
  id: number | null;
  email: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  avatar?: string | null;
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
    avatar: null,
  },
};

const BACKEND_URL = 'https://localhost:3000';

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

  const loadUserAvatar = async () => {
    try {
      const response = await instanceAPI.get('/user/profile');
      const userData = response.data as { user: User, avatar: string };
      
      if (userData.user.avatar) {
        profileImgContainer!.src = `${BACKEND_URL}${userData.user.avatar}`;
        profileImgContainer!.style.display = "block";
      } else {
        profileImgContainer!.src = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
      }
    } catch (error) {
      console.error('Failed to load avatar:', error);
      if (profileImgContainer) {
        profileImgContainer.src = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
      }
    }
  };
  
  loadUserAvatar();
  
  uploadImgInput!.addEventListener("change", async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    
    if (file && file.type.startsWith("image/")) {
      try {
        const formData = new FormData();
        formData.append('avatar', file);
        
        const response = await instanceAPI.post('/user/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('POST response:', response.data);
        if(response.status == 200) {
          const responseData = response.data as { avatar: string };
          
        if (profileImgContainer && responseData.avatar) {
          profileImgContainer.src = `${BACKEND_URL}${responseData.avatar}`;
          profileImgContainer.style.display = "block";
        }
      }
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  }
});

const profilePic = document.querySelector("#profileImg");
  const dropdownMenu = document.querySelector("#imgDropdownMenu");
  const changePhotoBtn = document.querySelector("#changePhotoBtn");
  
  if (profilePic && dropdownMenu) {
    profilePic.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (profileImgContainer && !profileImgContainer.contains(target)) {
        dropdownMenu?.classList.add('hidden');
      }
    });
  }

  changePhotoBtn?.addEventListener("click", () => {
    uploadImgInput!.click();
  });
}