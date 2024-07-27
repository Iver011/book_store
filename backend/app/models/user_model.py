from werkzeug.security import generate_password_hash, check_password_hash
from database import db
from flask_login import UserMixin
import json

class User(UserMixin, db.Model):
    __tablename__="Usuarios"

    id=db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(50), nullable=False)
    password=db.Column(db.String(50),nullable=False)
    role=db.Column(db.String(50), nullable=False)


    def __init__(self,username,email,password,role=["customer"]):
        self.username=username
        self.password=generate_password_hash(password)
        self.email=email
        self.role=json.dumps(role)

    def save(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_email(email):
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def get_all():
        return User.query.all()
