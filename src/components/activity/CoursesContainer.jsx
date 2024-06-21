import "../../index.css"
import { CardCourse } from "../ui/CardCourse";
import { useFetchCourses } from "../hooks/useFetchCourses";


export function CoursesContainer() {

    const { data: items } = useFetchCourses();

    return (
        <>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-center text-[#0F345F] mt-16 mb-12 ff-main uppercase">
                Courses
            </h1>

            <section className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8 mx-8  pb-20">
                {items.map(item => (
                    <CardCourse
                        key={item.id}
                        imageCourse={item.image}
                        titleCourse={item.name}
                    />
                ))}
            </section>

        </>
    )
}