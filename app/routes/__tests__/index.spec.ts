import { loader } from "../index";

describe("index route", () => {
  it("should redirect to videos page", async () => {
    const response = loader();
    const { status, headers } =
      // @ts-ignore - this is a hack to get the response object
      response[Object.getOwnPropertySymbols(response)[1]];
    const query = headers[Object.getOwnPropertySymbols(headers)[0]];
    expect(status).toBe(302);
    expect(query).toEqual(["location", "/videos"]);
  });
});
