 // Question 1
 var arr = [];

 // Line break
 document.write("<hr/>")
 // Question 2
 var arr1 =[{}];

 // Line break
 document.write("<hr/>")
 // Question 3
 var string_array = ["A","B","C","D","E"];

 // Line break
 document.write("<hr/>")
 // Question 4
 var num_array = [1,2,3,4,5,6];

 // Line break
 document.write("<hr/>")
 // Question 5
 var boolean_array = [true,false,];

 // Line break
 document.write("<hr/>")
 // Question 6
 var mixed_array = ["A",1,true,2,"B"];

 // Line break
 document.write("<hr/>")
 // Question 7
 var Quali = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
 document.write("<h3>Qualifications :</h3>")
 for (let i = 0; i < Quali.length; i++) {
     document.write("<b>",i+1,")",Quali[i],"<b>","<br/>")
 }

 // Line break
 document.write("<hr/>")
 // Question 8
 var s_name = ["Thor Odinson","Cap America", "Tony Stark"];
 var Obt_num = [360 , 420 , 390];
 var total = 500;
 var percentage1 = (Obt_num[0]/total)*100
 var percentage2 = (Obt_num[1]/total)*100
 var percentage3 = (Obt_num[2]/total)*100
 document.write("<b>Score of ",s_name[0]," is ",Obt_num[0],". Percentage is :",percentage1,"%</b><br/>")
 document.write("<b>Score of ",s_name[1]," is ",Obt_num[1],". Percentage is :",percentage2,"%</b><br/>")
 document.write("<b>Score of ",s_name[2]," is ",Obt_num[2],". Percentage is :",percentage3,"%</b><br/>")

 // Line break
 document.write("<hr/>")
 // Question 10
 var score_student = [550,650,120,980,720,250,];
 var sort_score = [];
 document.write("Scores of Student ",score_student)
 sort_score.push(score_student.sort())
 document.write("<br/>Ordered Scores of Student ",sort_score)

 // Line break
 document.write("<hr/>")

 // Question 11
 var cities = ["Karachi", "Lahore", "Hydrabad", "Quetta","Peshawar", "Multan"]
 var selected_cities = [];
 document.write("Cities List<br/>",cities)
 for (var i = 2; i < 5; i++) {
     selected_cities.push(cities[i]);     
 }
 document.write("<br/><br/>Selected Cities List<br/>",selected_cities)

 // Line break
 document.write("<hr/>")

 // Question 12
  var arr = [" This ", " is " ,  " my ", " cat "];
  document.write("Array :<br/>", arr,"<br/> String :<br/>",arr.join(""))

 // Line break
 document.write("<hr/>")

 // Question 13
 var devices = ["keyboard"," mouse"," printer"," monitor"]
 document.write("Devices :<br/>",devices,"<br/>")
 for (var i = 0; i < devices.length; i++) {
     document.write("<br/>Out:<br/>",devices[i])
 }

 // Line break
 document.write("<hr/>")

 //  Question 14
 var devices = ["keyboard"," mouse"," printer"," monitor"]
 document.write("Devices :<br/>",devices,"<br/>")
 for (var i = devices.length-1; i >= 0 ; i--) {
     document.write("<br/>Out:<br/>",devices[i])
 }

 // Line break
 document.write("<hr/>")

 // Question 15
 var companies = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
 document.write("<select><option><br/>",companies[0],"</option><option><br/>",companies[1],"</option><option><br/>",companies[2],"</option><option><br/>",companies[3],"</option><option><br/>",companies[4],"</option><option><br/>",companies[5],"</option></select>")