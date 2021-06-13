import { UserId } from "./UserId";

export interface Device {
    chipId: string;
    owner: UserId|null;
    name: string|null
    
    state: number;
    status: "new"|"work"
}