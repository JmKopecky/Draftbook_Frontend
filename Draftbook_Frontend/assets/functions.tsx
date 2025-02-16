

export function lighten(rgba: string, percent: string) {
    //expecting string to match pattern: rgba([0-255], [0-255], [0-255], [0-255])
    try {
        return modifyColor(rgba, parseInt(percent.split("%")[0]) / 100.0, false);
    } catch {
        throw new Error("Invalid rgba string or percent string");
    }
}


export function darken(rgba: string, percent: string) {
    //expecting string to match pattern: rgba([0-255], [0-255], [0-255], [0-255])
    try {
        return modifyColor(rgba, parseInt(percent.split("%")[0]) / 100.0, true);
    } catch {
        throw new Error("Invalid rgba string or percent string");
    }
}


function modifyColor(rgba:string, percent: number, darken:boolean) {
    let split = rgba.split('(')[1].split(')')[0].split(',');
    let colors:number[] = [0,0,0];
    for (let i = 0; i < 3; i++) {
        if (darken) {
            colors[i] = parseInt(split[i]) * (1 - percent);
        } else { //lighten
            colors[i] = parseInt(split[i]) * (1 + percent);
        }
        colors[i] = Math.max(0,colors[i]);
        colors[i] = Math.min(255, colors[i]);
    }
    console.log(split[3])
    return `rgba(${colors[0]},${colors[1]},${colors[2]},${split[3]})`;
}