let mainBox = document.getElementById("mainBox");
let currentMenu;

let movies = [
    ironman1 = {
        name: "Ironman 1",
        url: "icon/Ironman.png",
        phase: 1,
        relesed: 2008,
        isSerises: false,
        chronological: 2009
    },
    hulk = {
        name: "The Incredible Hulk",
        url: "icon/Hulk.png",
        phase: 1,
        relesed: 2008,
        isSerises: false,
        chronological: 2011
    },
    ironman2 = {
        name: "Ironman 2",
        url: "icon/Ironman.png",
        phase: 1,
        relesed: 2010,
        isSerises: false,
        chronological: 2010
    },
    thor = {
        name: "Thor",
        url: "icon/Thor.png",
        phase: 1,
        relesed: 2011,
        isSerises: false,
        chronological: 2011
    },
    captionAmericaFirstAvenger = {
        name: "Caption America - The First Avenger",
        url: "icon/Captain America.png",
        phase: 1,
        relesed: 2011,
        isSerises: false,
        chronological: 1943
    },
    theAvengers = {
        name: "The Avengers",
        url: "icon/Avengers.png",
        phase: 1,
        relesed: 2012,
        isSerises: false,
        chronological: 2012
    },
    ironman3 = {
        name: "Ironman 3",
        url: "icon/Ironman.png",
        phase: 2,
        relesed: 2013,
        isSerises: false,
        chronological: 2012
    },
    thorDarkWorld = {
        name: "Thor - The Dark World",
        url: "icon/Thor.png",
        phase: 2,
        relesed: 2013,
        isSerises: false,
        chronological: 2011
    },
    captionAmericaWinterSoldier = {
        name: "Caption America - The Winter Soldier",
        url: "icon/Captain America.png",
        phase: 2,
        relesed: 2014,
        isSerises: false,
        chronological: 2014
    },
    guradians1 = {
        name: "Gurdians Of The Galaxy Vol1",
        url: "icon/Guardians Of The Galaxy.png",
        phase: 2,
        relesed: 2014,
        isSerises: false,
        chronological: 2014
    },
    // daredevil1 = {
    //     name: "Daredevil - S1",
    //     url: "icon/Daredevil.png",
    //     phase: 2,
    //     relesed: 2015,
    //     isSerises: true,
    //     chronological: 
    // },
    avengersUltron = {
        name: "Avengers - Age Of Ultron",
        url: "icon/Avengers.png",
        phase: 2,
        relesed: 2015,
        isSerises: false,
        chronological: 2015
    },
    antman = {
        name: "Ant Man",
        url: "icon/Antman.png",
        phase: 2,
        relesed: 2015,
        isSerises: false,
        chronological: 2015
    },
    // daredevil2 = {
    //     name: "Daredevil - S2",
    //     url: "icon/Daredevil.png",
    //     phase: 3,
    //     relesed: 2016,
    //     isSerises: true,
    //     chronological: 
    // },
    captionAmericaCivilWar = {
        name: "Caption America - Civil War",
        url: "icon/Captain America.png",
        phase: 3,
        relesed: 2016,
        isSerises: false,
        chronological: 2016
    },
    drStrange = {
        name: "Doctor Strange",
        url: "icon/Dr Strange.png",
        phase: 3,
        relesed: 2016,
        isSerises: false,
        chronological: 2016
    },
    guradians2 = {
        name: "Gurdians Of The Galaxy Vol2",
        url: "icon/Guardians Of The Galaxy.png",
        phase: 2,
        relesed: 2017,
        isSerises: false,
        chronological: 2014
    },
    spidermanHomeComing = {
        name: "Spider Man - Homecoming",
        url: "icon/Spiderman.png",
        phase: 3,
        relesed: 2017,
        isSerises: false,
        chronological: 2016
    },
    thorRagnarok = {
        name: "Thor - Ragnarok",
        url: "icon/Thor.png",
        phase: 3,
        relesed: 2017,
        isSerises: false,
        chronological: 2017
    },
    blackPanther = {
        name: "Black Panther",
        url: "icon/Black Panther.png",
        phase: 3,
        relesed: 2018,
        isSerises: false,
        chronological: 2017
    },
    avengersInfinityWar = {
        name: "Avengers - Infinity War",
        url: "icon/Avengers.png",
        phase: 3,
        relesed: 2018,
        isSerises: false,
        chronological: 2017
    },
    antmanWasp = {
        name: "Ant Man and The Wasp",
        url: "icon/Antman.png",
        phase: 3,
        relesed: 2018,
        isSerises: false,
        chronological: 2017
    },
    // daredevil3 = {
    //     name: "Daredevil - S3",
    //     url: "icon/Daredevil.png",
    //     phase: 3,
    //     relesed: 2018,
    //     isSerises: true,
    //     chronological: 
    // },
    captionMarvel = {
        name: "Captian Marvel",
        url: "icon/Captain Marvel.png",
        phase: 3,
        relesed: 2019,
        isSerises: false,
        chronological: 1995
    },
    avengersEndGame = {
        name: "Avengers - End Game",
        url: "icon/Avengers.png",
        phase: 3,
        relesed: 2019,
        isSerises: false,
        chronological: 2019
    },
    spidermanFarFromHome = {
        name: "Spider Man - Far From Home",
        url: "icon/Spiderman.png",
        phase: 3,
        relesed: 2019,
        isSerises: false,
        chronological: 2019
    },
    wandaVision = {
        name: "Wanda Vision",
        url: "icon/Wanda and Vision.png",
        phase: 4,
        relesed: 2021,
        isSerises: true,
        chronological: 1900
    },
    falconAndWinterSoldier = {
        name: "The Falcon and Winter Soldier",
        url: "icon/Falcon And Winter Soldier.png",
        phase: 4,
        relesed: 2021,
        isSerises: true,
        chronological: 2021
    },
    blackWidow = {
        name: "Black Widow",
        url: "icon/Black Widow.png",
        phase: 4,
        relesed: 2021,
        isSerises: false,
        chronological: 2021
    },
    loki = {
        name: "Loki",
        url: "icon/Loki.png",
        phase: 4,
        relesed: 2021,
        isSerises: true,
        chronological: 2021
    },
    shangChi = {
        name: "Shang Chi and The Legend Od The Ten Ring",
        url: "icon/Falcon And Winter Soldier.png",
        phase: 4,
        relesed: 2021,
        isSerises: false,
        chronological: 2021
    },
    eternals = {
        name: "Eternals",
        url: "icon/Eternal.png",
        phase: 4,
        relesed: 2021,
        isSerises: false,
        chronological: 2015
    },
    spidermanNoWayHome = {
        name: "Spider Man - No Way Home",
        url: "icon/Spiderman.png",
        phase: 4,
        relesed: 2021,
        isSerises: false,
        chronological: 2021
    },
    hawkeye = {
        name: "Hawkeye",
        url: "icon/Hawkeye.png",
        phase: 4,
        relesed: 2021,
        isSerises: true,
        chronological: 2021
    },
    moonknight = {
        name: "Moonknight",
        url: "icon/Moonknight.png",
        phase: 4,
        relesed: 2022,
        isSerises: true,
        chronological: 2022
    },
    drStrange = {
        name: "Doctor Strange: Multiverse of Maddness",
        url: "icon/Dr Strange.png",
        phase: 4,
        relesed: 2022,
        isSerises: false,
        chronological: 2022
    },
    msmarvel = {
        name: "Ms.Marvel",
        url: "icon/Captain Marvel.png",
        phase: 4,
        relesed: 2022,
        isSerises: true,
        chronological: 2022
    },
    thorlovethunder = {
        name: "Thor: Love and Thunder",
        url: "icon/Thor.png",
        phase: 4,
        relesed: 2022,
        isSerises: false,
        chronological: 2022
    }
]

let resetMovie = movies

if(localStorage.length == 0){
    localStorage.setItem("movie", JSON.stringify(movies))
}
else{
    movies = JSON.parse(localStorage.getItem("movie"))
}

let totalMovie = document.getElementById("totalMovie")
let watchedMovie = document.getElementById("movieCount")

totalMovie.innerText = resetMovie.length
watchedMovie.innerText = movies.length

let movieCounter = movies.length

function addMyNode() {


    for (let i = 0; i < movies.length; i++) {
        const node = document.createElement("li");
        const nodeImg = document.createElement("img");
        const nodeText = document.createElement("p");
        // const nodeBtn = document.createElement("button");
        const nodeBtn = document.createElement("img");

        const textnodeImg = movies[i].url
        const textnodeText = document.createTextNode(movies[i].name)
        // const textnodeBtn = document.createTextNode("X")
        const textnodeBtn = "tickMark.jpg"

        nodeImg.src = textnodeImg;
        nodeText.appendChild(textnodeText);
        nodeBtn.src = textnodeBtn;

        node.classList.add("movieList")
        node.classList.add("pases" + movies[i].phase)
        if (movies[i].isSerises)
            node.classList.add("series")

        node.setAttribute('id', 'movie' + i)
        nodeImg.classList.add("node")
        nodeText.classList.add("movieName")
        nodeBtn.classList.add("movieBtn")

        // node.setAttribute('onClick', 'removeMovie()')
        nodeBtn.setAttribute('onClick', 'removeMovie(' + i + ')')

        node.appendChild(nodeImg);
        node.appendChild(nodeText);
        node.appendChild(nodeBtn);
        mainBox.appendChild(node);
    }
}

function removeMovie(x) {
    movies = JSON.parse(localStorage.getItem("movie"))
    mainBox.innerText = ""
    watchedMovie.innerText = --movieCounter
    movies.splice(x, 1)
    showMyNode()
    isEmpty()

    switch (currentMenu) {
        case "relaese":
            sortRelaese();
            break;

        case "chronology":
            sortChronology();
            break;

        case "relaese":
            sortRelaese();
            break;

        case "pases1":
            showMyNode(1, 'pases1');
            break;

        case "pases2":
            showMyNode(1, 'pases2');
            break;

        case "pases3":
            showMyNode(1, 'pases3');
            break;

        case "pases4":
            showMyNode(1, 'pases4');
            break;

        case "series":
            showMyNode(1, 'series');
            break;
    
        default:
            break;
    }
    localStorage.setItem("movie", JSON.stringify(movies))
}

function isEmpty() {
    if (movies.length == 0) {
        mainBox.innerHTML = "HURRAY!! You have watched all the movies"
    }
}

function showMyNode(isHTML, e) {
    if (!isHTML) {
        addMyNode()
    }
    filterObjects("all");
    if (isHTML) {
        filterObjects(e)
    }

    function filterObjects(e1) {
        var x, i;
        x = document.getElementsByClassName("movieList");
        if (e1 == "all") {
            e1 = "";
        }
        for (i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if (x[i].className.indexOf(e1) > -1)
                addClass(x[i], "show")
        }
    }

    function addClass(e2, name) {
        var i, a1, a2;
        a1 = e2.className.split(" ");
        a2 = name.split(" ");
        for (i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i] == -1)) {
                e2.className += " " + a2[i]
            }
        }
    }

    function removeClass(e3, name) {
        var i, a1, a2;
        a1 = e3.className.split(" ");
        a2 = name.split(" ");
        for (i = 0; i < a2.length; i++) {
            while (a1.indexOf(a2[i]) > -1) {
                a1.splice(a1.indexOf(a2[i]), 1);
            }
        }
        e3.className = a1.join(" ");
    }
}

function sortChronology() {
    movies.sort((a, b) => a.chronological - b.chronological);
    addMyNode()
    mainBox.innerText = ""
    showMyNode()
}

function sortRelaese() {
    movies.sort((a, b) => a.relesed - b.relesed);
    addMyNode()
    mainBox.innerText = ""
    showMyNode()
}

let navBarBtn1 = document.getElementById("navBarBtn1");
let navBarBtn2 = document.getElementById("navBarBtn2");
let navBarBtn3 = document.getElementById("navBarBtn3");
let navBarBtn4 = document.getElementById("navBarBtn4");
let navBarBtn5 = document.getElementById("navBarBtn5");
let navBarBtn6 = document.getElementById("navBarBtn6");
let navBarBtn7 = document.getElementById("navBarBtn7");
let check = document.getElementById("check")

let reset = document.getElementById("reset")
reset.addEventListener("click", () =>{
    movies = resetMovie
    localStorage.setItem("movie", JSON.stringify(movies))
    watchedMovie.innerText = movies.length
    sortRelaese()
    showMyNode()
    check.checked = false
})

navBarBtn1.addEventListener("click", () => {
    currentMenu = "relaese"
    check.checked = false
})
navBarBtn2.addEventListener("click", () => {
    currentMenu = "chronology"
    check.checked = false
})
navBarBtn3.addEventListener("click", () => {
    currentMenu = "pases1"
    check.checked = false
})
navBarBtn4.addEventListener("click", () => {
    currentMenu = "pases2"
    check.checked = false
})
navBarBtn5.addEventListener("click", () => {
    currentMenu = "pases3"
    check.checked = false
})
navBarBtn6.addEventListener("click", () => {
    currentMenu = "pases4"
    check.checked = false
})
navBarBtn7.addEventListener("click", () => {
    currentMenu = "series"
    check.checked = false
})

    showMyNode()

    console.log("SWPD Micro Project | CO242")