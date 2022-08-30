import { Collection } from "discord.js";
import { Command } from "../interfaces/commands";
//Will be using some collections
 
declare module 'discord.js' {
    interface Client{
        commands: Collection<string, Command>;
    }
}