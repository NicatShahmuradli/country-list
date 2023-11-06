import { getAllCountriesByName } from "./country-httpRequst.js";

let countryDetail = document.querySelector(".country-detail");

let name = new URLSearchParams(location.search).get("name");
console.log(name);



getCountryData();

async function getCountryData() {
  let country = await getAllCountriesByName(name);

  console.log(country[0]);

  countryDetail.innerHTML += `
  <div class="col-3 mb-5">
  <div class="card">
      <div class="card-img">
          <img src="${country[0].flags.png}"
           class="card-img-top" alt="...">
      </div>
      <div class="card-body">
      <h4 class="card-capital"><strong>${country[0].name.common}</strong></h4>
      <p class="card-capital">${country[0].capital}</p>
      <p class="card-popilation">${country[0].population}</p>
      <ul class="qonsu-list mt-3 ">

      </ul>
      </div>
  </div>
</div>`;

  let qonsular = country[0]?.borders;
  let qonsuList = document.querySelector(".qonsu-list");

  qonsular.forEach((qonsu) => {
    if (qonsu) {
      qonsuList.innerHTML += `
        <li>
            <a href="detail.html?name=${qonsu}">${qonsu}</a>
        </li>`;
    }
  });
}
