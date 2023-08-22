import { Context, Router } from "oak";

export default interface Controller {
  path: string;

  get?: (ctx: Context) => Promise<void> | void;
  post?: (ctx: Context) => Promise<void> | void;
  put?: (ctx: Context) => Promise<void> | void;
  delete?: (ctx: Context) => Promise<void> | void;
}

export function registerController(
  controller: Controller,
  router: Router,
): void {
  if (controller.get) {
    router.get(controller.path, controller.get);
  }
  if (controller.post) {
    router.post(controller.path, controller.post);
  }
  if (controller.put) {
    router.put(controller.path, controller.put);
  }
  if (controller.delete) {
    router.delete(controller.path, controller.delete);
  }
}
