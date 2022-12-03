// key - 43fb307af5f6410b9d9e9d2c0fa8cee1

async function getData (){

    try{

        let res = await fetch(`https://newsapi.org/v2/everything?q=India&apiKey=43fb307af5f6410b9d9e9d2c0fa8cee1`)
        let data = await res.json()
        console.log(data)
        appendData(data.articles)

    }
    catch(error){
        console.log(error)
    }
    

}
getData()



function appendData(data){

    data.forEach(function(elem){

        let div = document.createElement("div")

        let h1 = document.createElement("h1")
        h1.innerText = elem.title

        let date = document.createElement("p")
        date.innerText = elem.publishedAt

        let author = document.createElement("p")
        author.innerText = elem.source.name
        author.id = "author"
        

        div.append(h1,date,author)

        document.querySelector("#emptyDiv").append(div)
    })


}