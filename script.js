
fetch ("./data.json")
    .then(res => res.json ())
    .then(data =>{
       const background = ["react", "memo", "ver", "vis"];
       const color = ["reaction", "memory", "verbal", "visual"];
       data.forEach((element, index) => {
        let container=document.querySelector(".container-category")
        container.innerHTML += `
                                <div class="category ${background[index]}">
                                <div class="${color[index]}">
                                    <img src= "${element.icon}" alt="reaction">
                                    <p>${element.category}</p>
                                </div>
                                <p>${element.score} <span>/ 100</span></p>
                                </div> `
        })
    })
    
    .catch(err => console.log(err))
