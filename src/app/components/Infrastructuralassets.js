import Image from "next/image";

const InfrastructuralAssets = () => {
  return (
    <div className="py-7">
      <h1 className="text-3xl font-bold text-customColor uppercase mb-3 text-center py-14 mt-15">
        Our Infrastructural Assets
      </h1>
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-60 w-80">
            <Image
              src="/assets-gallery-img1.png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-60 w-80">
            <Image
              src="/assets-gallery-img2.png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-60 w-80">
            <Image
              src="/assets-gallery-img3.png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-60 w-80">
            <Image
              src="/assets-gallery-img4.png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <p className="text-brown-900 mt-2 text-center mb-16 py-12">
        <a
          href="#"
          className="text-customColor1 hover:text-customColor text-center"
        >
          View our facilities &gt;
        </a>
      </p>
    </div>
  );
};

export default InfrastructuralAssets;
