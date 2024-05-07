import CardCarousel from "@/components/ui/CardCarousel";
import DisplayGrid from "@/components/ui/DisplayGrid";
import Search from "@/components/ui/Search";

export default function Home() {
  return (
    <>
      <Search />
      <DisplayGrid>
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
      </DisplayGrid>
    </>
  );
}
