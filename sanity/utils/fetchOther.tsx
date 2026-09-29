import { client } from "../lib/client";

type OtherData = any[];

export async function getOther(): Promise<OtherData> {
  const other: OtherData = await client.fetch(`*[_type == "other"]`);

  return other;
}
