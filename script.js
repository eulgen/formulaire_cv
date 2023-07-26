const check_email = document.getElementById("email");
const check_loca = document.getElementById("loca");
const check_num = document.getElementById("soc");

/**
 * Checks the form input value and updates the CSS class accordingly.
 *
 * @param {Object} check_var - The form input element to be checked.
 * @return {undefined} This function does not return a value.
 */
function check_form(check_var) {
    if(check_var.value==""){
        check_var.className="form-control is-invalid"
    }else{
        check_var.className="form-control is-valid";
    }
    setTimeout(() => {
        if(check_var.value==""){
            check_var.className="form-control is-invalid"
        }else{
            check_var.className="form-control is-valid";
        }
    }, 5000);
}

check_email.addEventListener("click",(event) => {
    check_form(check_email);
});

check_loca.addEventListener("click",(event) => {
    check_form(check_loca)
});

check_num.addEventListener("click",(event) => {
    check_form(check_num);
});

const check_btn = document.getElementById("suivant");
check_btn.addEventListener("click",(event) => {
    if((check_email.value!="")&&(check_loca.value!="")&&(check_num.value!="")){
        const sect_cord = document.getElementById("sect_coord");
        sect_cord.style.display = "none";
        console.log("Dans le bain");
    }
});