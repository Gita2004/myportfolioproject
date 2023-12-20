function ABC() 
{
    var name =
        document.forms.RegForm.Name.value;
        var regName = /\d+$/g;	
    var subject =
        document.forms.RegForm.Telephone.value;		
        var regPhone=/^\d{10}$/;
    var Email =
        document.forms.RegForm.Telephone.value;		
        var regPhone=/^\d{10}$/;
     var Message =
        document.forms.RegForm.Telephone.value;		
        var regPhone=/^\d{10}$/;					

    if (name == "" || regName.test(name)) 
    {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
    if (subject == "" || !regsubject.test(subject)) 
    {
        alert("Please enter valid phone number.");
        subject.focus();
        return false;
    }
    if (Email == "" || !regEmail.test(Email)) 
    {
        alert("Please enter valid email .");
        phone.focus();
        return false;
    }
    if (Message == "" || !regMessage.test(msg)) 
    {
        alert("Please enter valid msg.");
        phone.focus();
        return false;
    }

    return true;
}