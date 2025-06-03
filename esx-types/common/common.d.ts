export declare type Coords = {
    x: number
    y: number
    z: number
}

export declare type Table = any[] | { [key: string]: any }

export declare type Weapon = {
    name: string
    label: string
    components: WeaponComponent[]
}

export declare type WeaponComponent = {
    name: string
    label: string
    hash: number | string
}

export declare type PlayerData = {
    identifier: string
    inventory: Item[]
    loadout: any[]
    money: number
    lastPosition: {
        x: number
        y: number
        z: number
    },
    job: Job
    secondaryJob: Job
    accounts: Account[]
}

export declare type Item = {
    name: string
    label: string
    count: number
    usable: boolean
    rare: boolean
    canRemove: boolean
    weight?: number
    limit?: number
}

export declare type Job = {
    name: string
    grade: number
    grade_name: string
    grade_label: string
    label: string
    skin_female: any[]
    skin_male: any[]
}

export declare type Account = {
    name: string
    label: string
    money: number
}

export declare type XPlayer = {
    accounts: Account[]
    coords: Coords
    group: string
    identifier: string
    inventory: Item[]
    job: Job
    loadout: Table
    name: string
    playerId: number
    source: number
    variables: Table
    weight: number
    maxWeight: number
    metadata: Table
    lastPlaytime: number
    admin: boolean
    license: string

    triggerEvent(eventName: string, ...args: any[]): void
    togglePaycheck(toggle: boolean): void
    isPaycheckEnabled(): boolean
    setCoords(coords: Coords): void
    getCoords(vector: boolean, heading: boolean): Coords | { heading: number } & Coords | Table
    kick(reason?: string): void
    getPlayTime(): number
    setMoney(money: number): void
    getMoney(): number
    addMoney(money: number, reason?: string): void
    removeMoney(money: number, reason?: string): void
    getIdentifier(): string
    setGroup(newGroup: string): void
    getGroup(): string
    set(k: string, v: any): void
    get(k: string): any
    getAccounts(minimal?: boolean): Account[] | { [key: string]: number }
    getAccount(account: string): Account | void
    getInventory(minimal?: boolean): Item[] | { [key: string]: number }
    getLoadout(minimal?: boolean): Weapon[] | { [key: string]: { ammo: number, tintIndex: any, components: WeaponComponent[] } }
    getName(): string
    setName(name: string): void
    setAccountMoney(account: string, money: number, reason?: string): void
    addAccountMoney(account: string, money: number, reason?: string): void
    removeAccountMoney(account: string, money: number, reason?: string): void
    getInventoryItem(name: string): Item | void
    addInventoryItem(name: string, count: number): void
    removeInventoryItem(name: string, count: number): void
    setInventoryItem(name: string, count: number): void
    getWeight(): number
    getMaxWeight(): number
    canCarryItem(name: string, count: number): boolean
    canSwapItem(name1: string, count1: number, name2: string, count2: number): boolean
    setMaxWeight(maxWeight: number): void
    setJob(job: string, grade: string, onDuty?: boolean): void
    addWeapon(weaponName: string, ammo: number): void
    addWeaponComponent(weaponName: string, weaponComponent: string): void
    addWeaponAmmo(weaponName: string, ammo: number): void
    updateWeaponAmmo(weaponName: string, ammo: number): void
    setWeaponTint(weaponName: string, tintIndex: number): void
    getWeaponTint(weaponName: string): number
    removeWeapon(weaponName: string): void
    removeWeaponComponent(weaponName: string, weaponComponent: string): void
    removeWeaponAmmo(weaponName: string, ammo: number): void
    hasWeaponComponent(weaponName: string, weaponComponent: string): boolean
    hasWeapon(weaponName: string): boolean
    hasItem(name: string): boolean
    getWeapon(weaponName: string): Weapon | void
    showNotification(message: string, notifyType: string, length: number): void
    showAdvancedNotification(
        sender: string, 
        subject: string, 
        message: string, 
        textureDict: string, 
        iconType: string, 
        flash: boolean, 
        saveToBrief: boolean, 
        hudColorIndex: number
    ): void
    showHelpNotification(message: string, thisFrame: boolean, beep: boolean, duration: number): void
    getMeta(index: any, subIndex: any): Table | void
    setMeta(index: any, value: any, subValue: any): void
    clearMeta(index: any, subValues: any): void
}

export declare type Config = {
    CustomInventory: boolean
    Accounts: { [key: string]: { label: string, round: boolean } }
    StartingAccounts: { [key: string]: number }
    StartingInventoryItems: { [key: string]: number } | false
    DefaultSpawns: { x: number, y: number, z: number, heading: number }[]
    AdminGroups: { [key: string]: boolean }
    EnablePaycheck: boolean
    LogPaycheck: boolean
    EnableSocietyPayouts: boolean
    MaxWeight: number
    PaycheckInterval: number
    SaveDeathStatus: boolean
    EnableDebug: boolean
    DefaultJobDuty: boolean
    OffDutyPaycheckMultiplier: number
    Multichar: boolean
    Identity: boolean
    DistanceGive: number
    AdminLogging: boolean
    EnableDefaultInventory: boolean
    Locale: string | 'en'

    // File: adjustments
    DisableHealthRegeneration: boolean
    DisableVehicleRewards: boolean
    DisableNPCDrops: boolean
    DisableDispatchServices: boolean
    DisableScenarios: boolean
    DisableAimAssist: boolean
    DisableVehicleSeatShuff: boolean
    DisableDisplayAmmo: boolean
    EnablePVP: boolean
    EnableWantedLevel: boolean
    RemoveHudComponents: { [key: number]: boolean }
    CustomAIPlates: string | '........'
    DiscordActivity: {
        appId: number
        assetName: string
        assetText: string
        buttons: {
            label: string
            url: string
        }[]
        presence: string | '{player_name} [{player_id}] | {server_players}/{server_maxplayers}'
        refresh: number
    }

    // File: logs
    DiscordLogs: {
        Webhooks: {
            default: string
            test: string
            Chat: string
            UserActions: string
            Resources: string
            Paycheck: string
            [key: string]: string
        },
        Colors: {
            default: number
            blue: number
            red: number
            green: number
            white: number
            black: number
            orange: number
            yellow: number
            pink: number
            lightgreen: number
            [key: string]: number
        }
    }

    // File: weapons
    DefaultWeaponTints: { [key: number]: string }
    MK2WeaponTints: { [key: number]: string }
    Weapons: {
        name: string
        label: string
        ammo?: { label: string, hash: string | number }
        tints?: { [key: number]: string }
        components: WeaponComponent[]
    }[]
}