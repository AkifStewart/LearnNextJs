import Blogs from "@/components/Blogs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen b-20 font-[family-name:var(--font-geist-sans)]">

      {/* Main content */}
      <main className="flex flex-col gap-4 row-start-2 items-center">

        {/* Logo */}

        <h1 className="text-3xl sm:text-5xl font-bold sm:text-left">Hunting Coder</h1>
        <div className="my-2 ">
          <Image className="border-2 rounded-xl" alt="Hunting Coder" src={"/img-coder.jpg"} width={300} height={300} priority></Image>
        </div>
        {/* Instructions */}
        <p className="styles.description">
          A blog project for hunting coders
        </p>

        {/* Create 4 cards with images and text in them */}

        <div className="blogs space-y-4">
          <div className="justify-items-center">
          <h2 className="text-2xl font-bold">Popular Blogs</h2>
          <Blogs />
          </div>
          
        </div>
      </main>
      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Learn */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* File icon */}
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {/* Button text */}
          Learn
        </a>
        {/* Examples */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Window icon */}
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {/* Button text */}
          Examples
        </a>
        {/* Go to nextjs.org */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Globe icon */}
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {/* Button text */}
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

