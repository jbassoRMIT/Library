const library=[
    {
        id:1,
        title:"Harry Potter",
        author: "JK Rowling",
        pages:400,
        read:true
    },
    {
        id:2,
        title:"LOTR",
        author: "JRR Tolkien",
        pages:300,
        read:false
    },
    {
        id:3,
        title:"Intermezzo",
        author: "Sally Rooney",
        pages:200,
        read:true
    },
];

//Setup book constructor
function Book(title,author,pages,read){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(bookTitle,bookAuthor,numPages,isRead=false) {
    // take params, create a book then store it in the array
    const book=new Book(bookTitle,bookAuthor,numPages,isRead);
    library.push(book);
}

addBookToLibrary("Simon","Simon Says",800,false);
console.log(library);

//write function to remove children div
const removeChildren=(parent)=>{
    while (parent.firstElementChild){
        parent.removeChild(parent.firstElementChild);
    }
}

//Add script in to create a table and then iterate over library, creating a row with all the details of each book
//target table div
//Place inside a function so we can call it when form submits

function displayTable(){
    const tableDiv=document.querySelector(".table");
    
    //clear contents of tableDiv
    removeChildren(tableDiv);

    //create a table, add a table header row with column names and append to tableDiv
    const table=document.createElement("table");
    const headers=document.createElement("tr");
    const idHeader=document.createElement("th");
    idHeader.textContent="ID";
    const titleHeader=document.createElement("th");
    titleHeader.textContent="Title";
    const authorHeader=document.createElement("th");
    authorHeader.textContent="Author";
    const pagesHeader=document.createElement("th");
    pagesHeader.textContent="Number of Pages";
    const isReadHeader=document.createElement("th");
    isReadHeader.textContent="Read?";
    const toggleReadHeader=document.createElement("th");
    toggleReadHeader.textContent="toggle Read";

    //append to headers
    headers.appendChild(idHeader);
    headers.appendChild(titleHeader);
    headers.appendChild(authorHeader);
    headers.appendChild(pagesHeader);
    headers.appendChild(isReadHeader);
    headers.appendChild(toggleReadHeader);

    //append row to table
    table.appendChild(headers);

    //append table to tableDiv
    tableDiv.appendChild(table);

    //iterate over library
    for(let book of library){
        //create a table row
        const row=document.createElement("tr");
        //set row id=book id
        row.id=`row-id-${book.id}`;
        //set initial classlist to whatver the read status is
        row.classList.add(`${book.read}`);
        
        //create a td element for each property and append to tr
        const id=document.createElement("td");
        id.textContent=book.id;
        id.id=`id-id-${book.id}`;
        row.appendChild(id)

        const title=document.createElement("td");
        title.textContent=book.title;
        title.id=`title-id-${book.id}`;
        row.appendChild(title)

        const author=document.createElement("td");
        author.textContent=book.author;
        author.id=`author-id-${book.id}`;
        row.appendChild(author);

        const pages=document.createElement("td");
        pages.textContent=book.pages;
        pages.id=`pages-id-${book.id}`;
        row.appendChild(pages);

        const isRead=document.createElement("td");
        isRead.textContent=book.read;
        isRead.id=`isRead-id-${book.id}`;
        row.appendChild(isRead);

        //add in a td for the toggle read function
        const toggleRead=document.createElement("td");
        const toggleReadButton=document.createElement("button");
        toggleReadButton.textContent="toggle";
        toggleRead.appendChild(toggleReadButton);
        row.appendChild(toggleRead);

        //add in a td for deletion
        const deleteCell=document.createElement("td");
        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        //append row to table
        table.appendChild(row);

        //Write toggle functionality
        toggleReadButton.addEventListener("click",()=>{
            console.log(`toggle button picked up for ${book.title}`);
            //target row and change class to get correct conditional formatting
            const targetRow=document.querySelector(`#${row.id}`);
            targetRow.classList.remove(`${book.read}`);

            //toggle value of read
            book.read=!book.read;
            console.log(library);

            //now find relevant td, and set textContent to updated value
            console.log(document.querySelector(`#${isRead.id}`));
            const dataChange=document.querySelector(`#${isRead.id}`)
            dataChange.textContent=book.read;

            targetRow.classList.add(`${book.read}`);
        })

        //Write delete functionality
        deleteButton.addEventListener("click",()=>{
            console.log(`delete button picked up for ${book.title}`);

            //find the index in library to remove
            let index=-1;
            for(let i=0;i<library.length;i++){
                if(library[i].id==book.id){
                    index=i;
                }
            }

            console.log(index);

            //use splice to modify library in place
            if(index!=-1){
                library.splice(index,1);
            }

            //target row that corresponds with relevant id and call .remove to remove it from table
            


            //target row and change class to get correct conditional formatting
            const targetRow=document.querySelector(`#${row.id}`);

        })
    }
}

//call table creator function on initial display
displayTable();

const toggleRead=function(){

}

//Add new book button that brings up a form
const addBookButton=document.createElement("button");
addBookButton.textContent="Add New Book";
const addBookDiv=document.querySelector(".addNewBook");
addBookDiv.appendChild(addBookButton);

//create form and append to tableDiv
const form=document.createElement("form");
addBookDiv.appendChild(form);

//add event listener to bring up a form to add book details
addBookButton.addEventListener("click",()=>{
    //clear contents of form
    removeChildren(form);
    
    
    const lineBreak=document.createElement("br");

    //Add in input boxes for each attribute
    //title
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

    //author
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

    //numPages
    const pagesLabel=document.createElement("label");
    pagesLabel.textContent="Number of pages in the book: ";
    pagesLabel.setAttribute("for", "numPages");
    const pagesInput=document.createElement("input");
    pagesInput.type="number";
    pagesInput.name="numPages";
    pagesInput.id="numPages";
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(document.createElement("br"));

    //read status
    const readLabel=document.createElement("label");
    readLabel.textContent="Have you read the book: ";
    readLabel.setAttribute("for", "read");
    const readInput=document.createElement("select");
    readInput.id="read";

    //create option for - has been read
    const isRead=document.createElement("option");
    isRead.value=true;
    isRead.textContent="Read"
    //create option for - has been read
    const notRead=document.createElement("option");
    notRead.value=false;
    notRead.textContent="Not read yet"

    readInput.appendChild(isRead);
    readInput.appendChild(notRead)
    form.appendChild(readLabel);
    form.appendChild(readInput)
    form.appendChild(document.createElement("br"));
    

    const submit=document.createElement("button");
    submit.textContent="submit";
    form.appendChild(submit);

    //target form element and add event listener for a submit action
    form.addEventListener("submit",(e)=>{
        e.preventDefault();

         //extract value for title from input
         const newTitle=document.querySelector("#title").value;
         console.log(newTitle);
 
         //extract value for title from input
         const newAuthor=document.querySelector("#author").value;
         console.log(newAuthor);

         //extract value for pages from input
         const newPages=document.querySelector("#numPages").value;
         console.log(newPages);

         //extract value for pages from input
         const newRead=document.querySelector("#read").value;
         console.log(newRead);
 
         // //call the addBookToLibrary(bookTitle,bookAuthor) function
         addBookToLibrary(newTitle,newAuthor,newPages,newRead);
         console.log(library);

         //call displayTable() function again to re-render the table
         displayTable();

         //reset values to ""
         document.querySelector("#title").value="";
         document.querySelector("#author").value="";
    })

    
})

