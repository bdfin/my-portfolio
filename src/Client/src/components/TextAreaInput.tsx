interface Props {
  id: string;
  rows?: number;
}

export default function TextAreaInput({ id, rows = 4 }: Props) {
  return (
    <textarea
      id={id}
      rows={rows}
      className="block w-full text-lg border-0 px-3.5 py-2 bg-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600"
    ></textarea>
  );
}
