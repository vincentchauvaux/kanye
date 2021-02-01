    //mes selecteur
        var monbtn = document.getElementById('monbtn');
        var quote = document.getElementById('quote');
    //mes variables
        var citation = "";
    // mes evenements
        window.onload = async() => {
            await fetch("https://api.kanye.rest/")
            .then(reponse => reponse.json())
            .then(data => citation = data.quote);
            quote.textContent = citation;
        }

        monbtn.addEventListener("click", async() => {
            await fetch("https://api.kanye.rest/")
            .then(reponse => reponse.json())
            .then(data => citation = data.quote);
            quote.textContent = citation;
        })
