def render_book_list(books):
    return[
        {
            "id":book.id,
            "title":book.title,
            "price":book.price,
            "author":book.author,
            "editorial":book.editorial,
            "number_pages":book.number_pages,
            "copies":book.copies,
            "bookbinding":book.bookbinding,
            "description":book.description,
            "cover":book.cover
            
        }
        for book in books
    ]

def render_book_detail(book):
    return {
            "id":book.id,
            "title":book.title,
            "price":book.price,
            "author":book.author,
            "editorial":book.editorial,
            "number_pages":book.number_pages,
            "copies":book.copies,
            "bookbinding":book.bookbinding,
            "description":book.description,
            "cover":book.cover
    }