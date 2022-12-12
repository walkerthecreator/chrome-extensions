const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6c895aaf5msh05b8a6ad6667675p128775jsnd7072decfece',
		'X-RapidAPI-Host': 'programming-memes-reddit.p.rapidapi.com'
	}
};

const elem = document.querySelector("h2")
const imgelem = document.getElementById("imgDiv")
const nextButton = document.getElementById('next') 

async function fetchMeme(){
     const response = await fetch('https://programming-memes-reddit.p.rapidapi.com/', options)
     const responseJson =await response.json()
    imgelem.setAttribute("src",responseJson[0].link)
    elem.innerHTML = responseJson[0].title

    nextButton.addEventListener("click",()=> {
        let newv = Math.floor(Math.random()*10)
        elem.innerHTML = responseJson[newv].title
        imgelem.setAttribute("src",responseJson[newv].link)
    })

}
    fetchMeme()

