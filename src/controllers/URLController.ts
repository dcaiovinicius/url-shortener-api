import { Request, Response } from "express";
import shortId from "shortid";
import ModelUrl from "../model/URL";

class URLController {
  public async shorten(request: Request, response: Response): Promise<void> {
    const { originUrl } = request.body;
    const hash = shortId.generate();
    const url = `${process.env["APP_URL"]}/${hash}`;

    const verify = await ModelUrl.findOne({ originUrl });

    if (verify) {
      response.json({ url });
      return;
    }

    console.log(originUrl);

    ModelUrl.create({ hash, originUrl, url });

    response.json({ hash, url, originUrl });
  }

  public async redireact(request: Request, response: Response): Promise<void> {
    const { hash } = request.params;

    const url = await ModelUrl.findOne({ hash });

    if (url) {
      response.redirect(url.originUrl);
      response;
    }

    response.status(400).json({ error: "Not found" });
  }
}

export default URLController;
