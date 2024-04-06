const countryName = new URLSearchParams(location.search).get("name");
// console.log(countryName);
const imge = document.querySelector(".country-details-container img");
const countryHeading = document.querySelector(".counrty-name");
const nativeName2 = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const sub_region = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const domain = document.querySelector(".domain");
const Currencies = document.querySelector(".Currencies");
const languge = document.querySelector(".languge");
const borderCountris = document.querySelector(".border-contris");
const backButton = document.querySelector(".back-btn");
const modeBtn= document.querySelector(".mode-btn")
// fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//   .then((res) => res.json())
//   .then(([country]) => {
//     console.log(country);
//     imge.src = country.flags.svg;
//     countryHeading.textContent = country.name.common;

//     if (country.name.nativeName) {
//       // nativeName2.textContent = Object.values(country.name.nativeName[0].common);
//     } else {
//       nativeName2.textContent = country.name.common;
//     }
//     population.textContent = country.population.toLocaleString("en-IN");
//     region.textContent = country.region;
//     sub_region.textContent = country.subregion;
//     capital.textContent = country.capital;
//     domain.textContent = country.tld;
//     if (country.currencies) {
//       Currencies.textContent = Object.values(country.currencies).map(
//         (currency) => currency
//       );
//     }
//     languge.textContent = `${country.languages.ell},${country.languages.tur}`;
//   });

// const URL=`${base_url}/${fromvalue.value.toLowerCase}/${tovalue.value.toLowerCase}.json`;
const getCounrtyData = async () => {
  let responce = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  // console.log(responce);
  let [country] = await responce.json();
  console.log(country);
  imge.src = country.flags.svg;
  countryHeading.textContent = country.name.common;
  if (country.name.nativeName) {
    nativeName2.textContent = Object.values(country.name.nativeName)[0].common;
  } else {
    nativeName2.textContent = country.name.common;
  }
  population.textContent = country.population.toLocaleString("en-IN");
  region.textContent = country.region;
  sub_region.textContent = country.subregion;
  capital.textContent = country.capital;
  domain.textContent = country.tld;
  if (country.currencies) {
    Currencies.textContent = Object.values(country.currencies).map(
      (currency) => currency.name
    );
  }
  // languge.textContent = `${country.languages.ell},${country.languages.tur}`;
  languge.textContent = Object.values(country.languages);

  if (country.borders) {
    country.borders.forEach((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          const borderCountryTag = document.createElement("a");
          borderCountryTag.innerText = borderCountry.name.common;
          borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
          borderCountris.append(borderCountryTag);
        });
    });
  }
};

backButton.addEventListener("click", () => {
  history.back();
});
modeBtn.addEventListener("click",()=>{
  document.body.classList.toggle('dark')
})

getCounrtyData();
