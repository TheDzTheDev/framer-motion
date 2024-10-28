import background from "@/assets/background.jpg"
export default function Home() {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-white text-xl mt-2 mr-96 font-bold text-center">
        Welcome to dz.dev! <br/> Explore my projects and skills as <br/> I showcase my journey as a developer
        </h1>
      </div>
    </>
  );
}
