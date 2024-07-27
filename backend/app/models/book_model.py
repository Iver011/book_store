from database import db
from sqlalchemy import func
class Book(db.Model):
    __tablename__="Libros"

    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(50), nullable=False)
    price=db.Column(db.Float, nullable=False)
    author=db.Column(db.String(50), nullable=False)
    editorial=db.Column(db.String(100), nullable=False)
    number_pages=db.Column(db.Integer,nullable=False)
    bookbinding=db.Column(db.String(50), nullable=False)
    copies=db.Column(db.Integer,nullable=False)
    description=db.Column(db.String(500), nullable=False)
    cover=db.Column(db.String(100), nullable=False)


    def __init__(self,title,price,author,editorial,number_pages,bookbinding,description,copies,cover):
        self.title=title
        self.price=price
        self.author=author
        self.editorial=editorial
        self.number_pages=number_pages
        self.bookbinding=bookbinding
        self.copies=copies
        self.description=description
        self.cover=cover

    def save(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_all(order_by=None, limit=None):
        query=Book.query
        if order_by:
            if order_by=="copies":
                query=query.order_by(Book.copies.desc())
        if limit:
            query=query.limit(limit=limit)
        return query.all()
    
    @staticmethod
    def get_by_id(id):
        return Book.query.get(id)
    
    @staticmethod
    def get_by_name(title):
        print ("model",title)
        normalized_title=title.lower()
        return Book.query.filter(func.lower(Book.title) == normalized_title).first()

    
    def update(self,title=None,price=None,author=None,editorial=None,number_pages=None,bookbinding=None,copies=None,description=None, cover=None):
        if title is not None:
            self.title=title
        if price is not None:
            self.price=price
        if author is not None:
            self.author=author
        if number_pages is not None:
            self.number_pages=number_pages
        if copies is not None:
            self.copies=copies
        if bookbinding is not None:
            self.bookbinding=bookbinding
        if description is not None:
            self.description=description
        if cover is not None:
            self.cover=cover
        db.session.commit()
    

    def delete(self):
        db.session.delete(self)
        db.session.commit()