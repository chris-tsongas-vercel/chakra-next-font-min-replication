const getDomainFromHost = (host: string) => host.split(".").slice(-2).join(".");
const getDomain = (host: string) => {
  if (process.env.VERCEL_ENV === "production") {
    return getDomainFromHost(host);
  }
  if (process.env.VERCEL !== "1") {
    return getDomainFromHost(host.replace(/\.?localhost:\d+$/, ""));
  }
  return "";
};
export default getDomain;
