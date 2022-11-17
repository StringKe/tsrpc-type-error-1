import { ApiCall } from 'tsrpc'
import {
    ReqTestFeature,
    ResTestFeature,
} from '../../shared/protocols/test/PtlTestFeature'

export default async function (call: ApiCall<ReqTestFeature, ResTestFeature>) {
    const count = (await call.session.get('count')) || 0
    console.log(call.service.conf)
    await call.session.set('count', count + 1)
    await call.succ({
        data: `Hello Session ${count}!`,
    })
}
