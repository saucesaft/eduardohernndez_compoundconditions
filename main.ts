let celsius = 0
let fahrenheit = 0
basic.forever(function () {
    celsius = input.temperature()
    fahrenheit = celsius * 1.8 + 32
    if (fahrenheit >= -22 && 14 <= fahrenheit) {
        basic.showString("Stay at home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (fahrenheit >= 15 && 23 <= fahrenheit) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (fahrenheit >= 24 && 32 <= fahrenheit) {
        basic.showString("Warning! You can only ski in the highest parts.")
        basic.showIcon(IconNames.Skull)
    } else if (fahrenheit >= 33) {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    }
})
