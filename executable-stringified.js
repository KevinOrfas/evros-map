"const getGeneratedPageURL = ({ html, css, js }) => {\n  const getBlobURL = (code, type) => {\n    const blob = new Blob([code], { type });\n    return URL.createObjectURL(blob);\n  };\n\n  const cssURL = getBlobURL(css, \"text/css\");\n  const jsURL = getBlobURL(js, \"text/javascript\");\n\n  const source = `\n    <html>\n      <head>\n        ${css && `<link rel=\"stylesheet\" type=\"text/css\" href=\"${cssURL}\" />`}\n        ${js && `<script src=\"${jsURL}\"></script>`}\n      </head>\n      <body>\n        ${html || \"\"}\n      </body>\n    </html>\n  `;\n\n  return getBlobURL(source, \"text/html\");\n};\n\nconst url = getGeneratedPageURL({\n  html: \"<p>Hello, world!</p>\",\n  css: \"p { color: blue; }\",\n  js: 'console.log(\"hi\")'\n});\nconst iframe = document.createElement(\"iframe\");\niframe.src = url;\n\nconsole.log(\"iframe\", iframe);\ndocument.body.appendChild(iframe);\n"