var image=[ "harsh.jpg", "papa.jpg", "mummy.jpg", "nanu.jpg", "nani.jpg", "mamu.jpeg", "didi.jpg", "Gaby.jpg"  ];

var names=["Harshavardhana Kumar", "Rajiv Kumar", "Richa Kumar", "Jaswant Rai", "Sudesh Rai", "Ashish Rai", "Arshiya Rai", "Gabbi Rai"  ]


var i=0;
function button1(){
  document.getElementById("person_name").innerHTML=names[i];

  document.getElementById("photo").src = image[i];

  i++;
}

