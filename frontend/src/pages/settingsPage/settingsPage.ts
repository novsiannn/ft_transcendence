import { navigationHandle } from "../../nagivation";
import { userAPI } from "../../services/api";

export function handleSettings() {
	navigationHandle();
	const inputs = document.querySelectorAll<HTMLInputElement>("#inputUserInfo");
	const btnSave = document.querySelector<HTMLButtonElement>("#saveChangesSettings");
	const profileImgContainer = document.querySelector<HTMLDivElement>("#profileImgContainer");
	const uploadImgBtn = document.querySelector<HTMLInputElement>("#uploadImgBtn");	
	
	const data: Record<string, string> = {};

	// uploadImgBtn!.addEventListener('change', async (event) => {
	// 	const input = event.target as HTMLInputElement;
		
	// 	if(input.files!.length > 0){
	// 		const imgFile = input.files![0];
	// 		const isImageType = imgFile!.type.startsWith("image");
	// 	}
		
	// })

	btnSave!.addEventListener('click', () => {
		try {
			inputs.forEach((input) => {
				if(!input.value)
					throw new Error("empty area!");
				data[input.placeholder.split(" ").join("")] = input.value;
			})
			userAPI.postDatas(data, 'settings');
		}
		catch (error) {
			alert(error)
		}
	});

}