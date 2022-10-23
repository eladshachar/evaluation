from unittest import result
import pymysql
from requests import Response

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="recipes_app",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)

def get_dairy_ingredients():
    
    try:
        with connection.cursor() as cursor:
            query = 'SELECT ingredient FROM allergens_ingredients WHERE name = \'dairy\''
            cursor.execute(query)
            results = cursor.fetchall()
            ingredients = [ingredient['ingredient'] for ingredient in results]
            return ingredients
    except:
        return 'Failed to query a list of dairy ingredients'

def get_gluten_ingredients():
    
    try:
        with connection.cursor() as cursor:
            query = 'SELECT ingredient FROM allergens_ingredients WHERE name = \'gluten\''
            cursor.execute(query)
            results = cursor.fetchall()
            ingredients = [ingredient['ingredient'] for ingredient in results]
            return ingredients
    except:
        return 'Failed to query a list of ingredients containing gluten'