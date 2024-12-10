export default function getLoginURL(): string {
  const url = import.meta.env.VITE_API_URL;
  return (url.slice(-1) === "/" ? url.slice(0, -1) : url) + `/authenticate`;
}
