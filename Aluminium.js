var element = {
          elementName: "Aluminium",
          chemicalSymbol: "Al",
          protons: 13,
          atomicMassA: 26,
          electrons: 13,
          neutrons: 13,
          atomicMassunit: 26.982
        };
  
        document.getElementById("Al").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses 3 electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+3</sup>)"+". &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+2</sup> + 3 e<sup>-</sup>"  
        ;