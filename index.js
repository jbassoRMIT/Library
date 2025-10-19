const library=[
    {
        id:1,
        title:"Harry Potter",
        author: "JK Rowling"
    },
    {
        id:2,
        title:"LOTR",
        author: "JRR Tolkien"
    },
    {
        id:1,
        title:"Intermezzo",
        author: "Sally Rooney"
    },
];

//Setup book constructor
function Book(title,author){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
}

function addBookToLibrary(bookTitle,bookAuthor) {
    // take params, create a book then store it in the array
    const book=new Book(bookTitle,bookAuthor);
    library.push(book);
}

//Add script in to create a table and then iterate over library, creating a row with all the details of each book
//target table div
const tableDiv=document.querySelector(".table");

//create a table, add a table header row with column names and append to tableDiv
const table=document.createElement("table");
const headers=document.createElement("tr");
const idHeader=document.createElement("th");
idHeader.textContent="ID";
const titleHeader=document.createElement("th");
titleHeader.textContent="Title";
const authorHeader=document.createElement("th");
authorHeader.textContent="Author";

//append to headers
headers.appendChild(idHeader);
headers.appendChild(titleHeader);
headers.appendChild(authorHeader);

//append row to table
table.appendChild(headers);

//append table to tableDiv
tableDiv.appendChild(table);

//iterate over library
for(let book of library){
    //create a table row
    const row=document.createElement("tr");
    
    //create a td element for each property and append to tr
    const id=document.createElement("td");
    id.textContent=book.id;
    row.appendChild(id)

    const title=document.createElement("td");
    title.textContent=book.title;
    row.appendChild(title)

    const author=document.createElement("td");
    author.textContent=book.author;
    row.appendChild(author)

    //append row to table
    table.appendChild(row);
}

