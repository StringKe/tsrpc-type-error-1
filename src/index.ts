import * as path from 'path'
import { httpServer, wsServer } from './server'
import { HttpServer, WsServer } from 'tsrpc'
import { withSession } from './kernel/withSession'
import { withCasbin } from './kernel/withCasbin'
import { withThrottler } from './kernel/withThrottler'
import './type'

async function preWith(server: HttpServer | WsServer) {
    await withSession(server, async (_userId) => {
        return []
    })
    await withThrottler(server)
    await withCasbin(server, path.join(__dirname, 'model.conf'))
}

async function init() {
    await httpServer.autoImplementApi(path.resolve(__dirname, 'api'))
    await wsServer.autoImplementApi(path.resolve(__dirname, 'api'))

    await preWith(httpServer)
    await preWith(wsServer)
}

async function main() {
    await init()
    await httpServer.start()
    await wsServer.start()
}

void main()
