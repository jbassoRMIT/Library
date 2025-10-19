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

addBookToLibrary("Simon","Simon Says");
console.log(library);

//write function to remove children div
const removeChildren=(parent)=>{
    while (parent.firstElementChild){
        parent.removeChild(parent.firstElementChild);
    }
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

//Add new book button that brings up a form
const addBookButton=document.createElement("button");
addBookButton.textContent="Add New Book";
tableDiv.appendChild(addBookButton);

//create form and append to tableDiv
const form=document.createElement("form");
tableDiv.appendChild(form);

//add event listener to bring up a form to add book details
addBookButton.addEventListener("click",()=>{
    //clear contents of form
    removeChildren(form);
    
    
    const lineBreak=document.createElement("br");

    const titleLabel=document.createElement("label");
    titleLabel.textContent="Title of new book: ";
    titleLabel.setAttribute("for", "title");
    const titleInput=document.createElement("input");
    titleInput.type="text";
    titleInput.name="title";
    titleInput.id="title";
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(document.createElement("br"));

    const authorLabel=document.createElement("label");
    authorLabel.textContent="Author of new book: ";
    authorLabel.setAttribute("for", "author");
    const authorInput=document.createElement("input");
    authorInput.type="text";
    authorInput.name="author";
    authorInput.id="author";
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(document.createElement("br"));
    

    const submit=document.createElement("button");
    submit.textContent="submit"
    form.appendChild(submit)

    //add event listener for submit button
    submit.addEventListener("click",()=>{
    
        //extract value for title from input
        const newTitle=titleInput.value;
        console.log(titleInput.value);

        //extract value for title from input
        const newAuthor=authorInput.value;
        console.log(authorInput.value);

        // //call the addBookToLibrary(bookTitle,bookAuthor) function
        // addBookToLibrary(newTitle,newAuthor);
        // console.log(library);
    })

    
})

