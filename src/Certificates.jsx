import React from "react";


const images = [
  {
    src: "https://drive.google.com/file/d/1-XWrHKKp7Emg7UWdRwVRWMZJ_hpQDbe3/view?usp=drive_link",
    width: 500,
    height: 174,
    isSelected: false,
    caption: "MERN Full Stack Developer Certificate",
    alt: "FSD",
    href: "https://drive.google.com/file/d/1-XWrHKKp7Emg7UWdRwVRWMZJ_hpQDbe3/view?usp=drive_link",
    target: "_blank",
    rel: "noreferrer",
  },
    {
    src: "https://image.winudf.com/v2/image1/Y29tLnBpeG9jaXR5YXBwcy5zcGVlZF9pY29uXzE1NDM5ODA3MDJfMDA4/icon.png?fakeurl=1&h=240&type=webp",
    width: 320,
    height: 174, 
    alt: "Typing Test",
    href: "https://typingstudent.netlify.app",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://www.shutterstock.com/image-photo/selecting-candidates-profile-on-virtual-260nw-622563449.jpg",
    width: 320,
    height: 174, 
    alt: "User Profile",
    href: "https://user-profile-dashboard.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://st3.depositphotos.com/4187167/14640/i/1600/depositphotos_146407923-stock-photo-makeup-products-in-shopping-cart.jpg",
    width: 320,
    height: 212,
    alt: "Shopping Cart",
    href: "https://visitshopping-cart.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
  },
];

export default function Certifcates() {
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
                style={{ height: 250, width: 400 }}
              ></img>
            </a>
          );
        })}
      </div>
    </>
  );
}
