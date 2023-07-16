import React from "react";
import ImageGallery from 'react-image-gallery';


// const images = [
//   {
//     // src: "https://github.com/Johnydavid/My-Portfolio/blob/main/certificates/GuviCertification%20-%20MERN%20FSD.png",
//     src : "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
//     width: 500,
//     height: 174,
//     isSelected: false,
//     caption: "MERN Full Stack Developer Certificate",
//     alt: "FSD",
//     href: "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
//     target: "_blank",
//     rel: "noreferrer",
//   },
   

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
//     width: 320,
//     height: 174, 
//     alt: "HTML - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
//     width: 320,
//     height: 174, 
//     alt: "CSS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
//     width: 320,
//     height: 174, 
//     alt: "CSS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
//     target: "_blank",
//     rel: "noreferrer",
//   },
//   {
//     src: "https://media.licdn.com/dms/image/D5622AQGFvc4ViZK4ZA/feedshare-shrink_1280/0/1688880603827?e=1691625600&v=beta&t=hVKbQYotA358PrHpRGXi7p0Pgt8vsq6J0ED42EC0R6s",
//     width: 320,
//     height: 174, 
//     alt: "Bootstrap - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQGFvc4ViZK4ZA/feedshare-shrink_1280/0/1688880603827?e=1691625600&v=beta&t=hVKbQYotA358PrHpRGXi7p0Pgt8vsq6J0ED42EC0R6s",
//     target: "_blank",
//     rel: "noreferrer",
//   },
//   {
//     src: "https://media.licdn.com/dms/image/D5622AQEAlWq6Joynuw/feedshare-shrink_1280/0/1688880620266?e=1691625600&v=beta&t=VXwhMT0K7Nea2DEzRWUzbLs7BQ20qOlbNn2ymgrey7w",
//     width: 320,
//     height: 174, 
//     alt: "JavaScript - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQEAlWq6Joynuw/feedshare-shrink_1280/0/1688880620266?e=1691625600&v=beta&t=VXwhMT0K7Nea2DEzRWUzbLs7BQ20qOlbNn2ymgrey7w",
//     target: "_blank",
//     rel: "noreferrer",
//   },
//   {
//     src: "https://media.licdn.com/dms/image/D5622AQEyZdvqLnQbsQ/feedshare-shrink_1280/0/1688880735058?e=1691625600&v=beta&t=Ttw9pD51XxspmS8d_fcN88Q0kOMt-t4c8XpBioJrLWY",
//     width: 320,
//     height: 174, 
//     alt: "ReactJS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQEyZdvqLnQbsQ/feedshare-shrink_1280/0/1688880735058?e=1691625600&v=beta&t=Ttw9pD51XxspmS8d_fcN88Q0kOMt-t4c8XpBioJrLWY",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQG85KahVUDnMA/feedshare-shrink_1280/0/1688880745292?e=1691625600&v=beta&t=VLPG65hWyaCFJAMhcl0ug-EWxOmXekUCgRP2WrF0Wso",
//     width: 320,
//     height: 174, 
//     alt: "NodeJS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQG85KahVUDnMA/feedshare-shrink_1280/0/1688880745292?e=1691625600&v=beta&t=VLPG65hWyaCFJAMhcl0ug-EWxOmXekUCgRP2WrF0Wso",
//     target: "_blank",
//     rel: "noreferrer",
//   },
//   {
//     src: "https://media.licdn.com/dms/image/D5622AQFgu4fURaIghg/feedshare-shrink_1280/0/1688880667576?e=1691625600&v=beta&t=qs1V9zZ-j5tIcxDJBOSVwND7ofnIoQWX89enjecvCwc",
//     width: 320,
//     height: 174, 
//     alt: "MongoDB - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQFgu4fURaIghg/feedshare-shrink_1280/0/1688880667576?e=1691625600&v=beta&t=qs1V9zZ-j5tIcxDJBOSVwND7ofnIoQWX89enjecvCwc",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQHvxzKbfFRhIQ/feedshare-shrink_1280/0/1688880684020?e=1691625600&v=beta&t=W0j4MCqRI26BteLULe5VcrATBBQRq_J7L0fE3SAsiaM",
//     width: 320,
//     height: 174, 
//     alt: "DS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQHvxzKbfFRhIQ/feedshare-shrink_1280/0/1688880684020?e=1691625600&v=beta&t=W0j4MCqRI26BteLULe5VcrATBBQRq_J7L0fE3SAsiaM",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/D5622AQEA4JfJTzyPNQ/feedshare-shrink_1280/0/1688880697694?e=1691625600&v=beta&t=H52fNrC3fgBoJKwj7BUBTOgE15czL-4uN9TPy-OAYnI",
//     width: 320,
//     height: 174, 
//     alt: "AWS - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQEA4JfJTzyPNQ/feedshare-shrink_1280/0/1688880697694?e=1691625600&v=beta&t=H52fNrC3fgBoJKwj7BUBTOgE15czL-4uN9TPy-OAYnI",
//     target: "_blank",
//     rel: "noreferrer",
//   },



//   {
//     src: "https://media.licdn.com/dms/image/D5622AQHVENHkHier-A/feedshare-shrink_1280/0/1688880754310?e=1691625600&v=beta&t=HBAE9snTQdrLtdtHwxCsdCLTTR8x_p76yh4mdBVXfzg",
//     width: 320,
//     height: 174, 
//     alt: "mySQL - Guvi Certificate",
//     href: "https://media.licdn.com/dms/image/D5622AQHVENHkHier-A/feedshare-shrink_1280/0/1688880754310?e=1691625600&v=beta&t=HBAE9snTQdrLtdtHwxCsdCLTTR8x_p76yh4mdBVXfzg",
//     target: "_blank",
//     rel: "noreferrer",
//   },

//   {
//     src: "https://media.licdn.com/dms/image/sync/C5627AQFQ-2uChj_FRA/articleshare-shrink_1280_800/0/1687410863611?e=1689145200&v=beta&t=4POU9l3rMFOA9-5x1VRhm9wudbIWfzEeCUxrykj0mQs",
//     width: 320,
//     height: 174, 
//     alt: "Data Science Tools",
//     href: "https://media.licdn.com/dms/image/sync/C5627AQFQ-2uChj_FRA/articleshare-shrink_1280_800/0/1687410863611?e=1689145200&v=beta&t=4POU9l3rMFOA9-5x1VRhm9wudbIWfzEeCUxrykj0mQs",
//     target: "_blank",
//     rel: "noreferrer",
//   },
//   {
//     src: "https://media.licdn.com/dms/image/sync/C5627AQGw8cip0Ld0cg/articleshare-shrink_1280_800/0/1687410863540?e=1689145200&v=beta&t=6-vpwkMOD4TRWLC8kdF1DqOHYlMuDHgCGBt5bLxcpVA",
//     width: 320,
//     height: 174, 
//     alt: "Data Science Foundation",
//     href: "https://media.licdn.com/dms/image/sync/C5627AQGw8cip0Ld0cg/articleshare-shrink_1280_800/0/1687410863540?e=1689145200&v=beta&t=6-vpwkMOD4TRWLC8kdF1DqOHYlMuDHgCGBt5bLxcpVA",
//     target: "_blank",
//     rel: "noreferrer",
//   },
// ];

const images = [
  {
    original:  "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
    thumbnail: "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
    width: 500,
    height: 174,
    // isSelected: false,
    // caption: "MERN Full Stack Developer Certificate",
    // alt: "FSD",
    // href: "https://media.licdn.com/dms/image/D5622AQEmZ6UjAsXCxg/feedshare-shrink_800/0/1688534480062?e=1691625600&v=beta&t=gPXUlmLuLbKG5Iu4HZo7HAyNDso6xhTqEkPfHrQW5wU",
    // target: "_blank",
    // rel: "noreferrer",
  },
   

  {
    original:"https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    thumbnail: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    // src: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    width: 320,
    height: 174, 
    // alt: "HTML - Guvi Certificate",
    // href: "https://media.licdn.com/dms/image/D5622AQF9-lA1gqALow/feedshare-shrink_1280/0/1688880568603?e=1691625600&v=beta&t=78hXpcw939AZ7Nm1ol_AnS04VmSRjs2rVYvYxIbvxUk",
    // target: "_blank",
    // rel: "noreferrer",
  },

  {
    original: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    thumbnail: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    width: 320,
    height: 174, 
    // alt: "CSS - Guvi Certificate",
    // href: "https://media.licdn.com/dms/image/D5622AQFLE0LRXFMOvA/feedshare-shrink_1280/0/1688880588219?e=1691625600&v=beta&t=FwnDNqUga1enQnHxdO32rM5wPZ2sTkKjumCG31gegmY",
    // target: "_blank",
    // rel: "noreferrer",
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
  {
    src: "https://media.licdn.com/dms/image/D5622AQEAlWq6Joynuw/feedshare-shrink_1280/0/1688880620266?e=1691625600&v=beta&t=VXwhMT0K7Nea2DEzRWUzbLs7BQ20qOlbNn2ymgrey7w",
    width: 320,
    height: 174, 
    alt: "JavaScript - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQEAlWq6Joynuw/feedshare-shrink_1280/0/1688880620266?e=1691625600&v=beta&t=VXwhMT0K7Nea2DEzRWUzbLs7BQ20qOlbNn2ymgrey7w",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://media.licdn.com/dms/image/D5622AQEyZdvqLnQbsQ/feedshare-shrink_1280/0/1688880735058?e=1691625600&v=beta&t=Ttw9pD51XxspmS8d_fcN88Q0kOMt-t4c8XpBioJrLWY",
    width: 320,
    height: 174, 
    alt: "ReactJS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQEyZdvqLnQbsQ/feedshare-shrink_1280/0/1688880735058?e=1691625600&v=beta&t=Ttw9pD51XxspmS8d_fcN88Q0kOMt-t4c8XpBioJrLWY",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQG85KahVUDnMA/feedshare-shrink_1280/0/1688880745292?e=1691625600&v=beta&t=VLPG65hWyaCFJAMhcl0ug-EWxOmXekUCgRP2WrF0Wso",
    width: 320,
    height: 174, 
    alt: "NodeJS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQG85KahVUDnMA/feedshare-shrink_1280/0/1688880745292?e=1691625600&v=beta&t=VLPG65hWyaCFJAMhcl0ug-EWxOmXekUCgRP2WrF0Wso",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://media.licdn.com/dms/image/D5622AQFgu4fURaIghg/feedshare-shrink_1280/0/1688880667576?e=1691625600&v=beta&t=qs1V9zZ-j5tIcxDJBOSVwND7ofnIoQWX89enjecvCwc",
    width: 320,
    height: 174, 
    alt: "MongoDB - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQFgu4fURaIghg/feedshare-shrink_1280/0/1688880667576?e=1691625600&v=beta&t=qs1V9zZ-j5tIcxDJBOSVwND7ofnIoQWX89enjecvCwc",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQHvxzKbfFRhIQ/feedshare-shrink_1280/0/1688880684020?e=1691625600&v=beta&t=W0j4MCqRI26BteLULe5VcrATBBQRq_J7L0fE3SAsiaM",
    width: 320,
    height: 174, 
    alt: "DS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQHvxzKbfFRhIQ/feedshare-shrink_1280/0/1688880684020?e=1691625600&v=beta&t=W0j4MCqRI26BteLULe5VcrATBBQRq_J7L0fE3SAsiaM",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://media.licdn.com/dms/image/D5622AQEA4JfJTzyPNQ/feedshare-shrink_1280/0/1688880697694?e=1691625600&v=beta&t=H52fNrC3fgBoJKwj7BUBTOgE15czL-4uN9TPy-OAYnI",
    width: 320,
    height: 174, 
    alt: "AWS - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQEA4JfJTzyPNQ/feedshare-shrink_1280/0/1688880697694?e=1691625600&v=beta&t=H52fNrC3fgBoJKwj7BUBTOgE15czL-4uN9TPy-OAYnI",
    target: "_blank",
    rel: "noreferrer",
  },



  {
    src: "https://media.licdn.com/dms/image/D5622AQHVENHkHier-A/feedshare-shrink_1280/0/1688880754310?e=1691625600&v=beta&t=HBAE9snTQdrLtdtHwxCsdCLTTR8x_p76yh4mdBVXfzg",
    width: 320,
    height: 174, 
    alt: "mySQL - Guvi Certificate",
    href: "https://media.licdn.com/dms/image/D5622AQHVENHkHier-A/feedshare-shrink_1280/0/1688880754310?e=1691625600&v=beta&t=HBAE9snTQdrLtdtHwxCsdCLTTR8x_p76yh4mdBVXfzg",
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
];
export default function Certificates() {
  return (
    <>
     <h1 className="text-success fontClass" align="center">
        {" "}
       Certificates
      </h1> 
    <ImageGallery items={images} style={{ height: 250, width: 400, marginLeft: 25, marginTop : 25 }}/>;

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
