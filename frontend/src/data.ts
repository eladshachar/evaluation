const get_recipes = async function (ingredient: string, noGluten: boolean, noDairy: boolean) {
    
    let glutenFree: string
    let dairyFree: string

    if(noGluten){
        glutenFree = 'true'
    }
    else{
        glutenFree = 'false'
    }

    if(noDairy){
        dairyFree = 'true'
    }
    else{
        dairyFree = 'false'
    }

    let recipes: JSON

    recipes = await $.get(`http://127.0.0.1:8000/recipes?ingredient=${ingredient}&no_dairy=${dairyFree}&no_gluten=${glutenFree}`)

    return recipes
}