interface Point {
    readonly x: number;
    readonly y: number;
}

let pl: Point = { x: 10, y: 20 };//no erro!
//pl.x = 5; //error!