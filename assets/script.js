 var config = {
	    apiKey: "AIzaSyBEwnUAuHORl_Oa5e1krQX9ivenH-44P2s",
	    authDomain: "train-form.firebaseapp.com",
	    databaseURL: "https://train-form.firebaseio.com",
	    projectId: "train-form",
	    storageBucket: "train-form.appspot.com",
	    messagingSenderId: "786595147831"
	  };
	  firebase.initializeApp(config);
	  var db = firebase.database();
	  db.ref ()
	  console.log(db.ref());

$("a").click(function(event){
    event.preventDefault();
});

//event listener when submit is clicked, inputfield.val to store variable push to firebase database, then make
//database query. then display. 

$("#addTrainBtn").on("click",function(event) {
	event.preventDefault()
	var trainInfo = {
	"train-name":$( "#train-name" ).val(), 
	"line":$( "#line" ).val(), 
	"destination":$( "#destination" ).val(), 
	"frequency":$( "#frequency" ).val(), 
	"next-arrival":$( "#next-arrival" ).val(), 
	"min-away":$( "#min-away" ).val(),
};
db.ref().push(trainInfo)
})
db.ref().on("child_added", function(childSnapshot) {
	console.log(childSnapshot.val());
})