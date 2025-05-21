// components/OptimizedImage.jsx
import Image from "next/image";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={85}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-auto object-cover transition-opacity duration-300"
        // For images you know the exact size for, add placeholder="blur"
        // and blurDataURL for even better LCP
      />
    </div>
  );
}
