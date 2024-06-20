document.addEventListener('DOMContentLoaded', function() {

    var apiUrl = 'https://rickandmortyapi.com/api/character';

    function fetchData(url) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {

                var data = jsonData.results;
                var container = document.getElementById('main-sectionmain-inner');
                
                container.innerHTML = '';

                data.forEach(item => {
                    var blockItem = document.createElement('div');
                    blockItem.className = "block-item";

                    var imgContainer = document.createElement('div');
                    imgContainer.className = "block-item-top";
                    var imgEl = document.createElement('img');
                    imgEl.className = "block-item-top-img";
                    imgEl.src = item.image;
                    imgContainer.appendChild(imgEl);

                    var nameContainer = document.createElement('div');
                    nameContainer.className = "block-item-bottom";
                    var nameEl = document.createElement("a");
                    nameEl.href = item.url;
                    nameEl.innerText = item.name;
                    nameEl.className = "name-block-item";
                    nameContainer.appendChild(nameEl);

                    var statusEl = document.createElement('a');
                    var statusSpanEl = document.createElement('span');
                    statusSpanEl.innerText = item.status;
                    statusSpanEl.className = "Status-span";
                    statusEl.innerText = "Status : ";
                    statusEl.className = "Status";
                    statusEl.appendChild(statusSpanEl);
                    nameContainer.appendChild(statusEl);

                    var speciesEl = document.createElement('a');
                    var speciesSpanEl = document.createElement('span');
                    speciesSpanEl.innerText = item.species;
                    speciesSpanEl.className = "species-span";
                    speciesEl.innerText = "Species : ";
                    speciesEl.className = "species";
                    speciesEl.appendChild(speciesSpanEl);
                    nameContainer.appendChild(speciesEl);


                    blockItem.appendChild(imgContainer);
                    blockItem.appendChild(nameContainer);

                    container.appendChild(blockItem);
                });
            })
            .catch(error => {
                
                console.error('Ошибка при выполнении запроса:', error);
            });
    }

    fetchData(apiUrl);
});