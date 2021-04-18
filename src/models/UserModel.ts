import { getModelForClass, prop } from '@typegoose/typegoose'
import { Timestamp } from 'bson'

class UserC {
    @prop()
    public name: string;

    @prop()
    public email: string;

    @prop()
    public image: string;

    @prop()
    public createdAt: Timestamp;

    @prop()
    public updatedAt: Timestamp;
}

export default getModelForClass(UserC, { schemaOptions: { collection: 'users' } })
