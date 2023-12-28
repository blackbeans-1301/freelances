const localReadingProps = localStorage.getItem("readingProperties");
let readingProperties;
let backgroundColorInput;
let textColorInput;

let bookContentWrapper;
let bookReadingContent;
let isExpanded = false;

let hidedHeader = false;

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

const resetColor = () => {
  readingProperties = {
    backgroundColor: "#ffffff",
    fontSize: "16",
    textColor: "#000000",
  };

  localStorage.setItem("readingProperties", JSON.stringify(readingProperties));

  bookContentWrapper = document.getElementById("book-content-wrapper");
  bookReadingContent = document.getElementById(
    "book-reading-content-container"
  );

  bookContentWrapper.style.backgroundColor = "#ffffff";
  bookReadingContent.style.color = "#000000";

  backgroundColorInput.value = "#ffffff";
  textColorInput.value = "#000000";
};

window.addEventListener("scroll", function () {
  var banner = document.getElementById("banner");
  const bookWrapper = document.getElementById("book-content-wrapper");
  const bannerHeight = banner.offsetHeight;

  const header = document.getElementById("header");
  const style = window.getComputedStyle(header);
  const marginBottom = style.marginBottom;

  var threshold =
    header.getBoundingClientRect().bottom + parseInt(marginBottom);
  console.log(threshold);

  if (threshold <= 0) {
    banner.classList.add("to-fixed");
    bookWrapper.style.paddingTop = `${bannerHeight + 80}px`;
  } else {
    banner.classList.remove("to-fixed");
    bookWrapper.style.paddingTop = `80px`;
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
