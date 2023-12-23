const localReadingProps = localStorage.getItem("readingProperties");
let readingProperties;
let backgroundColorInput;
let textColorInput;

let bookContentWrapper;
let bookReadingContent;
let isExpanded = false;

const onChangeBackgroundColor = () => {
  const value = backgroundColorInput.value;
  bookContentWrapper.style.backgroundColor = value;
  readingProperties = { ...readingProperties, backgroundColor: value };
  localStorage.setItem("readingProperties", JSON.stringify(readingProperties));
};

const onChangeTextColor = () => {
  const value = textColorInput.value;
  bookReadingContent.style.color = value;
  readingProperties = { ...readingProperties, textColor: value };
  localStorage.setItem("readingProperties", JSON.stringify(readingProperties));
};

const onIncreaseFontSize = () => {
  const currentFontSize = parseInt(readingProperties.fontSize);
  const newFontSize = currentFontSize + 1;
  bookReadingContent.style.fontSize = `${newFontSize}px`;
  readingProperties = { ...readingProperties, fontSize: `${newFontSize}` };
  localStorage.setItem("readingProperties", JSON.stringify(readingProperties));
};

const onDecreaseFontSize = () => {
  const currentFontSize = parseInt(readingProperties.fontSize);
  const newFontSize = currentFontSize - 1;
  bookReadingContent.style.fontSize = `${newFontSize}px`;
  readingProperties = { ...readingProperties, fontSize: `${newFontSize}` };
  localStorage.setItem("readingProperties", JSON.stringify(readingProperties));
};

const onExpandReadingSpace = () => {
  const header = document.getElementById("header");
  header.classList.toggle("hidden");

  const tableOfContents = document.getElementById("book-table-of-content");
  tableOfContents.classList.toggle("hidden");
};

const onScrollToTop = () => {
  if ("scrollBehavior" in document.documentElement.style) {
    // For modern browsers that support smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0;
  }
};

const onScrollToBottom = () => {
  if ("scrollBehavior" in document.documentElement.style) {
    // For modern browsers that support smooth scrolling
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For modern browsers
    document.body.scrollTop = document.body.scrollHeight; // For older browsers
  }
};

window.addEventListener("scroll", function () {
  var banner = document.getElementById("banner");
  var scrollPosition = window.scrollY;

  // Set the threshold where the div becomes fixed
  var threshold = 120; // Adjust this value as needed

  if (scrollPosition > threshold) {
    banner.classList.add("to-fixed");
  } else {
    banner.classList.remove("to-fixed");
  }
});

if (!localReadingProps) {
  localStorage.setItem(
    "readingProperties",
    JSON.stringify({
      backgroundColor: "#ffffff",
      textColor: "#000000",
      fontSize: "16",
    })
  );
} else {
  readingProperties = JSON.parse(localReadingProps);

  if (currentRoute.includes("/read")) {
    bookContentWrapper = document.getElementById("book-content-wrapper");
    bookReadingContent = document.getElementById(
      "book-reading-content-container"
    );

    console.log("update", readingProperties);

    bookContentWrapper.style.backgroundColor =
      readingProperties.backgroundColor;
    bookReadingContent.style.color = readingProperties.textColor;
    bookReadingContent.style.fontSize = `${readingProperties.fontSize}px`;

    backgroundColorInput = document.getElementById("background-color-input");
    textColorInput = document.getElementById("text-color-input");

    if (backgroundColorInput) {
      backgroundColorInput.setAttribute(
        "value",
        readingProperties.backgroundColor
      );
      backgroundColorInput.addEventListener("change", onChangeBackgroundColor);
    }

    if (textColorInput) {
      textColorInput.setAttribute("value", readingProperties.textColor);
      textColorInput.addEventListener("change", onChangeTextColor);
    }
  }
}
