"use client";

import { useMemo } from "react";

const parseMarkdownLine = (text) => {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let key = 0;

  // Process bold and other inline elements
  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code: `text`
    const codeMatch = remaining.match(/`(.+?)`/);

    let firstMatch = null;
    let matchType = null;

    if (boldMatch && (!codeMatch || boldMatch.index <= codeMatch.index)) {
      firstMatch = boldMatch;
      matchType = "bold";
    } else if (codeMatch) {
      firstMatch = codeMatch;
      matchType = "code";
    }

    if (!firstMatch) {
      parts.push(remaining);
      break;
    }

    // Add text before the match
    if (firstMatch.index > 0) {
      parts.push(remaining.substring(0, firstMatch.index));
    }

    if (matchType === "bold") {
      parts.push(
        <strong key={key++} className="font-semibold text-gray-900">
          {firstMatch[1]}
        </strong>
      );
    } else if (matchType === "code") {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 bg-gray-100 text-blue-600 rounded text-sm font-mono"
        >
          {firstMatch[1]}
        </code>
      );
    }

    remaining = remaining.substring(firstMatch.index + firstMatch[0].length);
  }

  return parts;
};

const BlogContent = ({ content }) => {
  const renderedContent = useMemo(() => {
    if (!content) return null;

    const lines = content.split("\n");
    const elements = [];
    let currentList = [];
    let listLevel = 0;
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul
            key={key++}
            className="space-y-2 mb-6 ml-4"
          >
            {currentList.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-700 leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                <span>{parseMarkdownLine(item)}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines
      if (!line) {
        flushList();
        continue;
      }

      // H2: ## Heading
      if (line.startsWith("## ")) {
        flushList();
        const text = line.replace(/^## /, "");
        elements.push(
          <h2
            key={key++}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100"
          >
            {parseMarkdownLine(text)}
          </h2>
        );
        continue;
      }

      // H3: ### Heading
      if (line.startsWith("### ")) {
        flushList();
        const text = line.replace(/^### /, "");
        elements.push(
          <h3
            key={key++}
            className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-3"
          >
            {parseMarkdownLine(text)}
          </h3>
        );
        continue;
      }

      // H4: #### Heading
      if (line.startsWith("#### ")) {
        flushList();
        const text = line.replace(/^#### /, "");
        elements.push(
          <h4
            key={key++}
            className="text-lg font-semibold text-gray-800 mt-6 mb-2"
          >
            {parseMarkdownLine(text)}
          </h4>
        );
        continue;
      }

      // Ordered list: 1. Item or numbered items like "1.  **text**"
      if (/^\d+\.\s+/.test(line)) {
        flushList();
        const text = line.replace(/^\d+\.\s+/, "");
        // Check if the next few lines are also ordered list items
        const orderedItems = [text];
        while (
          i + 1 < lines.length &&
          /^\d+\.\s+/.test(lines[i + 1].trim())
        ) {
          i++;
          orderedItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        }

        elements.push(
          <ol
            key={key++}
            className="space-y-3 mb-6 ml-4 list-none counter-reset-item"
          >
            {orderedItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="flex-shrink-0 w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-semibold mt-0.5">
                  {idx + 1}
                </span>
                <span>{parseMarkdownLine(item)}</span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Unordered list items: * text or - text
      if (line.startsWith("* ") || line.startsWith("- ")) {
        const text = line.replace(/^[\*\-]\s+/, "");
        currentList.push(text);
        continue;
      }

      // Indented list items (sub-items): starts with spaces/tabs and * or -
      if (/^\s+[\*\-]\s+/.test(lines[i])) {
        const text = lines[i].trim().replace(/^[\*\-]\s+/, "");
        currentList.push(text);
        continue;
      }

      // Blockquote: > text
      if (line.startsWith("> ")) {
        flushList();
        const text = line.replace(/^> /, "");
        elements.push(
          <blockquote
            key={key++}
            className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50/50 rounded-r-lg"
          >
            <p className="text-gray-700 italic">
              {parseMarkdownLine(text)}
            </p>
          </blockquote>
        );
        continue;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4">
          {parseMarkdownLine(line)}
        </p>
      );
    }

    flushList();
    return elements;
  }, [content]);

  return (
    <div className="prose-custom max-w-none">
      {renderedContent}
    </div>
  );
};

export default BlogContent;
