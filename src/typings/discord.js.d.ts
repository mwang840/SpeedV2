import { Collection } from "discord.js";
//Will be using some collections
 
declare module 'discord.js' {
    interface Client{
        commands: Collection<string, Command>;
    }
}