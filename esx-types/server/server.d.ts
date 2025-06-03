import { Coords, Item, Job, Table, XPlayer } from '../common/common'
import { ESXShared } from '../shared/shared'

export as namespace ESXServer

export class ESXServer extends ESXShared {
    Trace(message: string): void
    TriggerClientEvent(eventName: string, playerIds: number | number[], ...args: any[]): void
    RegisterCommand(name: string | Table, group: string | Table, cb: Function, allowConsole?: boolean, suggestion?: Table): void
    SavePlayer(xPlayer: XPlayer, cb?: Function): void
    SavePlayers(cb?: Function): void
    GetExtendedPlayers(key?: string, value?: string | Table): Table
    GetNumPlayers(key?: string, value?: string | Table): number
    GetPlayerFromId(playerId: number | string): XPlayer
    GetPlayerFromIdentifier(identifier: string): XPlayer
    GetIdentifier(playerId: number | string): string
    GetVehicleType(model: string | number, playerId: number, cb: Function): void
    DiscordLog(name: string, title: string, color: string, message: string): void
    DiscordLogFields(name: string, title: string, color: string, fields: Table): void
    RefreshJobs(): void
    RegisterUsableItem(item: string, cb: Function): void
    UseItem(playerId: number | string, item: string, ...args: any[]): void
    RegisterPlayerFunctionOverrides(index: string, overrides: Table): void
    SetPlayerFunctionOverride(index: string): void
    GetItemLabel(item: string): string | void
    GetJobs(): Job[]
    GetItems(): Item[]
    GetUsableItems(): Item[]
    DoesJobExist(job: string, grade?: string): boolean
    IsPlayerAdmin(playerId: number | string): boolean
    CreatePickup(
        itemType: string, 
        name: string, 
        count: number, 
        label: string, 
        playerId: number | string, 
        components?: string | Table, 
        tintIndex?: number, 
        coords?: Coords
    ): void

    // Module: callback
    TriggerClientCallback(playerId: number | string, eventName: string, cb: Function, ...args: any[]): void
    RegisterServerCallback(eventName: string, cb: Function): void
    DoesServerCallbackExist(eventName: string): boolean

    // Module: createJob
    CreateJob(name: string, label: string, grades: Table): boolean

    // Module: onesync
    OneSync: {
        GetPlayersInArea(playerId: number | string, radius: number, ignore?: number[] | string[]): number[]
        GetClosestPlayer(playerId: number | string, radius: number, ignore?: number[] | string[]): number | void
        SpawnVehicle(model: number | string, coords: Coords, heading: number, properties: Table, cb?: Function): number | void
        SpawnObject(model: number | string, coords: Coords, heading: number, cb?: Function): number | void
        SpawnPed(model: number | string, coords: Coords, heading: number, cb?: Function): number | void
        SpawnPedInVehicle(model: number | string, vehicle: number, seat: number, cb: Function): void
        GetPedsInArea(coords: Coords, radius: number, modelFilter: Table): number[]
        GetObjectsInArea(coords: Coords, radius: number, modelFilter: Table): number[]
        GetVehiclesInArea(coords: Coords, radius: number, modelFilter: Table): number[]
        GetClosestPed(coords: Coords, modelFilter: Table): number | void
        GetClosestObject(coords: Coords, modelFilter: Table): number | void
        GetClosestVehicle(coords: Coords, modelFilter: Table): number | void
    }
}