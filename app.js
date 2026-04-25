const PAYPAL_CLIENT_ID = "Abnmib9gjRH2uL9g5NkUpezSxNbeYQqdlEZO3RioX239tqyA2JprL4uAqAxQzLP8b3NdZjRE-NEgM7ZR";
const CURRENCY = "USD";

const products = [
  {
    slug: "oz-for-the-bounce",
    title: "OZ FOR THE BOUNCE",
    subtitle: "Dark bounce trap beat",
    description:
      "Dark bounce trap pressure with a harder pocket, heavier low-end push, and a colder late-night swing.",
    actionUrl: "assets/audio/oz-for-the-bounce-preview.mp3",
    actionLabel: "Preview audio",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "210-on-the-hill-pt-1",
    title: "210 ON THE HILL PT. 1",
    subtitle: "Dark uphill trap beat",
    description:
      "Dark uphill trap pressure with a colder road feel, hard low-end weight, and a cleaner late-night edge.",
    actionUrl: "assets/audio/210-on-the-hill-pt-1-preview.mp3",
    actionLabel: "Preview audio",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "210-on-the-hill-pt-2",
    title: "210 ON THE HILL PT. 2",
    subtitle: "Dark uphill trap beat",
    description:
      "Second part of the 210 uphill lane with longer pressure, darker stretch, and a heavier full-length payoff.",
    actionUrl: "assets/audio/210-on-the-hill-pt-2-preview.mp3",
    actionLabel: "Preview audio",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "813",
    title: "813",
    subtitle: "Dark melodic trap beat",
    description:
      "Dark melodic trap with ghost-lead tension, analog bass weight, and colder synth pressure.",
    actionUrl: "https://www.youtube.com/watch?v=lekwGgFKxww",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "red-roof",
    title: "RED ROOF",
    subtitle: "Dark melodic trap beat",
    description:
      "Dark melodic trap with rooftop tension, analog bass weight, and a colder late-night synth lane.",
    actionUrl: "https://www.youtube.com/watch?v=MxyrbS8yVMY",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "redline",
    title: "REDLINE",
    subtitle: "Dark melodic trap beat",
    description:
      "Dark melodic trap with long-breath tension, wider synth haze, and a cleaner late-night payoff. Preview pulled from the current April 5 bounce.",
    actionUrl: "https://www.youtube.com/watch?v=zt3vUZD9PN0",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "betterthan",
    title: "BETTERTHAN",
    subtitle: "Female vocal trap beat",
    description:
      "Dark female-vocal trap bounce with chopped topline texture, nastier drums, and a sharper late-night pocket.",
    actionUrl: "https://www.youtube.com/watch?v=_njn6YL4BNc",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "slideeee",
    title: "SLIDEEEE",
    subtitle: "Melodic trap beat",
    description:
      "Slide-heavy melodic trap with smooth bounce, roomy space, and a clean late-night pocket.",
    actionUrl: "https://www.youtube.com/watch?v=QGPThn35ehM",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "night-pressure",
    title: "Night Pressure",
    subtitle: "Travis Scott x Future type beat",
    description:
      "Dark trap with heavy 808s, tension, and a clean cinematic drop.",
    actionUrl: "https://www.youtube.com/watch?v=lUyZZvRIj0Q",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter use for singles, demos, and early releases.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Stronger release option with more room to push the track.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Best fit for wide release, monetization, and repeat use.",
      },
    ],
  },
  {
    slug: "satmorning",
    title: "SATMORNING",
    subtitle: "Melodic trap beat",
    description:
      "Melodic trap with space, bounce, and a cleaner late-night feel.",
    actionUrl: "https://www.youtube.com/watch?v=eCNqLNudxTw",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "24.99",
        detail: "Starter use for singles, demos, and early releases.",
      },
      {
        name: "Premium lease",
        price: "69.99",
        detail: "Stronger release option with more room to push the track.",
      },
      {
        name: "Unlimited lease",
        price: "129.99",
        detail: "Best fit for wide release, monetization, and repeat use.",
      },
    ],
  },
  {
    slug: "float-mode",
    title: "Float Mode",
    subtitle: "Gunna x Turbo type beat",
    description:
      "Warm melodic trap with glide, space, and a cleaner luxury pocket.",
    actionUrl: "https://www.youtube.com/watch?v=yrqxtFxRyYk",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "marble-floors",
    title: "Marble Floors",
    subtitle: "Gunna x Turbo type beat",
    description:
      "Piano-led melodic trap rebuilt to feel fuller, smoother, more beautiful, and more slide-heavy.",
    actionUrl: "https://www.youtube.com/watch?v=cK8ICyQKAk4",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "skyline-gospel",
    title: "Skyline Gospel",
    subtitle: "Kanye type beat",
    description:
      "Bright soulful beat with bigger chord lift, anthem energy, and a cleaner Kanye-inspired hook lane.",
    actionUrl: "https://www.youtube.com/watch?v=ODr2-aqWZcQ",
    actionLabel: "Listen on YouTube",
    fulfillmentNote:
      "Beat files and license delivery are handled manually right after payment.",
    licenses: [
      {
        name: "Basic lease",
        price: "29.99",
        detail: "Starter release license for singles, demos, and first drops.",
      },
      {
        name: "Premium lease",
        price: "79.99",
        detail: "Best choice for stronger rollout plans and wider release use.",
      },
      {
        name: "Unlimited lease",
        price: "149.99",
        detail: "Built for full monetization, bigger pushes, and repeat use.",
      },
    ],
  },
  {
    slug: "business-of-hustle",
    title: "The Business of Hustle",
    subtitle: "Digital book by Douglas McGill",
    description:
      "Mindset and entrepreneurship manuscript packaged into a finished direct-sale edition.",
    actionUrl: "assets/books/the-business-of-hustle-preview-excerpt.pdf",
    actionLabel: "Preview excerpt",
    fulfillmentNote:
      "The full PDF is delivered manually after payment while automated fulfillment is being finalized.",
    licenses: [
      {
        name: "Digital edition",
        price: "19.99",
        detail: "Full PDF edition for reading, download, and direct ownership.",
      },
    ],
  },
];

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  const accentPairs = [
    ["rgba(255, 88, 72, 0.42)", "rgba(255, 196, 110, 0.18)"],
    ["rgba(209, 72, 119, 0.34)", "rgba(113, 98, 255, 0.2)"],
    ["rgba(83, 149, 255, 0.34)", "rgba(109, 240, 204, 0.16)"],
    ["rgba(255, 146, 82, 0.32)", "rgba(255, 82, 82, 0.14)"],
  ];

  products.forEach((product, index) => {
    const [glowA, glowB] = accentPairs[index % accentPairs.length];
    const featured = index === 0;
    const book = product.slug === "business-of-hustle";
    const lowestPrice = product.licenses
      .map((license) => Number.parseFloat(license.price))
      .reduce((min, price) => Math.min(min, price), Number.POSITIVE_INFINITY);

    const card = document.createElement("article");
    card.className = "product-card";
    card.id = `product-${product.slug}`;
    if (featured) {
      card.classList.add("product-card-featured");
    }
    if (book) {
      card.classList.add("product-card-book");
    }
    card.style.setProperty("--card-glow-a", glowA);
    card.style.setProperty("--card-glow-b", glowB);

    const visual = document.createElement("div");
    visual.className = "product-visual";
    visual.innerHTML = `
      <div class="product-visual-top">
        <span class="product-chip">${featured ? "Featured release" : book ? "Digital edition" : "Beat license"}</span>
        <span class="product-price-chip">From $${lowestPrice.toFixed(2)}</span>
      </div>
      <div>
        <p class="meta-copy">${product.subtitle}</p>
        <h3>${product.title}</h3>
      </div>
    `;

    const body = document.createElement("div");
    body.className = "product-body";

    const metaRow = document.createElement("div");
    metaRow.className = "product-meta-row";
    metaRow.innerHTML = `
      <span>${product.licenses.length} ${product.licenses.length === 1 ? "tier" : "tiers"}</span>
      <span>${book ? "Direct ownership" : "Instant license lane"}</span>
    `;

    const copy = document.createElement("p");
    copy.className = "product-copy";
    copy.textContent = product.description;

    const action = document.createElement("p");
    action.className = "product-action-row";
    action.innerHTML = `<a class="secondary-link" href="${product.actionUrl}" target="_blank" rel="noreferrer">${product.actionLabel}</a>`;

    const pricing = document.createElement("div");
    pricing.className = "pricing-block";

    for (const license of product.licenses) {
      const line = document.createElement("div");
      line.className = "license-line";
      line.innerHTML = `
        <div>
          <span>${license.name}</span>
          <p class="license-detail">${license.detail}</p>
        </div>
        <strong>$${license.price}</strong>
      `;
      pricing.appendChild(line);
    }

    const selectorWrap = document.createElement("div");
    selectorWrap.className = "license-selector-wrap";
    selectorWrap.innerHTML = `
      <label class="meta-copy" for="license-select-${product.slug}">Checkout tier</label>
      <select id="license-select-${product.slug}" class="license-select">
        ${product.licenses
          .map(
            (license) =>
              `<option value="${license.name}">${license.name} - $${license.price}</option>`,
          )
          .join("")}
      </select>
      <p id="license-selected-${product.slug}" class="paypal-note"></p>
    `;

    const fulfillment = document.createElement("p");
    fulfillment.className = "fulfillment-note";
    fulfillment.textContent = product.fulfillmentNote;

    const paypalShell = document.createElement("div");
    paypalShell.className = "paypal-shell";
    paypalShell.id = `paypal-shell-${product.slug}`;
    paypalShell.innerHTML = `
      <p class="paypal-note">Choose the tier, then check out with PayPal.</p>
      <div id="paypal-buttons-${product.slug}"></div>
    `;

    body.append(metaRow, copy, action, pricing, selectorWrap, fulfillment, paypalShell);
    card.append(visual, body);
    grid.appendChild(card);
  });
}

function getSelectedLicense(product) {
  const selector = document.getElementById(`license-select-${product.slug}`);
  const selectedName = selector?.value ?? product.licenses[0].name;
  return (
    product.licenses.find((license) => license.name === selectedName) ??
    product.licenses[0]
  );
}

function renderSelectedLicenseCopy(product) {
  const target = document.getElementById(`license-selected-${product.slug}`);
  const license = getSelectedLicense(product);
  target.textContent = `${license.name}: ${license.detail}`;
}

function mountSinglePayPalButton(product) {
  const target = document.getElementById(`paypal-buttons-${product.slug}`);
  const license = getSelectedLicense(product);
  target.innerHTML = "";

  window.paypal
    .Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "pill",
        label: "paypal",
      },
      createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description: `${product.title} - ${license.name}`,
              amount: {
                currency_code: CURRENCY,
                value: license.price,
              },
            },
          ],
        });
      },
      onApprove(data, actions) {
        return actions.order.capture().then(() => {
          const shell = document.getElementById(`paypal-shell-${product.slug}`);
          shell.innerHTML = `
            <p class="paypal-note">Payment captured for ${product.title} - ${license.name}.</p>
            <p class="paypal-note">${product.fulfillmentNote}</p>
          `;
        });
      },
      onError(err) {
        console.error(err);
        target.innerHTML = `
          <p class="paypal-note">
            PayPal checkout failed. Try again in a fresh tab.
          </p>
        `;
      },
    })
    .render(target);
}

function mountPayPalButtons() {
  if (PAYPAL_CLIENT_ID === "REPLACE_WITH_PAYPAL_CLIENT_ID") {
    return;
  }

  const script = document.createElement("script");
  script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(PAYPAL_CLIENT_ID)}&currency=${encodeURIComponent(CURRENCY)}&components=buttons`;
  script.onload = () => {
    for (const product of products) {
      const selector = document.getElementById(`license-select-${product.slug}`);
      renderSelectedLicenseCopy(product);
      mountSinglePayPalButton(product);
      selector.addEventListener("change", () => {
        renderSelectedLicenseCopy(product);
        mountSinglePayPalButton(product);
      });
    }
  };

  document.body.appendChild(script);
}

renderCatalog();
mountPayPalButtons();
