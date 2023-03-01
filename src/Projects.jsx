import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    src: "https://image3.mouthshut.com/images/imagesp/925106606s.jpg",
    width: 500,
    height: 174,
    isSelected: false,
    caption: "Post Office Details",
    alt: "Post Office",
    href: "https://pincodelookup.netlify.app/",
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

export default function Projects() {
  return (
    <>
      <h1 className="text-success fontClass" align="center">
        {" "}
        Projects
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
