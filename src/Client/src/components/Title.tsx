interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  return <h1 className="text-4xl">{children}</h1>;
}
