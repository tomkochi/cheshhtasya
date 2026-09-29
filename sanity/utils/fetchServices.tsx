import { client } from "../lib/client";

type ServiceData = any[];

export async function getServices(): Promise<ServiceData> {
  const services: ServiceData = await client.fetch(
    `*[_type == "servicesPage"]`
  );

  return services;
}
