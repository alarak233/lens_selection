interface Ring_data {
    start_r: number,
    ring_num: number,
    dist: number,
    circle_r: number,
    circle_points_num: number[],
    circle_color: string,
    end_angle: number
}

interface Com_data {
    center: Pos
    start_angle: number,
}

interface Polygon_data {

}

interface Pos {
    x: number,
    y: number
}

interface Line_data {
    start_pos: Pos,
    end_pos: Pos,
    points_num: number
}

export type { Ring_data , Com_data };