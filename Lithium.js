var element = {
          elementName: "Lithium",
          chemicalSymbol: "Li",
          protons: 3,
          atomicMassA: 6,
          electrons: 3,
          neutrons: 3,
          atomicMassunit: 6.941
        };
  
        document.getElementById("Li").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= 10 " + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses an electron a chemical reaction becoming (Li<sup>+</sup>). &nbsp;  &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; Li<sup>+</sup> + 1 e<sup>-</sup>"  
        ;