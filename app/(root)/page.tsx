import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
//import { sampleBooks } from "@/constants";
import { books, users } from "@/database/schema";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";
import { db } from "@/database/drizzle";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  const session = await auth();

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

  return (
    <>
      <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />

      <BookList
        title="Latest Books"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
