const mailAppSidebar = document.getElementById("template");

class AppSidebarButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.append(mailAppSidebar.content.cloneNode(true));
    const text = this.getAttribute("text");
    const unreadCount = this.getAttribute("unreadCount");
    const selected = this.getAttribute("selected");

    this.shadowRoot.querySelector("#text").innerText = text;
    this.shadowRoot.querySelector("#unreadCount").innerText = unreadCount;

    if (selected === "true") {
      const button = this.shadowRoot.querySelector("button");
      button.style.backgroundColor = "#d4e2fa";
      button.style.fontWeight = "bold";
    }
  }
}

window.customElements.define("app-sidebar-button", AppSidebarButton);
