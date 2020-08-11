import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { data } from "./data";

/**
 * API Connection Detail
 */
export const server = axios.create({
  baseURL: "https://tesseractdb.com",
  timeout: 18000
});

/**
 * Create Mock Server Instances
 */
const mockServer = new MockAdapter(server, { delayResponse: 2000 });

export const mockApi = mockServer.onGet("/users").reply(200, data);
