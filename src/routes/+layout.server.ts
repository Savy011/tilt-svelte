export const prerender = true;

export function load() {
  return {
    build_date: new Date().toLocaleDateString("en-Ca"),
  };
}
