var myModule = {}

myModule.COMMON = 0;
myModule.ADMIN = 1;
myModule.ANONYMOUS = -1;

myModule.isCommon = userAuthorization => Number(userAuthorization) == myModule.COMMON;

myModule.isAdmin = userAuthorization => Number(userAuthorization) == myModule.ADMIN;

myModule.isAnonymous = userAuthorization => Number(userAuthorization) == myModule.ANONYMOUS;

myModule.isLoggedIn = userAuthorization => !myModule.isAnonymous(userAuthorization);

module.exports = myModule;