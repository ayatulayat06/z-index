export class NextResponse {
  static json(body: any, init: Record<string, any> = {}) {
    return {
      body,
      status: init.status ?? 200,
      headers: init.headers ?? {},
    };
  }
}
