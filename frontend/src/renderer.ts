const renderRecipes = function(recipes: JSON): void{
    $("#recipes-container").empty()
    const rawtemplate = $("#recipes-template").html()
    const template = Handlebars.compile(rawtemplate)
    const HTML = template({recipes:recipes})
    $("#recipes-container").append(HTML)
}