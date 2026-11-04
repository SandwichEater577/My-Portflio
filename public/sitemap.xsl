<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap | Ouro</title>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&amp;family=Space+Grotesk:wght@500;700&amp;display=swap" rel="stylesheet"/>
        <style>
          .bg-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
          }

          .bg-image {
            width: 100vmin;
            height: 100vmin;
            object-fit: contain;
            opacity: 0.2;
            filter: blur(4px);
            animation: spin-slow 100s linear infinite;
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          body {
            background-color: #09090b;
            color: #f4f4f5;
            font-family: 'JetBrains Mono', monospace;
            display: flex;
            justify-content: center;
            padding: 4rem 2rem;
            margin: 0;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
            box-sizing: border-box;
          }

          .container {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 800px;
          }

          h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -1px;
            margin-top: 0;
            margin-bottom: 3rem;
            border-bottom: 1px solid #27272a;
            padding-bottom: 1rem;
            text-transform: uppercase;
          }

          .card {
            position: relative;
            display: block;
            background: #18181b;
            border: 1px solid #3f3f46;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 2rem;
            text-decoration: none;
            transition: border-color 0.3s ease;
          }

          .card:hover {
            border-color: transparent;
          }

          .card::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 60deg,
              #ffffff 120deg,
              transparent 180deg,
              transparent 240deg,
              #ffffff 300deg,
              transparent 360deg
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            animation: spin-glow 4s linear infinite;
            z-index: 0;
          }

          .card:hover::before {
            opacity: 1;
          }

          .card-inner {
            position: relative;
            z-index: 1;
            background: #121214;
            margin: 1px;
            border-radius: 3px;
            padding: 2rem;
            transition: background 0.3s ease;
          }

          .card:hover .card-inner {
            background: color-mix(in srgb, #ffffff 5%, #121214);
          }

          @keyframes spin-glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .url {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.4rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
            word-break: break-all;
          }
          
          .card:hover .url {
            color: #a78bfa;
          }

          .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
          }

          .meta-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #71717a;
            font-weight: 500;
          }

          .value {
            font-size: 0.95rem;
            color: #a1a1aa;
          }
        </style>
      </head>
      <body>
        <div class="bg-container">
          <img src="/Ouro.png" alt="" class="bg-image" />
        </div>

        <div class="container">
          <h1>Sitemap</h1>
          
          <xsl:for-each select="s:urlset/s:url">
            <a href="{s:loc}" class="card">
              <div class="card-inner">
                <div class="url"><xsl:value-of select="s:loc"/></div>
                
                <div class="meta">
                  <div class="meta-item">
                    <span class="label">Last Modified</span>
                    <span class="value"><xsl:value-of select="s:lastmod"/></span>
                  </div>
                  <div class="meta-item">
                    <span class="label">Change Frequency</span>
                    <span class="value"><xsl:value-of select="s:changefreq"/></span>
                  </div>
                  <div class="meta-item">
                    <span class="label">Priority</span>
                    <span class="value"><xsl:value-of select="s:priority"/></span>
                  </div>
                </div>
              </div>
            </a>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>