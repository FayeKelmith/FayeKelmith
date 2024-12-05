import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import TextGradient from "../wrappers/text-gradient";
import Link from "next/link";
const Essays = () => {
  return (
    <div className="mx-auto container w-full">
      <h3 className="w-fit text-2xl md:text-4xl font-semibold">
        Epistles to <TextGradient text="Faye Kelmith" />{" "}
      </h3>
      <div className="my-8 grid gap-4 md::grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardTitle className="my-3 text-center ">
            Talking To Someone in Pain
          </CardTitle>
          <CardContent>
            <Image
              src="/images/someone_in_pain.jpg"
              width={960}
              height={450}
              alt="Mental Health"
              className="object-cover h-40"
            />
            <CardDescription className="">
              In this essay, I am thinking about how I could effectively
              communicate with someone who is in pain.
            </CardDescription>
          </CardContent>
          <CardFooter className="text-center">
            <Link
              href="https://monogr.ph/674ec46fec3468250e63e83f"
              target="_blank"
              className="w-full inline-block"
            >
              <Button variant="outline" size="lg">
                Read <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Essays;
