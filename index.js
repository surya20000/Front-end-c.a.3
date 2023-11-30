const randomImage = document.querySelector('.random-image');
const dishIngredients = document.querySelector('.dish-ingredients');

randomImage.addEventListener('click', function () {
    dishIngredients.classList.toggle('hidden');
});
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((value) => value.json())
    .then((parsedData) => {
        console.log(parsedData);
        // random image genration code
        const dishName = parsedData.meals[0].strMeal;
        document.getElementsByClassName('dish-info')[0].textContent = dishName;
        const imglink = parsedData.meals[0].strMealThumb;
        document.querySelector('.random-image').src = imglink;
        // ingrdients list code 
        const ingre1 = parsedData.meals[0].strIngredient1;
        document.getElementsByClassName('ing 1')[0].textContent = ingre1;
        const ingre2 = parsedData.meals[0].strIngredient2;
        document.getElementsByClassName('ing 2')[0].textContent = ingre2;
        const ingre3 = parsedData.meals[0].strIngredient1;
        document.getElementsByClassName('ing 3')[0].textContent = ingre3;
        const ingre4 = parsedData.meals[0].strIngredient4;
        document.getElementsByClassName('ing 4')[0].textContent = ingre4;
        const ingre5 = parsedData.meals[0].strIngredient5;
        document.getElementsByClassName('ing 5')[0].textContent = ingre5;
        const ingre6 = parsedData.meals[0].strIngredient6;
        document.getElementsByClassName('ing 6')[0].textContent = ingre6
    });
// category images and dish name display code
// fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//     .then((data) => data.json())
//     .then((parsedData2) => {
//         console.log(parsedData2);
//         for (let i = 0; i < parsedData2.meals.length; i++) {
//             const foodName = parsedData2.meals[i].strMeal;
//             document.getElementsByClassName(`dish-info ${i + 2}`)[0].textContent = foodName;

//             const imgSrc = parsedData2.meals[i].strMealThumb;
//             document.getElementsByClassName(`images`)[i].children[0].src = imgSrc;
//         }
//     });

// code for the input entered by the user and then the images being displayed
const searchInput = document.querySelector('.inpu');
const searchButton = document.querySelector('button');
const imageContainer = document.querySelector('.image-container');

// searchInput.addEventListener('click',
function valueF() {
    const searchValue = searchInput.value;
    const searchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchValue}`;

    // Fetch data and update the image container
    fetch(searchURL)
    .then((data) => data.json())
    .then((parsedData) => {
        console.log(parsedData);
        for (let i = 0; i < parsedData.meals.length; i++) {
            const foodName = parsedData.meals[i].strMeal;
            document.getElementsByClassName(`dish-info-${i + 2}`)[0].textContent = foodName;

            const imgSrc = parsedData.meals[i].strMealThumb;
            document.getElementsByClassName(`images`)[i].children[0].src = imgSrc;
        }
    })
    // Remove the 'hidden' class from the image container
    imageContainer.classList.remove('hidden');
};
// searchButton.addEventListener('click', valueF,)


// f=()=> {
//     // searchInput.addEventListener('input', function () {
//         const searchValue = searchInput.value;

//         if (searchValue === '') {
//             imageContainer.classList.add('hidden');
//         }
//     };



// const imageContainer = document.querySelector('.image-container');

f = () =>{
  
        const searchValue = searchInput.value;
    
        if (searchValue !== '') {
            imageContainer.classList.remove('hidden');
        } else {
            imageContainer.classList.add('hidden');
        }
    };


    searchButton.addEventListener('click', ()=>{
        valueF();
        f()
    
    })