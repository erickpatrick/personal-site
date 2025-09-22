export default function ReadingTime({
  contentLength,
}: {
  contentLength: string;
}) {
  const words = contentLength.trim().split(/\s+/).length;
  const estimatedTime = Math.ceil(words / 185);

  return (
    <span className="block text-sm leading-6 text-gray-600">
      {estimatedTime}min de leitura
    </span>
  );
}
