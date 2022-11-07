const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    // for (const country of countries) {
    //     console.log(country);   
    // }
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        // console.log(country);
        div.innerHTML = `
         <h3>Name: ${country.name.common}</h3>
         <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
         <button onclick="loadCountryDetail('${country.cca2}')">Details:</Button>
       `;
        countriesContainer.appendChild(div);
    })
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code);
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displyCountryDetail(data[0]))
}

const displyCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
     <h2>Detail: ${country.name.common}</h2>
     <img src="${country.flags.png}">
    `
}
loadCountries();