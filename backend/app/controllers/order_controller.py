from flask import Blueprint,jsonify,request
from views.order_view import render_order_detail,render_order_list
from utils.decorators import jwt_required,roles_required
from models.orders_model import Order



order_bp=Blueprint("order",__name__)
@order_bp.route("/orders", methods=["GET"])
@jwt_required
@roles_required(role=["admin"])
def get_orders():
    orders=Order.get_all()
    return jsonify(render_order_list(orders))

@order_bp.route("/orders", methods=["POST"])
@jwt_required
@roles_required(role=["customer"])
def create_order():
    
    data=request.json
    user_id=data.get("user_id")
    title=data.get("title")
    author=data.get("author")
    order_date=data.get("order_date")
    
    if not title or not author:
        return jsonify({"error":"Faltan datos requeridos"}),400
    
    order=Order(user_id=user_id,title=title,author=author,order_date=order_date)
    order.save()
    return jsonify(render_order_detail(order)),201


@order_bp.route("/orders/<int:id>", methods=["DELETE"])
@jwt_required
@roles_required(role=["admin","customer"])
def delete_order(id):
    order=Order.get_by_id(id)
    if not order:
        return jsonify({"error":"Pedido no encontrado"}),404
    order.delete()
    return "",204
