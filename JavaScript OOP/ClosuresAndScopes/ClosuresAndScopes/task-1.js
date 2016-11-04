function solve() {
    var library = (function () {
        var books = [];
        var categories = [];
        var titles = [];
        var isbns = [];

        function listBooks(obj) {
            if (!!obj) {
                var result = books.filter(function book() {
                    return book.category === obj.category;
                });

                return result;
            }

            return books;
        }

        function addBook(book) {
            var id;

            if (!book.title || !book.isbn || !book.author || !book.category) {
                throw new Error('Invalid input parameters!');
            }

            if (book.title.length < 2 || book.title.length > 100) {
                throw new Error('Book title must be between 2 and 100 characters!');
            }

            if (titles.indexOf(book.title) !== -1) {
                throw new Error('Duplicate title name!');
            }

            if (isNaN(book.isbn) || !(book.isbn.toString().length === 10 || book.isbn.toString().length === 13) || isbns.indexOf(book.isbn) !== -1) {
                throw new Error('Invalid ISBN number!');
            }

            if (book.author === '') {
                throw new Error('Author name must be non-empty string!');
            }

            if (book.category.length < 2 || book.category.length > 100) {
                throw new Error('Book category must be between 2 and 100 characters!');
            }

            book.ID = books.length + 1;
            titles.push(book.title);
            isbns.push(book.isbn);

            if (categories.indexOf(book.category) === -1) {
                categories.push(book.category);
            }

            books.push(book);

            return book;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());

    return library;
}