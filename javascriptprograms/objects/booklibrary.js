// books = {
//     "randamoozham": { book_name: "randamoozham", prize: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },
//     "aadujeevitham": { book_name: "aadujeevitham", prize: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
//     "rainrising": { book_name: "rainrising", prize: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
//     "halfgirlfriend": { book_name: "halfgirlfriend", prize: 550, author: "chethan bhagat", avl_copies: 150, sold_copies: 140 }
// };

class bookLibrary {
    books = {
        "randamoozham": { book_name: "randamoozham", prize: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },
        "aadujeevitham": { book_name: "aadujeevitham", prize: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
        "rainrising": { book_name: "rainrising", prize: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
        "halfgirlfriend": { book_name: "halfgirlfriend", prize: 550, author: "chethan bhagat", avl_copies: 150, sold_copies: 140 }
    };

    // findBook(book_name){
    //     if (book_name in this.books){
    //         console.log(this.books[book_name]);
    //     }
    //     else{
    //         console.log("book unavailable");
    //     }
    // };

    orderby_sold() {
        Object.entries(this.books).sort((book1,book2) => (book1[1].sold_copies-book2[1].sold_copies)).forEach(copy => console.log(copy));
    }
};

var book = new bookLibrary;
// book.findBook("halfgirlfriend");
book.orderby_sold();