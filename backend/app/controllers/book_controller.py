from flask import Blueprint, jsonify, request
from models.book_model import Book
from views.book_view import render_book_detail, render_book_list
from utils.decorators import roles_required, jwt_required

book_bp = Blueprint("Book", __name__)

@book_bp.route("/books", methods=["GET"])
def get_books():
    order_by=request.args.get("order_by")
    limit=request.args.get("limit",type=int)
    books = Book.get_all(order_by=order_by, limit=limit)
    return jsonify(render_book_list(books))

@book_bp.route("/books/<id_or_name>", methods=["GET"])
def get_book(id_or_name):
    print(id_or_name)
    book=Book.get_by_id(id_or_name)
    if not book:  # Verifica si es un número (para ID)/
        book = Book.get_by_name(id_or_name)
        if not book:
            return jsonify({"error": "Libro no encontrado"}), 404
    return jsonify(render_book_detail(book))
    

@book_bp.route("/books", methods=["POST"])
@jwt_required
@roles_required(role=["admin"])
def create_book():
    data = request.json

    print("Received data:", data)

    title = data.get("title")
    price = data.get("price")
    author = data.get("author")
    editorial = data.get("editorial")
    number_pages = data.get("numberPages")
    copies = data.get("copies")
    bookbinding = data.get("bookbinding")
    description = data.get("description")
    cover = data.get("cover")

    if not title or not price or not author or not editorial or not number_pages or not bookbinding or not description or not copies or not cover:
        return jsonify({"error": "Faltan datos requeridos"}), 400

    book = Book(
        title=title,
        price=price,
        author=author,
        editorial=editorial,
        number_pages=number_pages,
        bookbinding=bookbinding,
        copies=copies,
        description=description,
        cover=cover
    )
    book.save()
    return jsonify(render_book_detail(book)), 201

@book_bp.route("/books/<int:id>", methods=["PUT"])
@jwt_required
@roles_required(role=["admin"])
def update_book(id):
    book = Book.get_by_id(id)
    if not book:
        return jsonify({"error": "Libro no encontrado"}), 404

    data = request.json
    
    print("Received data for update:", data)

    title = data.get("title")
    price = data.get("price")
    author = data.get("author")
    editorial = data.get("editorial")
    number_pages = data.get("numberPages")
    copies = data.get("copies")
    bookbinding = data.get("bookbinding")
    description = data.get("description")
    cover = data.get("cover")

    book.update(
        title=title,
        price=price,
        author=author,
        editorial=editorial,
        number_pages=number_pages,
        copies=copies,
        bookbinding=bookbinding,
        description=description,
        cover=cover
    )
    return jsonify(render_book_detail(book))

@book_bp.route("/books/<int:id>", methods=["DELETE"])
@jwt_required
@roles_required(role=["admin"])
def delete_book(id):
    book = Book.get_by_id(id)
    if not book:
        return jsonify({"error": "Libro no encontrado"}), 404
    book.delete()
    return "", 204
