export class CardProp {
    name: string
    description: string | undefined
    price: number | undefined
    imageCode: string | undefined

    constructor(name: string, description: string, price: number, imageCode: string) {
        this.name = name
        this.description = description
        this.price = price
        this.imageCode = imageCode
    }
}