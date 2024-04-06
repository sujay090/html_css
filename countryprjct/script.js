const countryContainer = document.querySelector(".card-container");
const filterByCountry = document.querySelector(".select");
const modeBtn=document.querySelector(".mode-btn")
let allcountris;
const filterByCountryname = document.querySelector(".search-box input")
 const getcountryCard = async () => {
  let responce = await fetch("https://restcountries.com/v3.1/all");
  // console.log(responce);
  let data = await responce.json();
  rendercountry(data);
  allcountris=data;
};

filterByCountry.addEventListener("change", (e) => {
  let filterBy = async () => {
    let responce = await fetch(`https://restcountries.com/v3.1/region/${filterByCountry.value}`);
    // console.log(responce);
    let data = await responce.json();
    countryContainer.innerHTML = "";
    rendercountry(data);
  };
  filterBy();
});

function rendercountry(data) {
  data.forEach((country) => {
    countryContainer.innerHTML +=`<a href="country.html?name=${
      country.name.common
    }" class="country-card">
      <img src="${country.flags.svg}" alt="flag" />
      <div class="country-details">
        <h2>${country.name.common}</h2>
        <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
      </div>
    </a>`;
     
  });
}

filterByCountryname.addEventListener("input",(e)=>{
    const alradyFilter=allcountris.filter((country)=> country.name.common.toLowerCase().includes(filterByCountryname.value.toLowerCase()))
    countryContainer.innerHTML=''
    rendercountry(alradyFilter);
})

modeBtn.addEventListener("click",()=>{
  document.body.classList.toggle('dark')
})

getcountryCard();
