"use client";

import React, { useEffect, useRef } from "react";
import VanillaPageBuilder from "./lib/VanillaPageBuilder";
import { createTool } from "./helpers/createTool";
import { PREVIEW_CSS_CLASS_NAME } from "./constants";

export default function Page() {
  const builderRef = useRef<VanillaPageBuilder>();

  useEffect(() => {
    builderRef.current = VanillaPageBuilder.create({
      id: "app",
      tools: [
        createTool({
          type: "header",
          defaultValues: {
            text: "This is a header",
          },
          render: ({ text }) => `<h1>${text}</h1>`,
        }),
        createTool({
          type: "text",
          defaultValues: {
            text: "This is a text",
          },
          render: ({ text }) => `<p>${text}</p>`,
        }),
      ],
      components: [],
    });

    const clearBtn = document.querySelector(".clear-btn");
    const exportBtn = document.querySelector(".export-btn");

    clearBtn?.addEventListener("click", () => {
      builderRef.current?.setComponents([]);
      const preview = document.querySelector(`.${PREVIEW_CSS_CLASS_NAME}`);
      if (preview) {
        preview.innerHTML = "";
        preview.appendChild(builderRef.current?.render() as Node);
      }
    });

    exportBtn?.addEventListener("click", () => {
      const exportArea = document.querySelector("#export");
      if (exportArea) {
        exportArea.innerHTML = JSON.stringify(
          builderRef.current?.getComponents(),
          null,
          2
        );
      }
    });
  }, []);

  return (
    <>
      <div id="app"></div>

      <button className="clear-btn">Clear</button>
      <button className="export-btn">Export</button>

      <pre id="export"></pre>
    </>
  );
}
