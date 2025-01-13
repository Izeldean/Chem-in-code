var element = {
          elementName: "Potassium",
          chemicalSymbol: "K",
          protons: 19,
          atomicMassA: 38,
          electrons: 19,
          neutrons: 19,
          atomicMassunit: 39.098
        };
  
        document.getElementById("K").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses an electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+</sup>)"+". &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+</sup> + 1 e<sup>-</sup>"  
        ;