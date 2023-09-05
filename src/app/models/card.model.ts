import { List } from "./list.model";

export interface Card{
    id:string;
    title:string;
    position:number;
    list:List;
    description?:string;
}
// dto manual
// export interface CreateCardDto{
//   title:string;
//   position:number;
//   description?:string;
//   listId:string;
//   boardId:string;
// }
// se extiende de card y se añaden dos argunments mas
export interface CreateCardDto extends Omit<Card,'id' |'list'>{
  listId:string|number;
  boardId:string;
}

export interface UpdateCardDto{
    title?:string;
    position?:number;
    description?:string;
    listId?:string|number;
    boardId?:string;
}
