function tableauCopier(paramTab){

    let result=[];

    for (let i = 0; i < taille(paramTab); i++){

        result[i] = paramTab[i];

    }

    return result; 
}

function tableauGenerer(paramTaille = -1,paramMax=100,paramMin=0){

    let result = []; 

    if ( 1 * paramTaille < 0){paramTaille = aleatoire(10,20);}
    if (1 * paramMax != paramMax){paramMax = 100;}
    if (1 * paramMin != paramMin){paramMin = 0;}

    paramMin = 1 * paramMin;
    paramMax = 1 * paramMax;

    if (paramMin > paramMax){
        let temp = paramMin;
        paramMin = paramMax;
        paramMax = temp;
    }

    for (let i =0; i < paramTaille; i++){
        result[i] = aleatoire(paramMin,paramMax);
    }
    
    return result;

}

function tableauInserer(paramTableau, paramValue = 0, paramIndex = 0){

    let newTab = [];

    //Check parameters 
    if(paramIndex*1 != paramIndex){paramIndex = 0;}
    if(paramIndex < 0 || paramIndex > taille(paramTableau)-1){paramIndex = 0;}

    //Function
    for (i = 0; i < paramIndex; i++){

        newTab[i] = paramTableau[i];

    }

    newTab[paramIndex] = paramValue;

    for (j = paramIndex + 1; j < taille(paramTableau) + 1; j++){

        newTab[j] = paramTableau[j-1];

    }

    return newTab;

}



function tableauSupprimer(paramTableau, paramIndex){

    newTab = [];

    //Check parameters 
    if(paramIndex*1 != paramIndex){paramIndex = 0;}
    if(paramIndex < 0 || paramIndex > taille(paramTableau)-1){paramIndex = 0;}

    //Function
    for (i = 0; i < paramIndex; i++){
        newTab[i] = paramTableau[i];
    }

    for(j = paramIndex; j < taille(paramTableau)-1; j++){
        newTab[j] = paramTableau[j+1];
    }

    return newTab;

}

function tableauFusionner(paramTabUn,paramTabDeux){

    let indexTabUn = taille(paramTabUn);

    for (i = 0; i < taille(paramTabDeux); i++){

        paramTabUn[indexTabUn] = paramTabDeux[i];
        indexTabUn++;

    }

    return paramTabUn;

}

function tableauScinder(paramTab,paramIndex){

    let newTab = [];
    let tempTabUn = [];
    let tempTabDeux = [];
    let k = 0;

    //Check parameters
    if(paramIndex*1 != paramIndex){paramIndex = 0;}
    if(paramIndex < 0 || paramIndex > taille(paramTab)-1){paramIndex = 0;}

    //function
    for ( i = 0; i <= paramIndex; i++ ){

        tempTabUn[i] = paramTab[i];

    }

    for (j = paramIndex + 1; j < taille(paramTab); j++){

        tempTabDeux[k] = paramTab[j];
        k++

    }

    newTab[0] = tempTabUn;
    newTab[1] = tempTabDeux;

    return newTab;


}

function tableauPermuter(paramTab, paramIndexUn, paramIndexDeux){

    //Check Parameters
    if(paramIndexUn*1 != paramIndexUn){paramIndexUn = 0;}
    if(paramIndexUn < 0 || paramIndexUn > taille(paramTab)-1){paramIndexUn = 0;}
    if(paramIndexDeux*1 != paramIndexDeux){paramIndexDeux = 1;}
    if(paramIndexDeux < 0 || paramIndexDeux > taille(paramTab)-1){paramIndexDeux = 1;}

    //Function
    let tampon = paramTab[paramIndexUn];
    paramTab[paramIndexUn] = paramTab[paramIndexDeux]; 
    paramTab[paramIndexDeux] = tampon;

    return paramTab;

}

function tableauInverser(paramTab){

    newTab = [];

    for (i = taille(paramTab); i > 0; i--){
        
        newTab[taille(paramTab) - i] = paramTab[i-1];

    }

    return newTab;

}

function tableauRechercher(paramTab, paramValue){

    let returnIndex = [];
    let indexIndex = 0;

    for ( i = 0; i < taille(paramTab); i++){

        if (paramTab[i] == paramValue){
            returnIndex[indexIndex] = i;
            indexIndex++;
        }
    }

    //On retourne false si la valeur donnée n'a pas été trouvée
    if(returnIndex[0] == null){
        return false;
    }

    return returnIndex;

}

function arrondir(paramVal){
    return paramVal - paramVal%1;
}

function tabRechercheDicho(paramTab,paramVal){
    let min = 0;
    let max = taille(paramTab)-1;
    let mid;

    if(paramVal < paramTab[0] || paramVal > paramTab[max]){ return false;}

    while(min<=max){
        //enlevez : afficher(max+"-"+min+"-"+mid) si vous voulez
        mid = arrondir((max+min)/2);afficher(max+"-"+min+"-"+mid)
        if(paramTab[mid]==paramVal){
            while(mid>0 && paramTab[mid-1]==paramVal){
                mid--;
            }
            return mid;
        }
        if(paramVal>paramTab[mid]){
            min = mid+1;
        }else{
            max=mid-1;
        }
    }
    if(paramTab[0]==paramVal){
        return 0;
    }
    if(paramTab[taille(paramTab)-1]==paramVal){
        return taille(paramTab)-1;
    }
    return false;
}

function tableauTrierSelection(paramTab){



    for (i = 0; i < taille(paramTab); i++){

        smallestValue = i;
        
        for ( j = i + 1; j < taille(paramTab); j++){

            if (paramTab[i] > paramTab[j] && paramTab[j] < paramTab[smallestValue]){

                smallestValue = j;

            }
            
        }

        if (smallestValue != i){

            temp = paramTab[i];
            paramTab[i] = paramTab[smallestValue];
            paramTab[smallestValue] = temp;

        }

    }    
    
    return paramTab;
}

function tableauTrierInsertion(paramTab){ // voir si tableau vide. Aller chercher ou est la première valeur et initialiser i à l'index +1

    for (let i = 1; i < taille(paramTab); i++){

        let temp = paramTab[i];

        let j = i;

        while(j > 0 && paramTab[j-1] > temp){

            paramTab[j] = paramTab[j-1];
            j--;

        }

        paramTab[j] = temp;


    }

    return paramTab;


}

function tableauTrierBulle(paramTab){

    let temp;

    for (let i = 1; i < taille(paramTab); i++){

        for (let j = 0; j < taille(paramTab) - i; j++){

            if(paramTab[j] > paramTab[j+1]){
    
                temp = paramTab[j];
                paramTab[j] = paramTab[j+1];
                paramTab[j+1] = temp;
    
            }

        } 

    }
    

    return paramTab;

}

