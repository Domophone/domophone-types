import { UserId } from "./UserId";
export interface Device {
    chipId: string;
    owner: UserId;
    state: number;
    status: "new" | "work";
}
