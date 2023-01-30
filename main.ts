radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 1023)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "move") {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P15, 560)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "move two") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P16, 560)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
})
radio.setGroup(1)
