export default function createParams(params: {
  readonly [k: string]: string | null | undefined;
}): URLSearchParams {
  const urlParams = new URLSearchParams();
  for (const k in params) {
    const v = params[k];
    if (typeof v === "string") {
      urlParams.set(k, v);
    }
  }

  return urlParams;
}
