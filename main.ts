// Reference: https://www.youtube.com/watch?v=m9ntqxh8FvQ
radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(2, 2)
    serial.writeValue("X", receivedNumber)
    basic.pause(1000)
})
basic.showString("Receiver")
radio.setGroup(8)
serial.writeLine("Receiver")
basic.forever(function () {
	
})
