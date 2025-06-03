import { Config, Table, Weapon, WeaponComponent } from './../common/common'

export class ESXShared {
    GetRandomString(length?: number): string
    GetConfig(): Config
    GetWeapon(weaponName: string): [number, Weapon]
    GetWeaponFromHash(weaponHash: number | string): [string, Weapon] 
    GetWeaponList(byHash?: boolean): { [key: string]: any } | Weapon[]
    GetWeaponLabel(weaponName: string): string
    GetWeaponComponent(weaponName: string, weaponComponent: string): WeaponComponent | void
    DumpTable(table: any, nb?: boolean): string
    Round(value: number, decimalPlaces?: number): number
    ValidateType(value: string, ...args: any[]): [boolean, string?]
    AssertType(...args: any[]): boolean
    IsFunctionReference(value: unknown): boolean
    Await(conditionFn: Function, errorMessage?: string, timeoutMs?: number): Promise<[boolean, any?]>

    // Module: timeout
    SetTimeout(timeoutMs: number, cb: Function): number
    ClearTimeout(timeoutId: number): void

    // Module: math
    Math: {
        Round(value: number, decimalPlaces?: number): number
        GroupDigits(value: number): string
        Trim(value: number): string | void
        Random(min: number, max: number): number
        GetHeadingFromCoords(origin: { x: number; y: number }, target: { x: number; y: number }): number
    }

    // Module: table
    Table: {
        SizeOf(t: Table): number
        Set(t: Table): Table
        IndexOf(t: Table, value: any): number
        LastIndexOf(t: Table, value: any): number
        Find(t: Table, cb?: Function): any
        FindIndex(t: Table, cb?: Function): number
        Filter(t: Table, cb?: Function): Table
        Map(t: Table, cb?: Function): Table
        Reverse(t: Table): Table
        Clone(t: Table): Table
        Concat(t1: Table, t2: Table): Table
        Join(t: Table, separator?: string): string
        TableContains(t: Table, value: any): boolean
        Sort(t: Table, order: Function): Function
        ToArray(t: Table): any[]
        Wipe(t: Table): Table
    }
}