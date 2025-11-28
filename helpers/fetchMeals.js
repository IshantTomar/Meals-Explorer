async function fetchMeals() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
};

module.exports = { fetchMeals };