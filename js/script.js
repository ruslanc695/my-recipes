const mealsHTML = document.getElementById('meals');



getRandomMeal();

async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

    const respData = await resp.json();

    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
}

// async function getMealById(id) {
//     const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
// }

// async function getMealBySerach(term) {
//     const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
// }


function addMeal(mealData) {
    const meal = document.createElement('div');
    meal.classList.add('meal');


    meal.innerHTML = `
    <div class="meal-header">
        <p class="meal-header-on-img">Recipe of the Day</p>
        <img src="${mealData.strMealThumb}" alt="">
    </div>
    <div class="meal-body">
        <div class="body-txt">${mealData.strMeal}</div>
        <button class="fav-btn">
            <i class="fas fa-heart"></i>
        </button>
    </div>
    <p class="meal-link"><a target="_blank" href="${mealData.strYoutube}">Video</a></p>`


    const btn = meal.querySelector('.meal-body .fav-btn');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');

    });
    mealsHTML.appendChild(meal);

}