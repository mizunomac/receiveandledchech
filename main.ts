radio.onReceivedString(function (receivedString) {
    List = receivedString.split(",")
    前後 = List[0]
    左右 = List[1]
    y = parseFloat(前後)
    x = parseFloat(左右)
    if (0 < y) {
        pins.analogWritePin(AnalogPin.P0, y)
    } else {
        pins.analogWritePin(AnalogPin.P1, Math.abs(y))
    }
    if (0 < x) {
        pins.analogWritePin(AnalogPin.P2, x)
    } else {
        pins.analogWritePin(AnalogPin.P3, Math.abs(x))
    }
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
})
let x = 0
let y = 0
let 左右 = ""
let 前後 = ""
let List: string[] = []
radio.setGroup(148)
basic.forever(function () {
	
})
