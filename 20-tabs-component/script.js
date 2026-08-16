const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    /* ==============================
       REMOVE ACTIVE FROM ALL TABS
    ============================== */

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    /* ==============================
       ACTIVATE CLICKED TAB
    ============================== */

    tab.classList.add("active");

    /* ==============================
       REMOVE ACTIVE FROM ALL PANELS
    ============================== */

    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    /* ==============================
       FIND MATCHING PANEL
    ============================== */

    const tabName = tab.dataset.tab;

    const targetPanel = document.querySelector(`[data-content="${tabName}"]`);

    /* ==============================
       SHOW MATCHING PANEL
    ============================== */

    targetPanel.classList.add("active");
  });
});
