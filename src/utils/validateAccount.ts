export function validateAdminAcc({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const server_usr = process.env.NEXT_PUBLIC_USERNAME;
  const server_pwd = process.env.NEXT_PUBLIC_PASSWORD;

  if (username === server_usr && password === server_pwd) {
    return true;
  }
  return false;
}
