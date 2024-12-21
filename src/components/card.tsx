import Image, { StaticImageData } from 'next/image';

interface CardProps {
    title: string;
    content: string;
    img?: StaticImageData;
}

export const Card = ({ title, content, img }: CardProps) => {
    return (
        <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start h-full">
            {img && (
                <Image
                    className="rounded-md object-cover w-full"
                    width={300}
                    height={200}
                    src={img.src}
                    alt=""
                />
            )}
            <h1 className="text-xl font-semibold my-2">{title}</h1>
            <p className="flex-grow">{content}</p>
        </div>
    );
};
