console.log("fetch works");

export let postDatas = async (data: Object) => {
  let url = 'https://jsonplaceholder.typicode.com/posts';
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
	.then( response => response.json())
	.then((result) =>  console.log("Data successfully delivered:", result))
	.catch((error) => console.log("Error posting data: " + error));
};

export let getDatas = async () => {
  let url = "https://jsonplaceholder.typicode.com/posts";

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log("All posts:", data);

    // Дополнительно можно фильтровать или искать в ответе ваши данные
  } catch (error) {
    console.log('Error fetching data: ' + error);
  }
};
