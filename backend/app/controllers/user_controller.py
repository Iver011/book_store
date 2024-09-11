from flask import Blueprint,request,jsonify
from models.user_model import User
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash
from views.user_view import render_user_list

user_bp=Blueprint("user",__name__)

@user_bp.route("/users", methods=["GET"])
def get_all_users():
    users=User.get_all()
    return jsonify(render_user_list(users))


@user_bp.route("/register", methods=["POST"])
def register():
    data=request.json
    username=data.get("username")
    email=data.get("email")
    password=data.get("password")
    role=data.get("role")

    if not username or not email or not password:
        return jsonify({"error":"Faltan datos requeridos"}),400
    
    existing_user=User.get_by_email(email)
    if existing_user:
        return jsonify({"error":"El correo electronico ya esta en uso"}),400
    new_user=User(username=username,email=email,password=password,role=role)
    new_user.save()

    return jsonify({"message": "Usuario creado exitosamente"}),201


@user_bp.route("/login", methods=["POST"])
def login():
    data=request.json
    email=data.get("email")
    password=data.get("password")

    user=User.get_by_email(email)
    if user and check_password_hash(user.password, password):
        access_token=create_access_token(identity={"username":email,"role":user.role})
        return jsonify(access_token=access_token),200
    else: 
        return jsonify({"error":"Credeciales no validas"}),401