export default function buildClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
