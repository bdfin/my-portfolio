interface Props {
  children: string;
  href: string;
  target?: "_blank" | "";
}

export default function Link({ children, href, target }: Props) {
  return (
    <a
      href={href}
      target={target}
      className="underline underline-offset-2 hover:underline-offset-4"
    >
      {children}
    </a>
  );
}
