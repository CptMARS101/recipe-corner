from models import db, Food, Author
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os
from models import db, Recipe, User

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return ''
###Might not need ingredients
@app.route('/ingredients', methods = ['GET', 'POST'])
def all_ingredients():
    if request.method == 'GET':
        ingredients = ingredients.query.all()
        return [i.to_dict() for i in ingredients],200
    elif request.method == 'POST':
        json_data = request.get_json()

        new_ingredient = Ingredient(
            name = json_data.get('name')
        )
        db.session.add(new_ingredient)
        db.session.commit()
        return new_ingredient.to_dict(),201

@app.route('/ingredients/<int:id>', methods = ['GET', 'PATCH'])
def ingredients_by_id(id):
    ingredient = Ingredient.query.filter(Ingredient.id == id).first()

    if ingredient is None:
        return {'error': 'ingredient not found'}, 404
    if request.method == 'GET':
        return ingredient.to_dict(), 200
        print 
    elif request.method == 'PATCH': 
        json_data = request.get_json()

        for field in json_data:
            setattr(ingredient, field, json_data[field])
        db.session.add(ingredient)
        db.session.commit()
        return ingredient.to_dict(),200


@app.route('/recipes', methods = ['GET', 'POST'])
def all_recipes():
    if request.method == 'GET':
        recipes = recipes.query.all()
        return [r.to_dict() for r in recipes], 200

    elif request.method == 'POST':
        json_data = request.get_json()

        new_recipe = Recipe(
            name = json_data.get('name'), 
            ingredients = json_data.get('ingredients'),
            img = json_data.get('image')
        )
        db.session.add(new_recipe)
        db.session.commit()

        return new_recipe.to_dict(), 201



@app.route('/recipes/<int:id>', methods = ['GET', 'PATCH'])
def recipe_by_id(id):
    recipe = Recipe.query.filter(Recipe.id == id).first()

    if recipe is None: 
        return {'error': 'recipe not found'}, 404
    
    if request.method == 'GET':
        return ingredient.to_dict(),200
    elif request.method == 'PATCH':
        json_data = request.get_json()
        for field in json_data:
            setattr(recipe, field, json_data[field])
        db.session.add(recipe)
        db.session.commit()

        return recipe.to_dict(),200

@app.route('/authors', methods = ['GET', 'POST'])
def authors():
    authors = Author.query.all()
    return [a.to_dict() for a in authors], 200
@app.route('/authours/<int:id>', methods == ['GET', 'PATCH'])
def authors_by_id(id): 
    author = Author.query.filter(Author.id == id).first()

    if author is None:
        return {'error': 'author not found'}, 404
    if request.method == 'GET':
        return author.to_dict(),200
    elif request.method == 'PATCH':
        json_data = request.get_json()
        for field in json_data:
            setattr(author, field, json_data[field])
        db.session.add(author)
        db.session.commit()
        
        return author.to_dict(),200
