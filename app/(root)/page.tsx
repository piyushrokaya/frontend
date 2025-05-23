
import Hello from "@/app/components/hello";
import { title } from "process";
export const metadata={
  title: "Home",
  description: "Home page", 
};

export default function Home() {
  console.log('What am I doing here? -- SERVER/CLIENT');
  return (
    <>
    <h1 className="text-3xl">Welcome to Next.js</h1>
<Hello />
</>
  );
}
