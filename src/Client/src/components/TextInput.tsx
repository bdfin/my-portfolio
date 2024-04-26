interface Props {
  id: string;
  type: "text" | "email";
}

export default function TextInput({ id, type }: Props) {
  return (
    <input
      id={id}
      type={type}
      className="block w-full text-lg border-0 px-3.5 py-2 bg-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600"
    />
  );
}
