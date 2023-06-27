enum EnumRole {
  Admin = 1,
  User = 2,
  Guest = 3,
}

let userRole: EnumRole = EnumRole.Admin
console.log(userRole) // 1

let userRole2: EnumRole = EnumRole.User
console.log(userRole2) // 2

let userRole3: EnumRole = EnumRole.Guest
console.log(userRole3) // 3

enum EnumRole2 {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

let userRole4: EnumRole2 = EnumRole2.ADMIN
console.log(userRole4) // 0

let userRole5: EnumRole2 = EnumRole2.USER
console.log(userRole5) // 1

let userRole6: EnumRole2 = EnumRole2.GUEST
console.log(userRole6) // 2
