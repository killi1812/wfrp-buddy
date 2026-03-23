export interface Tab {
    key: string
    titleKey: string
    // NOTE: Component imported from vue won't compile can't be found
    content: any
    args?: any
    showClose?: boolean
}

export class TabItem implements Tab {
    key!: string
    titleKey!: string
    content: any
    args?: any = undefined
    showClose?: boolean = false
}
