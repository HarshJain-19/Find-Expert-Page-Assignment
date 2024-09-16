const renderFilterDropdown = data => {
  const dataOptions = data.options.map(e => `<li><a class="dropdown-item" href="${e.link}">${e.option_name}</a></li>`).join(" ");
  return (
    `<li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false" onclick="rotateDropdown(this)">
        ${data.filter_name}
        <i class="fa-solid fa-chevron-down"></i>
      </a>
      <ul class="dropdown-menu active">
        ${dataOptions}
      </ul>
    </li>  `
  )
};

const renderExpertsList = (data, index) => {
  let shownDetailItems = ["expertise", "visa_status", "current_location", "relocation"];
  let shownDetails = shownDetailItems.map(e => {
    return (
      `<div>
        <h6 class="text-capitalize" style="font-size: 12px; line-height: 0.7em; color: grey;">${e.replaceAll("_"," ")}</h6>
        <p class="text-black fw-medium" style="font-size: 11px;">${data[e]}</p>
      </div>`
    )
  }).join(" ");

  return (
    `<div class="w-100 shadow px-4 pt-3 pb-1 grow" style="cursor: pointer" onclick="renderExpertPage(expertsData[${index}])" >
      <div class="my-1 d-flex mb-2 column-gap-3">
        <div style="width: 50px; margin-top: -7px;" class="position-relative">
          <img src="${data.profile_pic_url}" alt="image${data.expert_id}" class="w-100 position-absolute" >
          ${data.profile_verified ? ("<img src=\"./assets/check.png\" alt=\"tick\" class=\"position-absolute\" style=\"width: 37%; right: -5px; top: 1px;\" >") : ""}
        </div>
        <div style="line-height: 0.6em;">
          <h5 class="text-capitalize" style="font-size: 14px; color: #003366;"><span class="text-uppercase">${data.expert_name}</span>: ${data.designation}</h5>
          <p class="text-secondary text-capitalize fw-medium text-black" style="font-size: 11px;">${data.designated_company}, ${data.experience} Exp., ${data.passport} Passport</p>
        </div>
        <i class="fa-regular fa-star text-bg-warning p-1 d-inline-block" style="height: 25px; cursor: pointer;"></i>
      </div>
      <div class="d-flex flex-wrap justify-content-between">
        ${shownDetails}
      </div>
    </div>`
  );
}

const renderExpertPage = data => {
  const accordionDetails = (Object.keys(data.more_info).map((e, i) => {
    const tabs = Object.keys(data.more_info[e]).length? (Object.entries(data.more_info[e]).map(e => (
      `<div class="px-2">
        <h6 class="text-secondary" style="font-size: 15px; line-height: 0.8em;">${e[0]}</h6>
        <p class="fw-medium" style="font-size: 16px;">${e[1]}</p>
      </div>`
    )).join(" ")) : "<p>Nothing to show</p>";

    return (
      `<div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed ms-0 ps-2 fw-bold" style="font-size: 18px;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapseOne">
            ${e}
          </button>
        </h2>
        <div id="flush-collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body d-flex flex-wrap justify-content-between my-2 column-gap-5 row-gap-2">
            ${tabs}
          </div>
        </div>
      </div>`
    )
  }).join(" "));

  const expertDetailPage = (
    `<div class="shadow px-4 py-3">
      <div class="d-flex align-items-center justify-content-between border-bottom border-3 pb-3">
        <div class="d-flex column-gap-3 align-items-center justify-content-between">
          <div class="position-relative" style="width: 100px; height: 100px;">
            <img src="${data.profile_pic_url}" alt="image1" class="position-absolute w-100">
            ${data.profile_verified ? ("<img src=\"./assets/check.png\" alt=\"tick\" class=\"position-absolute\" style=\"width: 30%; right: -5px;\">") : ""}
          </div>
          <div>
            <div class="d-flex column-gap-2 mb-2" style="color: #003366;">
              <h5 style="font-size: 18px;">${data.expert_name}</h5>
              <div class="d-inline-block bg-warning py-1 px-2 fw-semibold h-50" style="font-size: 13px; line-height: 0.9em;"><i class="fa-regular fa-star"></i>Premium</div>
            </div>
            <div class="fw-medium" style="line-height: 0.2em; font-size: 14px;">
              <p>${data.designation} ${data.designated_company},</p>
              <p>${data.qualification}</p>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <button class="btn-normal">Add to Shortlist</button>
          <button class="btn-orange-side">Get Contact Details</button>
        </div>
      </div>
      <div class="d-flex flex-wrap my-3 pt-3 pb-1 border-bottom border-3">
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">Industry</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.industry}</p>
        </div>
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">Total Experience</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.experience}</p>
        </div>
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">Expertise</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.expertise}</p>
        </div>
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">Current Visa Status</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.visa_status}</p>
        </div>
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">English Proficiency</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.english_proficiency}</p>
        </div>
        <div style="min-width: 48%;" class="column-gap-2">
          <h6 class="text-secondary" style="font-size: 14px; line-height: 0.5em;">Current Location</h6>
          <p class="fw-semibold" style="font-size: 13.5px;">${data.current_location}</p>
        </div>
      </div>
      <!-- Accordion Details -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
        ${accordionDetails}
      </div>
    </div>`
  );
  document.getElementById("expert-detail-page").innerHTML = expertDetailPage;
}



