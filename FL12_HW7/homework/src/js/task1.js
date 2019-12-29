let minLogin = 5;
let minPassword = 6;
let userEmail = prompt('Enter you e-mail pls');
let userPassword, changePassword, oldPassword, newPassword, newPasswordConfirm;

if (!userEmail) {
  alert('Canceled.');
} else if (userEmail.length < minLogin) {
  alert(`I don't know any emails having name length less than 5 symbols`);
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
  userPassword = prompt('Enter your password pls');

  if (!userPassword) {
    alert('Canceled.');
  } else if (userEmail === 'user@gmail.com' && userPassword !== 'UserPass') {
    alert('Wrong password');
  } else if (userEmail === 'admin@gmail.com' && userPassword !== 'AdminPass') {
    alert('Wrong password');
  } else {
    changePassword = confirm('Do you want to change the password?');
    if (changePassword === null || changePassword === false) {
      alert('You have failed the change');
    } else {
      oldPassword = prompt('Enter the old password pls');

      if (!oldPassword) {
        alert('Canceled.');
      } else if (oldPassword !== userPassword) {
        alert('Wrong password');
      } else {
        newPassword = prompt('Enter a new password pls');

        if (newPassword === '' || !newPassword) {
          alert('Canceled');
        } else if (newPassword.length < minPassword) {
          alert('It’s too short password. Sorry');
        } else {
          newPasswordConfirm = prompt('Enter you new password again pls');

          if (!newPasswordConfirm) {
            alert('Canceled');
          } else if (newPasswordConfirm !== newPassword) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  }
} else {
  alert(`I don't know you`);
}
