import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectID, Timestamp } from "bson";

export enum TransactionType {
    WITHDRAWAL = "withdrawal",
    DEPOSIT = "deposit",
    PAYMENT = "payment",
    COST = "cost"
}

class TransactionC {
    @prop()
    public id: ObjectID;

    @prop()
    public name: string;

    @prop()
    public value: number;

    @prop()
    public type: TransactionType;

    @prop()
    public createdAt: Timestamp;
}

class CardC {
    @prop()
    public name: string;

    @prop()
    public userId: ObjectID;

    @prop()
    public email: string;

    @prop()
    public image: string;

    @prop()
    public createdAt: Timestamp;

    @prop()
    public updatedAt: Timestamp;

    @prop()
    public budget: number;

    @prop({ type: () => TransactionC })
    public transactions: TransactionC[]
}

export default getModelForClass(CardC, { schemaOptions: { collection: 'cards' } })
