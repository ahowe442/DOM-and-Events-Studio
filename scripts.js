function pageLoad() {
    console.log('window loaded');

    let take_off = document.getElementById("takeoff");
    //console.log(take_off);
    take_off.addEventListener("click", function (event) {
        confirm("Are you sure?");
        if (true) {
            document.getElementById('flightStatus').innerText = "Shuttle in flight."
            document.getElementById("shuttleBackground").style.backgroundColor = "Blue";
        }
    });
};



window.onload = pageLoad;