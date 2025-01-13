export interface Payload {
    method: string,
    headers: {
      'Content-Type': string,
      'Access-Control-Allow-Origin': string;
    },
    body: string
}