import mogoose from "mongoose";

class MogooseConnect {
  public async connect(): Promise<void> {
    try {
      await mogoose.connect(`${process.env["MANGO_URL"]}`);
      console.log("Database connected");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}

export default MogooseConnect;
