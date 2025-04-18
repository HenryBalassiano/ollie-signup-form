import SignupForm from "@/components/SignupForm";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto w-full p-6 border rounded-md flex flex-col md:flex-row md gap-4">
      <div className="w-full md:w-1/2 flex">
        <ResponsiveImage />
      </div>
      <div className="w-full md:w-1/2 flex">
        <SignupForm />
      </div>
    </div>
  );
}
