"use client";

export default function Copyright({ copy }: { copy: string }) {
  return (
    <p className="mt-10 text-center text-xs leading-5 text-gray-500">
      &copy; {new Date().getFullYear()} Erick Patrick. {copy}
    </p>
  );
}
