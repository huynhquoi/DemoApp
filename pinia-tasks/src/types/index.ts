export type Task = {
    id: number,
    title: string,
    isFav: boolean,
    isDelete: boolean,
}

export type TaskStore = {
    tasks: Array<Task>,
    name: string,
    id: number,
}