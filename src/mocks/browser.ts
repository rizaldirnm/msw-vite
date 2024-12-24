import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const handler = [
  http.get("http://api.resource.com/ping", () => {
    return HttpResponse.json({ message: "pong" });
  }),
];

export const worker = setupWorker(...handler);
