import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "../carousel";
import { v4 as uuidv4 } from "uuid";
import TextGradient from "../wrappers/text-gradient";
import { Card, CardContent, CardDescription, CardFooter } from "../card";

interface Quote {
  id: string;
  quote: string;
  author: string | "Anonymous";
  date: Date;
}

const quotes: Quote[] = [
  {
    id: uuidv4(),
    quote: "If you see me in a fight with a bear, pray for the bear.",
    author: "The Black Mamba (Kobe Bryant)",
    date: new Date("2024-12-03"),
  },
  {
    id: uuidv4(),
    quote:
      "The major reason for setting a goal is for what it makes of you to accomplish it. What it makes of you will always be the far greater value than what you get.",
    author: "Jim Rohn",
    date: new Date("2024-12-04"),
  },
  {
    id: uuidv4(),
    quote:
      "If you muster the strength to weight-lift a car to save a child, above your current capabilities, the strength gained will stay after things calm down",
    author: "Excerpt from Skin in the Game by Nassim Nicholas Taleb",
    date: new Date("2024-12-05"),
  },
];

const FavouriteQuotes = () => {
  return (
    <div className="container mx-auto my-8">
      <h3 className="text-2xl md:text-4xl font-semibold mb-4">
        <TextGradient text="Inspiring" /> and <TextGradient text="Intriguing" />{" "}
        Excepts
      </h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {quotes.map((quote, key) => (
            <CarouselItem
              key={key}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 mx-4"
            >
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6 text-xl">
                  &quot; {quote.quote} &quot;
                </CardContent>
                <CardDescription className="text-center text-lg mb-4">
                  {quote.author}
                </CardDescription>
                <CardFooter className="text-sm flex justify-end w-full text-slate-500">
                  {quote.date.toDateString()}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FavouriteQuotes;
