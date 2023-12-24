const currentRoute = window.location.pathname;
const currentPage = currentRoute.split("/")[currentRoute.split("/").length - 1];
const listOfChapters = [
  "trang-bia-1.html",
  "loi-noi-dau.html",
  "phan-1.html",
  "phan-2.html",
  "phan-3.html",
  "phan-4.html",
  "trang-trach-nhiem.html",
  "trang-bia-4.html",
];

const TABLE_OF_CONTENTS = `
          <div>
            <ul
              class="font-semibold text-sm 2xl:text-base text-gray-800 transition-all transition-duration-500 ease-in-out"
            >
              <li class="">
                <div class="" id="bia">
                  <a href="./trang-bia-1.html">BÌA SÁCH 1</a>
                </div>
              </li>

              <li class="">
                <div class="" id="loi-noi-dau">
                  <a href="./loi-noi-dau.html">LỜI NÓI ĐẦU</a>
                </div>
              </li>

              <li class="group">
                <div class="cursor-pointer">
                  <a href="./phan-1.html">Phần 1: CHÌA KHÓA ĐỂ YÊU THƯƠNG CHÍNH MÌNH</a>&nbsp;<i
                    class="fa fa-chevron-down"
                  ></i>
                </div>
                <ul class="submenu hidden group-hover:block">
                  <li>
                    <a href="./phan-1.html#l1"
                      >1. Sức khỏe tốt, tâm trạng tốt, cuộc sống tươi đẹp hơn</a
                    >
                  </li>
                  <li>
                    <a href="./phan-1.html#l2"
                      >2. TakeCare để “cộng” sức khỏe</a
                    >
                  </li>
                  <li>
                    <a href="./phan-1.html#l3">3. Đàn ông “tập lớn”</a>
                  </li>
                  <li>
                    <a href="./phan-1.html#l4"
                      >4. Phụ nữ hiện đại - không ngại bảo vệ bản thân</a
                    >
                  </li>
                </ul>
              </li>

              <li class="group">
                <div class="link">
                  <a href="./phan-2.html">Phần 2: TÌNH YÊU LÀ TÌNH DỤC? </a
                  >&nbsp;<i class="fa fa-chevron-down"></i>
                </div>
                <ul class="submenu hidden group-hover:block">
                  <li>
                    <a href="./phan-2.html#l1">1. Tinh tỉnh tình yêu </a>
                  </li>
                  <li>
                    <a href="./phan-2.html#l2">2. Tình dục tuổi “đã lớn” </a>
                  </li>
                  <li>
                    <a href="./phan-2.html#l3"
                      >3. Yêu không tình dục thì sẽ… lục đục?
                    </a>
                  </li>
                  <li>
                    <a href="./phan-2.html#l4"
                      >4. App hẹn hò: “Hay ho” hay “hiểm họa”!
                    </a>
                  </li>
                </ul>
              </li>

              <li class="group">
                <div class="link">
                  <a href="./phan-3.html"
                    >Phần 3: Đường lên giường: Bí kíp an toàn </a
                  >&nbsp;<i class="fa fa-chevron-down"></i>
                </div>
                <ul class="submenu hidden group-hover:block">
                  <li>
                    <a href="./phan-3.html#l1"
                      >1. Lớn rồi, hiểu về tình dục đi thôi!
                    </a>
                  </li>
                  <li>
                    <a href="./phan-3.html#l2">2. Tránh trai = Tránh thai? </a>
                  </li>
                  <li>
                    <a href="./phan-3.html#l3"
                      >3. Bệnh xã hội - Tránh vội nha!
                    </a>
                  </li>
                  <li>
                    <a href="./phan-3.html#l4"
                      >4. Quan hệ đồng giới - không thai nghén nên kén an toàn?
                    </a>
                  </li>
                </ul>
              </li>

              <li class="group">
                <div class="link">
                  <a href="./phan-4.html"
                    >Phần 4: XÂM HẠI TÌNH DỤC - NÉ RA, ĐỪNG ĐỤNG! </a
                  >&nbsp;<i class="fa fa-chevron-down"></i>
                </div>
                <ul class="submenu hidden group-hover:block">
                  <li>
                    <a href="./phan-4.html#l1"
                      >1. Xâm hại tình dục: Hiểu sao cho đúng?
                    </a>
                  </li>
                  <li>
                    <a href="./phan-4.html#l2"
                      >2. Luật pháp răn đe - phải care luật pháp
                    </a>
                  </li>
                  <li>
                    <a href="./phan-4.html#l3"
                      >3. Sex joke - dừng lại cấp tốc
                    </a>
                  </li>
                  <li>
                    <a href="./phan-4.html#l4"
                      >4. Xâm hại tình dục: Sổ tay phòng tránh
                    </a>
                  </li>
                </ul>
              </li>

              <li class="">
                <div class="" id="loi-noi-dau">
                  <a href="./trang-trach-nhiem.html">TRANG TRÁCH NHIỆM</a>
                </div>
              </li>

              <li class="">
                <div class="" id="loi-noi-dau">
                  <a href="./trang-bia-4.html">BÌA SÁCH 4</a>
                </div>
              </li>
            </ul>
          </div>`;

const BANNER = `<div class="flex justify-between items-center px-8">
<div class="w-1/5"></div>
<div class="text-xl 2xl:text-3xl text-red-800 font-bold">
  LỚN ĐÙNG, ĐỪNG NGẠI NGÙNG!
</div>

<!-- Reading Option -->
<div class="w-1/5">
  <div class="flex items-center justify-end text-xl">
    <div class="mx-2">
      <span
        class="cursor-pointer hover:text-red-700 hover:font-bold"
        onclick="onDecreaseFontSize()"
        >-</span
      >
      <span>Aa</span>
      <span
        class="cursor-pointer hover:text-red-700 hover:font-bold"
        onclick="onIncreaseFontSize()"
        >+</span
      >
    </div>

    <span class="text-2xl text-pink-800">|</span>

    <div
      class="mx-2 group cursor-pointer hover:text-red-700 relative"
    >
      <i class="fa-solid fa-droplet"></i>
      <div
        class="w-40 h-36 pt-4 absolute z-50 top-full left-1/2 -translate-x-1/2 invisible group-hover:visible"
      >
        <div
          class="w-full h-full py-4 bg-[#FFF5DA] border border-gray-300 flex flex-col justify-center items-center"
        >
          <div class="flex items-center pb-2">
            Màu nền:
            <input id="background-color-input" type="color" />
          </div>

          <div class="flex items-center">
            Màu chữ:
            <input id="text-color-input" type="color" />
          </div>

          <button class="mt-2 text-base decoration-solid">Reset Default</button>
        </div>
      </div>
    </div>

    <span class="text-2xl text-pink-800">|</span>

    <div
      class="ml-2 cursor-pointer hover:text-red-700"
      onclick="onExpandReadingSpace()"
    >
      <i class="fa-solid fa-expand"></i>
    </div>

    <div class="fixed bottom-8 right-8 flex flex-col">
      <div
        class="w-8 h-8 2xl:w-12 2xl:h-12 border-all flex justify-center items-center border-2 border-gray-700 hover:border-pink-800 hover:text-pink-800 rounded-full cursor-pointer mb-3"
        onclick="onScrollToTop()"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </div>

      <div
        class="w-8 h-8 2xl:w-12 2xl:h-12 border-all flex justify-center items-center border-2 border-gray-700 hover:border-pink-800 hover:text-pink-800 rounded-full cursor-pointer mb-3"
        onclick="onScrollToBottom()"
      >
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  </div>
</div>
</div>`;

listOfChapters.forEach((chapter, index) => {
  if (chapter === currentPage) {
    const prevChapter = listOfChapters[index - 1] || "";
    const nextChapter = listOfChapters[index + 1] || "";
    const navigatorButton = getNavigatorButton(prevChapter, nextChapter);
    document.getElementById("chapter-navigator").innerHTML = navigatorButton;
  }
});

function initTableOfContents() {
  const contentWrapper = document.getElementById("book-content-wrapper");
  const tableOfContents = document.createElement("div");
  tableOfContents.classList.add(
    "fixed",
    "w-1/6",
    "h-2/3",
    "px-4",
    "pt-4",
    "2xl:pt-12",
    "pb-12",
    "2xl:pb-24",
    "z-50",
    "left-0",
    "top-1/2",
    "-translate-y-[40%]",
    "bg-[#FFF5DA]",
    "rounded-r-md",
    "drop-shadow-lg",
    "overflow-scroll"
  );
  tableOfContents.setAttribute("id", "book-table-of-content");
  tableOfContents.innerHTML = TABLE_OF_CONTENTS;

  contentWrapper.insertBefore(tableOfContents, contentWrapper.firstChild);
}

function initBookBanner() {
  const banner = document.getElementById("banner");
  banner.innerHTML = BANNER;
}

function getNavigatorButton(prevChapter, nextChapter) {
  console.log(prevChapter, nextChapter);
  return `
  ${
    prevChapter !== ""
      ? `<a href=\"./${prevChapter}\">
      <div
        class="flex items-center px-3 py-2 bg-pink-800 cursor-pointer"
      >
        <i class="fa-solid fa-caret-left"></i>PHẦN TRƯỚC
      </div>
    </a>`
      : ""
  }

  ${
    nextChapter !== ""
      ? `<a href=\"./${nextChapter}\">
      <div
        class="flex items-center px-3 py-2 bg-pink-800 cursor-pointer"
      >
      PHẦN SAU <i class="fa-solid fa-caret-right"></i>
      </div>
    </a>`
      : ""
  }
  `;
}

initBookBanner();
initTableOfContents();
