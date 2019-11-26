function pageLoad() {
    console.log('window loaded');

    let take_off = document.getElementById("takeoff");
    //console.log(take_off);
    take_off.addEventListener("click", function (event) {
        confirm("Are you sure?");
        if (true) {
            document.getElementById('flightStatus').innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "Blue";
            document.getElementById("spaceShuttleHeight").innerText += 10000;
        } else {
            document.getElementById('flightStatus').innerText = "Ready for Takeoff";
            document.getElementById("shuttleBackground").style.backgroundColor = "Green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        }
    });
    let land = document.getElementById("landing");
    //console.log(land);
    land.addEventListener("click", function (event) {
        if (true) {
            alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById('flightStatus').innerText = "The shuttle has landed."
            document.getElementById("shuttleBackground").style.backgroundColor = "Green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        }
    });
    let abortMission = document.getElementById("missionAbort");
    //console.log(abortMission);
    abortMission.addEventListener("click", function (event) {
        confirm("Are you sure that you want to abort the mission?");
        if (true) {
            document.getElementById('flightStatus').innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "Green";
            document.getElementById('spaceShuttleHeight').innerText = 0;
        }
    });
    let upBtn = document.getElementById('upBtn');
    let downBtn = document.getElementById('downBtn');
    let rightBtn = document.getElementById('rightBtn');
    let leftBtn = document.getElementById('leftBtn');
    let dirBtns = document.getElementById('dirBtns')
    upBtn = 0;
    downBtn = 0;
    rightBtn = 0;
    leftBtn = 0;
    dirBtns = 0;
    console.log(upBtn);

    dirBtns.onclick = addTen;

    function addTen() {
        document.getElementById('spaceShuttleHeight').innerText += 10;
        if (upBtn = true) {
            document.getElementById('spaceShuttleHeight').innerText += 10000;
        } else if (downBtn = true) {
            document.getElementById('spaceShuttleHeight').innerText -= 10000;
        }
    }




};



window.onload = pageLoad;