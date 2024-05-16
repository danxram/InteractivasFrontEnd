import "../../index.css"
import { CardCourse } from "../ui/CardCourse";


export function CoursesContainer({items}) {
    return (
        <>
        <h1 class="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-[#0F345F] mt-16 mb-12 ff-main uppercase">
        Courses</h1>

        <section class="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-12 flex-col lg:flex-row items-center pb-20">
            {items.map(item=> <CardCourse key={item.id} imageCourse={item.imageCourse} titleCourse={item.titleCourse} />)}

        </section>
        </>
    )
}