import {
    getAllCountries,
  } from "./country-httpRequst.js";
  
  let dataWrapper = document.querySelector(".cards-wrapper");
  let searchInput = document.querySelector("input");
  let dataForm= document.querySelector(".sendDataForm")

  
  
  dataForm.addEventListener("submit", function(event){
    event.preventDefault();
  });
 
  
  getCountries();
  
  
  
  async function getCountries() {
    const countryData = await getAllCountries();


    countryData.forEach((country) => {
      dataWrapper.innerHTML += `
                        
                    <div class="col-3 mb-5">

                    <a href="./detail.html?name=${country.name.common}">
                    <div class="card">
                        <div class="card-img">
                            <img src="${country.flags.png}"
                             class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                        <h4 class="card-capital"><strong>${country.name.common}</strong></h4>
                        <p class="card-capital">${country.capital}</p>
                        <p class="card-popilation">${country.population}</p>
                        </div>
                    </div>
                    
                    </a>

                    </div>`;
        });
    searchCountries(countryData);


    
  }
  

  async function searchCountries(countries) {
    searchInput.addEventListener("keyup", (element) => {
      let searchedData = countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .trim()
          .includes(element.target.value.trim().toLowerCase())
      );
  
      dataWrapper.innerHTML = "";
  
      searchedData.forEach((data) => {
        generateData(data);
      });
  
    });
  }


  
function generateData(country) {
    dataWrapper.innerHTML += `

    <div class="col-3 mb-5">

    <a href="./detail.html?name=${country.name.common}">
    <div class="card">
        <div class="card-img">
            <img src="${country.flags.png}"
             class="card-img-top" alt="...">
        </div>
        <div class="card-body">
        <h4 class="card-capital"><strong>${country.name.common}</strong></h4>
        <p class="card-capital">${country.capital}</p>
        <p class="card-popilation">${country.population}</p>
        </div>
    </div>
    
    </a>

    </div>`;
        }
        
     