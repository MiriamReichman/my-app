
export type Genre = 'ROCK' | 'POP' | 'RAP' | 'CLASSICAL'







export class Song {
    constructor(public id: string, public title: string, public artist: string,
        public genre: Genre, public length: number, public price: number
    ) {
    }
}


export interface AddSong {
    id?: string
    title: string,
    artist: string,
    genre?: Genre,
    length: number,
    price: number
};
