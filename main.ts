radio.onReceivedString(function (receivedString) {
    if (receivedString == "Up" && angle > 0) {
        angle += -1
    } else if (receivedString == "Down" && angle < 180) {
        angle += 1
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        Key = receivedString
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, Math.map(value, 550, 1023, 10, 255))
    } else if (name == "B") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "L") {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, Math.map(value, 1, 450, 255, 40))
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 20)
    } else if (name == "R") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, Math.map(value, 550, 1023, 40, 255))
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 20)
    }
})
let Key = ""
let angle = 0
angle = 138
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (Key == "LEDL") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        basic.pause(500)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else if (Key == "LEDR") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(500)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    }
})
basic.forever(function () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, angle)
})
