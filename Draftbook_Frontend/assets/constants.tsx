export const backgroundColor = "#080810";
export const textColor = "#f8f8f0";
export const accentColor = "#E7480D"

export const accentColorArr = [
    parseInt(accentColor.substring(1,3), 16).toString,
    parseInt(accentColor.substring(3,5), 16).toString,
    parseInt(accentColor.substring(5,7), 16).toString
]
export const textColorArr = [
    parseInt(textColor.substring(1,3), 16).toString,
    parseInt(textColor.substring(3,5), 16).toString,
    parseInt(textColor.substring(5,7), 16).toString
]
export const backgroundColorArr = [
    parseInt(backgroundColor.substring(1,3), 16).toString,
    parseInt(backgroundColor.substring(3,5), 16).toString,
    parseInt(backgroundColor.substring(5,7), 16).toString
]


export const backgroundRGBA = "rgba(8,8,10,1)";
export const textRGBA = "rgba(248,248,240,1)";
export const accentRGBA = "rgba(231,72,13,1)"