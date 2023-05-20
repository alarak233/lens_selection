// 微结构数据
interface Circle_microstr_data {
    radius: number
}

interface Polygon_microstr_data {
    edge_num: number,
    edge_length: number,
    angle: number
}

interface Microstructure_data {
    circle_microstr_data?: Circle_microstr_data,
    polygon_microstr_data?: Polygon_microstr_data,
    color: string
}

// 微结构排布形状数据
interface Pos {
    x: number,
    y: number
}

interface Com_data extends Microstructure_data {
    center: Pos
    start_angle: number,
}

interface Circle_data extends Com_data {
    start_r: number,
    dist: number,
    points_num: number[],
    end_angle: number,
}

interface Polygon_data extends Com_data{
    start_len:number,
    dist:number,
    total_edge_num:number,
    cur_edge_num:number,
}

interface Line_data {
    start_pos: Pos,
    end_pos: Pos,
    points_num: number
}

export type { Microstructure_data, Circle_data,Polygon_data };