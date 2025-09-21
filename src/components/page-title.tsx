export default function PageTitle({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto mt-8 sm:mt-16 md:mt-32">
      <div className="text-center">
        {children}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
          {title}
        </h2>

        <div className="max-w-xl xl:max-w-2xl mx-auto">
          <p className="mt-4 sm:text-lg md:text-xl lg:text-2xl text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
