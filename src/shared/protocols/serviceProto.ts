import { ServiceProto } from 'tsrpc-proto';
import { ReqSession, ResSession } from './test/PtlSession';

export interface ServiceType {
    api: {
        "test/Session": {
            req: ReqSession,
            res: ResSession
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 7,
    "services": [
        {
            "id": 1,
            "name": "test/Session",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "test/PtlSession/ReqSession": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "test/PtlSession/ResSession": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "count",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "before",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "_timestamp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "_throttler",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "limit",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 1,
                                "name": "remaining",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 2,
                                "name": "reset",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        }
    }
};