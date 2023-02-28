radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P16, 560)
        pins.analogWritePin(AnalogPin.P15, 560)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P16, 1023)
        pins.analogWritePin(AnalogPin.P15, 1023)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "move") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "move two") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.analogWritePin(AnalogPin.P16, 1023)
        pins.analogWritePin(AnalogPin.P15, 1023)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "shoot") {
        pins.servoWritePin(AnalogPin.P13, 135)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.analogWritePin(AnalogPin.P15, 500)
    pins.analogWritePin(AnalogPin.P16, 500)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P0, 180)
pins.servoSetPulse(AnalogPin.P0, 1500)
