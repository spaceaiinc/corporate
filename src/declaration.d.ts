declare module "*.png" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: React.FC<React.SVGProps<SVGSVGElement>>;
  export default value;
}