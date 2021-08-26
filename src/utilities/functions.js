export const getCookie = (name) => {
  const cookie = document.cookie;
  if (!cookie) {
    return "";
  }
  const pair = cookie.split("; ").find((e) => e.split("=")[0] === name);
  if (pair) {
    return pair.split("=")[1];
  }
  return "";
};
