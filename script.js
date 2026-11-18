
/* =====================================
   1. NAVIGASI MOBILE
===================================== */

const melani_toggle = document.getElementById(
    "melani_toggle"
);

const melani_nav = document.getElementById(
    "melani_nav"
);

if (melani_toggle && melani_nav) {

    melani_toggle.addEventListener("click", function() {

        melani_nav.classList.toggle("melani_open");

        const melani_status = melani_nav.classList.contains(
            "melani_open"
        );

        melani_toggle.setAttribute(
            "aria-expanded",
            melani_status
        );

    });

}


/* =====================================
   2. PENCARIAN MENU MAKANAN
===================================== */

const melani_search_form = document.getElementById(
    "melani_search_form"
);

const melani_search = document.getElementById(
    "melani_search"
);

const melani_products = document.querySelectorAll(
    ".melani_product_card"
);

const melani_search_result = document.getElementById(
    "melani_search_result"
);

if (melani_search_form && melani_search) {

    melani_search_form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const melani_keyword = melani_search.value
                .toLowerCase()
                .trim();

            let melani_total = 0;

            melani_products.forEach(function(product) {

                const melani_name = product.dataset.name;

                if (melani_name.includes(melani_keyword)) {

                    product.style.display = "block";

                    melani_total++;

                } else {

                    product.style.display = "none";

                }

            });

            if (melani_keyword === "") {

                melani_search_result.textContent =
                    "Silakan masukkan nama makanan.";

            } else if (melani_total > 0) {

                melani_search_result.textContent =
                    "Ditemukan " +
                    melani_total +
                    " menu makanan.";

            } else {

                melani_search_result.textContent =
                    "Menu yang dicari belum ditemukan.";

            }

        }

    );

}
