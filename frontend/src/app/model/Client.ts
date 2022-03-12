import { Scheduling } from "./Scheduling";

export class Client {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public age: number;
    public height: number;
    public weight: number;
    public objective: number;
    public schedulings: Scheduling[]

}