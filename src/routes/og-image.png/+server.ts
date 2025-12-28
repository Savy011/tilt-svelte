import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

export const prerender = true;

const height = 630;
const width = 1200;

async function getFontData(url: string) {
  const res = await fetch(url);
  return await res.arrayBuffer();
}

export async function GET() {
  const [fontExtraBold, fontBold, fontMedium] = await Promise.all([
    getFontData(
      "https://fonts.cdnfonts.com/s/98875/JetBrainsMonoExtraBold.woff",
    ),
    getFontData("https://fonts.cdnfonts.com/s/98875/JetBrainsMonoBold.woff"),
    getFontData("https://fonts.cdnfonts.com/s/98875/JetBrainsMonoMedium.woff"),
  ]);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: "40px",
          fontFamily: "JetBrains Mono",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                border: "4px solid black",
                width: "100%",
                height: "480px",
                backgroundColor: "white",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      borderRight: "4px solid black",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            borderBottom: "3px solid black",
                            padding: "30px",
                            height: "210px",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  fontSize: "64px",
                                  fontWeight: 800,
                                  letterSpacing: "0.05em",
                                  marginBottom: "15px",
                                },
                                children: "TILT SVELTE",
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  fontSize: "22px",
                                  fontWeight: 500,
                                },
                                children: "A smooth 3D Tilt Svelte Attachment",
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            padding: "30px",
                            height: "270px",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  fontSize: "20px",
                                },
                                children: [
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontWeight: 700,
                                      },
                                      children: "Author:",
                                    },
                                  },
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontWeight: 500,
                                        textDecoration: "underline",
                                      },
                                      children: "Savy↗",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  fontSize: "18px",
                                  fontWeight: 700,
                                },
                                children: "Installation:",
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                },
                                children: [
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        padding: "15px",
                                        borderRadius: "5px",
                                        backgroundColor: "#eee",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                      },
                                      children: "pnpm add @savy011/tilt-svelte",
                                    },
                                  },
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        padding: "15px",
                                        borderRadius: "5px",
                                        backgroundColor: "#eee",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                      },
                                      children:
                                        "pnpm add jsr:@savy011/tilt-svelte",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      width: "280px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            height: "210px",
                            borderBottom: "3px solid black",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  height: "70px",
                                  borderBottom: "3px solid black",
                                },
                                children: [
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        padding: "26px 20px",
                                        borderRight: "3px solid black",
                                        width: "140px",
                                      },
                                      children: "Version",
                                    },
                                  },
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        padding: "26px 20px",
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      },
                                      children: import.meta.env.PKG_VERSION,
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  height: "70px",
                                  borderBottom: "3px solid black",
                                },
                                children: [
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        padding: "26px 20px",
                                        borderRight: "3px solid black",
                                        width: "140px",
                                      },
                                      children: "Updated",
                                    },
                                  },
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        padding: "26px 20px",
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      },
                                      children: new Date().toLocaleDateString(
                                        "en-CA",
                                      ),
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  height: "70px",
                                },
                                children: [
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        padding: "26px 20px",
                                        borderRight: "3px solid black",
                                        width: "140px",
                                      },
                                      children: "License",
                                    },
                                  },
                                  {
                                    type: "div",
                                    props: {
                                      style: {
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        padding: "26px 20px",
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      },
                                      children: import.meta.env.PKG_LICENSE,
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            height: "264px",
                            padding: "20px",
                            display: "flex",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  background:
                                    "linear-gradient(to bottom right, #c4afd0, #ffd076, #97e0cf)",
                                },
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },

    {
      width,
      height,
      fonts: [
        {
          name: "Jetbrains Mono",
          data: fontMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "Jetbrains Mono",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Jetbrains Mono",
          data: fontExtraBold,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=300, s-maxage=300",
    },
  });
}
