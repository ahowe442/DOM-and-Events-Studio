function pageLoad() {
    console.log('window loaded');

    let take_off = document.getElementById("takeoff");
    //console.log(take_off);
    take_off.addEventListener("click", function (event) {
        let answer = confirm("Are you sure?");
        if (answer === true) {
            document.getElementById('flightStatus').innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "Blue";
            document.getElementById("spaceShuttleHeight").innerText += 10000;;

        } else {
            document.getElementById('flightStatus').innerText = "Ready for Takeoff";
            document.getElementById("shuttleBackground").style.backgroundColor = "Green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        }
    });
    //console.log(typeof Number(document.getElementById("spaceShuttleHeight").innerText));

    let land = document.getElementById("landing");
    //console.log(land);
    land.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerText = "The shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = "Green";
        document.getElementById("spaceShuttleHeight").innerText = 0;
    });
    let abortMission = document.getElementById("missionAbort");
    //console.log(abortMission);
    abortMission.addEventListener("click", function (event) {

        let answer = confirm("Are you sure that you want to abort the mission?");
        if (answer === true) {
            document.getElementById('flightStatus').innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "Green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        } else {}
    });

    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight').innerText;
    let dirBtns = document.getElementById('dirBtns')
    let rocketImg = document.getElementById('rocket');
    let upBtn = document.getElementById('upBtn');
    let downBtn = document.getElementById('downBtn');
    let leftBtn = document.getElementById('leftBtn');
    let rightBtn = document.getElementById('rightBtn');

    console.log(rocketImg);
    console.log(upBtn);

    upBtn.addEventListener('click', function (event) {
        rocketImg.height += 10;
        document.getElementById('spaceShuttleHeight').innerText += 10000;
    });
    downBtn.addEventListener('click', function (event) {
        rocketImg.height -= 10;
        document.getElementById('spaceShuttleHeight').innerText -= 10000;
    });
    rightBtn.addEventListener('click', function (event) {
        rocketImg.style -= 10;
    });
    leftBtn.addEventListener('click', function (event) {
        rocketImg.style.left += 10;
    });
};


window.onload = pageLoad;