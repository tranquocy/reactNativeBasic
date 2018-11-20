const apiGetItems = 'https://5bf22481a60fe600134cded6.mockapi.io/items/'
async function getItemFromServer() {
  try {
    let response = await fetch(apiGetItems);
    let responseJSON = await response.json();
    return responseJSON
  } catch(error) {
    console.log(error);
  }
}

// Insert new item
async function insertNewItemToServer(params) {
  try {
    let response = await fetch(apiGetItems, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    let responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.log(`Error is ${error}`);
  }
}

export {getItemFromServer, insertNewItemToServer};
