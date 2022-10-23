let glutenFree: boolean = false
let dairyFree: boolean = false

$("#gluten-filter").on("click", function(){
    
    glutenFree = $("#gluten-filter").is(":checked") 

})

$("#dairy-filter").on("click", function(){
    
    dairyFree = $("#dairy-filter").is(":checked") 
    
})

$("#search-button").on("click", async function() {
    let ingredient: string = "cheese" 
    // ingredient = $("#ingredient").val()
    let recipes = await getRecipes(ingredient, glutenFree, dairyFree)
    console.log(recipes)
    renderRecipes(recipes)
})