import { Accounts } from "meteor/accounts-base";

  

// 슈퍼 어드민은 무조건 하나 넣어둠
try {
  console.log("admin");
  const ADMIN_EMAIL = "admin@network.kr";

  const superAdmin = Accounts.findUserByEmail(ADMIN_EMAIL);
  console.log(superAdmin); 
  if (!superAdmin) {
    const superAdminId = Accounts.createUser({
      email: ADMIN_EMAIL, 
      password: "network2021!",
      profile: {
        name: "어드민",
        agreement: true
      }
    });
    console.log(superAdminId);

    Roles.addUsersToRoles(superAdminId, 'admin');
  }else{ 
    Roles.addUsersToRoles(superAdmin._id, 'admin');
  }

} catch (e) {
  console.log(e);
}



if (Meteor.isServer) {
    
  Accounts.config({
    // enable client user creation
    forbidClientAccountCreation: false
  });
}

Accounts.validateLoginAttempt(info => {
  if (info.user && (info.user.deletedAt || info.user.isBlocked)) {
    return false;
  }
  return true;
});

Accounts.validateNewUser(user => { 
  let User = user.services;
  let FaceBook = user.services.facebook;
  let Naver = user.services.naver;
  if (User.password && (FaceBook || Naver)) {
    throw new Meteor.Error("로그인 서비스가 중복됐습니다.");
  }
  return true;
});
