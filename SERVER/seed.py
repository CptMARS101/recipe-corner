from random import randint, choice as rc 

from faker import faker
from faker_food import FoodProvider

from app import app

from models import db, Ingredient, Recipe, User

fake = Faker()

def create_ingredients():
    ingredients = []
    for _ in range(20):
        i = Ingredient(
            name = fake.ingredient(), 
        )
        ingredients.append(i)

    return ingredients

def create_recipes():
    recipes = []
    for _ in range(10):
        r = Recipe(
            name = fake.dish(),
            ingredients = fake.ingredient(),
            user_id = rc([user.id for user in users]),
            user = fake.name()

        )
        recipes.append(r)
    return recipes

def create_users():
    users = []
    for _ in range (20):
        u = User(
            username = fake.username(),
            password = fake.password(), 
            recipes = 

        )
