export interface Checks {
    func: () => Promise<boolean>,
    messageKey: string
}