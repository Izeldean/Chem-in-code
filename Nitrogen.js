var element = {
          elementName: "Nitrogen",
          chemicalSymbol: "N",
          protons: 7,
          atomicMassA: 14,
          electrons: 7,
          neutrons: 7,
          atomicMassunit: 14.007
        };
  
        document.getElementById("N").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" gains 3 electron during a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>-3</sup>)"+". &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" + 3e<sup>-</sup> &rarr; "+ element.chemicalSymbol +"<sup>-3</sup>"  
        ;