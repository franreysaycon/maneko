import { getModelForClass, pre, prop } from "@typegoose/typegoose";

@pre<TransactionC>('save', function () {
    if(!this.createdAt){
        this.createdAt = new Date()
    }
})
export class TransactionC {
    @prop()
    public name: string;

    @prop()
    public value: number;

    @prop()
    public type: string;

    @prop()
    public createdAt: Date;
}

@pre<CardC>('save', function () {
    if(!this.createdAt){
        this.createdAt = new Date()
    }
    this.updatedAt = new Date()
})
export class CardC {
    @prop()
    public name: string; 

    @prop()
    public type: string;

    @prop()
    public balance: number;

    @prop()
    public issuer: string;

    @prop()
    public userId: string;

    @prop()
    public createdAt: Date;

    @prop()
    public updatedAt: Date;

    @prop()
    public budget: number;

    @prop({ type: () => TransactionC, default: [] })
    public transactions: TransactionC[]
}

export default getModelForClass(CardC, { schemaOptions: { collection: 'cards' } })
