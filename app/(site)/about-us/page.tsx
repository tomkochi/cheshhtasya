import { urlForImage } from "@/sanity/lib/image";
import { getAbout } from "@/sanity/utils/fetchAbout";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FC } from "react";

interface PortableTextMarkComponentProps<T> {
  children: React.ReactNode;
  value: T;
}

type PortableTextMarkComponent<T> = FC<PortableTextMarkComponentProps<T>>;

// Adjust the type of marks to match PortableTextMarkComponent
interface CustomPortableTextComponents {
  types: {
    image: (node: any) => JSX.Element;
  };
  marks: {
    [key: string]: PortableTextMarkComponent<any>;
  };
}

const About: FC = async () => {
  const data = await getAbout();

  const portableTextComponent: CustomPortableTextComponents = {
    types: {
      image: (node: any) => (
        <Image
          src={urlForImage(node.value.asset)}
          alt="image"
          width={600}
          height={400}
          layout="responsive"
          quality={100}
        />
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="font-italic">{children}</em>,
      link: ({ children, value }) => (
        <a
          href={value?.href || ""}
          target="_blank"
          className="text-cyan-600 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <div
        className="w-full h-12 md:h-[230px] bg-cover bg-center"
        style={{
          backgroundImage: `url("${urlForImage(data[0].headerImage)}")`,
        }}
      ></div>
      <div className="w-full max-w-2xl mx-auto my-32 text-secondary">
        <h3 className="text-4xl text-primary text-center font-semibold mb-14 px-4">
          {data[0].title}
        </h3>
        {/* Pass data.content to the blocks prop */}
        <div className="portable-style">
          <PortableText
            value={data[0].content}
            components={portableTextComponent as any} // Use 'as any' to suppress TypeScript error
          />
        </div>
      </div>
    </>
  );
};

export default About;
