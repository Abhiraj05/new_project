export default function Home() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center  bg-linear-to-l from-red-500 via-yellow-300 to-red-500 text-white">
          <div className="flex-col text-center">
           <div className="text-8xl capitalize font-extrabold text-gray-200">
            hello world
           </div>
           <div className="mt-4">
            <a href="/contact" className="capitalize text-gray-200"> go to contact page</a>
           </div>
            <div className="mt-2">
            <a href="/about" className="capitalize text-gray-200"> go to about page</a>
           </div>
           </div>
    </div>
    </>
  );
}
