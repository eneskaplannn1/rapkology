import Image from "next/image";
import React from "react";

export default function Title({
  title,
  subtitle,
  icon,
  className,
  titleClassName,
}: {
  title: string;
  subtitle?: string;
  icon: string | boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={`flex flex-row gap-x-8 ${className}`}>
      <h1
        className={`text-white text-[5vw] font-saira-extrabold leading-none text-left ${titleClassName}`}
      >
        {title}{" "}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h1>
      {icon && <Image src={icon} alt="icon" width={53} height={53} />}
    </div>
  );
}
