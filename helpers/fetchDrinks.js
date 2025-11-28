async function fetchDrinks() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
};

module.exports = { fetchDrinks };