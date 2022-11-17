import { BaseServerOptions, HttpServer, WsServer } from 'tsrpc'
import { serviceProto } from './shared/protocols/serviceProto'
import './utils/dayjs-extends'

const options: Partial<BaseServerOptions<any>> = {
    json: true,
    strictNullChecks: true,
    logMsg: true,
    logReqBody: true,
    logResBody: true,
    logLevel: 'debug',
}

export const httpServer = new HttpServer(serviceProto, {
    ...options,
    port: 3000,
})

export const wsServer = new WsServer(serviceProto, {
    ...options,
    port: 3001,
    heartbeatWaitTime: 10000,
    logConnect: true,
})
