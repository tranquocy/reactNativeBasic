const apiGetItems = 'https://5bf22481a60fe600134cded6.mockapi.io/items'
async function getItemFromServer() {
  try {
    let response = await fetch(apiGetItems);
    let responseJSON = await response.json();
    return responseJSON
  } catch(error) {
    console.log(error);
  }
}

export default getItemFromServer;
