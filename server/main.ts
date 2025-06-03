import { wait } from '@/utils/wait'
import { ESXServer } from '@/esx-types/server/server'

let ESX: ESXServer | null = null

emit('esx:getSharedObject', (sharedObject: ESXServer) => {
    ESX = sharedObject
    console.log('ESX Shared Object received!')

    setTick(async () => {
        console.log('Welcome to 999s FiveM Typescript Template (Server)')
    
        await wait(1000)
    })
})