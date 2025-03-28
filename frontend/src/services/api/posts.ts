// FETCH REQUEST - - - - - - - - - - - - 

export const userAPI = {
	postDatas: async (data: Object, endpoint: string) => {
		let url = 'https://localhost:3000/' + endpoint;
			return await fetch(url, {
				method: "POST",
				headers: {
					'Content-type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(data)
			}).then( response => response );
	},

	getDatas:  () => {
		//	change in future url (when database will be ready to use) 
		let url = "https://jsonplaceholder.typicode.com/posts";

		 fetch(url)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log('Error fetching data: ' + error));
	}
}


// AXIOS REQUEST - - - - - - - - - - - - 
// console.log("axios works properly");

// const instance = axios.create({
// 	baseURL: "https://jsonplaceholder.typicode.com/posts",
// });

// export const userAPI = {
// 	getDatas: () => {
// 		//	change in future url (when database will be ready to use) 
// 		return instance.get("")
// 			.then(response => console.log(response.data))
// 	},

// 	postDatas: (data: Object) => {
// 		//	change in future url (when database will be ready to use) 
// 		instance.post("", data)
// 			.then(response => console.log(response))
// 			.then((result) => console.log("Data successfully delivered: with axios", result))
// 			.catch((error) => console.log("Error posting data: " + error));
// 	},
// }
