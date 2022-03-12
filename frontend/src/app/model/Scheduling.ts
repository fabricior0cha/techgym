import { Client } from "./Client";
import { Trainer } from "./Trainer";

export class Scheduling {
    public id: number;
    public date: Date;
    public trainer: Trainer;
    public client: Client;
}