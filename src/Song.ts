// export class Song {
//     id: string;
//     title: string;
//     artist: string;
//     genre: genre;
//     length: number;
//     price: number;

//     constructor(id: string, title1: string, artist: string, genre: genre, length: number, price: number) {
//         this.id = id
//         this.title = title1,
//         this.artist = artist,
//         this.genre = genre,
//         this.length = length,
//         this.price = price;
//     }
// }
export enum Genre{
    ROCK, POP, RAP, CLASSICAL
}





export class Song{
    constructor(public id:string,public title:string,public artist:string,
        public genre:'RAP'|'POP'|'CLASSICAL'|'ROCK',public length:number,public price:number
        ){
    }
}


export interface AddSong {
    id?: string
  title:string,
  artist:string,

 genre? :'RAP'|'POP'|'CLASSICAL'|'ROCK',
  length:number,
   price: number
};
