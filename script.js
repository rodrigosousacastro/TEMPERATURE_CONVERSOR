//Função converterCelsius 
function converterCelsius() {

    var formulario1 = document.getElementById('formulario1');

    var Tc = + formulario1.celsius.value;

    let Tk1 = (Tc + 273);
    let Tf1 = ((9 / 5) * (Tc) + 32);

    console.log("-----------------------------------------------")
    console.log("Função converterCelsius executada.")
    console.log("Tc = ",Tc.toFixed(1),"°C","Tf = ", Tf1.toFixed(1),"°F","Tk = ", Tk1.toFixed(1),"K");

    let result1 = document.querySelector("#result1");

    if (Tc != null || undefined) {

        result1.innerHTML = `Resultado: Tc = ${Tc.toFixed(1)}°C, Tf = ${Tf1.toFixed(1)}°F e Tk = ${Tk1.toFixed(1)}K`;
        //alert(`Os valores são: Tc = ${Tc.toFixed(1)}°C, Tf = ${Tf1.toFixed(1)}°F e Tk = ${Tk1.toFixed(1)}K`);
    }
    else {
        console.log("Não foi possível continuar.");
    }

}

//Função apagarCelsius
function apagarCelsius() {

    result1.innerHTML = "Resultado: ";
    formulario1.celsius.value = "";
    console.log("-----------------------------------------------")
    console.log("Função apagarCelsius executada.");
    
}

//Função converterFahrenheit 
function converterFahrenheit() {

    var formulario2 = document.getElementById('formulario2');

    var Tf = + formulario2.fahrenheit.value;

    var Tc2 = ((5/9)*(Tf - 32));
    var Tk2 = ((Tf - 32)*(5/9) + 273);

    console.log("-----------------------------------------------")
    console.log("Função converterFahrenheit executada.");
    console.log("Tc = ",Tc2.toFixed(1),"°C","Tf = ", Tf.toFixed(1),"°F","Tk = ", Tk2.toFixed(1),"K");

    if (Tf != null || undefined) {

        result2.innerHTML = `Resultado: Tc = ${Tc2.toFixed(1)}°C, Tf = ${Tf.toFixed(1)}°F e Tk = ${Tk2.toFixed(1)}K`;
        //alert(`Os valores são: Tc = ${Tc2.toFixed(1)}°C, Tf = ${Tf.toFixed(1)}°F e Tk = ${Tk2.toFixed(1)}K`);

    }
    else {
        console.log("Não foi possível continuar.");
    }

}

//Função apagarFahrenheit
function apagarFahrenheit() {

    result2.innerHTML = "Resultado: ";
    formulario2.fahrenheit.value = "";
    console.log("-----------------------------------------------")
    console.log("Função apagarFahrenheit executada.");
    
}

//Função converterKelvin 3
function converterKelvin() {

    var formulario3 = document.getElementById('formulario3');

    var Tk = + formulario3.kelvin.value;

    var Tc3 = (Tk - 273);
    var Tf3 = ((9/5)*(Tk - 273) + 32);

    console.log("-----------------------------------------------")
    console.log("Função converterKelvin executada.");
    console.log("Tc = ",Tc3.toFixed(1),"°C","Tf = ", Tf3.toFixed(1),"°F","Tk = ", Tk.toFixed(1),"K");

    if (Tk != null || undefined) {

        result3.innerHTML = `Resultado: Tc = ${Tc3.toFixed(1)}°C, Tf = ${Tf3.toFixed(1)}°F e Tk = ${Tk.toFixed(1)}K`;
        //alert(`Os valores são: Tc = ${Tc3.toFixed(1)}°C, Tf = ${Tf3.toFixed(1)}°F e Tk = ${Tk.toFixed(1)}K`);

    }
    else {
        console.log("Não foi possível continuar.");
    }

}

//Função apagarKelvin
function apagarKelvin() {

    result3.innerHTML = "Resultado: ";
    formulario3.kelvin.value = "";
    console.log("-----------------------------------------------")
    console.log("Função apagarKelvin executada.");
    
}

