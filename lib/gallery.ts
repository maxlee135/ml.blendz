// One place to manage every gallery clip.
// - caption: shows on the video card. Edit freely.
// - tiktok: paste the URL of the TikTok post this clip is from (TODO), or leave "" to hide the link.
export type Clip = {
  src: string;
  poster: string;
  caption: string;
  tiktok: string;
};

export const haircutClips: Clip[] = [
  { src: "/gallery/haircuts/cut1.mp4", poster: "/gallery/haircuts/cut1.jpg", caption: "Mid taper fade", tiktok: "" },
  { src: "/gallery/haircuts/cut2.mp4", poster: "/gallery/haircuts/cut2.jpg", caption: "Low fade, clean finish", tiktok: "" },
  { src: "/gallery/haircuts/cut3.mp4", poster: "/gallery/haircuts/cut3.jpg", caption: "Taper + shape-up", tiktok: "" },
  { src: "/gallery/haircuts/cut4.mp4", poster: "/gallery/haircuts/cut4.jpg", caption: "High fade", tiktok: "" },
  { src: "/gallery/haircuts/cut5.mp4", poster: "/gallery/haircuts/cut5.jpg", caption: "Fresh cut, front view", tiktok: "" },
  { src: "/gallery/haircuts/cut6.mp4", poster: "/gallery/haircuts/cut6.jpg", caption: "Blowout taper", tiktok: "" },
];

export const dyeClips: Clip[] = [
  { src: "/gallery/dye/dye1.mp4", poster: "/gallery/dye/dye1.jpg", caption: "Full bleach + tone", tiktok: "" },
  { src: "/gallery/dye/dye2.mp4", poster: "/gallery/dye/dye2.jpg", caption: "Highlights", tiktok: "" },
  { src: "/gallery/dye/dye3.mp4", poster: "/gallery/dye/dye3.jpg", caption: "Color transformation", tiktok: "" },
  { src: "/gallery/dye/dye4.mp4", poster: "/gallery/dye/dye4.jpg", caption: "Dye + style", tiktok: "" },
];
