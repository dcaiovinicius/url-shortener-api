import { Request, Response } from "express";
import { config } from "../config";
import shortId from "shortid";

class URLController {
  public async shorten(request: Request, response: Response): Promise<void> {
    const { originUrl } = request.body;
    const hash = shortId.generate();
    const url = `${config.APP_URL}/${hash}`;

    response.json({ hash, url, originUrl });
  }
}

export default URLController;
