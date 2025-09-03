
import Image from 'next/image';

interface ProductImageGridProps {
  images: string[];
  alt: string;
}

export function ProductImageGrid({ images, alt }: ProductImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div key={index} className="aspect-square relative w-full overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
          <Image
            src={src}
            alt={`${alt} - view ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
