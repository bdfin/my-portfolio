interface Props {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: Props) {
  return (
    <label htmlFor={htmlFor} className="block font-semibold leading-6">
      {children}
    </label>
  );
}
