function footerAlert() {
	footer = document.querySelector("footer")
	i = 1
	footer.addEventListener("click", function() {
		alert("clique n° " + i)
		i++
	})
}

footerAlert()

function hamburgerMenu() {
	nav = document.getElementById("navbarHeader")
	hambuger = document.querySelector("button", ".navbar-toggler")
	hambuger.addEventListener("click", function () {
		nav.classList.toggle("collapse")
	})
}

hamburgerMenu()

function redText() {
	editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0]
	textCardOne = document.querySelectorAll(".card-text")[0]
	editCardButtonOne.addEventListener("click", function() {
		textCardOne.style.color = "red"
	})
}

redText()

function greenText() {
	editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary")[1]
	textCardTwo = document.querySelectorAll(".card-text")[1]
	i = 1
	editCardButtonTwo.addEventListener("click", function() {
		i++
		if( i % 2 == 0) {
			textCardTwo.style.color = "green"		
		} else {
			textCardTwo.style.color = "rgb(33, 37, 41)"
		}	
	})
}
greenText()

function nuclearPage() {
	navbar = document.querySelector("header")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if( i % 2 == 0) {
			bootstrap.setAttribute("href", "#")
		} else {
			bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		}
	})
}

nuclearPage()