import React from "react";
import { cn } from "@/lib/utils";
import BookCover from "@/components/BookCover";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoaned = false,
}: Book) => {
  return (
    <li className={cn(isLoaned && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoaned && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={color} coverImage={cover} />

        <div className={cn("mt-4", !isLoaned && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

        {isLoaned && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-light-100">11 days left to return</p>
            </div>

            <Button className="book-btn">Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
};
export default BookCard;