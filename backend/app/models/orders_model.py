from database import db
from datetime import datetime

class Order(db.Model):
    __tablename__="Pedidos"

    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer,nullable=False)
    title=db.Column(db.String(50),nullable=False)
    author=db.Column(db.String(50), nullable=False)
    order_date=db.Column(db.String, nullable=False)

    def __init__(self,user_id, title, author,order_date):
        self.user_id=user_id
        self.title=title
        self.author=author
        self.order_date=order_date

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all():
        return Order.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Order.query.get(id)

    
