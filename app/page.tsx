import Content from "@/components/Content";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div className="block lg:flex lg:justify-between lg:gap-8">
      <Info />
      <Content />
    </div>
  );
}
