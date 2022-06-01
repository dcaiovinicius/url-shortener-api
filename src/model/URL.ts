import { prop, getModelForClass } from "@typegoose/typegoose";

class URL {
  @prop({ required: true })
  public hash!: string;

  @prop({ required: true })
  public originUrl!: string;

  @prop({ required: true })
  public url!: string;
}

const ModelUrl = getModelForClass(URL);

export default ModelUrl;
