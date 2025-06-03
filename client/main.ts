import { wait } from '@/utils/wait'
import { ESXClient } from '@/esx-types/client/client'

let ESX: ESXClient | null = null

setTick(async () => {
    if (ESX === null) {
        emit('esx:getSharedObject', (sharedObject: ESXClient) => {
            ESX = sharedObject
            console.log('ESX Shared Object received!')
        })
    } else {
        console.log('Welcome to 999s FiveM Typescript Template (Client)')
    }

    await wait(1000)
})