import React from "react";


const images = [
  {
    // src: "https://github.com/Johnydavid/My-Portfolio/blob/main/certificates/GuviCertification%20-%20MERN%20FSD.png",
    src : "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
    width: 500,
    height: 174,
    isSelected: false,
    caption: "MERN Full Stack Developer Certificate",
    alt: "FSD",
    href: "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
    target: "_blank",
    rel: "noreferrer",
  },
    {
    src: "https://media.licdn.com/dms/image/sync/C5627AQFQ-2uChj_FRA/articleshare-shrink_1280_800/0/1687410863611?e=1689145200&v=beta&t=4POU9l3rMFOA9-5x1VRhm9wudbIWfzEeCUxrykj0mQs",
    width: 320,
    height: 174, 
    alt: "Data Science Tools",
    href: "https://media.licdn.com/dms/image/sync/C5627AQFQ-2uChj_FRA/articleshare-shrink_1280_800/0/1687410863611?e=1689145200&v=beta&t=4POU9l3rMFOA9-5x1VRhm9wudbIWfzEeCUxrykj0mQs",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://media.licdn.com/dms/image/sync/C5627AQGw8cip0Ld0cg/articleshare-shrink_1280_800/0/1687410863540?e=1689145200&v=beta&t=6-vpwkMOD4TRWLC8kdF1DqOHYlMuDHgCGBt5bLxcpVA",
    width: 320,
    height: 174, 
    alt: "Data Science Foundation",
    href: "https://media.licdn.com/dms/image/sync/C5627AQGw8cip0Ld0cg/articleshare-shrink_1280_800/0/1687410863540?e=1689145200&v=beta&t=6-vpwkMOD4TRWLC8kdF1DqOHYlMuDHgCGBt5bLxcpVA",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    width: 320,
    height: 174, 
    alt: "HTML - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    width: 320,
    height: 174, 
    alt: "CSS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    width: 320,
    height: 174, 
    alt: "CSS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://media.licdn.com/dms/image/D5622AQGFvc4ViZK4ZA/feedshare-shrink_1280/0/1688880603827?e=1691625600&v=beta&t=hVKbQYotA358PrHpRGXi7p0Pgt8vsq6J0ED42EC0R6s",
    width: 320,
    height: 174, 
    alt: "Bootstrap - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQGFvc4ViZK4ZA/feedshare-shrink_1280/0/1688880603827?e=1691625600&v=beta&t=hVKbQYotA358PrHpRGXi7p0Pgt8vsq6J0ED42EC0R6s",
    target: "_blank",
    rel: "noreferrer",
  },

//   {
//     src: "https://st3.depositphotos.com/4187167/14640/i/1600/depositphotos_146407923-stock-photo-makeup-products-in-shopping-cart.jpg",
//     width: 320,
//     height: 212,
//     alt: "Shopping Cart",
//     href: "https://visitshopping-cart.netlify.app/",
//     target: "_blank",
//     rel: "noreferrer",
//   },
];

export default function Certificates() {
  return (
    <>
      <h1 className="text-success fontClass" align="center">
        {" "}
       Certificates
      </h1>

      <div align="center" className="mt-5">
        {images.map((image) => {
          const { src, href, target, rel, alt } = image;
          return (
            <a href={href} target={target} rel={rel}>
              <img
                src={src}
                alt={alt}
                style={{ height: 250, width: 400, marginLeft: 25, marginTop : 25 }}
              ></img>
            </a>
          );
        })}
      </div>
    </>
  );
}
