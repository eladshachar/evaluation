let glutenFree: boolean = false
let dairyFree: boolean = false

$("#gluten-filter").on("click", function(){
    
    glutenFree = $("#gluten").is(":checked") 

})

$("#dairy-filter").on("click", function(){
    
    dairyFree = $("#dairy").is(":checked") 
    
})

$("#search-button").on("click", async function() {
    let ingredient = $("#ingredient").val()
    let recipes = await getRecipes(ingredient, glutenFree, dairyFree)
    renderRecipes(recipes)
})