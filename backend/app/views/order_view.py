def render_order_list(orders):
    return[
        {
            "id":order.id,
            "user_id":order.user_id,
            "title":order.title,
            "author":order.author,
            "order_date":order.order_date

        } for order in orders
    ]


def render_order_detail(order):
    return {
            "id":order.id,
            "user_id":order.user_id,
            "title":order.title,
            "author":order.author,
            "order_date":order.order_date
        
    }