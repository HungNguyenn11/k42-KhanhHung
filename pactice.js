function Send(){
    const arr_fullname = document.getElementById('ip_fullname').value.trim();
    const arr_email = document.getElementById('ip_email').value.trim();
    const arr_phonenumber  = document.getElementById('ip_phonenumber').value.trim();
    const arr_another = document.getElementById('ip_another').value.trim();
    const datahtml = `
        <p>Tên: ${arr_fullname}</p>
        <p>Email: ${arr_email}</p>
        <p>Số điện thoại: ${arr_phonenumber}</p>
        <p>Nội dung khác: ${arr_another}</p>
    `;

    if(arr_fullname == "" || arr_email == "" || arr_phonenumber==""){
        alert('vui lòng nhâp đầy đủ thông tin');
    }
    else{
        alert('Tên: ' + arr_fullname+ '\n' + 'Tuổi: ' + arr_email + '\n' + 'SDT: ' + arr_phonenumber + '\n'+'Noi dung khac: ' + arr_another);

    }
}





