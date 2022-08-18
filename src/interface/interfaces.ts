
export interface ITournaments {
    id: string,
    game:string,
    name:string,
    organizer:string,
    participants: {
        current: number,
        max:number
    }
    startDate: string
}

export interface IInitialState {
    tournaments: ITournaments[],
    status: string

}