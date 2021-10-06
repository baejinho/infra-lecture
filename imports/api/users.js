import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js";


const UserProfile = new SimpleSchema({
  // 프로필 이름
  name: {
    type: String,
    optional: true
  }, 
  phone: {
    type: String,
    optional: true
  }, 
  homepage: {
    type: String,
    optional: true
  }, 
  likes: {
    type: Array,
    optional: true
  }, 
  cart: {
    type: Array,
    optional: true
  },
  "likes.$": {
    type: Meteor.Collection.ObjectID,
    regEx: SimpleSchema.RegEx.Id,
    blackbox: true,
    optional: true
  }, 
  "cart.$": {
    type: Meteor.Collection.ObjectID,
    regEx: SimpleSchema.RegEx.Id,
    blackbox: true,
    optional: true
  }
});

const User = new SimpleSchema(
  extendSchema({
    username: {
      type: String,
      optional: true
    },
    emails: {
      type: Array,
      optional: true
    },
    "emails.$": {
      type: Object
    },
    "emails.$.address": {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
      type: Boolean
    },
    createdAt: {
      type: Date
    },
    profile: {
      type: UserProfile,
      optional: true
    },
    services: {
      type: Object,
      optional: true,
      blackbox: true
    },
    roles: {
      type: Array,
      optional: true
    },
    "roles.$": {
      type: String
    },
    deletedAt: {
      type: Date,
      optional: true
    } 
  })
);

Meteor.users.attachSchema(User);

export default Users = Meteor.users; 
