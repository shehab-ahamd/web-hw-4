function submit(){
    //              درجة ال Quizes
    let Quizes = document.getElementById("Quizes").value;
    //              درجة ال midterm
    let Midterm = document.getElementById("Midterm").value;
     //              درجة ال FinalTest
     let FinalTest = document.getElementById("FinalTest").value;
    //              درجة ال Oral
    let Oral = document.getElementById("Oral").value;
  
    let first =Number( Quizes) + Number( Midterm)+ Number( FinalTest)+ Number( Oral) ;

    document.getElementById("total_grades").innerHTML =first;

     if (first >= 0 && first <=59.9){
        document.getElementById("final_grade").innerHTML ="F <img src=f.gif  width=100px height=100px>";
      }
    else if (first >= 60 && first <=69.9){
      document.getElementById("final_grade").innerHTML ="D <img src=c.gif  width=`100px` height=`100px`>";
    }
   
    else  if (first >= 70 && first <=79.9 ){
      document.getElementById("final_grade").innerHTML ="C <img src=b.gif  width=`100px` height=`100px`>";
    }
   
    else  if (first >= 80  && first <=89.9 ){
      document.getElementById("final_grade").innerHTML ="B <img src=c.gif  width=`100px` height=`100px`>";
    }
    
    else  if (first >= 90  && first <=100 ){
      document.getElementById("final_grade").innerHTML ="A   <img src=nice.gif  width=`100px` height=`100px`>";
    }
      else  if (first >= 100  || first <=0 ){
        document.getElementById("final_grade").innerHTML ="Error <img src=error.gif  width=`100px` height=`100px`>";
  }
  }
  function sec () {
      let one = document.getElementById("lol").value ;
      document.getElementById("final_grade").innerHTML =one;

      if (one >= 0 && one <=59.9){
        document.getElementById("final_grade").innerHTML ="F  <img src=f.gif  width=100px height=100px>";
      }
    else if (one >= 60 && one <=69.9){
      document.getElementById("final_grade").innerHTML ="D <img src=c.gif  width=100px height=100px>";
    }
   
    else  if (one >= 70 && one <=79.9 ){
      document.getElementById("final_grade").innerHTML ="C <img src=b.gif  width=100px height=100px>";
    }
   
    else  if (one >= 80  && one <=89.9 ){
      document.getElementById("final_grade").innerHTML ="B <img src=c.gif  width=100px height=100px>";
    }
    
    else  if (one >= 90  && one <=100 ){
      document.getElementById("final_grade").innerHTML ="A   <img src=nice.gif  width=100px height=100px>";
  }
  else  if (one >= 100  || one <=0 ){
    document.getElementById("final_grade").innerHTML ="Error <img src=error.gif  width=100px height=100px>";
}
  }
