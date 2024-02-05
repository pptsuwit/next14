import { service } from "@/services/public.service";

const getAbouts = async () => {
  try {
    const response = await service.getAbout();
    return response;
  } catch (error) {
    const message = {
      message: "error",
    };
    return message;
  }
};
export default async function page() {
  const about: IAbout = await getAbouts();
  return (
    <>
      <div className="bg-white p-8 text-center">
        <h1 className="text-4xl font-bold">Your App Name</h1>
        <p className="text-lg">
          Revolutionizing the way you experience technology.
        </p>
        <p className="text-lg">{about.message}</p>
      </div>

      <div className="bg-slate-50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg">
          Join millions of users enjoying the future of innovation. Sign up now!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full">
          Sign Up
        </button>
      </div>
    </>
  );
}
