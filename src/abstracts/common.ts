export interface Account {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    tag: string
}

export interface LogMessage {
    type: string,
    message: string
}

export enum MessageType {
    success = 'success',
    failed = 'failed'
}
