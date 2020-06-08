function main() {

    const baseURL = 'https://www.thesportsdb.com';

    const getBook = () => {
        fetch(`${baseURL}/api/v1/json/1/all_sports.php`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if (responseJSON.error) {
                    showResponseMessage(responseJSON.message)
                } else {
                    renderAllBooks(responseJSON.sports)
                }
            })
            .catch(error => {
                showResponseMessage(error)
            })
    };


    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (sports) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        sports.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${book.strSportThumb} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${book.strSport}</h5>
                <p class="card-text">${book.strSportDescription.slice(0, 175) + ' ... '}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">${book.strFormat}</small>
                </div>
                </div>
                </div>
            `;
        });

        // const buttons = document.querySelectorAll(".button-delete");
        // buttons.forEach(button => {
        //     button.addEventListener("click", event => {
        //         const bookId = event.target.id;
        //         removeBook(bookId);
        //     })
        // })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        // const buttonUpdate = document.querySelector("#buttonUpdate");

        // buttonUpdate.addEventListener("click", function () {
        //     updateBook()
        // });
        getBook();
        getCaro();
    });
}

export default main;
