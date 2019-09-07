let SwitchButton = function (status) {
    this.status = status;
    console.log("status switch in the beginning: " + status);

    this.turnOnOff = function (lamp) {
        let btnOnOff = document.getElementById("btnOnOff");
        if (this.status == "on") {
            lamp.turnOn();
            btnOnOff.innerHTML = "Off";
            this.status = "off";
        } else {
            lamp.turnOff();
            btnOnOff.innerHTML = "On";
            this.status = "on";
        }

    }

};
