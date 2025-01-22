import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"

export const Grid = () => {
  return (
    <section id="about">
      {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
        <BentoGridItem
          key={id}
          title={title}
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          spareImg={spareImg}
        />
      ))}
    </section>
  )
}
