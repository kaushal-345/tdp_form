function tdpForm() {
    if (!document.getElementById('placeholderStyle')) {
    const placeholderStyle = document.createElement('style');
    placeholderStyle.id = 'placeholderStyle';
    placeholderStyle.innerHTML = `
      .form-control::placeholder {
        font-style: italic;
      }
    `;
    document.head.appendChild(placeholderStyle);
  }
  let str = `
    <div class="container mt-4" style="max-width: 1200px;">
      <div class="d-flex justify-content-between mb-3">
        <button class="btn btn-light border-dark fw-bold shadow-sm" onclick="toggleAllAccordions()" id="toggleAccordionsBtn">Close All Sections</button>
      </div>
    <!-- Section 0 -->
      <div class="row justify-content-between align-items-center border border-dark rounded-2 p-3 mb-4 mx-1">
        <div class="col-md-6">
          <label class="form-label fw-semibold mb-1">Name of the Centre / Unit:</label>
          <input type="text" class="form-control" value="NRSC" readonly>
        </div>
        <div class="col-md-4">
          <label class="form-label fw-semibold mb-1">Date:</label>
          <input type="date" class="form-control">
        </div>
      </div>

      <div class="accordion" id="tdpAccordion">

    <!-- Section 1 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              1. Primary Details
            </button>
          </h2>
          <div id="collapseSection1" class="accordion-collapse collapse show" aria-labelledby="headingSection1">
            <div class="accordion-body">
              <div class="mb-4">
                <label for="proposalTitle" class="form-label text-decoration-underline">i) Title of the Proposal</label>
                <input type="text" class="form-control" id="proposalTitle" placeholder="Enter title of the proposal" required>
              </div>
              <div class="mb-4">
                <label for="investigators" class="form-label text-decoration-underline">ii) Principal / Co-Principal Investigators</label>
                <input type="text" class="form-control" id="investigators" placeholder="Enter investigators' names" required>
              </div>
              <div class="mb-4">
                <label for="division" class="form-label text-decoration-underline">iii) Area/Group/Division</label>
                <input type="text" class="form-control" id="division" placeholder="Enter area/group/division" required>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 2 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. Ongoing TDP / Advanced R & D (As a PI/CO-PI)
            </button>
          </h2>
          <div id="collapseSection2" class="accordion-collapse collapse show" aria-labelledby="headingSection2">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="ongoingProjects" rows="4" placeholder="Provide details of ongoing TDP/Advanced R&D" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 3 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              3. Brief Description of the Study
            </button>
          </h2>
          <div id="collapseSection3" class="accordion-collapse collapse show" aria-labelledby="headingSection3">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="description" rows="4" placeholder="Enter brief description of the study" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 4 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection4">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection4" aria-expanded="false" aria-controls="collapseSection4">
              4. Objectives and Need
            </button>
          </h2>
          <div id="collapseSection4" class="accordion-collapse collapse show" aria-labelledby="headingSection4">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection4" rows="4" placeholder="Enter details for Objectives and Need" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 5 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection5">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection5" aria-expanded="false" aria-controls="collapseSection5">
              5. Scope
            </button>
          </h2>
          <div id="collapseSection5" class="accordion-collapse collapse show" aria-labelledby="headingSection5">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection5" rows="4" placeholder="Enter details for Scope" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 6 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection6">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection6" aria-expanded="false" aria-controls="collapseSection6">
              6. Major Technology Elements
            </button>
          </h2>
          <div id="collapseSection6" class="accordion-collapse collapse show" aria-labelledby="headingSection6">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection6" rows="4" placeholder="Enter details for Major Technology Elements" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 7 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection7">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection7" aria-expanded="false" aria-controls="collapseSection7">
              7. Literature survey, identification of state-of-the art technology & Novelty
            </button>
          </h2>
          <div id="collapseSection7" class="accordion-collapse collapse show" aria-labelledby="headingSection7">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection7" rows="4" placeholder="Enter details for Literature survey" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 8 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection8">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection8" aria-expanded="false" aria-controls="collapseSection8">
              8. End Use/ Applications/ Programme Linkage
            </button>
          </h2>
          <div id="collapseSection8" class="accordion-collapse collapse show" aria-labelledby="headingSection8">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection8" rows="4" placeholder="Enter details for End Use/Applications" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 9 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection9">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection9" aria-expanded="false" aria-controls="collapseSection9">
              9. Outcome/ Deliverables / Expected Technology Readiness Level (TRL) upon completion of the study
            </button>
          </h2>
          <div id="collapseSection9" class="accordion-collapse collapse show" aria-labelledby="headingSection9">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection9" rows="4" placeholder="Enter details for Outcome/Deliverables" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 10 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
        <h2 class="accordion-header" id="headingSection10">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection10" aria-expanded="false" aria-controls="collapseSection10">
            10. Collaboration with Others: Yes/ No (if ‘Yes’, kindly provide details)
            </button>
        </h2>
        <div id="collapseSection10" class="accordion-collapse collapse show" aria-labelledby="headingSection10">
            <div class="accordion-body">
            <div class="mb-3">
                <label class="form-label">Collaboration with Others</label><br>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="collabRadio" id="collabYes" value="yes" onclick="toggleSection('collabDetails', true)">
                <label class="form-check-label" for="collabYes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="collabRadio" id="collabNo" value="no" onclick="toggleSection('collabDetails', false)">
                <label class="form-check-label" for="collabNo">No</label>
                </div>
            </div>
            <div id="collabDetails" class="d-none">
                <div class="mb-3">
                <label class="form-label text-decoration-underline">i) Inter-Centre</label>
                <textarea class="form-control" rows="2" placeholder="Enter details for Inter-Centre"></textarea>
                </div>
                <div class="mb-3">
                <label class="form-label text-decoration-underline">ii) Academic Institutions</label>
                <textarea class="form-control" rows="2" placeholder="Enter details for Academic Institutions"></textarea>
                </div>
                <div class="mb-3">
                <label class="form-label text-decoration-underline">iii) Start-up/Industry</label>
                <textarea class="form-control" rows="2" placeholder="Enter details for Start-up/Industry"></textarea>
                </div>
            </div>
            </div>
        </div>
        </div>

    <!-- Section 11 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
        <h2 class="accordion-header" id="headingSection11">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection11" aria-expanded="false" aria-controls="collapseSection11">
            11. Resource Availability: Yes/ No (if ‘No’, kindly specify plan)
            </button>
        </h2>
        <div id="collapseSection11" class="accordion-collapse collapse show" aria-labelledby="headingSection11">
            <div class="accordion-body">
            <div class="mb-3">
                <label class="form-label">Resource Availability</label><br>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="resourceRadio" id="resourceYes" value="yes" onclick="toggleSection('resourceDetails', false)">
                <label class="form-check-label" for="resourceYes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="resourceRadio" id="resourceNo" value="no" onclick="toggleSection('resourceDetails', true)">
                <label class="form-check-label" for="resourceNo">No</label>
                </div>
            </div>
            <div id="resourceDetails" class="d-none">
                <div class="mb-3">
                <label class="form-label text-decoration-underline">i) Infrastructure/Facilities (S/W & H/W, Tools, Techniques, etc.)</label>
                <textarea class="form-control" rows="3" placeholder="Enter infrastructure, tools, satellite/ancillary data info"></textarea>
                </div>
                <div class="mb-3">
                <label class="form-label text-decoration-underline">ii) Human Resource</label>
                <textarea class="form-control" rows="2" placeholder="Enter human resource details"></textarea>
                </div>
            </div>
            </div>
        </div>
        </div>


    <!-- Section 12 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
        <h2 class="accordion-header" id="headingSection12">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection12" aria-expanded="false" aria-controls="collapseSection12">
            12. Time Schedule & Milestone Targets (Gantt Chart format)
            </button>
        </h2>
        <div id="collapseSection12" class="accordion-collapse collapse show" aria-labelledby="headingSection12">
            <div class="accordion-body">
            <div class="mb-3">
                <label for="startDate" class="form-label text-decoration-underline">a) Start Date:</label>
                <input type="date" class="form-control" id="startDate" required>
            </div>
            <div class="mb-3">
                <label for="endDate" class="form-label text-decoration-underline">b) Expected Date of Completion:</label>
                <input type="date" class="form-control" id="endDate" required>
            </div>

            <label class="form-label text-decoration-underline">Milestone Targets</label>
            <div class="table-responsive">
                <table class="table table-bordered align-middle">
                <thead class="table-light">
                    <tr>
                    <th scope="col">Month/Year</th>
                    <th scope="col">Milestone Target</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><input type="month" class="form-control" required></td>
                    <td><input type="text" class="form-control" placeholder="Describe milestone" required></td>
                    </tr>
                    <tr>
                    <td><input type="month" class="form-control"></td>
                    <td><input type="text" class="form-control" placeholder="Describe milestone"></td>
                    </tr>
                    <tr>
                    <td><input type="month" class="form-control"></td>
                    <td><input type="text" class="form-control" placeholder="Describe milestone"></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>


    <!-- Section 13 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection13">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection13" aria-expanded="false" aria-controls="collapseSection13">
              13. Project team details with Responsibilities
            </button>
          </h2>
          <div id="collapseSection13" class="accordion-collapse collapse show" aria-labelledby="headingSection13">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" id="inputSection13" rows="4" placeholder="Enter details for Project team & responsibilities" required></textarea>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 14 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
        <h2 class="accordion-header" id="headingSection14">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection14" aria-expanded="false" aria-controls="collapseSection14">
            14. Budget (Value in Rs. Lakhs)
            </button>
        </h2>
        <div id="collapseSection14" class="accordion-collapse collapse show" aria-labelledby="headingSection14">
            <div class="accordion-body">
            <div class="table-responsive">
                <table class="table table-bordered text-center align-middle">
                <thead class="table-light">
                    <tr>
                    <th>Sl.No</th>
                    <th>Item Description</th>
                    <th>Justification</th>
                    <th>Total Cost (Rs)</th>
                    <th>BE2026-27 (Rs)</th>
                    <th>BE2027-28 (Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Budget Rows -->
                    ${['a', 'b', 'c', 'd', 'e'].map((letter, index) => `
                    <tr>
                        <td>${letter}</td>
                        <td class="text-start">${[
                        'Data Cost (Satellite / Collateral Data)',
                        'Travel - local conveyance (Object Code: 500)',
                        'Travel - to & at fieldwork (Object Code: 400)',
                        'Instrumentation (Subsystems towards R&D)',
                        'Miscellaneous'
                        ][index]}</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control total-cost" readonly></td>
                        <td><input type="number" class="form-control be26" oninput="updateRowTotal(this)"></td>
                        <td><input type="number" class="form-control be27" oninput="updateRowTotal(this)"></td>
                    </tr>
                    `).join('')}
                    <!-- Grand Total Row -->
                    <tr class="table-secondary fw-bold">
                    <td colspan="3">GRAND Total</td>
                    <td><input type="text" id="grandTotal" class="form-control bg-light" readonly></td>
                    <td colspan="2"></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        
    <!-- Section 15 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection15">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection15" aria-expanded="false" aria-controls="collapseSection15">
              15. Details of Internal Reviews (For PPEG)
            </button>
          </h2>
          <div id="collapseSection15" class="accordion-collapse collapse show" aria-labelledby="headingSection15">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" rows="4" placeholder="Major recommendations/ suggestions to be highlighted here. Copy of MOMs to be attached"></textarea>
              </div>
              <div class="mb-2">
                <label class="form-label fw-semibold text-decoration-underline">Upload MoM File(s)</label>
                <input type="file" class="form-control custom-file-input" multiple>
                <div class="form-text">Accepted formats: PDF, DOCX, etc. | You can select multiple files at once | Hover to view file names | Re-select files incase of wrong selection</div>
              </div>
            </div>
          </div>
        </div>

    <!-- Section 16 -->
        <div class="accordion-item shadow-lg border border-dark mb-4">
          <h2 class="accordion-header" id="headingSection16">
            <button class="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSection16" aria-expanded="false" aria-controls="collapseSection16">
              16. List of Enclosures
            </button>
          </h2>
          <div id="collapseSection16" class="accordion-collapse collapse show" aria-labelledby="headingSection16">
            <div class="accordion-body">
              <div class="mb-4">
                <textarea class="form-control" rows="3" placeholder="Technical / Project Reports, etc."></textarea>
              </div>
              <div class="mb-2">
                <label class="form-label fw-semibold text-decoration-underline">Upload Enclosure File(s)</label>
                <input type="file" class="form-control custom-file-input" multiple>
                <div class="form-text">Accepted formats: PDF, DOCX, etc. | You can select multiple files at once | Hover to view file names | Re-select files incase of wrong selection</div>
              </div>
            </div>
          </div>
        </div>

    <!-- Submit button -->
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-success px-5">Submit</button>
        </div>

      </div>
    </div>

    
  `;

  root.innerHTML = str;
    // attempt for enter to next
  const focusableElements = Array.from(
    root.querySelectorAll("input:not([type=radio]):not([type=checkbox]), textarea")
  ).filter(el => !el.readOnly && !el.disabled);

  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }

  focusableElements.forEach((el, index) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextEl = focusableElements[index + 1];
        if (nextEl) {
          nextEl.focus();
        }
      }
    });
  });
}

//for top-left button to toggle all accordions
let allOpen = true;
function toggleAllAccordions() {
  const collapses = document.querySelectorAll('#tdpAccordion .accordion-collapse');
  const btn = document.getElementById('toggleAccordionsBtn');

  collapses.forEach(collapse => {
    const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
    allOpen ? bsCollapse.hide() : bsCollapse.show();
  });

  allOpen = !allOpen;
  btn.textContent = allOpen ? 'Close All Sections' : 'Open All Sections';
}

//for section 10&11
function toggleSection(sectionId, show) {
    const section = document.getElementById(sectionId);
    if (show) {
      section.classList.remove("d-none");
    } else {
      section.classList.add("d-none");
    }
  }

//to calc budget totals
function updateRowTotal(input) {
    // Enforce non-negative values
    if (parseFloat(input.value) < 0) input.value = 0;

    const row = input.closest('tr');
    const be26 = parseFloat(row.querySelector('.be26').value) || 0;
    const be27 = parseFloat(row.querySelector('.be27').value) || 0;
    const total = be26 + be27;

    row.querySelector('.total-cost').value = total.toFixed(2);

    updateGrandTotal();
}
function updateGrandTotal() {
    let grandTotal = 0;
    document.querySelectorAll('.total-cost').forEach(input => {
      grandTotal += parseFloat(input.value) || 0;
    });
    document.getElementById('grandTotal').value = grandTotal.toFixed(2);
}
