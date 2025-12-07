// COMPONENTS
import Icon from "@/ui/Icon";
import Image from "next/image";
import Link from "next/link";

type Course = {
  id: number;
  name: string;
  description: string;
};

async function getCourses() {
  const res = await fetch(`${process.env.API_URL}/api/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{ courses: Course[] }>;
}

export default async function Home() {
  const data = await getCourses();

  return (
    <main>
      <div className="max-w-7xl m-auto mt-10 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg">
          {data.courses.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl duration-200"
            >
              <Image
                src="/preview.png"
                alt={item.name}
                width={500}
                height={300}
                className="rounded-t-lg"
              />

              <div className="p-3 mt-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>

              <div className="flex justify-between p-3">
                <div className="text-sm place-content-center">2h 50m</div>
                <div>
                  <Link
                    href={`/category/databases/course/izkpm55j334u`}
                    className="p-1.5 text-xs w-full bg-gray-700 hover:bg-gray-800 text-white duration-200 text-center font-semibold rounded-lg inline-flex justify-center items-center gap-1 cursor-pointer fill-current"
                  >
                    <Icon name="play" />
                    Ir al curso
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
