

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; 

import Users from './users'; 
import { Email } from 'meteor/email'
//import {Storage} from '@google-cloud/storage';

import * as admin from 'firebase-admin';

import _ from "lodash";


Meteor.methods({
  

  "users.validAdminEmail"({ email }) {
    console.log(email);

    const targetUser = Accounts.findUserByEmail(email);
   
    if (
      !targetUser ||
      (!Roles.userIsInRole(targetUser, 'admin') )
    ) {


      throw new Meteor.Error(403, "Access denied");
    }
  },
   
  //회원 가입
  "user.createAccount"({
    email,
    password,
    name,
    phone,
    mysignalAgree , 
    payAgree , 
    personalAgree , 
    thirdAgree ,  
    promotionAgree 
  }){
    
    const userId = Accounts.createUser({
      email,
      password,
      profile: {
        name,
        phone,
        mysignalAgree , 
        payAgree , 
        personalAgree, 
        thirdAgree ,  
        promotionAgree 
      }
    });

    return userId;
  }
                 
}
);