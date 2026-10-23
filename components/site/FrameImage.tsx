import Image from "next/image";

type FrameImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FrameImage({
  src,
  alt,
  className,
  sizes = "(max-width: 992px) 100vw, 50vw",
  priority = false,
}: FrameImageProps) {
  const isLocal = src.startsWith("/");

  return (
    <Image
      alt={alt}
      className={className}
      fill
      priority={priority}
      quality={95}
      sizes={sizes}
      src={src}
      style={{ objectFit: "cover" }}
      unoptimized={isLocal}
    />
  );
}
