import { handleModalInput } from "../../elements/ModalInput";
import { handleModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigationHandle } from "../../elements/nagivation";
import { API_URL, store } from "../../store/store";
import instanceAPI from "../../services/api/instanceAxios";
import { IUserProfile } from "../../services/api/models/response/IUser";
import { handleModalError } from "../../elements";
import { getColorFromUsername } from "../../shared/randomColors";
import { IUpdateProfileData } from "../../shared";
import { validateUsername } from "../../shared/validation";
import { getLoader } from "../../elements/Loader";
import { handleModalSuccess } from "../../elements/ModalSuccess";

export function handleSettings() {
  navigationHandle();
  const { username, email, firstName, lastName, isTwoFactorEnabled } =
    store.getState().auth.user;
  const userData = [firstName, lastName, username, email];
  const inputs = document.querySelectorAll<HTMLInputElement>(".inputUserInfo");
  const navigationPhoto =
    document.querySelector<HTMLImageElement>("#profileIcon");

  const btnSave = document.querySelector<HTMLButtonElement>(
    "#saveChangesSettings"
  );

  btnSave!.addEventListener("click", async () => {
    btnSave!.innerHTML = getLoader();
    btnSave!.disabled = true;
    const updateData: IUpdateProfileData = {
      username,
      firstName,
      lastName,
      phoneNumber: null,
    };
    try {
      inputs.forEach((input) => {
        const value = input.value.trim();
        const name = input.name as
          | keyof Omit<IUpdateProfileData, "username">
          | "username";

        if (name === "username") {
          validateUsername(input);
          updateData[name] = value;
        } else {
          updateData[name] = value || null;
        }
      });
      const res = await store.updateUserData(updateData);
      if ((res.status = 200)) {
        handleModalSuccess("You have successfully updated your data!");
      }
      btnSave!.innerHTML = "Save";
      btnSave!.disabled = false;
    } catch (e: any) {
      handleModalError(e.message);
      btnSave!.innerHTML = "Save";
      btnSave!.disabled = false;
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      if (input.type !== "email")
        input.className = "inputUserInfo border-2 border-black p-2";
    });
  });

  inputs.forEach((input, i) => {
    console.log("here");

    if (userData[i] && userData[i].length > 0) {
      console.log(userData[i]);
      input.value = userData[i];
    }
  });

  let profileImgContainer = document.querySelector<
    HTMLImageElement | HTMLDivElement
  >("#profileImg");
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
      const response = await instanceAPI.get("/user/profile");
      const userData = response.data as { user: IUserProfile };

      if (userData.user.avatar) {
        (
          profileImgContainer as HTMLImageElement
        ).src = `${API_URL}${userData.user.avatar}`;
        profileImgContainer!.style.display = "block";
      } else {
        // handleModalError("No avatar found");
      }
    } catch (error) {
      if (profileImgContainer) {
        handleModalError("Failed to load avatar");
      }
    }
  };

  loadUserAvatar();

  uploadImgInput!.addEventListener("change", async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file && !file.type.startsWith("image/")) {
      handleModalError("Please upload an image file (JPEG, PNG, etc)");
      uploadImgInput!.value = "";
      return;
    }

    if (file) {
      try {
        const formData = new FormData();
        formData.append("avatar", file);

        const response = await instanceAPI.post("/user/avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status == 200) {
          const responseData = response.data as { avatar: string };
          await store.getUserRequest();

          if (profileImgContainer && responseData.avatar) {
            const timestamp = new Date().getTime();

            const avatarUrl = `${API_URL}${responseData.avatar}?t=${timestamp}`;

            if (profileImgContainer.tagName.toLowerCase() === "div") {
              const newImg = document.createElement("img");
              newImg.id = "profileImg";
              newImg.className = "rounded-full object-cover w-48 h-48";
              newImg.draggable = false;
              newImg.alt = "Profile Image";
              newImg.src = avatarUrl;

              profileImgContainer.replaceWith(newImg);
              profileImgContainer = newImg;

              profileImgContainer.addEventListener("click", () => {
                const imgDropdownMenu =
                  document.getElementById("imgDropdownMenu");
                if (imgDropdownMenu) {
                  imgDropdownMenu.classList.toggle("hidden");
                }
              });
            } else {
              // It is already an img
              (profileImgContainer as HTMLImageElement).src = avatarUrl;
              navigationPhoto!.src = avatarUrl;
            }
          }
        }
      } catch (error) {
        handleModalError("Failed to upload avatar. Please try again.");
      } finally {
        uploadImgInput!.value = ""; // <- Always reset input here
      }
    }
  });

  const dropdownMenu = document.querySelector("#imgDropdownMenu");
  const changePhotoBtn = document.querySelector("#changePhotoBtn");
  const deletePhotoBtn = document.querySelector("#deletePhotoBtn");

  if (profileImgContainer && dropdownMenu) {
    profileImgContainer.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (profileImgContainer && !profileImgContainer.contains(target)) {
        dropdownMenu?.classList.add("hidden");
      }
    });
  }

  changePhotoBtn?.addEventListener("click", () => {
    uploadImgInput!.click();
  });

  function createProfileDivElement(
    firstLetter: string,
    color: string
  ): HTMLDivElement {
    const newDiv = document.createElement("div");
    newDiv.id = "profileImg";
    newDiv.className = `text-5xl text-white font-bold mx-auto flex justify-center items-center object-cover content-center select-none w-48 h-48 ${color} rounded-full cursor-pointer`;
    newDiv.textContent = firstLetter;
    return newDiv;
  }

  function attachProfileClickEvent(element: HTMLElement) {
    element.addEventListener("click", () => {
      const imgDropdownMenu = document.getElementById("imgDropdownMenu");
      if (imgDropdownMenu) {
        imgDropdownMenu.classList.toggle("hidden");
      }
    });
  }

  // --- Now your delete button listener:

  deletePhotoBtn?.addEventListener("click", async () => {
    try {
      const response = await instanceAPI.delete("/user/avatar");
      if (response.status === 200) {
        await store.getUserRequest();

        const color = getColorFromUsername(store.getUser().username);
        const firstLetterOfUser = store
          .getUser()
          .username.charAt(0)
          .toUpperCase();

        // Handling replacement after deletion
        if (profileImgContainer) {
          if (profileImgContainer.tagName.toLowerCase() === "img") {
            const newDiv = createProfileDivElement(firstLetterOfUser, color);

            profileImgContainer.replaceWith(newDiv);
            profileImgContainer = newDiv; // update the reference!

            attachProfileClickEvent(profileImgContainer);
          }
        }
      }
    } catch (error) {
      handleModalError("Failed to delete avatar. Please try again.");
    }
  });
}
