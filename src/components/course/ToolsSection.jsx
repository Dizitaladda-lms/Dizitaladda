"use client";

import React from "react";

// Official Real Logos Map for all course tools
const TOOL_IMAGE_MAP = {
  "google ads": "/courses/images/tools/Google Ads.svg",
  "googleads": "/courses/images/tools/Google Ads.svg",
  "meta ads": "/courses/images/tools/Meta Ads.svg",
  "meta business suite": "/courses/images/tools/Meta Ads.svg",
  "meta": "/courses/images/tools/Meta Ads.svg",
  "canva": "/courses/images/tools/Canva.svg",
  "ga4": "/courses/images/tools/GA4.svg",
  "gtm": "/courses/images/tools/gtm.svg",
  "google tag manager": "/courses/images/tools/gtm.svg",
  "google analytics": "/courses/images/tools/GA4.svg",
  "semrush": "/courses/images/tools/semrush.svg",
  "ahrefs": "/courses/images/tools/Ahrefs.png",
  "hubspot": "/courses/images/tools/hubspot.svg",
  "shopify": "/courses/images/tools/shopify.svg",
  "wordpress": "/courses/images/tools/WordPress.svg",
  "mailchimp": "/courses/images/tools/mailchimp.svg",
  "zapier": "/courses/images/tools/zapier.svg",
  "chatgpt": "/courses/images/tools/chatgpt.svg",
  "chatgpt for marketing": "/courses/images/tools/chatgpt.svg",
  "photoshop": "/courses/images/tools/Photoshop.svg",
  "illustrator": "/courses/images/tools/illustrator.svg",
  "premiere pro": "/courses/images/tools/premiere.svg",
  "premiere": "/courses/images/tools/premiere.svg",
  "after effects": "/courses/images/tools/aftereffects.svg",
  "midjourney": "/courses/images/tools/midjourney.svg",
  "cinema 4d basics": "/courses/images/tools/cinema4d.svg",
  "cinema 4d": "/courses/images/tools/cinema4d.svg",
  "c4d": "/courses/images/tools/cinema4d.svg",
  "blender basics": "/courses/images/tools/blender.svg",
  "blender": "/courses/images/tools/blender.svg",
  "figma": "/courses/images/tools/figma.svg",
  "adobe xd": "/courses/images/tools/adobexd.svg",
  "xd": "/courses/images/tools/adobexd.svg",
  "miro": "/courses/images/tools/miro.svg",
  "notion": "/courses/images/tools/notion.svg",
  "zeplin": "/courses/images/tools/zeplin.svg",
  "html5/css3": "/courses/images/tools/html5.svg",
  "html": "/courses/images/tools/html5.svg",
  "javascript": "/courses/images/tools/javascript.svg",
  "react": "/courses/images/tools/react.svg",
  "node.js": "/courses/images/tools/nodejs.svg",
  "nodejs": "/courses/images/tools/nodejs.svg",
  "express": "/courses/images/tools/express.svg",
  "mongodb": "/courses/images/tools/mongodb.svg",
  "git/github": "/courses/images/tools/git.svg",
  "git": "/courses/images/tools/git.svg",
  "tailwind css": "/courses/images/tools/tailwind.svg",
  "tailwind": "/courses/images/tools/tailwind.svg",
  "python": "/courses/images/tools/python.svg",
  "sql": "/courses/images/tools/sql.svg",
  "aws cloud": "/courses/images/tools/aws.svg",
  "aws": "/courses/images/tools/aws.svg",
  "power bi": "/courses/images/tools/powerbi.svg",
  "powerbi": "/courses/images/tools/powerbi.svg",
  "pandas": "/courses/images/tools/pandas.svg",
  "numpy": "/courses/images/tools/numpy.svg",
  "tableau": "/courses/images/tools/tableau.svg",
  "tensorflow": "/courses/images/tools/tensorflow.svg",
  "scikit-learn": "/courses/images/tools/scikit.svg",
  "scikit": "/courses/images/tools/scikit.svg",
  "pytorch": "/courses/images/tools/pytorch.svg",
  "docker": "/courses/images/tools/docker.svg",
  "pyspark": "/courses/images/tools/pyspark.svg",
  "excel": "/courses/images/tools/excel.svg",
  "advanced excel": "/courses/images/tools/excel.svg",
  "bigquery": "/courses/images/tools/bigquery.svg",
  "openai api": "/courses/images/tools/openai.svg",
  "openai": "/courses/images/tools/openai.svg",
  "langchain": "/courses/images/tools/langchain.svg",
  "llamaindex": "/courses/images/tools/llamaindex.svg",
  "hugging face": "/courses/images/tools/huggingface.svg",
  "pinecone": "/courses/images/tools/pinecone.svg",
  "streamlit": "/courses/images/tools/streamlit.svg",
  "mlflow": "/courses/images/tools/mlflow.svg",
  "fastapi": "/courses/images/tools/fastapi.svg",
  "kali linux": "/courses/images/tools/kalilinux.svg",
  "kali": "/courses/images/tools/kalilinux.svg",
  "burp suite": "/courses/images/tools/burpsuite.svg",
  "burp suite pro": "/courses/images/tools/burpsuite.svg",
  "burp": "/courses/images/tools/burpsuite.svg",
  "wireshark": "/courses/images/tools/wireshark.svg",
  "metasploit": "/courses/images/tools/metasploit.svg",
  "nmap": "/courses/images/tools/nmap.svg",
  "nessus": "/courses/images/tools/nessus.svg",
  "splunk": "/courses/images/tools/splunk.svg",
  "ghidra": "/courses/images/tools/ghidra.svg",
  "autopsy": "/courses/images/tools/autopsy.svg",
  "ftk imager": "/courses/images/tools/ftk.svg",
  "ftk": "/courses/images/tools/ftk.svg",
  "volatility": "/courses/images/tools/volatility.svg",
  "x-ways": "/courses/images/tools/xways.svg",
  "xways": "/courses/images/tools/xways.svg",
  "sublist3r": "/courses/images/tools/sublist3r.svg",
  "amass": "/courses/images/tools/amass.svg",
  "nuclei": "/courses/images/tools/nuclei.svg",
  "postman": "/courses/images/tools/postman.svg"
};

export function getToolImage(tool) {
  if (!tool) return "/courses/images/tools/Google Ads.svg";

  if (typeof tool.logo === "string" && (tool.logo.startsWith("/") || tool.logo.startsWith("http"))) {
    return tool.logo;
  }

  const name = (tool.name || "").toLowerCase().trim();
  const logoKey = (tool.logo || "").toLowerCase().trim();

  if (TOOL_IMAGE_MAP[name]) return TOOL_IMAGE_MAP[name];
  if (TOOL_IMAGE_MAP[logoKey]) return TOOL_IMAGE_MAP[logoKey];

  for (const [key, val] of Object.entries(TOOL_IMAGE_MAP)) {
    if (name.includes(key) || key.includes(name)) return val;
  }

  return "/courses/images/tools/Google Ads.svg";
}

/**
 * ToolsSection Component
 * Responsive grid: 6 per row on desktop, 4 on tablet, 3 on phones (2 under 360px).
 * Clean hover lift on desktop only.
 * Displays official real logos for Google Ads, Canva, Meta Business Suite, GA4, GTM, etc.
 */
export default function ToolsSection({ tools }) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="dz-section dz-section-lavender" id="tools" aria-labelledby="tools-heading">
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="tools-heading">
            Tools &amp; Technologies <span className="dz-gradient-text">You Will Master</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Gain comprehensive mastery over the exact tools and technologies in high demand by top analytics employers.
          </p>
        </div>

        {/* Tools Responsive Grid */}
        <div className="dz-tools-grid">
          {tools.map((tool, idx) => (
            <div key={idx} className="dz-tool-card">
              <div className="dz-tool-logo-box">
                <img
                  src={getToolImage(tool)}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="dz-tool-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/courses/images/tools/Google Ads.svg";
                  }}
                />
              </div>
              <span className="dz-tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
