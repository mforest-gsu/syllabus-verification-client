import type { AuthToken } from "../types";

import sendHttpRequest from "../../../lib/axios/sendHttpRequest";

export default async function checkAuth(authToken: AuthToken): Promise<number> {
  const rightNow = Math.floor(Date.now() / 1000);
  if (authToken.expiresOn <= rightNow) {
    return authToken.expiresOn;
  }

  const isValid = await sendHttpRequest<null, boolean>(
    `GET`,
    `/check`,
    null,
    null,
    {
      Authorization: `Bearer ${authToken.accessToken}`,
    }
  );

  return isValid ? authToken.expiresOn : rightNow - 1;
}
