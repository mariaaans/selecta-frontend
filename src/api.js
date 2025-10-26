import { API_URL } from "./config";

async function request(path, options = {}) {
  const url = `${API_URL}${path}`;
  const defaultHeaders = { "Content-Type": "application/json" };
  const opts = { headers: defaultHeaders, ...options };

  try {
    const res = await fetch(url, opts);
    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.message || res.statusText);
    return json;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
}

export const api = {
  get: (path) => request(path, { method: "GET" }),
  post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
  del: (path) => request(path, { method: "DELETE" }),
};
