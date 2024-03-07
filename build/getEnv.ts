export function conversionEnv(env: Record<string, any>): ViteEnvType {
  const resultEnv: any = {};

  for (const key in env) {
    if (env[key] === "true") resultEnv[key] = true;
    if (env[key] === "false") resultEnv[key] = false;
    if (key === "VITE_PORT") resultEnv[key] = Number(env[key]);
  }
  return resultEnv;
}
