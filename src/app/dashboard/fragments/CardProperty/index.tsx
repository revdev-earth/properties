import Image from "next/image";

const labels = [
  { src: "/icons/plus-solid.svg", alt: "plus" },
  { src: "/icons/user-regular.svg", alt: "user" },
  { src: "/icons/dollar-sign-solid.svg", alt: "dollar" },
];

export default function CardProperty() {
  return (
    <div className="flex gap-5 p-[10px] border rounded-md w-[401px] h-[100px]">
      <Image
        src="/images/img1.png"
        alt="Picture of the author"
        width={80}
        height={80}
        className="rounded-md"
      />
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Property address</p>
        <div className="flex gap-5">
          {labels.map((label, index) => (
            <Image
              key={`${index}-${label.alt}`}
              src={label.src}
              alt={label.alt}
              width={30}
              height={30}
              className="bg-[#D9D9D9] p-2 rounded-full fill-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}