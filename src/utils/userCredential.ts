export function getUserCred() {
  const data = localStorage.getItem("user");
  const credential = JSON.parse(data || "{}");
  if (credential.username && credential.password) {
    return credential;
  } else {
    return { username: "", password: "" };
  }
}
