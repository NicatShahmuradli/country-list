let API_URL = "https://restcountries.com/v3.1/all";
let loader = document.querySelector(".loader-wrapper");

// countries get all
export async function getAllCountries() {
  let globalData;
  await axios
    .get(API_URL)

    .then((result) => {
      globalData = result.data;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
        loader.classList.add("d-none");
    });
    

  return globalData;
}


// countries get by Name:

export async function getAllCountriesByName(name) {
  let globalData;
  await axios.get('https://restcountries.com/v3.1' + `/name/${name}`).then((result) => {
    globalData = result.data;
  });
  return globalData;
}