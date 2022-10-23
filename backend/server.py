from urllib import response
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import json
import requests
import uvicorn

from db_queries import get_dairy_ingredients, get_gluten_ingredients

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/recipes", status_code=200)
def get_recipes_by_ingredient(ingredient, no_dairy, no_gluten):

    results = requests.get(f'https://recipes-goodness.herokuapp.com/recipes/{ingredient}')
    recipes_raw = results.json()["results"]
    
    banned_ingredients = []

    if no_dairy == 'true':
        dairy_ingredients = get_dairy_ingredients()

        for ingredient in dairy_ingredients:
            banned_ingredients.append(ingredient)
    
    if no_gluten == 'true':
        gluten_ingredients = get_gluten_ingredients()

        for ingredient in gluten_ingredients:
            banned_ingredients.append(ingredient)

    print(banned_ingredients)

    filtered_recipes = []

    for recipe in recipes_raw:
        allergenic = False

        for ingredient in recipe["ingredients"]:
            if ingredient in banned_ingredients:
                allergenic = True
        
        if allergenic == False:
            filtered_recipes.append(recipe)
    
    return filtered_recipes
    



if __name__ == "__main__":
    uvicorn.run('server:app', host="0.0.0.0", port=8000, reload=True)