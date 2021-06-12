import { UserId } from "./UserId";

export interface Device {
    chipId: string;
    owner: UserId|null;
    state: number;
    status: "new"|"work"
}