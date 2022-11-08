input.onSound(DetectedSound.Loud, function () {
	
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
