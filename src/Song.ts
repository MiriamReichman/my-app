// export class Song {
//     id: string;
//     title: string;
//     artist: string;
//     gener: Gener;
//     length: number;
//     price: number;

//     constructor(id: string, title1: string, artist: string, gener: Gener, length: number, price: number) {
//         this.id = id
//         this.title = title1,
//         this.artist = artist,
//         this.gener = gener,
//         this.length = length,
//         this.price = price;
//     }
// }
export enum Gener{
    ROCK, POP, RAP, CLASSICAL
}

export class Song{
    constructor(public id:string,public title:string,public artist:string,
        public gener:Gener,public length:number,public price:number
        ){
    }
}


export interface AddSong {
    id?: string
  title:string,
  artist:string,

 gener: Gener.POP,
  length:number,
   price: number
};
