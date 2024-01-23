document.getElementById("countryForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const countryInput = document.getElementById("countryInput").value;

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
        const jsonData = await response.json();
        displayCountryInfo(jsonData[0]);
        console.log(jsonData);
    } catch (error) {
    }
});

function displayCountryInfo(country) {
    const countryInfo = document.getElementById("countryInfo");
    const countryFlag = document.getElementById("countryFlag");
    const countryCoatOfArms = document.getElementById("countryCoatOfArms");
    const countryName = document.getElementById("countryName");
    const countryCapital = document.getElementById("countryCapital");
    const countryCurrencies = document.getElementById("countryCurrencies");
    const countryLanguages = document.getElementById("countryLanguages");

    // country flag
    countryFlag.innerHTML = `<img src="${country.flags.png}" alt="Country Flag">`;

    //country coat of arms
    if (country.coatOfArms) {
        countryCoatOfArms.innerHTML = `<img src="${country.coatOfArms.png}" alt="Coat of Arms">`;
    }

    // country name and capital
    countryName.textContent = country.name.common;
    countryCapital.textContent = `Capital: ${country.capital}`;

    // currencies
    countryCurrencies.innerHTML = "";
    for (const currency of Object.values(country.currencies)) {
        const currencyItem = document.createElement("li");
        currencyItem.textContent = currency.name;
        countryCurrencies.appendChild(currencyItem);
    }

    // languages
    countryLanguages.innerHTML = "";
    for (const language of Object.values(country.languages)) {
        const languageItem = document.createElement("li");
        languageItem.textContent = language;
        countryLanguages.appendChild(languageItem);
    }

    // country information
    countryInfo.classList.remove("hidden");
}






