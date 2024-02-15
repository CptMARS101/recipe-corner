from random import choice as rc

from app import app
from models import db, Recipe, User

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        User.query.delete()
        Recipe.query.delete()
########ADD SOME RECIPES
        print("Seeding recipes...")
        recipes = [
            Recipe(name="", image="", ingredients=[], steps=[]),
            Recipe(name="", image="", ingredients=[], steps=[]),
            Recipe(name="", image="", ingredients=[], steps=[]),
            Recipe(name="", image="", ingredients=[], steps=[])
        ]

        db.session.add_all(recipes)
########ADD SOME USERS AND PWORDS
        print("Seeding users...")
        users = [
            User(name="Kamala Khan", password="Ms. Marvel"),
            User(name="Doreen Green", password="Squirrel Girl"),
            User(name="Gwen Stacy", password="Spider-Gwen"),
            User(name="Janet Van Dyne", password="The Wasp")
        ]

        db.session.add_all(users)
#######FIX THIS PART###########
        print("Adding recipes to users...")
        for user in users:
            recipe = rc(recipes)
            user.recipes.append(
                recipe
            )
        db.session.add_all(recipes)
        db.session.commit()
#####################################
        print("Done seeding!")