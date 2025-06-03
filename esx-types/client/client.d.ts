import { ESXShared } from './../shared/shared'
import { Account, Coords, Item, PlayerData } from './../common/common'

export as namespace ESXClient

export class ESXClient extends ESXShared {
    IsPlayerLoaded(): boolean
    GetPlayerData(): PlayerData
    SecureNetEvent(name: string, fn: Function): void
    DisableSpawnManager(): void
    SearchInventory(items: string | string[], count?: number): Item | Item[]
    SetPlayerData(key: string, value: any): void
    SpawnPlayer(skin: { [key: string]: number }, coords: Coords, cb: Function): void
    ShowAdvancedNotification(
        sender: string, 
        subject: string, 
        message: string, 
        textureDict: string, 
        iconType: number, 
        flash: boolean, 
        saveToBrief?: boolean,
        hudColorIndex?: number
    ): void
    ShowHelpNotification(message: string, thisFrame?: boolean, beep?: boolean, duration?: number): void
    ShowFloatingHelpNotification(message: string, coords: Coords): void
    DrawMissionText(message: string, time: number): void
    HashString(str: string): string
    GetAccount(account: string): Account
    ShowInventory(): void
    GetVehicleTypeClient(model: number | string): string | boolean
    GetVehicleType(model: number | string): string | boolean

    // Module: callback
    TriggerServerCallback(eventName: string, cb: Function, ...args: any[]): void
    AwaitServerCallback<T = any>(eventName: string, ...args: any[]): Promise<T>
    RegisterServerCallback(eventName: string, cb: Function): void
    DoesClientCallbackExist(eventName: string): boolean
    
    // Module: streaming
    Streaming: {
        RequestModel(modelHash: number | string, cb?: Function): number | void
        RequestStreamedTextureDict(textureDict: string, cb?: Function): string | void
        RequestNamedPtfxAsset(assetName: string, cb?: Function): string | void
        RequestAnimSet(animSet: string, cb?: Function): string | void
        RequestAnimDict(animDict: string, cb?: Function): string | void
        RequestWeaponAsset(weaponHash: number | string, cb?: Function): string | number | void
    }

    // Module: points
    CreatePointInternal(coords: Coords, radius: number, hidden?: boolean, enter?: Function, exit?: Function): number
    RemovePointInternal(handle: number): void
    HidePointInternal(handle: number, hidden: boolean): void

    // Module: interactions
    RemoveInteraction(name: string): void
    RegisterInteraction(name: string, onPress?: Function, condition?: Function): void
    GetInteractKey(): number | string

    // Module: scaleform
    // TODO: Need to implement types
    Scaleform: {
        ShowFreemodeMessage(title: string, message: string, sec: number): void
        ShowBreakingNews(title: string, message: string, bottom: string, sec: number): void
        ShowPopupWarning(title: string, message: string, bottom: string, sec: number): void
        ShowTrafficMovie(sec: number): void

        Utils: {
            RequestScaleformMovie(movie: string): any
        }
    }

    UI: {
        ShowInventoryItemNotification(add: boolean, item: string, count: number): void

        Menu: {
            RegisterType(menuType: string, open: Function, close: Function): void
            Open(
                menuType: string, 
                namespace: string, 
                name: string, 
                data: { [key: string]: any }, 
                submit?: Function,
                cancel?: Function,
                change?: Function,
                close?: Function
            ): any // TODO
            Close(menuType: string, namespace: string, name: string, cancel?: boolean): void
            CloseAll(cancel?: boolean): void
            GetOpened(menuType: string, namespace: string, name: string): any | void // TODO
            IsOpen(menuType: string, namespace: string, name: string): any | void // TODO
            GetOpenedMenus(): any[] // TODO
        }
    }

    Game: {
        GetPedMugshot(ped: number, transparent?: boolean): any
        Teleport(entity: number, coords: Coords, cb?: Function): void
        SpawnObject(object: number | string, coords: Coords, cb?: Function, networked?: boolean): number | void
        SpawnLocalObject(object: number | string, coords: Coords, cb?: Function): number | void
        SpawnVehicle(model: number | string, coords: Coords, heading: number, cb?: Function, networked?: boolean): number | void
        SpawnLocalVehicle(model: number | string, coords: Coords, heading: number, cb?: Function): number | void
        IsVehicleEmpty(vehicle: number): boolean
        GetObjects(): number[]
        GetPeds(onlyOtherPeds?: boolean): number[]
        GetVehicles(): number[]
        GetPlayers(onlyOtherPlayers?: boolean, returnKeyValue?: boolean, returnPeds?: boolean): number[] | { [key: number]: number }
        GetClosestObject(coords: Coords, modelFilter?: number[] | string[]): [number, number]
        GetClosestPed(coords: Coords, modelFilter?: number[] | string[]): [number, number]
        GetClosestVehicle(coords: Coords, modelFilter?: number[] | string[]): [number, number]
        GetClosestEntity(entities: number[] | string[], isPlayerEntities: boolean, coords?: Coords, modelFilter?: number[] | string[]): [number, number]
        GetClosestPlayer(coords: Coords): [number, number]
        GetPlayersInArea(coords: Coords, radius: number): number[]
        GetVehiclesInArea(coords: Coords, radius: number): number[]
        IsSpawnPointClear(coords: Coords, radius: number): boolean
        DeleteVehicle(vehicle: number): void
        DeleteObject(object: number): void
        GetShapeTestResultSync(shape: number): [boolean, any, any, number, number]
        RaycastScreen(depth: number, ...args: any[]): [any, boolean, any, any, number, number]
        GetVehicleInDirection(): number | [void, Coords] | void
        GetVehicleProperties(vehicle: number): { [key: string]: any } | void
        SetVehicleProperties(vehicle: number, props: { [key: string]: any }): void

        Utils: {
            DrawText3D(coords: Coords, text: string, size?: number, font?: number): void
        }
    }
}