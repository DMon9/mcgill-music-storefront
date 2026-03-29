const PAYPAL_CLIENT_ID = "Abnmib9gjRH2uL9g5NkUpezSxNbeYQqdlEZO3RioX239tqyA2JprL4uAqAxQzLP8b3NdZjRE-NEgM7ZR";
const CURRENCY = "USD";

const products = [
  {
    slug: "night-pressure",
    title: "Night Pressure",
    subtitle: "Travis Scott x Future type beat",
    description:
      "Dark trap with heavy 808s, tension, and a clean cinematic drop.",
    listenUrl: "https://www.youtube.com/watch?v=lUyZZvRIj0Q",
    licenses: [
      { name: "Basic lease", price: "29.99" },
      { name: "Premium lease", price: "79.99" },
      { name: "Unlimited lease", price: "149.99" },
    ],
  },
  {
    slug: "satmorning",
    title: "SATMORNING",
    subtitle: "Melodic trap beat",
    description:
      "Melodic trap with space, bounce, and a cleaner late-night feel.",
    listenUrl: "https://www.youtube.com/watch?v=lUyZZvRIj0Q",
    licenses: [
      { name: "Basic lease", price: "24.99" },
      { name: "Premium lease", price: "69.99" },
      { name: "Unlimited lease", price: "129.99" },
    ],
  },
];

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");

  for (const product of products) {
    const card = document.createElement("article");
    card.className = "product-card";

    const visual = document.createElement("div");
    visual.className = "product-visual";
    visual.innerHTML = `<div><p class="meta-copy">${product.subtitle}</p><h3>${product.title}</h3></div>`;

    const body = document.createElement("div");
    body.className = "product-body";

    const copy = document.createElement("p");
    copy.className = "product-copy";
    copy.textContent = product.description;

    const listen = document.createElement("p");
    listen.className = "product-copy";
    listen.innerHTML = `<a class="ghost-link" href="${product.listenUrl}">Listen</a>`;

    const pricing = document.createElement("div");
    pricing.className = "pricing-block";

    for (const license of product.licenses) {
      const line = document.createElement("div");
      line.className = "license-line";
      line.innerHTML = `<span>${license.name}</span><strong>$${license.price}</strong>`;
      pricing.appendChild(line);
    }

    const paypalShell = document.createElement("div");
    paypalShell.className = "paypal-shell";
    paypalShell.id = `paypal-shell-${product.slug}`;
    paypalShell.innerHTML = `<p class="paypal-note">Secure PayPal checkout.</p>`;

    body.append(copy, listen, pricing, paypalShell);
    card.append(visual, body);
    grid.appendChild(card);
  }
}

function mountPayPalButtons() {
  if (PAYPAL_CLIENT_ID === "REPLACE_WITH_PAYPAL_CLIENT_ID") {
    return;
  }

  const script = document.createElement("script");
  script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(PAYPAL_CLIENT_ID)}&currency=${encodeURIComponent(CURRENCY)}&components=buttons`;
  script.onload = () => {
    for (const product of products) {
      const shell = document.getElementById(`paypal-shell-${product.slug}`);
      const firstLicense = product.licenses[0];
      shell.innerHTML = "";

      window.paypal.Buttons({
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
                description: `${product.title} - ${firstLicense.name}`,
                amount: {
                  currency_code: CURRENCY,
                  value: firstLicense.price,
                },
              },
            ],
          });
        },
        onApprove(data, actions) {
          return actions.order.capture().then(() => {
            shell.innerHTML = `
              <p class="paypal-note">
                Payment captured for ${product.title}.
              </p>
            `;
          });
        },
        onError(err) {
          console.error(err);
          shell.innerHTML = `
            <p class="paypal-note">
              PayPal checkout failed. Try again in a fresh tab.
            </p>
          `;
        },
      }).render(shell);
    }
  };

  document.body.appendChild(script);
}

renderCatalog();
mountPayPalButtons();
