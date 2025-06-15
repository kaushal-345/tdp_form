
function showHeader() {
    let str=`
    <div class="row align-items-center p-2 shadow-sm" style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 100px; background-color: #f2f2f2;">
        <div class="col-2 text-start p-3">
            <img src="isroLogo.png" alt="Logo" class="img-fluid" style="height: 70px; width: 70px;">
        </div>
        <div class="col-8 text-center">
            <h4 class="text fw-bold m-0" style="color: #2688cd;">इसरो- प्रौद्योगिकी एवं अनुसंधान बोर्ड (आईटीआरबी)</h4>
            <h3 class="text m-0" style="color: #f47216;">ISRO - Technology and Research Board (ITRB)</h3>
        </div>
        <div class="col-2 text-end p-3">
            <img src="nrscLogo.png" alt="Logo" class="img-fluid" style="height: 70px; width: 70px;">
        </div>
    </div>
    `;
    const header = document.getElementById('header');
    header.innerHTML=str;
}

function showSubHeader() {
  let str = `
  <div class="row align-items-center bg-white p-2">
    <div class="col-12 text-center">
      <h6 class="text fw-bold m-0" style="color: #2688cd;">प्रौद्योगिकी विकास / अनुसंधान एवं विकास प्रस्तावों को प्रस्तुत करने हेतु प्रपत्र</h6>
      <h5 class="text m-0" style="color: #f47216;">Proforma for submitting Technology Development/ R&D proposals</h5>
    </div>
  </div>
  `;
  const subheader = document.getElementById('subheader');
  subheader.innerHTML = str;
}

function showLogin() {
  let str = `
  <div class="d-flex justify-content-center mt-5">
    <div class="bg-white border border-success rounded-4 shadow-lg p-5" style="width: 100%; max-width: 400px;">
      <h2 class="text-center mb-4">Login Form</h2>
      <div id="msg" class="mb-3 text-danger"></div>
      <div class="mb-3">
        <input type="text" id="email" class="form-control" placeholder="Enter email" required>
      </div>
      <div class="mb-4">
        <input type="password" id="password" class="form-control" placeholder="Enter password" required>
      </div>
      <div class="d-grid mb-3">
        <button onclick="tdpForm()" class="btn btn-success">Log In</button>                         <!-- replace with onclick="chkUser()" -->
      </div>
      <div class="text-center">
        <button onclick="showForm()" class="btn btn-outline-dark">Create Account</button>
      </div>
    </div>
  </div>
  `;
  root.innerHTML = str;
}
function showForm() {
  let str = `
  <div class="d-flex justify-content-center mt-5">
    <div class="bg-white border border-dark rounded-4 shadow-lg p-5" style="width: 100%; max-width: 450px;">
      <h2 class="text-center mb-4">Create Account</h2>
      <div class="mb-3">
        <input type="text" id="name" class="form-control" placeholder="Name" required>
      </div>
      <div class="mb-3">
        <input type="text" id="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="mb-3">
        <input type="password" id="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="mb-4">
        <input type="date" id="dob" class="form-control">
      </div>
      <div class="d-grid mb-3">
        <button onclick="addUser()" class="btn btn-success">Submit</button>
      </div>
      <div class="text-center">
        Already a member?
        <button onclick="showLogin()" class="btn btn-outline-dark mt-2">Login Here</button>
      </div>
    </div>
  </div>
  `;
  root.innerHTML = str;
}


function showHome() {
    showHeader();
    showSubHeader();

    let str =`
    <div class="card text-center">
        <div class="card-header">Select your role</div>
            <div class="card-body">
            <select id="roleSelect" class="form-select mb-3" onchange="handleRoleChange()">
                <option value="">-- Choose Role --</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            </div>
    </div> 
    `;
    root.innerHTML=str;
}

//Function to handle dropdown changes (user, admin)
function handleRoleChange() {
    const selectedRole = document.getElementById("roleSelect").value;
    if (selectedRole === "user") {
        showLogin();
    }
    //can handle "admin" role later here
}





showHome();


//main form in tdpform.js 

