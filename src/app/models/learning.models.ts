import { ShopItem } from "./shop-item.models";

export interface Learning{
    id: number;
    langId: number;
    pupilId: number;
}

export interface DisplayItem{
    picUrl: string;
    name: string;
    price: number;
}