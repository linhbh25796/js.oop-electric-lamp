let canvas = document.getElementById("light");
let ctx = canvas.getContext("2d");

let Lamp = function (status, width, height) {
    this.status = status;
    this.width = width;
    this.height = height;

    this.turnOn = function () {
        this.status = "On";
    };
    this.turnOff = function () {
        this.status = "Off";
    };

    this.drawLamp = function () {
        let img = document.getElementById("light" + this.status);
        ctx.drawImage(img, canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2, this.width, this.height);
    };
};

let lamp = new Lamp("Off", 200, 112);
let switchBtn = new SwitchButton("on");

lamp.drawLamp();

function onOff() {
    switchBtn.turnOnOff(lamp);
    lamp.drawLamp();
}