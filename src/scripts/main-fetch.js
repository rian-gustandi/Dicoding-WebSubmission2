function main() {

    const baseURL = 'https://www.thesportsdb.com';

    const getSports = () => {
        fetch(`${baseURL}/api/v1/json/1/all_sports.php`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if (responseJSON.error) {
                    showResponseMessage(responseJSON.message)
                } else {
                    renderAllSports(responseJSON.sports)
                }
            })
            .catch(error => {
                showResponseMessage(error)
            })
    };

    const renderAllSports = (sports) => {
        const listSportsElement = document.querySelector("#listSports");
        listSportsElement.innerHTML = "";

        sports.forEach(Sport => {
            listSportsElement.innerHTML += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${Sport.strSportThumb} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${Sport.strSport}</h5>
                <p class="card-text">${Sport.strSportDescription.slice(0, 175) + ' ... '}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">${Sport.strFormat}</small>
                </div>
                </div>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = "Please check connection!") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getSports();
    });
}

export default main;
