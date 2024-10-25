import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Logo */}
       <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">Hunding Coder</h1>
        {/* Instructions */}
        <p className="styles.description">
          A blog project for hunding coders
        </p>

        {/* Create 4 cards with images and text in them */}

        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <a href="#" className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg shadow-lg max-w-[200px]">
            <h2 className="text-lg font-bold">Card 1</h2>
            <p className="text-sm">Download the perfect morning nature pictures. Find over 100+ of the best free morning nature images</p>
          </a>

          {/* Card 2 */}
          <a href="#" className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg shadow-lg max-w-[200px]">
            <h2 className="text-lg font-bold">Card 2</h2>
            <p className="text-sm">Download the perfect morning nature pictures. Find over 100+ of the best free morning nature images</p>
          </a>

          {/* Card 3 */}
          <a href="#" className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg shadow-lg max-w-[200px]">
            <h2 className="text-lg font-bold">Card 3</h2>
            <p className="text-sm">Download the perfect morning nature pictures. Find over 100+ of the best free morning nature images</p>
          </a>

          {/* Card 4 */}
          <a href="#" className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg shadow-lg max-w-[200px]">
            <h2 className="text-lg font-bold">Card 4</h2>
            <p className="text-sm">Download the perfect morning nature pictures. Find over 100+ of the best free morning nature images</p>
          </a>
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

