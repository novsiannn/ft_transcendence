import { handleRequests } from "./handleRequests";

// export const userAPI = {
// 	postDatas: async (data: Object, endpoint: string) => {
// 			return await fetch(API_URL + endpoint, {
// 				method: "POST",
// 				headers: {
// 					'Content-type': 'application/json;charset=utf-8'
// 				},
// 				body: JSON.stringify(data)
// 			}).then( response => handleRequests(response.status));
// 	},

// 	getDatas:  () => {
// 		//	change in future url (when database will be ready to use) 
// 		let url = "https://jsonplaceholder.typicode.com/posts";

// 		 fetch(url)
// 			.then(response => response.json())
// 			.then(data => console.log(data))
// 			.catch(error => console.log('Error fetching data: ' + error));
// 	}
// }
