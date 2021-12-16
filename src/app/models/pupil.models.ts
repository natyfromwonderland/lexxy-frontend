export class Pupil{
   public get email(): string {
       return this._email;
   }
   public set email(value: string) {
       this._email = value;
   }
  
   public get coins(): number {
       return this._coins;
   }
   public set coins(value: number) {
       this._coins = value;
   }
   public get level(): number {
       return this._level;
   }
   public set level(value: number) {
       this._level = value;
   }
   public get avatarId(): number {
       return this._avatarId;
   }
   public set avatarId(value: number) {
       this._avatarId = value;
   }
   public get username(): string {
       return this._username;
   }
   public set username(value: string) {
       this._username = value;
   }
   public get id(): number {
       return this._id;
   }
   public set id(value: number) {
       this._id = value;
   }
   constructor(
       private _id: number,
       private _username: string,
       private _avatarId: number,
       private _level: number,
       private _coins: number,
       private _email: string
   ){}
}