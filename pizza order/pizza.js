function send() {
    if (validate() == false) {
        alert("");
        return;
    }

    if (validateRadio() == false) {
        alert("choose Size");
        return;
    }

    if (validatePaymentMethod() == false) {
        alert("choose Payment");
        return;
    }

    alert("");
    checkForm();

    return;
}


function validate() {
    var fields = [document.getElementById("cust"),document.getElementById("adr")
    ,document.getElementById("city"),document.getElementById("phone"),document.getElementById("email")];

    var err = 0;

    for (i=0; i < fields.length; i++)
    {
        if (fields[i].value == "")
        {
            fields[i].style.backgroundColor = "red";
            err++;
        }
    } 

    if (err === 0)
    {
        return true;
    } else {
        alert("fill fields");
        return false;
    }
}
       function validateRadio() {
    if (document.PizzaForm.topping[0].checked) {
        return true;
    }
    if (document.pizzaForm.crust[1].checked) {
        return true;
    }
    if (document.PizzaForm.crust[2].checked) {
        return true;
    }
    if (document.PizzaForm.crust[3].checked) {
        return true;
    }
    if (document.PizzaForm.crust[4].checked) {
        return true;
    }    
    return false;
}

function validatePaymentMethod() {
    if (document.PizzaForm.pay[0].checked) {
        return true;
    }
    if (document.PizzaForm.pay[1].checked) {
        return true;
    }
    if (document.PizzaForm.pay[2].checked) {
        return true;
    }
    return false;

}

function checkForm() {
    var el = document.PizzaForm.elements.length;
    var txt = "";

    for (i=0; i<el; i++)
    {
        var type = PizzaForm.elements[i].type;

        if (type=="radio" && PizzaForm.elements[i].checked)
        {
            txt = txt + PizzaForm.elements[i].value + "<br>";
        }

        if (type=="text" && PizzaForm.elements[i].checked)
        {
            txt = txt + PizzaForm.elements[i].value + "<br>";
        }

        if (type=="select-one")
        {
            var el = document.getElementById("sel");
            var strUser = e.options[e.selectedIndex].text;
            txt = txt + "amount: " + e.options[e.selectedIndex].text + "<br>;"
        }
    }
    document.getElementById("1b1Values").innerHTML = txt;
}
