    function submitDataEmail(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var msg = document.getElementById('msg').value;
        Email.send({
                Host: "smtp.gmail.com",
                Username: "manalacjayson01@gmail.com",
                Password: "iqmfdfsnmmzxbdug",
                To: 'manalacjayson01@gmail.com',
                From: name,
                Subject: name + 'have been send a message please check!.',
                Body: msg,
            })
                .then(function (message) {
                    alert("mail sent successfully")
                });

    }