from models import db, Recipe, User
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request, session
from flask_cors import CORS
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = os.environ.get('SECRET_KEY')

db.init_app(app)

migrate = Migrate(app, db)
CORS(app, supports_credentials=True)

@app.route('/')
def home():
    return ''

@app.route('/recipes', methods = ['GET', 'POST'])
def all_recipes():
    if request.method == 'GET':
        recipes = Recipe.query.all()
        return [r.to_dict(rules = ['-recipes']) for r in recipes], 200

    elif request.method == 'POST':
        json_data = request.get_json()
        ######Getting signed in user
        user_session_id = session.get('user_id')
        user_session = User.query.filter(User.id == user_session_id).first()

        new_recipe = Recipe(
            name = json_data.get('name'), 
            ingredients = json_data.get('ingredients'),

            image = json_data.get('image'),
            user_id = user_session_id,
            user = user_session


        )
        db.session.add(new_recipe)
        db.session.commit()

        return new_recipe.to_dict(), 201
    
@app.route('/recipes/<int:id>', methods = ['GET', 'PATCH','DELETE'])
def recipe_by_id(id):
    recipe = Recipe.query.filter(Recipe.id == id).first()

    if recipe is None: 
        return {'error': 'recipe not found'}, 404
    
    if request.method == 'GET':
        return recipe.to_dict(),200
    elif request.method == 'PATCH':
        json_data = request.get_json()
        for field in json_data:
            setattr(recipe, field, json_data[field])
        db.session.add(recipe)
        db.session.commit()

        return recipe.to_dict(),200
    
    elif request.method == 'DELETE':
        
        if recipe is None: 
            return {'error': 'recipe not found'}, 404
        db.session.delete(recipe)
        db.session.commit()
        return {}, 204

@app.route('/login', methods = ['POST'])
def login():
    json_data = request.get_json()
    user = User.query.filter(User.username == json_data.get('username')).first()
    if not user:
        return {'error': 'no such user'}, 404
    if not user.authenticate(json_data.get('password')):
        return {'error': 'wrong password'}
    session['user_id'] = user.id
    return user.to_dict(), 200

@app.route('/signup', methods = ['POST'])
def signup():
    json_data = request.get_json()
    new_user = User(username=json_data.get('username'))
    new_user.password_hash = json_data.get('password')
    db.session.add(new_user)
    db.session.commit()
    return new_user.to_dict(),201

@app.route('/logout', methods = ['DELETE'])
def logout():
    session.pop('user_id', None)
    return {}, 204

@app.route('/check_session')
def check_session():
    user_id = session.get('user_id')
    user = User.query.filter(User.id == user_id).first()
    if not user:
        return {'error': 'unauth'}, 401
    return user.to_dict(), 200    

